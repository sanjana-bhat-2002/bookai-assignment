import './App.css'
import Card from './components/widgets/Card'
import './index.css'
import MainLayout from './layouts/MainLayout'

function App() {
  

  return (
    <>
      <MainLayout>
        <div className='flex flex-col items-center'>
        <Card cardTitle="Overview">
          <p>The Book Generator API allows you to generate books on various topics 
            using different language models. This documentation provides details on 
            how to use the API, including authentication, available endpoints, and code examples.</p>
          </Card>

          <Card cardTitle="Authentication">
          <p>The Book Generator API allows you to generate books on various topics 
            using different language models. This documentation provides details on 
            how to use the API, including authentication, available endpoints, and code examples.</p>
          </Card>
        </div>
        
      </MainLayout>
    </>
  )
}

export default App
