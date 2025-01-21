"use client"
import React from 'react'
import { Loader2 } from 'lucide-react'

export function TextGenerationLoading() {
    return (
        <div className="h-[200px] w-full rounded-md border p-4 bg-muted/50">
            <div className="h-full flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm text-muted-foreground animate-pulse">
                        Generating text...
                    </span>
                </div>
                <div className="w-full max-w-[80%] space-y-3">
                    <div className="h-4 bg-muted animate-pulse rounded" />
                    <div className="h-4 bg-muted animate-pulse rounded w-[90%]" />
                    <div className="h-4 bg-muted animate-pulse rounded w-[95%]" />
                    <div className="h-4 bg-muted animate-pulse rounded w-[85%]" />
                </div>
            </div>
        </div>
    )
} 