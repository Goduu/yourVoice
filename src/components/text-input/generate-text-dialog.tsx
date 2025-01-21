"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useMutation } from '@apollo/client'
import { CREATE_GENERATED_TEXT } from '@/lib/gqls/generatedTextGQL'
import { MutationCreateGeneratedTextsArgs, Signature } from '@/ogm-resolver/ogm-types'
import { signatureItems } from './signature-card'
import { ScrollArea } from "@/components/ui/scroll-area"
import { TextGenerationLoading } from './text-generation-loading'
import { Card, CardHeader, CardTitle } from '../ui/card'

interface GenerateTextDialogProps {
    isOpen: boolean
    onClose: () => void
    signature: Signature
}

export function GenerateTextDialog({ isOpen, onClose, signature }: GenerateTextDialogProps) {
    const [title, setTitle] = useState("")
    const [goal, setGoal] = useState("")
    const [charCount, setCharCount] = useState<number>(300)
    const [generatedText, setGeneratedText] = useState("")
    const [isSending, setIsSending] = useState(false)
    const [createGeneratedText, { loading }] = useMutation(CREATE_GENERATED_TEXT)

    const items = signatureItems(signature)

    const handleSave = async () => {
        try {
            await createGeneratedText({
                variables: {
                    input: [{
                        title,
                        text: generatedText,
                        goal,
                        generatedAt: new Date().toISOString(),
                        withSignature: {
                            connect: {
                                where: { node: { id: signature.id } }
                            }
                        }
                    }]
                } satisfies MutationCreateGeneratedTextsArgs
            })
            onClose()
        } catch (error) {
            console.error('Error saving generated text:', error)
        }
    }

    const handleGenerate = async () => {
        setIsSending(true)
        try {
            const response = await fetch('/api/generateText', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    title, 
                    signature, 
                    goal,
                    charCount 
                }),
            })

            if (!response.ok) {
                throw new Error('Failed to process texts')
            }

            const data = await response.json()
            setGeneratedText(data.text)
            if (!title) setTitle(data.textTitle)
        } catch (error) {
            console.error('Error generating text:', error)
        } finally {
            setIsSending(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[800px]">
                <DialogHeader>
                    <DialogTitle>Generate Text with Signature: {signature.title}</DialogTitle>
                </DialogHeader>

                <div className="flex flex-wrap gap-2 py-2">
                    {items.map((item, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                            className="flex items-center gap-1 px-3 py-1"
                        >
                            {item.icon}
                            {item.value}
                        </Badge>
                    ))}
                </div>

                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter a title for this text"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="goal">Text Goal</Label>
                        <Textarea
                            id="goal"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                            placeholder="Describe the main goal of the text you want to generate..."
                            className="h-32"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="charCount">Character Count</Label>
                        <div className="flex items-center gap-4">
                            <Input
                                id="charCount"
                                type="number"
                                min={100}
                                max={2000}
                                value={charCount}
                                onChange={(e) => setCharCount(Number(e.target.value))}
                                className="w-32"
                            />
                            <span className="text-sm text-muted-foreground">
                                characters
                            </span>
                        </div>
                        <div className="flex gap-2">
                            {[300, 500, 1000].map((count) => (
                                <Button
                                    key={count}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setCharCount(count)}
                                    className={charCount === count ? "bg-primary/10" : ""}
                                >
                                    {count}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label>Generated Text</Label>
                        {isSending ? (
                            <TextGenerationLoading />
                        ) : generatedText ? (
                            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                                <div className="whitespace-pre-wrap">
                                    {generatedText}
                                </div>
                                <div className="mt-2 text-sm text-muted-foreground">
                                    Character count: {generatedText.length}
                                </div>
                            </ScrollArea>
                        ) : <Card className="h-[200px] w-full rounded-md border p-4 bg-muted/50">
                            <CardHeader>
                                <CardTitle className='text-muted-foreground'>No text generated yet</CardTitle>
                            </CardHeader>
                        </Card>}
                    </div>
                </div>

                <DialogFooter className="gap-2">
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleGenerate}
                        disabled={loading || isSending || !goal}
                    >
                        {isSending ? 'Generating...' : 'Generate Text'}
                    </Button>
                    {generatedText && (
                        <Button
                            onClick={handleSave}
                            disabled={loading || !title}
                        >
                            {loading ? 'Saving...' : 'Save Text'}
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
} 