"use client"
import React from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Spline } from 'lucide-react'

interface FreeTextInputProps {
    text: string
    onTextChange: (text: string) => void
    isPending?: boolean
    onSubmit: () => void
}

export const FreeTextInput: React.FC<FreeTextInputProps> = ({
    text,
    onTextChange,
    isPending,
    onSubmit
}) => {
    return (
        <div className='min-w-[360px] md:min-w-[580px] flex flex-col gap-4 items-center'>
            <Textarea 
                value={text} 
                onChange={(e) => onTextChange(e.target.value)} 
                className='h-96 w-ful rounded-xl' 
            />
            <Button 
                className='w-2/3 flex gap-2' 
                onClick={onSubmit}
            >
                {isPending && <Spline className="animate-spin h-5 w-5 mr-3 " />}
                Add
            </Button>
        </div>
    )
} 