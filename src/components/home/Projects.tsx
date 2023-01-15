import { useState } from "react"
import { reposData } from "../../utils/GithubAPI"

export const Projects = () => {

    const [repos, setRepos] = useState([])
    const repoFromGit = reposData()

    repoFromGit.then((data) => {
        const repos = data.map((repo: any) => {
            return (
                <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3 " key={repo.id}>
                    <div className="github-component d-flex flex-column flex-justify-between height-full text-left border border-gray-light bg-white rounded-1 p-3 repoCard">
                        <div>
                            <div className="d-flex flex-justify-between flex-items-start mb-1">
                                <a href={repo.html_url}>
                                    <h1 className="f4 lh-condensed mb-1">
                                        <svg height={20} className="octicon octicon-repo mr-1 v-align-middle" fill="#586069" aria-label="repo" viewBox="0 0 16 16" version="1.1" width={20} role="img"><path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" /></svg>
                                        {repo.name}
                                    </h1>
                                </a>
                            </div>
                            <div className="text-gray mb-2 ws-normal">
                                {repo.description}
                            </div>
                        </div>
                        <div className="d-flex f6">
                            <span className="repo-language-color ml-0 mr-1" style={{ backgroundColor: '#e34c26' }} />
                            <span className="mr-3" itemProp="programmingLanguage">
                                {repo.language}
                            </span>
                            <a href={repo.html_url + "/stargazers"} className="d-inline-block link-gray mr-4">
                                <svg className="octicon octicon-star mr-1" viewBox="0 0 14 16" version="1.1" width={14} height={16} aria-hidden="true"><path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" /></svg>
                                {repo.stargazers_count}
                            </a>
                            <a href={repo.html_url + "/network/members"} className="d-inline-block link-gray mr-4">
                                <svg className="octicon octicon-git-branch mr-1" viewBox="0 0 10 16" version="1.1" width={10} height={16} aria-hidden="true"><path fillRule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" /></svg>
                                {repo.forks_count}
                            </a>
                        </div>
                    </div>
                </div>
            )
        })
        setRepos(repos)
    })

    return (
        <div>
            <h2>My Projects</h2>
            <p className="f4 mb-4 text-gray">GitHub repositories that I've built.</p>
            <div className="d-sm-flex flex-wrap gutter-condensed mb-4">
                {repos}
            </div>
        </div>
    )
}