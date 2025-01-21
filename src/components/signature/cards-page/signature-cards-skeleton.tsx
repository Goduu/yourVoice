import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export const SignatureCardsSkeleton = () => {
    return (
        <div className='flex flex-wrap gap-4 w-full items-center justify-center'>
            <Skeleton className="w-64 md:w-72 h-96 rounded-xl" />
            <Skeleton className="w-64 md:w-72 h-96 rounded-xl" />
            <Skeleton className="w-64 md:w-72 h-96 rounded-xl" />
        </div>
    )
}
