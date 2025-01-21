"use client"
import * as React from 'react';
import { useQuery } from '@apollo/client';
import { SignatureCardsSkeleton } from './signature-cards-skeleton';
import { GET_SIGNATURES } from '@/lib/gqls/signatureGQLs';
import { Signature } from '@/ogm-resolver/ogm-types';
import { SignatureCard } from '@/components/text-input/signature-card';


const SignatureCardsPage: React.FC = () => {

    const { loading, data } = useQuery<{ signatures: Array<Signature> }>(GET_SIGNATURES)

    if (loading) return <SignatureCardsSkeleton />

    return (
        <div className='flex flex-wrap gap-4 w-full items-center justify-center'>
            {data?.signatures.map((signature) => {
                return (
                    <SignatureCard key={signature.id} signature={signature} mode="card" />
                )
            }
            )}
        </div>
    );
};

export default SignatureCardsPage;