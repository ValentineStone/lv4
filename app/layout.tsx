
import './global.css'
import { Nav } from '@/components/Nav'
import { MainMenu } from '@/components/MainMenu'
import { Main } from '@/components/Main'
import { StrictMode } from 'react'

export default ({ children }) => (
  <StrictMode>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        <MainMenu />
        <Main>
          {children}
        </Main>
      </body>
    </html>
  </StrictMode>
)