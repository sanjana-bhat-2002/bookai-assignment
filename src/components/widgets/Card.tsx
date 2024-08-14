import { ReactNode } from 'react'


interface CardProps {
    cardTitle: string;
    children: ReactNode;
}

const Card = ({ cardTitle, children }: CardProps) => {
    return (
        <div className='flex flex-col bg-section border border-border-color rounded-lg w-full p-6 my-8 text-white'>
            <h1 className='text-heading text-2xl font-bold my-4'>
                {cardTitle}
            </h1>
            <div className=''>
                {children}
            </div>

        </div>
    )
}

export default Card