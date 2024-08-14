import React, { useState, ReactElement, ReactNode, MouseEvent } from 'react';

// Define the prop types for the Tab component
interface TabProps {
  label: string;
  children: ReactNode;
}

// Define the prop types for the Tabs component
interface TabsProps {
  children: ReactElement<TabProps>[];
}

// Tabs Component
const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.label);

  const handleClick = (e: MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex border-b border-gray-300">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label ? 'border-b-2 border-purple-500' : ''
            } flex-1 text-gray-700 font-medium py-2`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

// Tab Component
const Tab: React.FC<TabProps> = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};

export { Tabs, Tab };
