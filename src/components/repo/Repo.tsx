import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { Space, Tooltip } from "antd";
import { StarOutlined, ForkOutlined, MessageOutlined } from "@ant-design/icons";
import {
  AvatarImage,
  RepoItem,
  RepoHeader,
  RepoHeaderName,
  RepoHeaderIcons,
} from "./styles";
import { RepoType } from "../../types";

const IconText = ({ icon, text }: { icon: ReactElement; text: string }) => (
  <Space>
    {icon}
    {text}
  </Space>
);

export const formatDate = (date: Date) => new Date(date).toUTCString();

export const Repo: FC<{ repo: RepoType }> = (props) => {
  const { repo } = props;

  return (
    <RepoItem>
      <RepoHeader>
        <RepoHeaderName>
          <AvatarImage size={64} src={repo.owner.avatar_url} />
          <NavLink to={`/repo/${repo.owner.login}/${repo.name}`}>
            {repo.name}
          </NavLink>
        </RepoHeaderName>
        <RepoHeaderIcons>
          <Tooltip title="Stars" placement="right">
            <span>
              <IconText icon={<StarOutlined />} text={repo.stargazers_count} />
            </span>
          </Tooltip>
          <Tooltip title="Forks" placement="right">
            <span>
              <IconText icon={<ForkOutlined />} text={repo.forks} />
            </span>
          </Tooltip>
          <Tooltip title="Open issues" placement="right">
            <span>
              <IconText icon={<MessageOutlined />} text={repo.open_issues} />
            </span>
          </Tooltip>
        </RepoHeaderIcons>
      </RepoHeader>
      <div className="repo-last-commit">
        Last commit: {formatDate(repo.updated_at)}
      </div>
      <a href={repo.html_url} className="repo-link">
        Repository link: {repo.html_url}
      </a>
    </RepoItem>
  );
};
