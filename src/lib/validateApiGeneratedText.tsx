import { GeneratedText } from "@/types";

const defaultGeneratedText: GeneratedText = {
    text: "",
    textTitle: "",
    textGoal: ""
};

export const validateApiGeneratedText = (response: string) => {
    if (!response) {
        throw new Error("No response from API");
    }

    // Extract JSON from the code block
    const jsonMatch = response.match(/```json\n([\s\S]*?)\n```/);
    if (!jsonMatch) {
        throw new Error("Invalid response format");
    }

    // Parse the JSON string
    let parsedData: GeneratedText;
    try {
        parsedData = JSON.parse(jsonMatch[1]) as GeneratedText;
    } catch (error) {
        console.error("Failed to parse JSON:", error);
        return defaultGeneratedText;
    }

    // Convert snake_case to camelCase
    const validatedData: GeneratedText = {
        text: parsedData.text || defaultGeneratedText.text,
        textTitle: parsedData.textTitle || defaultGeneratedText.textTitle,
        textGoal: parsedData.textGoal || defaultGeneratedText.textGoal
    };

    return validatedData;
};
