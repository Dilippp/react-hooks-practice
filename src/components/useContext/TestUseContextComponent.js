import {ThemeContext, themes} from "../../contexts/ThemeContext";
import {useState} from "react";
import Button from './Button'

const TestUseContextComponent = () => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        const newTheme = theme === themes.light?
            themes.dark : themes.light;
        setTheme(newTheme);
        console.log(newTheme);
    };

    return(
        /*current theme, we can also pass as value={{theme, setTheme}} to set the theme*/
    <ThemeContext.Provider value={theme}>
        <div>
            {/*current theme will get applied to nested components at any level
            without passing the props*/}
            <Button/>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    </ThemeContext.Provider>
    );
};
export default TestUseContextComponent;