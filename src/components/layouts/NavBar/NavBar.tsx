import Tabs from "@/components/ui/Tabs"
import { themeAtom } from "@/hooks/atoms/useTheme"
import { Link } from "@tanstack/react-router"
import { useAtom } from "jotai"
import { useState } from "react"

export default function NavBar() {
    const [, setTheme] = useAtom(themeAtom)
    const [indexTheme, setIndexTheme] = useState<number>(0)

    const handleThemeChange = (index: number) => {
        if (index === 0) setTheme('light')
        else setTheme('dark')
        setIndexTheme(index)
    }
    
    return <div className="w-full h-full flex justify-between items-center px-4">
        <div className="flex gap-3">
            <Link href='/' >
                <div className="hover_button">
                    Home
                </div>
            </Link> 
            <Link href='/learn' >
                <div className="hover_button">
                    Learn
                </div>
            </Link> 
        </div>

        <div className="flex gap-3">
            <Tabs className="shadow-none h-11" checkedIndex={indexTheme} titles={["Light", "Dark"]} onSwitch={handleThemeChange} />
        </div>
    </div>
}