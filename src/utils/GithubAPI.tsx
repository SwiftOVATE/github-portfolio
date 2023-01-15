import { UserName } from "../config/Config"

const URL1 = "https://api.github.com/users/" + UserName

export const reposData = async () => {
    const response = await fetch(URL1 + "/repos")
    const data = await response.json()

    return data
}

export const profileData = async () => {
    const response = await fetch(URL1)
    const data = await response.json()

    return data
}

export const organizationData = async () => {
    const response = await fetch(URL1 + "/orgs")
    const data = await response.json()

    return data
}

// ORGANIZATION 

const URL2 = "https://api.github.com/orgs/"

export const orgProfileData = async (orgName: any) => {
    const response = await fetch(URL2 + orgName)
    const data = await response.json()

    return data
}

export const orgReposData = async (orgName: any) => {
    const response = await fetch(URL2 + orgName + "/repos")
    const data = await response.json()

    return data
}

