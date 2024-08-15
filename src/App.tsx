import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/widgets/Card";
import Table from "./components/widgets/Table";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider } from "./contexts/theme";
import { Tabs, Tab } from "./components/widgets/Tabs";
import CodeBlock from "./components/widgets/CodeBlock";
import {
  apiData,
  apiHeadings,
  pricingData,
  pricingDataHeadings,
} from "./static-data/table-data";
import codeBlocks from "./static-data/code-blocks";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [apiKey, setApiKey] = useState<string>("");
  const languages = Object.keys(codeBlocks);
  console.log(languages);

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  const generateApiKey = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    const length = 40;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    console.log(result);
    setApiKey(result);
  };

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <MainLayout>
          <div className="flex flex-col items-center max-w-[1000px] justify-center m-6 lg:mx-auto">
            <Card cardTitle="Overview">
              <p>
                The Book Generator API allows you to generate books on various
                topics using different language models. This documentation
                provides details on how to use the API, including
                authentication, available endpoints, and code examples.
              </p>
            </Card>

            <Card cardTitle="Authentication">
              <p>
                To use the API, you need to include your API key in the header
                of each request:
              </p>
              <p className=" border rounded-lg border-border break-all p-4 dark:border-border-dark">
                X-API-Key: YOUR_API_KEY
              </p>
              <p>To generate an API key, use the button below:</p>

              <button
                onClick={generateApiKey}
                className="bg-accent hover:-translate-y-1 transition-all duration-400 text-text-primary-dark p-3 my-6 rounded-lg font-bold"
              >
                Generate API Key
              </button>
              <div className="border rounded-lg border-border dark:border-border-dark break-all p-4">
                Your API Key:
                <strong className={apiKey ? "inline" : "hidden"}>
                  {" "}
                  {apiKey}
                </strong>
              </div>
            </Card>

            <Card cardTitle="Endpoints">
              <h3 className="text-text-heading dark:text-text-heading-dark my-4">
                Generate Book
              </h3>
              <div className="flex justify-start items-center gap-4 font-bold text-text-primary-dark">
                <span className="bg-accent-secondary p-2 rounded-md">POST</span>
                <span className="bg-accent p-2 rounded-md">
                  /api/generate-book
                </span>
              </div>
              <h3 className="text-text-heading dark:text-text-heading-dark my-4 mt-8">
                Request Body
              </h3>
              <Table tableContent={apiData} tableHeading={apiHeadings} />
            </Card>

            <Card cardTitle="Tutorial">
              <h3 className="text-text-heading dark:text-text-heading-dark  mt-8">
                Step 1: Obtain an API Key
              </h3>
              <p>
                Generate an API key using the button in the Authentication
                section above.
              </p>

              <h3 className="text-text-heading dark:text-text-heading-dark  mt-8">
                Step 2: Make a Request
              </h3>
              <p>
                Use your preferred programming language or tool to make a POST
                request to the /api/generate-book endpoint. Include your API key
                in the header and the required parameters in the request body.
              </p>

              <h3 className="text-text-heading dark:text-text-heading-dark  mt-8">
                Step 3: Handle the Response
              </h3>
              <p>
                The API will return a response with a job ID. You can use this
                ID to check the status of your book generation job.
              </p>

              <h3 className="text-text-heading dark:text-text-heading-dark  mt-8">
                Step 4: Retrieve the Generated Book
              </h3>
              <p>
                Once the job is complete, you can retrieve the generated book
                using the job ID (endpoint to be implemented).
              </p>
            </Card>

            <Card cardTitle="Code Examples">
              <Tabs>
                {languages.map((language) => (
                  <Tab
                    key={language}
                    label={language.charAt(0).toUpperCase() + language.slice(1)}
                  >
                    <div className="py-4 w-full">
                      <CodeBlock
                        language={language}
                        codeString={codeBlocks[language]}
                      />
                    </div>
                  </Tab>
                ))}
              </Tabs>
            </Card>

            <Card cardTitle="API Pricing">
              <p>
                Our API pricing is based on the model used and the number of
                tokens processed. Here's a breakdown of the costs:
              </p>
              <Table
                tableContent={pricingData}
                tableHeading={pricingDataHeadings}
              />
              <h2 className="text-text-heading dark:text-text-heading-dark">
                Token Estimation
              </h2>
              <p>
                On average, 1 token is approximately 4 characters or 0.75 words.
                For precise pricing, we recommend using our token calculator
                tool.
              </p>
              <h2 className="text-text-heading dark:text-text-heading-dark">
                Billing
              </h2>
              <p className="">
                You will only be charged for the tokens used in generating the
                book. The API tracks token usage and bills accordingly. Detailed
                usage reports are available in your account dashboard.
              </p>
            </Card>
          </div>
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
