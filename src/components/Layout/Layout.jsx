import React from 'react'
import './Layout.scss'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className="App">
    <Sidebar/>
    {/* start page  */}
    <div className="page">
      <span className='tags top-tags'>
        <span className="html-tags">
          &lt;html&gt;
        </span>
        <br />
        &lt;body&gt;  
      </span>

      <Outlet/>
      
      <span className='tags bottom-tags'>
        &lt;/body&gt;
        <br />
        <span className='html-tags'>
          &lt;/html&gt;
        </span>
      </span>
    </div>
    {/* end page  */}
    </div>
    </>
  )
}