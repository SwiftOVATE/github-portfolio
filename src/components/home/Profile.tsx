import { useState } from "react"
import { UserName } from "../../config/Config"
import { profileData } from "../../utils/GithubAPI"

export const Profile = () => {

    const [avatar, setAvatar] = useState<string>("")
    const [bio, setBio] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [url, setUrl] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [twitter, setTwitter] = useState<string>("")
    const [twitterUrl, setTwitterUrl] = useState<string>("")
    const [email, setEmail] = useState<string>("")


    const image = async () => {
        profileData().then((data) => {
            setAvatar(data.avatar_url)
            setBio(data.bio)
            setName(data.name)
            setUrl(data.html_url)
            setLocation(data.location)
            setTwitter(data.twitter_username)
            setTwitterUrl("https://twitter.com/" + data.twitter_username)
            setEmail(data.email)
        })
    }
    image()

    // set avatar as page icon
    const icon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    
    //  <link rel='icon' href='https://avatars.githubusercontent.com/u/108847584?s=200&v=4' />
    if (icon) {
        icon.href = avatar;
    }

    return (
        <div className="flex-self-stretch border-md-right border-gray-light bg-white col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-6">
            <img src={avatar} className="circle mb-3" style={{ maxWidth: 150 }} alt="avatar"/>
            <h1 className=" mb-2 lh-condensed">
                {name}
            </h1>
            <p className="mb-3 f4 text-gray">{bio}
            </p>
            <div className="f4 mb-6">
                {/* Github */}
                <a href={url} rel="noreferrer" target="_blank">
                    <div className="d-flex flex-items-center mb-3">
                        <svg height={20} className="octicon octicon-mark-github mr-2 v-align-middle" fill="#24292e" aria-label="GitHub" viewBox="0 0 16 16" version="1.1" width={20} role="img"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
                        @{UserName}
                    </div>
                </a>

                {/* Twitter */}
                {
                    twitter !== null ?
                        <a href={twitterUrl} rel="noreferrer" target="_blank">
                            <div className="d-flex flex-items-center mb-3 ">
                                <img height={20} className="octicon octicon-location mr-2 v-align-middle" src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Twitter.svg" alt="twitter" />
                                {twitter}
                            </div>
                        </a>
                        : null
                }

                {/* Location */}
                <div className="d-flex flex-items-center mb-3 ">
                    <svg height={20} className="octicon octicon-location mr-2 v-align-middle" fill="#24292e" aria-label="Location" viewBox="0 0 16 16" version="1.1" width={20} role="img"><path fillRule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z" /></svg>
                    {location}
                </div>

                {/* Email */}
                {
                    email !== null ?
                        <a href={"mailto:" + email} rel="noreferrer" target="_blank">
                            <div className="d-flex flex-items-center mb-3 ">
                                <img height={20} className="octicon octicon-location mr-2 v-align-middle" src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Mail.svg" alt="mail" />
                                {email}
                            </div>
                        </a>
                        : null
                }
            </div>
        </div>
    )
}   