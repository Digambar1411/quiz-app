import { useState, useEffect, createContext, useContext, useLayoutEffect} from "react";

const ThemeContext = createContext();

const useTheme = ()=>useContext(ThemeContext);

const ThemeProvider =({children})=>{
    //system wide theme preference
    const preferColorSchemeQuery = "(prefers-color-scheme: light)";

    const initialTheme =()=>{
        (matchMedia(preferColorSchemeQuery).matches ? "light" : "dark" ) || localStorage.getItem("theme");
    }

    const [theme, setTheme] = useState(initialTheme());
    
    const toggleTheme=()=>{
        setTheme((theme)=> theme ==="light" ? "dark" : "light");
    }

    useEffect(()=>{
        localStorage.setItem("theme", theme);
    },[theme]);

    useEffect(()=>{
        if(theme==="light"){
            document.documentElement.setAttribute("theme-attribute","light");
        }
        else{
            document.documentElement.setAttribute("theme-attribute","dark");
        }
        },[theme]
        
    )

    return(<ThemeContext.Provider value={{toggleTheme, theme}}>
        {children}
    </ThemeContext.Provider>
    )
}

export { ThemeProvider, useTheme}