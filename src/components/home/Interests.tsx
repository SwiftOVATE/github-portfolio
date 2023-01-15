import { Topics } from "../../config/Config"

export const Interests = () => {
    return (
        <div>
            <h2>My Interests</h2>
            <p className="f4 mb-4 text-gray">Topics that I want to learn more about.</p>
            <div className="d-flex flex-wrap gutter-condensed mb-4">

                {
                    Topics.map((topic: any) => {
                        return (
                            <div className="col-6 col-md-12 col-lg-6 col-xl-4 mb-3 orgs">
                                <a href={"https://github.com/topics/" + topic} className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center border border-gray-light rounded-1 bg-white p-5">
                                    <img src={"https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Technologies/" + topic + ".svg"} width={64} height={64} className="mx-auto rounded-1 mb-3" alt={topic} />
                                    <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">
                                        {topic}
                                    </p>
                                </a>
                            </div>)
                    })
                }


            </div>
        </div>
    )
}