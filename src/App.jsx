import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'
import History from './components/History'
import Company from './components/Company'
import Team from './components/Team'
import Members from './components/Members'
import Member from './components/Member'

function App() {
 
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/history" element={<History/>}>
            <Route path="company" element={<Company/>}/>
            <Route path="team" element={<Team/>}/>
          </Route>
          <Route path="/members" element={<Members/>}/>
          <Route path="/members/:id" element={<Member/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </div>
     
    </div>
  )
}

export default App
