import { Interests } from "../components/home/Interests"
import { OrganizationList } from "../components/home/OrganizationList"
import { Profile } from "../components/home/Profile"
import { Projects } from "../components/home/Projects"

export const Home = () => {
    return (
        <div className="d-md-flex min-height-full border-md-bottom">
            <Profile />
            <div className="col-md-7 col-lg-8 col-xl-9 px-4 py-6 px-lg-7 border-top border-md-top-0 bg-gray-light">
                <div className="mx-auto" style={{ maxWidth: 900 }}>

                    <Projects />

                    <OrganizationList />

                    <Interests />

                </div>
            </div>
        </div>
    )
}