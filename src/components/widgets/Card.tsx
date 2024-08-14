import { ReactNode } from 'react'


interface CardProps {
    cardTitle: string;
    children: ReactNode;
}

const Card = ({ cardTitle, children }: CardProps) => {
    return (
        <div className='my-8 flex w-full flex-col rounded-lg border bg-secondary p-6 text-gray-700 shadow-sm dark:border-border-dark dark:bg-secondary-dark dark:text-white'>
            <h1 className='my-4 text-2xl font-bold text-indigo-500'>
                {cardTitle}
            </h1>
            <div className=''>
                {children}
            </div>

        </div>
    )
}

export default Card