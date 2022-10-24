import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Administration from './component/Administration'
import Complaints from './component/Complaints'
import Dashboard from './component/Dashboard'
import NotFound from './component/NotFound'
import Notification from './component/Notification'
import Main from './component/Main'
import Users from './component/Users'
import Ads from './component/Ads'

import Login from './Login'
export default function App() {
  return (
    <div className='app'>
       
       
       <Routes>
            <Route  path="/Quikl" element = {<Login />}  />
            <Route  path="/" element={<Dashboard  />  } >
              <Route path="" element= {<Main />} /> 
              <Route path="users" element= {<Users />} />
              <Route path="ads" element={<Ads />}/>
              <Route path="notification" element= {<Notification/>}/>
              <Route path="complaints" element= {<Complaints />} />
              <Route path="administration" element= {<Administration />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
        
       

    </div>
  )
}
