import styled from "styled-components";
import {Input, Button} from "antd";

export const SearchBlock = styled.div`
  display: flex;
  padding-top: 12px;
`;

export const SearchButton = styled(Button)`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled(Input)`
  width: 100%;
`;