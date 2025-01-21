export type VoiceTone = {
    signature: {
        tone: Tone,
        languageStyle: LanguageStyle,
        levelOfFormality: LevelOfFormality,
        formsOfAddress: FormsOfAddress,
        emotionalAppeal: EmotionalAppeal,
    }
}

export type GeneratedText = {
    text: string,
    textTitle: string,
    textGoal: string,
}

export type SignatureItem = {
    icon: React.ReactNode
    label: string
    value: string
}

export enum Tone {
    Professional = "Professional",
    Friendly = "Friendly",
    Authoritative = "Authoritative",
    Inspirational = "Inspirational",
    Casual = "Casual",
    Empowering = "Empowering",
    Neutral = "Neutral",
    Witty = "Witty",
}

export enum LanguageStyle {
    Simple = "Simple",
    Technical = "Technical",
    Descriptive = "Descriptive",
    Persuasive = "Persuasive",
    Concise = "Concise",
    Elaborate = "Elaborate",
    Storytelling = "Storytelling",
    Direct = "Direct",
}

export enum LevelOfFormality {
    Formal = "Formal",
    SemiFormal = "Semi-formal",
    Casual = "Casual",
    HighlyFormal = "Highly Formal",
    Conversational = "Conversational",
}

export enum FormsOfAddress {
    FirstPersonSingular = "First Person Singular",
    FirstPersonPlural = "First Person Plural",
    SecondPerson = "Second Person",
    ThirdPersonSingular = "Third Person Singular",
    ThirdPersonPlural = "Third Person Plural",
    Neutral = "Neutral",
}

export enum EmotionalAppeal {
    Empathetic = "Empathetic",
    Optimistic = "Optimistic",
    Neutral = "Neutral",
    Motivational = "Motivational",
    Inspirational = "Inspirational",
    Encouraging = "Encouraging",
    Sympathetic = "Sympathetic",
    Urgent = "Urgent",
}