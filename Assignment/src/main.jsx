import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Summary from "./components/Summary"
import Chart from "./components/Chart"
import Statistics from "./components/Statistics"
import Analysis from "./components/Analysis"
import Setting from "./components/Setting"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'summary',  // Use lowercase paths for consistency
        element: <Summary />
      },
      {
        path: 'chart',
        element: <Chart />
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'analysis',
        element: <Analysis />
      },
      {
        path: 'setting',
        element: <Setting />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
