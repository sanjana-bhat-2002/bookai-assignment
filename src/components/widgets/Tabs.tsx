import React, { useState, ReactElement, ReactNode, MouseEvent } from "react";

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: ReactElement<TabProps>[];
}

// Tabs Component
const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.label);

  const handleClick = (
    e: MouseEvent<HTMLButtonElement>,
    newActiveTab: string,
  ) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-300 dark:border-border-dark">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label ? "border-b-2 border-accent" : ""
            } flex text-left text-gray-700 dark:text-text-primary-dark w-1/4 md:w-1/5 font-medium p-2`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4 transition-opacity duration-900 ease-in-out">
        {children.map((child) => (
          <div
            key={child.props.label}
            className={`${
              child.props.label === activeTab
                ? "opacity-100"
                : "opacity-0 h-0 overflow-hidden"
            } transition-all duration-900`}
          >
            {child.props.children}
          </div>
        ))}
      </div>
    </div>
  );
};

// Tab Component
const Tab: React.FC<TabProps> = ({ children }) => {
  return <div>{children}</div>;
};

export { Tabs, Tab };
