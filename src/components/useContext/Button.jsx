import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext";

const Button = () => {
   const theme = useContext(ThemeContext);

   return <button
       style={{background: theme.background, color: theme.text}}>
       Theme Button
   </button>
}

export default Button;