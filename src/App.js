import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Cocktails from './pages/Cocktails'
import { AppProvider } from './context'
function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/cocktails' element={<Cocktails />}>
                            <Route
                                path='/cocktails/:id'
                                element={<Cocktails />}
                            />
                        </Route>
                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppProvider>
    )
}

export default App
