import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Email from './Components/email'
import Linkedin from './Components/Linkedin'
import NotFound from './Components/NotFound'

// Better and preferred way of doing routing

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: '/about',
      element: <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path: '/contact',
      element: <div>
        <Navbar />
        <Contact />
      </div>,
      children: [
        {
          path: 'email',
          element: <Email/>
        },
        {
          path: 'linkedin',
          element: <Linkedin/>
        }
      ]

    },
    {
      path:'*',
      element: <NotFound/>

    }
  ])

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
