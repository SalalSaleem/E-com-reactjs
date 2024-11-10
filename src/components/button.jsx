import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import ThemeContextProvider, { ThemeContext } from "../context/buttonContext"

function Button({text , onClick}){
      const { theme } = useContext(ThemeContext)

      return (
        <button
          onClick={onClick}
          className={`
        ${theme == "light" ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}
        p-1 px-4 m-1 rounded  `}
        >
          {text}
        </button>
      );
    
}

export default Button