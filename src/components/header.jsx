import { Link, useNavigate } from "react-router-dom"
import Button from "./button"

function Header(){
  // const { theme, setTheme } = useContext(ThemeContext);
  // console.log("theme in header=>", theme);

  return(

        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl"><Link to={"/Home"}>E-com</Link></span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to={"/Home"}> home &nbsp;</Link> 
      <Link to={"/About"}> About us &nbsp;</Link>
      <Link to={"/Products"}> Products &nbsp; </Link>
      <Link to={"/Branches"}> Branches  </Link>
    </nav>
    {/* <Button  text={theme == 'light' ? 'Make it Dark' : "Make it Light"} />  */}
  </div>
</header>


    )
}

export default Header