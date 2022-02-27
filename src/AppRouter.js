import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './components/home/App'
import Contact from './components/page/Contact'

const AppRouter = () => {
  <BrowserRouter>
  <div>
    <nav>
      <ul>
        <li>
          <link to='/'>Home</link>
        </li>
        <li>
          <link to='/contact'>Kontak</link>
        </li>
      </ul>
    </nav>
    <Route path='/' exact component={App} />
    <Route path='/contact' component={Contact} />
  </div>
  </BrowserRouter>
}

export default AppRouter