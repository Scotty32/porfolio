import React from 'react'
import logo from './logo.svg'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import './PageShell.css'
import { Link } from './Link'
import { Header } from '../components/Header'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>  
        <div className="h-screen max-w-screen bg-blue-500">
          <Header/>
            {children}
        </div>
      </PageContextProvider>
    </React.StrictMode>
  )
}
