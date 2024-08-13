import { FC, ReactNode } from 'react'
import Header from '../components/widgets/Header';
// import Footer from '../components/Footer';

interface LayoutProps {
    children: ReactNode
}

const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className=''> 
    <Header />
     {children} 
     {/* <Footer /> */}
    </div>
  )
}

export default MainLayout;