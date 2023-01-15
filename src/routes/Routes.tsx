import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Organization } from "../pages/Organization"

export const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/Github-Portfolio" element={<Home />} />
                    <Route path="/Github-Portfolio/org/*" element={<Organization />} />
                    <Route path="/org/*" element={<Organization />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}