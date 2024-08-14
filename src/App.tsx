import { useState, useEffect } from 'react';
import './App.css'
import Card from './components/widgets/Card'
import Table from './components/widgets/Table';
import './index.css'
import MainLayout from './layouts/MainLayout'
import { ThemeProvider } from './contexts/theme'
import { Tabs, Tab } from './components/widgets/Tabs'


const pricingDataHeadings = ["API", "Model", "Price per 1K Tokens"]
const pricingData = [
  {
    api: "OpenAI",
    model: "GPT-3.5",
    price: "$0.002"
  },
  {
    api: "OpenAI",
    model: "GPT-4",
    price: "$0.03"
  },
  {
    api: "Together AI",
    model: "Llama-2-70b",
    price: "$0.0008"
  },
  {
    api: "Together AI",
    model: "Llama-2-13b",
    price: "$0.0006"
  },

]

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html')?.classList.remove("light", "dark")
    document.querySelector('html')?.classList.add(themeMode)
  }, [themeMode])

  return (
    <>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <MainLayout>
        <div className='flex flex-col items-center max-w-[1000px] justify-center m-6 lg:mx-auto'>
          <Card cardTitle="Overview">
            <p>The Book Generator API allows you to generate books on various topics
              using different language models. This documentation provides details on
              how to use the API, including authentication, available endpoints, and code examples.</p>
          </Card>

          <Card cardTitle="Authentication">
            <p>To use the API, you need to include your API key in the header of each request:</p>
            {/* <Markdown>
              {code}
            </Markdown> */}
            <p className=' border rounded-lg border-border-color break-all p-4'>X-API-Key: YOUR_API_KEY</p>
            <p>To generate an API key, use the button below:</p>
            <button className='bg-[#22d3ee] text-background p-3 my-3 rounded-lg font-bold'>Generate API Key</button>
            <div className='border rounded-lg border-border-color break-all p-4'>Your API Key: 
              <strong className=''> ksdlfjllkkkkkkkkkkkkkkkkkkkkkkskdsjldsdjljj</strong>
            </div>

          </Card>

          <Card cardTitle='Code Examples'>
            <Tabs>
            <Tab label="Tab 1">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">Tab 1 Content</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
              quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
              harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
              Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
              earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
              aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
              aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium
              molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum.
            </p>
          </div>
          </Tab>

          <Tab label="Tab 2">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">Tab 2 Content</h2>
            <p className="text-gray-700">
              Lfjsfjkkkkkkkkkkkkkkkkdita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum.
            </p>
          </div>
        </Tab>
            </Tabs>
          </Card>

          <Card cardTitle='API Pricing'>
            <p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
            <Table tableContent={pricingData} tableHeading={pricingDataHeadings}/>
            <h2 className='text-text-heading dark:text-text-heading-dark'>Token Estimation</h2>
            <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
            <h2 className='text-text-heading dark:text-text-heading-dark'>Billing</h2>
            <p className=''>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
          </Card>
        </div>

      </MainLayout>
      </ThemeProvider>
    </>
  )
}

export default App
