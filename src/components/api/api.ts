import axios from 'axios';
import {ContributorType, IssueType, ReadmeType, RepoType} from "../../types";

type SearchResult = {
    items: RepoType[]
}

const api_git = 'https://api.github.com/';

export const getRepos = async (currentPage: number, perPage: number, searchQuery: string = "stars:%3E1") =>
    axios.get<SearchResult>(`${api_git}search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`);

export const getCurrentRepo = async (username: string, repoName: string) =>
    axios.get<RepoType>(`${api_git}repos/${username}/${repoName}`);

export const getIssues = async (username: string, repoName: string) =>
    axios.get<IssueType>(`${api_git}repos/${username}/${repoName}/issues`);

export const getReadme = async (username: string, repoName: string) =>
    axios.get<ReadmeType>(`${api_git}repos/${username}/${repoName}/readme`);

export const getContributors = async (username: string, repoName: string) =>
    axios.get<ContributorType>(`${api_git}repos/${username}/${repoName}/contributors?page=1&per_page=10`);
