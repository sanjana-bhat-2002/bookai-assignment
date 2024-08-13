import React, { ReactNode } from 'react'


interface CardProps {
    cardTitle: string;
    children: ReactNode;
}

const Card = ({ cardTitle, children }: CardProps) => {
    return (
        <div className='flex flex-col max-w-4xl bg-section border border-border-color rounded-lg p-8 m-8'>
            <h1 className='text-heading text-2xl font-bold my-4'>
                {cardTitle}
            </h1>
            <div className='text-white'>
                {children}
            </div>

        </div>
    )
}

export default Card