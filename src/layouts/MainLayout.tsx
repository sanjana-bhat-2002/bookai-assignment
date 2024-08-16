import { FC, ReactNode } from "react";
import Header from "../components/widgets/Header";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="bg-primary dark:bg-primary-dark transition-opacity duration-700 ease-in-out opacity-1 animate-fade-in">
        <Header />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
