import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Organization } from "../pages/Organization"

export const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/github-portfolio" element={<Home />} />
                    <Route path="/github-portfolio/org/*" element={<Organization />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}