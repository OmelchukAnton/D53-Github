import { FC, useEffect, useState } from "react";
import { List } from "antd";
import { Repo } from "../repo/Repo";
import { Search } from "../search/Search";
import { getRepos } from "../api/api";
import { RepoType } from "../../types";
import { Page, CurrentPage, Pagination, Spinner } from "./styles";

export const Main: FC = () => {
  const [repos, setRepos] = useState<RepoType[]>();
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pages = [1, 2, 3, 4, 5];
  const perPage = 5;

  const updateReposState = (
    currentPage: number,
    perPage: number,
    value?: string
  ) => {
    getRepos(currentPage, perPage, value).then((res) => {
      setRepos(res.data.items);
      setIsFetching(false);
    });
  };

  useEffect(() => {
    updateReposState(currentPage, perPage);
  }, [currentPage, perPage]);

  const onSubmit = (value: string) => {
    updateReposState(currentPage, perPage, value);
  };

  return (
    <div>
      <Search onSubmit={onSubmit} />
      {isFetching ? (
        <Spinner size="large" />
      ) : (
        <>
          <List
            itemLayout="horizontal"
            dataSource={repos}
            renderItem={(repo) => (
              <List.Item>
                <Repo key={repo.id} repo={repo} />
              </List.Item>
            )}
          />
          <Pagination>
            {pages.map((page: number) => {
              const Component = currentPage === page ? CurrentPage : Page;
              return (
                <Component key={page} onClick={() => setCurrentPage(page)}>
                  {page}
                </Component>
              );
            })}
          </Pagination>
        </>
      )}
    </div>
  );
};
