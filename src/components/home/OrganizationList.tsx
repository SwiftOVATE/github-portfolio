import { useState } from "react"
import { organizationData } from "../../utils/GithubAPI"

export const OrganizationList = () => {
    const [orgs, setOrgs] = useState([])
    organizationData().then((data) => {
        const ORG = data.map((item: any) => {
            return (
                <div className="col-6 col-md-12 col-lg-6 col-xl-4 mb-3 orgs" key={item.id}>
                    <a rel="noreferrer" href={"/github-portfolio/org/" + item.login} className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center border border-gray-light rounded-1 bg-white p-5">
                        <img src={item.avatar_url} width={64} height={64} className="mx-auto rounded-1 mb-3" alt="avatar_url" />
                        <p className="f3 lh-condensed text-center gray-dark mb-0 mt-1">
                            {item.login}
                        </p>
                    </a>
                </div>
            )
        })
        setOrgs(ORG)
    })


    return (
        <div>
            <h2>My Organizations</h2>
            <p className="f4 mb-4 text-gray">My repositories from Organizations.</p>
            <div className="d-flex flex-wrap gutter-condensed mb-4">
                {orgs}
            </div>
        </div>
    )
}