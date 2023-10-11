import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/auth"
import { HomePage } from "./pages/home"


export const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  )
}
