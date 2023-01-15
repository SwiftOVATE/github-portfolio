import { Current } from "../utils/Current"
import { useEffect } from "react"
import { Profile } from "../components/org/Profile"
import { Projects } from "../components/org/Projects"

export const Organization = () => {

    useEffect(() => {
        console.log(Current);
    }, [])

    return (
        <div className="d-md-flex min-height-full border-md-bottom">
            <Profile />
            <div className="col-md-7 col-lg-8 col-xl-9 px-4 py-6 px-lg-7 border-top border-md-top-0 bg-gray-light">
                <div className="mx-auto" style={{ maxWidth: 900 }}>

                    <Projects />

                </div>
            </div>
        </div>)
}