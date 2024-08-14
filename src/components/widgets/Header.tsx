import Navbar from "./Navbar"

const Header = () => {
    return (
        <>
        <header className='text-white bg-[#6366f1] text-center px-2 py-6 '>
            <h1 className='text-4xl font-bold p-7'>
                Book Generator API
            </h1>
        </header>
        <Navbar/>
        </>
    )
}

export default Header