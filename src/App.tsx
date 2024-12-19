import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Super from './pages/main_page/Super'
import './styles/index.scss'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Super/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
