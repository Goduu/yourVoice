"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { GeneratedText } from "@/ogm-resolver/ogm-types"
import { CopyButton } from "@/components/ui/copy-button"

export const columns: ColumnDef<GeneratedText>[] = [
    {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => (
            <div className="font-medium line-clamp-2">
                {row.getValue("title")}
            </div>
        ),
    },
    {
        accessorKey: "goal",
        header: "Goal",
        cell: ({ row }) => (
            <div className="max-w-[300px] line-clamp-2 hidden md:block">
                {row.getValue("goal")}
            </div>
        ),
    },
    {
        accessorKey: "withSignature.title",
        header: "Signature",
        cell: ({ row }) => (
            <div className="hidden md:block">
                {row.original.withSignature?.title}
            </div>
        ),
    },
    {
        accessorKey: "generatedAt",
        header: "Date",
        cell: ({ row }) => {
            const date = new Date(row.getValue("generatedAt"))
            return (
                <div className="hidden md:block">
                    {date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}
                </div>
            )
        },
    },
    {
        id: "actions",
        cell: ({ row, table }) => {
            const meta = table.options.meta as { onView: (text: GeneratedText) => void }
            
            return (
                <div className="flex items-center gap-1 md:gap-2 justify-end">
                    <CopyButton text={row.original.text} />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => meta?.onView(row.original)}
                    >
                        <Eye className="h-4 w-4" />
                    </Button>
                </div>
            )
        },
    },
] 