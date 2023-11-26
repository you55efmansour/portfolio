import './App.scss';
import {RouterProvider,createHashRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  let routers = createHashRouter([
    {path:"/" , element:<Layout/> , children:[
      {index:true , element:<Home/>},
      {path : 'about' , element:<About/>},
      {path:'contact' , element:<Contact/>},
      {path:'projects' , element:<Projects/>},
      {path:'skills' , element:<Skills/>}
    ]}
  ])
  return (
  <>
  <RouterProvider router={routers}/>
  </>
  
  )
}


export default App;