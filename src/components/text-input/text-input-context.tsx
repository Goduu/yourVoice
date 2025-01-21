"use client"
import React, { createContext, useContext, useState, useCallback } from 'react'

interface TextEntry {
    id: string
    content: string
    type: 'file' | 'free-text'
    timestamp: Date
    name: string
}

interface TextInputContextType {
    entries: TextEntry[]
    addEntry: (content: string, type: TextEntry['type'], name?: string) => void
    removeEntry: (id: string) => void
    clearEntries: () => void
}

const TextInputContext = createContext<TextInputContextType | undefined>(undefined)

export function TextInputProvider({ children }: { children: React.ReactNode }) {
    const [entries, setEntries] = useState<TextEntry[]>([])

    const addEntry = useCallback((content: string, type: TextEntry['type'], name?: string) => {
        const newEntry: TextEntry = {
            id: crypto.randomUUID(),
            content,
            type,
            timestamp: new Date(),
            name: name || `${type} ${new Date().toLocaleTimeString()}`
        }
        setEntries(prev => [...prev, newEntry])
    }, [])

    const removeEntry = useCallback((id: string) => {
        setEntries(prev => prev.filter(entry => entry.id !== id))
    }, [])

    const clearEntries = useCallback(() => {
        setEntries([])
    }, [])

    return (
        <TextInputContext.Provider value={{ entries, addEntry, removeEntry, clearEntries }}>
            {children}
        </TextInputContext.Provider>
    )
}

export function useTextInput() {
    const context = useContext(TextInputContext)
    if (context === undefined) {
        throw new Error('useTextInput must be used within a TextInputProvider')
    }
    return context
} 