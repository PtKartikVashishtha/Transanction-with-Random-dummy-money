import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { Dashboard } from './pages/DashBoard'
import { SendMoney } from './pages/SendMoney'
import { Message } from './pages/Message'
import './App.css'
import { Done } from './pages/Done'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "signup" element = {<SignUp />} />
          <Route path = "signin" element = {<SignIn />} />
          <Route path = "dashboard" element = {<Dashboard />} />
          <Route path = "send" element = {<SendMoney />} />
          <Route path = "done" element = {<Message />} />
          <Route path = "paid" element = {<Done />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
