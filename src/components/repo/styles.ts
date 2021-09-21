import styled from "styled-components";
import { Avatar } from 'antd';

export const AvatarImage = styled(Avatar)`
  margin-right: 15px;
`;

export const RepoItem = styled.div`
  width: 100%;
  border: solid 2px lightgray;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const RepoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const RepoHeaderName = styled.div`
  font-size: 1.2em;
  font-weight: 500;
`;

export const RepoHeaderIcons = styled.div`
  display: flex;
  flex-direction: column;
`;
