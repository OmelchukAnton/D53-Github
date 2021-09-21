import { FC, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { SearchBlock, SearchButton, SearchInput } from "./styles";

type SearchPropsType = {
  onSubmit: (value: string) => void;
};

export const Search: FC<SearchPropsType> = (props) => {
  const [tempSearch, setTempSearch] = useState("");

  return (
    <SearchBlock>
      <SearchInput
        placeholder="Input repo name"
        value={tempSearch}
        onChange={(e) => {
          setTempSearch(e.currentTarget.value);
        }}
      />
      <SearchButton
        type="primary"
        icon={<SearchOutlined />}
        onClick={() => {
          props.onSubmit(tempSearch);
        }}
      >
        Search
      </SearchButton>
    </SearchBlock>
  );
};
