import { useState, useEffect, useLayout, createContext, useContext, useLayoutEffect} from "react";

const ThemeContext = createContext();

const useTheme = ()=>useContext(ThemeContext);

const ThemeProvider =({children})=>{

    const initialTheme =()=>{
        localStorage.getItem("theme");
    }

    const [theme, setTheme] = useState(initialTheme());

    const toggleTheme=()=>{
        setTheme((theme)=> theme==="light" ? "dark" : "light")
    
    }

    useEffect(()=>{
        localStorage.setItem("theme", theme);
    },[theme]);

    useLayoutEffect(()=>{
        if (theme==="light"){
            document.documentElement.setAttribute("theme-attribute", "light");
        }
        else{
            document.documentElement.setAttribute("theme-attribute", "dark")
        }
            
        },[theme]
        
    )

    return(<ThemeContext.Provider value={{toggleTheme, theme}}>
        {children}
    </ThemeContext.Provider>
    )
}

export { ThemeProvider, useTheme}