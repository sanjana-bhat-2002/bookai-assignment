
const Navbar = () => {
    const navbarItems = ["Overview", "Authentication", "Endpoints", "Tutorial", "Code Examples", "Pricing"]
  return (
    <ul className="flex flex-col md:flex-row justify-center py-8 bg-section">
        {
            navbarItems.map((item, index) => (
                <li key={index} className='text-secondary text-center px-4 py-3 uppercase text-sm'>
                    <a href="">
                        {item}
                    </a>
                    
                </li>
            ))
        }
    </ul>
  )
}

export default Navbar