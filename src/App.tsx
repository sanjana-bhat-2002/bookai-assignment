import './App.css'
import Card from './components/widgets/Card'
import Table from './components/widgets/Table';
import './index.css'
import MainLayout from './layouts/MainLayout'
import Markdown from 'react-markdown';

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

  return (
    <>
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
            <p className='border rounded-lg border-border-color break-all p-4'>X-API-Key: YOUR_API_KEY</p>
            <p>To generate an API key, use the button below:</p>
            <button className='bg-[#22d3ee] text-background p-3 my-3 rounded-lg font-bold'>Generate API Key</button>
            <div className='border rounded-lg border-border-color break-all p-4'>Your API Key: 
              <strong className=''> ksdlfjllkkkkkkkkkkkkkkkkkkkkkkskdsjldsdjljj</strong>
            </div>

          </Card>

          <Card cardTitle='API Pricing'>
            <p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
            <Table tableContent={pricingData} tableHeading={pricingDataHeadings}/>
            <h2>Token Estimation</h2>
            <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
            <h2>Billing</h2>
            <p className=''>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
          </Card>
        </div>

      </MainLayout>
    </>
  )
}

export default App
