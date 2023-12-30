import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Footer, Header } from './app/layout'
import { GetInvolved, Mission, Home } from './app/pages'

import './App.scss'

const App = () => {
    return (
        <Router>
            <div className="app">
                <header className="app__header">
                    <Header />
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/get-involved" element={<GetInvolved />} />
                    <Route path="/mission" element={<Mission />} />
                </Routes>
                <footer>
                    <Footer />
                </footer>
            </div>
        </Router>
    )
}

export default App
