import { createContext, ReactNode, useContext, useState } from "react";

type ThemeVale = 'light' | 'dark' | 'cupcake' | 'bumblebee' | 'emerald' | 'corporate' | 'synthwave' | 'retro' | 'cyberpunk' | 'valentine' | 'halloween' | 'garden' | 'forest' | 'aqua' | 'lofi' | 'pastel' | 'fantasy' | 'wireframe' | 'black' | 'luxury' | 'dracula' | 'cmyk' | 'autumn' | 'business' | 'acid' | 'lemonade' | 'night' | 'coffee' | 'winter' | 'dim' | 'nord' | 'sunset' | 'caramellatte' | 'abyss' | 'silk';
type ThemeContextType = {
    val: ThemeVale
    update: (val: ThemeVale) => void
}


const ThemeContext = createContext<ThemeContextType | null>(null);
export default function ({ children }: { children: ReactNode }) {
    const [context, setContext] = useState<ThemeVale>("abyss");
    function update(val: ThemeVale) {
        setContext(val);
    }
    return <ThemeContext.Provider value={{ val: context, update }}>
        {children}
    </ThemeContext.Provider>
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (context == null) {
        throw Error("Theme Provider context err");
    }
    return context;
}