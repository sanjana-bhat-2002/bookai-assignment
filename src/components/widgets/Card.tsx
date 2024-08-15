import { ReactNode } from "react";

interface CardProps {
  cardTitle: string;
  children: ReactNode;
}

const Card = ({ cardTitle, children }: CardProps) => {
  return (
    <section
      id={cardTitle.toLowerCase()}
      className="my-8 flex w-full flex-col rounded-lg border bg-secondary p-8 text-gray-700 shadow-sm dark:border-border-dark dark:bg-secondary-dark dark:text-white"
    >
      <h1 className="my-4 text-2xl font-bold text-indigo-500 dark:text-text-heading-dark">
        {cardTitle}
      </h1>
      <div className="">{children}</div>
    </section>
  );
};

export default Card;
