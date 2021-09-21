import {AxiosResponse} from "axios";

export type ContributorType = {
    id: number,
    login: string
}

export type IssueType = {
    html_url: string,
    title: string
}

export type ReadmeType = {
    content: string
}

export type RepoType = {
    id: number
    name: string
    stargazers_count: string
    updated_at: Date
    created_at: Date
    language: string
    html_url: string
    forks: string
    open_issues: string
    owner: OwnerType
}

type OwnerType = {
    login: string
    avatar_url: string
}

export type HandlerFuncType = (username: string, reponame: string) => Promise<AxiosResponse>;
// as we accept many types it's generic function
export type CallbackType = (data: any) => void;