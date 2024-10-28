import './App.css'
import { createBrowserRouter ,createRoutesFromElements ,RouterProvider,Route} from 'react-router-dom'
import Menu from './Components/Menu'
import Banner from './Components/Banner'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
   <Route>
     <Route path='/' element={<Menu/>}></Route>
     <Route path='/baner' element={<Banner/>}></Route>
   </Route>
  ))

  return (
    <>
       <RouterProvider router={router}>
    
       </RouterProvider>
    </>
  )
}

export default App
