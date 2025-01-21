"use client"
import React, { FC, useState, useTransition } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { FileUpload } from './file-upload'
import { FreeTextInput } from './free-text-input'
import { useTextInput } from './text-input-context'
import { useToast } from '@/hooks/use-toast'

export const TextInputPage: FC = () => {
    const [text, setText] = useState('')
    const [isPending, startTransition] = useTransition()
    const { addEntry } = useTextInput()
    const { toast } = useToast()

    const handleAddEntry = async () => {
        try {
            if (!text.trim()) {
                    toast({
                        title: 'Error',
                        description: `Please enter some text first`,
                        variant: 'destructive',
                    })
                return
            }
            addEntry(text, 'free-text')
            setText('')
            toast({
                title: 'Success',
                description: 'Text added successfully',
            })
        } catch (error) {
            toast({
                title: 'Error',
                description: `Failed to add text: ${error}`,
                variant: 'destructive',
            })
        }
    }

    const handleFileText = (fileText: string, fileName: string) => {
        try {
            addEntry(fileText, 'file', fileName)
            toast({
                title: 'Success',
                description: 'File processed successfully',
            })
        } catch (error) {
            toast({
                title: 'Error',
                description: `Failed to process file: ${error}`,
                variant: 'destructive',
            })
        }
    }

    return (
        <div className='flex flex-col gap-4'>
            <div className='text-3xl font-bold'>
                Data Input
            </div>
            <Tabs defaultValue="freeText" className="w-full">
                <TabsList>
                    <TabsTrigger value="freeText">Free text</TabsTrigger>
                    <TabsTrigger value="upload">File upload</TabsTrigger>
                </TabsList>
                <TabsContent value="freeText">
                    <FreeTextInput 
                        text={text}
                        onTextChange={setText}
                        isPending={isPending}
                        onSubmit={() => startTransition(handleAddEntry)}
                    />
                </TabsContent>
                <TabsContent value="upload">
                    <FileUpload 
                        onTextLoaded={handleFileText}
                    />
                </TabsContent>
            </Tabs>
        </div>
    )
}
