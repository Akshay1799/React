import React from 'react'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Multi_Input_Form from '../../../05. Form/src/Components/Multi_Input_Form'
import Users from '../../../04. UseEffect/Components/Users'
import bookList from '../../../01. JSX/src/Components/BookList'
import BookList from '../../../01. JSX/src/Components/BookList'


const Routing = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Services' element={<Services/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/form' element={<Multi_Input_Form/>}/>
            <Route path='/books' element={<BookList/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default Routing