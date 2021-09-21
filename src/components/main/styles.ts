import styled from "styled-components";
import { Spin } from "antd";

export const CurrentPage = styled.div`
  border: 2px solid lightgray;
  font-weight: 700;
  border-radius: 100%;
  padding: 5px 10px;
  margin: 0 10px;
  cursor: pointer;
`;

export const Page = styled.div`
  border: 1px solid lightgray;
  border-radius: 100%;
  padding: 5px 10px;
  margin: 0 10px;
  cursor: pointer;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const Spinner = styled(Spin)`
  display: flex;
  justify-content: center;
  padding-top: 20%;
`;