"use client"
import React, { FC, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Volume2,
    Type,
    GraduationCap,
    Users,
    Heart
} from "lucide-react"
import { Signature } from '@/ogm-resolver/ogm-types'
import { Button } from '../ui/button'
import { GenerateTextDialog } from './generate-text-dialog'
import { SignatureItem } from '../../types'

interface SignatureCardProps {
    signature: Signature
    mode?: "preview" | "card"
}

export const SignatureCard: FC<SignatureCardProps> = ({ signature, mode = "preview" }) => {
    const [isGenerateDialogOpen, setIsGenerateDialogOpen] = useState(false)

    const items = signatureItems(signature)

    return (
        <>
            <Card className="w-fit max-w-[600px] ">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">{signature.title}</CardTitle>
                    <CardDescription>
                        {mode === "preview" ? "Voice Tone Signature Preview" : "Voice Tone Signature"}
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <div className="grid gap-4">
                        {items.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="rounded-full p-2 bg-muted">
                                    {item.icon}
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {item.label}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
                {mode === "card" &&
                    <CardFooter>
                        <Button
                            onClick={() => setIsGenerateDialogOpen(true)}
                        >
                            Create Text With this Signature
                        </Button>
                    </CardFooter>
                }
            </Card>
            <GenerateTextDialog
                isOpen={isGenerateDialogOpen}
                onClose={() => setIsGenerateDialogOpen(false)}
                signature={signature}
            />
        </>
    )
}

export const signatureItems = (signature: Signature): SignatureItem[] => [
    {
        icon: <Volume2 className="w-4 h-4" />,
        label: "Tone",
        value: signature.tone
    },
    {
        icon: <Type className="w-4 h-4" />,
        label: "Language Style",
        value: signature.languageStyle
    },
    {
        icon: <GraduationCap className="w-4 h-4" />,
        label: "Level of Formality",
        value: signature.levelOfFormality
    },
    {
        icon: <Users className="w-4 h-4" />,
        label: "Forms of Address",
        value: signature.formsOfAddress
    },
    {
        icon: <Heart className="w-4 h-4" />,
        label: "Emotional Appeal",
        value: signature.emotionalAppeal
    }
]