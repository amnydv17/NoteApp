import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Note from './components/Note'
import Home from './components/Home'
import ViewNote from './components/ViewNote'
import Footer from './components/Footer'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className='w-full h-full flex flex-col'>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    },

    {
      path:"/notes",
      element:
      <div className="w-full h-full flex flex-col">
         <Navbar/>
         <Note/>
         <Footer/>
      </div>
    },

    {
      path:"/notes/:id",
      element:
      <div className="w-full h-full flex flex-col">
        <Navbar/>
        <ViewNote/>
        <Footer/>
      </div>
    },
  ]
)

function App() {
  return (
       <RouterProvider  router={router}/>
  )
}

export default App
