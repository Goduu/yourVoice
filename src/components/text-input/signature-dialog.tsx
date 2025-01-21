"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LanguageStyle, LevelOfFormality, Tone, FormsOfAddress, EmotionalAppeal, VoiceTone } from "@/types"
import { useMutation } from '@apollo/client'
import { CREATE_SIGNATURE } from '@/lib/gqls/signatureGQLs'
import { SignatureCard } from './signature-card'

interface SignatureDialogProps {
    isOpen: boolean
    onClose: () => void
    initialData: VoiceTone
}

const toneOptions = Object.values(Tone)
const languageStyleOptions = Object.values(LanguageStyle)
const formalityOptions = Object.values(LevelOfFormality)
const addressOptions = Object.values(FormsOfAddress)
const emotionalOptions = Object.values(EmotionalAppeal)

export function SignatureDialog({ isOpen, onClose, initialData }: SignatureDialogProps) {
    const [signature, setSignature] = useState(initialData.signature)
    const [title, setTitle] = useState("")
    const [createSignature, { loading }] = useMutation(CREATE_SIGNATURE)

    const handleSave = async () => {

        try {
            await createSignature({
                variables: {
                    input: [{
                        title,
                        ...signature
                    }]
                }
            })
            onClose()
        } catch (error) {
            console.error('Error saving signature:', error)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[800px]">
                <DialogHeader>
                    <DialogTitle>Voice Tone Signature</DialogTitle>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Signature Title</Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter a title for this signature"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label>Tone</Label>
                            <Select
                                value={signature.tone}
                                onValueChange={(value: Tone) => setSignature(prev => ({ ...prev, tone: value }))}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select tone" />
                                </SelectTrigger>
                                <SelectContent>
                                    {toneOptions.map(option => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label>Language Style</Label>
                            <Select
                                value={signature.languageStyle}
                                onValueChange={(value: LanguageStyle) => setSignature(prev => ({ ...prev, languageStyle: value }))}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select language style" />
                                </SelectTrigger>
                                <SelectContent>
                                    {languageStyleOptions.map(option => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label>Level of Formality</Label>
                            <Select
                                value={signature.levelOfFormality}
                                onValueChange={(value: LevelOfFormality) => setSignature(prev => ({ ...prev, levelOfFormality: value }))}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select formality level" />
                                </SelectTrigger>
                                <SelectContent>
                                    {formalityOptions.map(option => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label>Forms of Address</Label>
                            <Select
                                value={signature.formsOfAddress}
                                onValueChange={(value: FormsOfAddress) => setSignature(prev => ({ ...prev, formsOfAddress: value }))}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select address form" />
                                </SelectTrigger>
                                <SelectContent>
                                    {addressOptions.map(option => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label>Emotional Appeal</Label>
                            <Select
                                value={signature.emotionalAppeal}
                                onValueChange={(value: EmotionalAppeal) => setSignature(prev => ({ ...prev, emotionalAppeal: value }))}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select emotional appeal" />
                                </SelectTrigger>
                                <SelectContent>
                                    {emotionalOptions.map(option => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="py-4">
                        <SignatureCard
                            signature={{ ...signature, title: title || "Untitled Signature" }}
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave} disabled={loading || !title}>
                        {loading ? 'Saving...' : 'Save Signature'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
} 