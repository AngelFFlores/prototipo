import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/login' element={<h1>Home login</h1>} />
        <Route path='/register' element={<h1>Home register</h1>} />
        <Route path='/profile' element={<h1>Home profile</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App