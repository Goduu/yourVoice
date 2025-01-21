"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ViewTextDialogProps {
    isOpen: boolean
    onClose: () => void
    entry?: {
        content: string
        name: string
        type: 'file' | 'free-text'
    }
}

export function ViewTextDialog({ isOpen, onClose, entry }: ViewTextDialogProps) {
    if (!entry) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[800px] w-[90vw]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        {entry.name}
                    </DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-[60vh] w-full rounded-md border p-4">
                    <pre className="whitespace-pre-wrap font-mono text-sm">
                        {entry.content}
                    </pre>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
} 