"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { GeneratedText } from "@/ogm-resolver/ogm-types"
import { signatureItems } from '@/components/text-input/signature-card'
import { CopyButton } from '@/components/ui/copy-button'

interface ViewGeneratedTextDialogProps {
    isOpen: boolean
    onClose: () => void
    text: GeneratedText
}

export function ViewGeneratedTextDialog({ isOpen, onClose, text }: ViewGeneratedTextDialogProps) {
    const items = text.withSignature ? signatureItems(text.withSignature) : []

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[800px] w-[calc(100vw-32px)] p-4 md:p-6">
                <DialogHeader>
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-xl md:text-2xl line-clamp-2">{text.title}</DialogTitle>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                        Goal: {text.goal}
                    </p>
                </DialogHeader>

                {text.withSignature && (
                    <div className="flex flex-wrap gap-1.5 md:gap-2 py-2">
                        {items.map((item, index) => (
                            <Badge
                                key={index}
                                variant="secondary"
                                className="flex items-center gap-1 px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-sm"
                            >
                                {item.icon}
                                {item.value}
                            </Badge>
                        ))}
                    </div>
                )}

                <ScrollArea className="h-[300px] md:h-[400px] w-full rounded-md border p-3 md:p-4 relative">
                    <div className="whitespace-pre-wrap pr-8">
                        {text.text}
                        <CopyButton
                            text={text.text}
                            className="hover:bg-background absolute top-2 right-2"
                        />
                    </div>
                    <div className="mt-2 text-xs md:text-sm text-muted-foreground">
                        Character count: {text.text.length}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
} 