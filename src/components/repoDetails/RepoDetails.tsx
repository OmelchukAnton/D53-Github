import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { decode } from "js-base64";
import ReactMarkdown from "react-markdown";
import { PageHeader, Button, Descriptions, Card, List, Collapse } from "antd";
import {
  getContributors,
  getCurrentRepo,
  getIssues,
  getReadme,
} from "../api/api";
import { Section, CardItem } from "./styles";
import {
  CallbackType,
  ContributorType,
  HandlerFuncType,
  IssueType,
  ReadmeType,
  RepoType,
} from "../../types";
import { formatDate } from "../repo/Repo";

const { Meta } = Card;
const { Panel } = Collapse;

export const RepoDetails: FC = () => {
  const { username, reponame } =
    useParams<{ username: string; reponame: string }>();
  const [repo, setRepo] = useState<RepoType>();
  const [issues, setIssues] = useState<IssueType[]>();
  const [readme, setReadme] = useState<ReadmeType>();
  const [contributors, setContributors] = useState<ContributorType[]>([]);

  useEffect(() => {
    const handler = (apiHandler: HandlerFuncType, callback: CallbackType) => {
      apiHandler(username, reponame).then((res) => callback(res.data));
    };

    handler(getCurrentRepo, setRepo);
    handler(getContributors, setContributors);
    handler(getIssues, setIssues);
    handler(getReadme, setReadme);
  }, [reponame, username]);

  if (!repo) {
    return null;
  }

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="List"
        extra={[
          <Button key="forks">Forks Count: {repo.forks}</Button>,
          <Button key="stars">Stars: {repo.stargazers_count}</Button>,
        ]}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Language">
            {repo.language}
          </Descriptions.Item>
          <Descriptions.Item label="Creation Time">
            {formatDate(repo.created_at)}
          </Descriptions.Item>
          <Descriptions.Item label="Last update">
            {formatDate(repo.updated_at)}
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>

      <Section>
        <CardItem
          style={{ width: 240 }}
          cover={<img alt="owner_avatar" src={repo.owner.avatar_url} />}
        >
          <Meta title={repo.owner.login} />
        </CardItem>
        <div>
          <h2>Contributors:</h2>
          {contributors.map((c: ContributorType, index) => (
            <div key={c.id}>
              {index + 1}. {c.login}
            </div>
          ))}
        </div>
      </Section>

      <Collapse>
        <Panel header="Issues" key="1">
          <List
            size="small"
            bordered
            dataSource={issues}
            renderItem={(issue: IssueType) => (
              <List.Item>
                <a href={issue.html_url} target="_blank" rel="noreferrer">
                  {issue.title}
                </a>
              </List.Item>
            )}
          />
        </Panel>
        {readme && (
          <Panel header="README.md" key="2">
            <ReactMarkdown>{readme && decode(readme.content)}</ReactMarkdown>
          </Panel>
        )}
      </Collapse>
    </div>
  );
};
