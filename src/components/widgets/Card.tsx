import { ReactNode } from "react";

interface CardProps {
  cardTitle: string;
  children: ReactNode;
}

const Card = ({ cardTitle, children }: CardProps) => {
  return (
    <section
      id={cardTitle.toLowerCase()}
      className="my-8 flex w-full flex-col rounded-lg border bg-secondary p-4 sm:p-8 text-gray-700 shadow-sm dark:border-border-dark dark:bg-secondary-dark dark:text-white"
    >
      <h2 className="my-4 text-2xl font-bold text-indigo-500 dark:text-text-heading-dark">
        {cardTitle}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default Card;
