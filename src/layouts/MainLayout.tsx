import { FC, ReactNode } from 'react'
import Header from '../components/widgets/Header';
import ThemeButton from '../components/widgets/ThemeButton';
// import Footer from '../components/Footer';

interface LayoutProps {
    children: ReactNode
}

const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
    
    <div className='bg-primary dark:bg-primary-dark'> 
    <Header />
     {children} 
     {/* <Footer /> */}
    </div>
    </>
  )
}

export default MainLayout;