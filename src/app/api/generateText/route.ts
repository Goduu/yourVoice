import { textGenerationPrompt } from "@/lib/text-generation-prompt";
import { validateApiGeneratedText } from "@/lib/validateApiGeneratedText";
import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const inputTextGoal = body.goal
  const inputTextTitle = body.title
  const inputTextSignature = body.signature
  const inputCharCount = body.charCount

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
          content: textGenerationPrompt,
        },
        {
          role: "user",
          content: `
            goal: ${inputTextGoal}
            title: ${inputTextTitle}
            signature: ${JSON.stringify(inputTextSignature)}
            charCount: ${inputCharCount}
          `,
        },
      ],
    });

    // Extract the AI's response
    const aiResponse = completion.choices[0]?.message?.content ?? "No response from AI.";
    console.log("AI Response:", aiResponse);
    const validatedResponse = validateApiGeneratedText(aiResponse);
    console.log("Validated Response:", validatedResponse);
    // Return the response as JSON
    return new Response(JSON.stringify(validatedResponse), {
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
}