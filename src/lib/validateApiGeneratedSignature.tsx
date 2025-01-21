import { EmotionalAppeal, FormsOfAddress, LevelOfFormality, LanguageStyle, Tone, VoiceTone } from "@/types";

const defaultVoiceTone: VoiceTone = {
    signature: {
        tone: Tone.Neutral,
        languageStyle: LanguageStyle.Simple,
        levelOfFormality: LevelOfFormality.Casual,
        formsOfAddress: FormsOfAddress.FirstPersonPlural,
        emotionalAppeal: EmotionalAppeal.Neutral
    }
};

export const validateApiGeneratedSignature = (response: string) => {
    if (!response) {
        throw new Error("No response from API");
    }

    // Extract JSON from the code block
    const jsonMatch = response.match(/```json\n([\s\S]*?)\n```/);
    if (!jsonMatch) {
        throw new Error("Invalid response format");
    }

    // Parse the JSON string
    let parsedData: VoiceTone;
    try {
        parsedData = JSON.parse(jsonMatch[1]) as VoiceTone;
    } catch (error) {
        console.error("Failed to parse JSON:", error);
        return defaultVoiceTone;
    }

    // Convert snake_case to camelCase
    const data = {
        signature: {
            tone: parsedData.signature?.tone || "",
            languageStyle: parsedData.signature?.languageStyle || "",
            levelOfFormality: parsedData.signature?.levelOfFormality || "",
            formsOfAddress: parsedData.signature?.formsOfAddress || "",
            emotionalAppeal: parsedData.signature?.emotionalAppeal || ""
        }
    };

    const validatedData: VoiceTone = {
        signature: {
            tone: data.signature.tone || defaultVoiceTone.signature.tone,
            languageStyle: data.signature.languageStyle || defaultVoiceTone.signature.languageStyle,
            levelOfFormality: data.signature.levelOfFormality || defaultVoiceTone.signature.levelOfFormality,
            formsOfAddress: data.signature.formsOfAddress || defaultVoiceTone.signature.formsOfAddress,
            emotionalAppeal: data.signature.emotionalAppeal || defaultVoiceTone.signature.emotionalAppeal
        }
    };

    return validatedData;
};
