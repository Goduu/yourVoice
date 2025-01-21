"use client"
import { useQuery } from "@apollo/client"
import { GET_GENERATED_TEXTS } from "@/lib/gqls/generatedTextGQL"
import { GeneratedText } from "@/ogm-resolver/ogm-types"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { ViewGeneratedTextDialog } from "./view-generated-text-dialog"
import { useState } from "react"

export default function GeneratedTextsPage() {
    const { data, loading, error } = useQuery(GET_GENERATED_TEXTS)
    const [selectedText, setSelectedText] = useState<GeneratedText | null>(null)

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error loading texts</div>

    return (
        <div className="container w-full px-2 md:px-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">Generated Texts</h1>
            
            <DataTable 
                columns={columns} 
                data={data?.generatedTexts ?? []} 
                onView={setSelectedText}
            />

            {selectedText && (
                <ViewGeneratedTextDialog
                    text={selectedText}
                    isOpen={!!selectedText}
                    onClose={() => setSelectedText(null)}
                />
            )}
        </div>
    )
} 