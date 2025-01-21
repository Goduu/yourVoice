import { signatureGenerationPrompt } from "@/lib/signature-generation-prompt";
import { validateApiGeneratedSignature } from "@/lib/validateApiGeneratedSignature";
import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const inputText = body.text
  console.log("Received request with body:", body);

  const token = process.env["GITHUB_TOKEN"];
  const endpoint = "https://models.inference.ai.azure.com";
  const modelName = "gpt-4o";


  const openai = new OpenAI(
    { baseURL: endpoint, apiKey: token }
  );

  try {
    const completion = await openai.chat.completions.create({
      model: modelName,
      messages: [
        {
          role: "system",
          content: signatureGenerationPrompt,
        },
        {
          role: "user",
          content: inputText,
        },
      ],
    });

    // Extract the AI's response
    const aiResponse = completion.choices[0]?.message?.content ?? "No response from AI.";
    console.log("AI Response:", aiResponse);
    const validatedResponse = validateApiGeneratedSignature(aiResponse);
    console.log("Validated Response:", validatedResponse);
    // Return the response as JSON
    return new Response(JSON.stringify({ analysis: validatedResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error during OpenAI API call:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process tone-of-voice analysis." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }


  // const completion = await openai.chat.completions.create({
  //   model: modelName,
  //   messages: [
  //     {
  //       role: "system", content: promptText
  //     },
  //     {
  //       role: "user",
  //       content: text,
  //     },
  //   ],
  // });
  // console.log('xongas',completion.choices[0].message.content)
  // const aiResponse = completion.choices[0].message.content
  // return new Response(aiResponse);
}
