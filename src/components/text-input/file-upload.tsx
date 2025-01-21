"use client"
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface FileUploadProps {
    onTextLoaded: (text: string, fileName: string) => void
}

export function FileUpload({ onTextLoaded }: FileUploadProps) {
    const { toast } = useToast()

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = async (e) => {
                const text = e.target?.result
                if (typeof text === 'string') {
                    onTextLoaded(text, file.name)
                    toast({
                        title: 'File uploaded successfully',
                        description: `${file.name} has been loaded and is ready for processing.`,
                        duration: 4000,
                    })
                }
            }
            reader.readAsText(file)
        }
    }, [onTextLoaded, toast])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'text/plain': ['.txt'],
        },
        maxFiles: 1,
    })

    return (
        <div className="space-y-4 min-w-[360px] md:min-w-[580px] ">
            <div
                {...getRootProps()}
                className={`
                    border-2 border-dashed rounded-lg p-8
                    flex flex-col items-center justify-center gap-4
                    cursor-pointer transition-colors
                    ${isDragActive 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50 hover:bg-accent'
                    }
                `}
            >
                <input {...getInputProps()} />
                <Upload className={`w-8 h-8 ${isDragActive ? 'text-primary' : 'text-muted-foreground'}`} />
                <div className="text-center">
                    {isDragActive ? (
                        <p className="text-primary font-medium">Drop the file here</p>
                    ) : (
                        <>
                            <p className="font-medium">Drop file here or click to select</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                Only .txt files are supported
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
} 