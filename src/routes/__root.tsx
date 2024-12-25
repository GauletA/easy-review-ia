import { QueryClientProvider } from '@tanstack/react-query'
import { createRootRouteWithContext,  Outlet } from '@tanstack/react-router'

import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { twJoin } from 'tailwind-merge'
import Base from '@/components/layouts/Base'
import { themeAtom } from '@/hooks/atoms/useTheme'
import { queryClient } from '@/api/queries/queryClient.query'

export type TAuthContext = { auth: { isAuth: boolean }}

export const Route = createRootRouteWithContext<TAuthContext>()({
	component: RootComponent
})

function RootComponent() {
    const [theme] = useAtom(themeAtom)
    const [darkMode, setDarkMode] = useState(theme)
  
    useEffect(() => {
      setDarkMode(theme)
    }, [theme])
  
  return (
		<div className={twJoin('transition-colors duration-500 ease-in-out', darkMode === 'dark' && 'dark:bg-[#1E1F20] dark:text-white' )}>
      <QueryClientProvider client={queryClient}>
        <Base>
          <Outlet />
        </Base>
      </QueryClientProvider>
    </div>
  )
}