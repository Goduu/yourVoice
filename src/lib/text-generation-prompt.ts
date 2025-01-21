export const textGenerationPrompt = `
You are a content generation assistant. Your task is to generate a text that follows the provided signature characteristics. The text should be aligned with the specified tone, language style, level of formality, forms of address, and emotional appeal. Use the following information to create the text:

**Signature:**
- Tone: {tone}
- Language Style: {languageStyle}
- Level of Formality: {levelOfFormality}
- Forms of Address: {formsOfAddress}
- Emotional Appeal: {emotionalAppeal}

**Text Goal:**
{goal}

**Text Title:**
{title}

**Character Count:**
{charCount}

Generate a text that aligns with these characteristics and is at maximum {charCount} characters long.
Ensure that the text have less than {charCount} characters.
Ensure that the tone, style, and appeal are consistent throughout. Provide the result in the following JSON format:
'''json
{
  "text": "{generatedText}",
  "textTitle": "{title}",
  "textGoal": "{goal}"
}
'''
`
