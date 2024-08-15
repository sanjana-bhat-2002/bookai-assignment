import { CSSProperties, useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  monoBlue,
  atomOneDarkReasonable,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import useTheme from "../../contexts/theme";
import ClipboardButton from "./ClipboardButton";

type ThemeType = { [key: string]: CSSProperties };
const lightTheme: ThemeType = monoBlue;
interface CodeBlockProps {
  codeString: string;
  language: string;
  isOutput?: boolean;
}
const CodeBlock = ({
  codeString,
  language,
  isOutput = false,
}: CodeBlockProps) => {
  const { themeMode } = useTheme();

  const [codeBlockTheme, setCodeBlockTheme] = useState<ThemeType>(lightTheme);

  useEffect(() => {
    themeMode === "dark"
      ? setCodeBlockTheme(atomOneDarkReasonable)
      : setCodeBlockTheme(lightTheme);
  }, [themeMode]);

  return (
    <div className="border w-full border-border dark:border-border-dark rounded-xl overflow-hidden">
      <div className="flex border-b dark:border-border-dark w-full justify-between p-4 text-text-primary dark:text-text-primary-dark text-sm items-center bg-secondary dark:bg-secondary-dark">
        <p className="mb-0 py-2 ">Example Code</p>
        {!isOutput ? <ClipboardButton codeString={codeString} /> : ""}
      </div>
      <div className="rounded-full">
        <SyntaxHighlighter
          className="rounded-b-lg w-full"
          language={language}
          style={codeBlockTheme}
          wrapLongLines={true}
          wrapLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
