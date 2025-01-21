"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { useTextInput } from "@/components/text-input/text-input-context"
import { FileText, Type, Trash2, Eye, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ViewTextDialog } from "@/components/text-input/view-text-dialog"
import { useState } from "react"
import { SignatureDialog } from '@/components/text-input/signature-dialog'
import { VoiceTone } from '@/types'

export function AppSidebar() {
    const { entries, removeEntry } = useTextInput()
    const [selectedEntry, setSelectedEntry] = useState<typeof entries[0]>()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [signatureData, setSignatureData] = useState<VoiceTone | null>(null)

    const handleView = (entry: typeof entries[0]) => {
        setSelectedEntry(entry)
        setIsDialogOpen(true)
    }

    const handleSendToAPI = async () => {
        if (entries.length === 0) return

        setIsSending(true)
        try {
            const combinedText = entries
                .map(entry => `${entry.name}:\n${entry.content}`)
                .join('\n\n')

            const response = await fetch('/api/generateSignature', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: combinedText }),
            })
            console.log('response ', response)

            if (!response.ok) {
                throw new Error('Failed to process texts')
            }

            const data = await response.json()
            console.log('data ', data)
            setSignatureData(data.analysis)
        } catch (error) {
            console.error('Error sending texts:', error)
        } finally {
            setIsSending(false)
        }
    }

    return (
        <>
            <Sidebar>
                <SidebarHeader className="py-10">
                    <div className="px-4 flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Text Entries</h2>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    {entries.length > 0 && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleSendToAPI}
                            disabled={isSending}
                            className="gap-2 mx-4"
                        >
                            <Send className="w-4 h-4" />
                            {isSending ? 'Sending...' : 'Process All'}
                        </Button>
                    )}
                    <SidebarGroup>
                        {entries.map(entry => (
                            <div
                                key={entry.id}
                                className="flex items-center gap-2 px-4 py-2 hover:bg-accent/50 group"
                            >
                                {entry.type === 'file' ? (
                                    <FileText className="w-4 h-4" />
                                ) : (
                                    <Type className="w-4 h-4" />
                                )}
                                <span className="flex-1 text-sm truncate" title={entry.name}>
                                    {entry.name}
                                </span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="opacity-0 group-hover:opacity-100"
                                    onClick={() => handleView(entry)}
                                >
                                    <Eye className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="opacity-0 group-hover:opacity-100"
                                    onClick={() => removeEntry(entry.id)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        ))}
                    </SidebarGroup>

                </SidebarContent>
                <SidebarFooter />
            </Sidebar>
            <ViewTextDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                entry={selectedEntry}
            />
            {signatureData && (
                <SignatureDialog
                    isOpen={!!signatureData}
                    onClose={() => setSignatureData(null)}
                    initialData={signatureData}
                />
            )}
        </>
    )
}
