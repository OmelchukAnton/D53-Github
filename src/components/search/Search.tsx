import React, { useState } from "react";
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import s from './Search.module.css';

type SearchPropsType = {
    onSubmit: (fixedValue: string) => void
}

export const Search: React.FC<SearchPropsType> = (props) => {
    const [tempSearch, setTempSearch] = useState('');

    return (
        <div className={s.search}>
            <Input
                placeholder="Input repo name"
                className={s.searchInput}
                value={tempSearch}
                onChange={(e) => {
                    setTempSearch((e.currentTarget.value))}
                }
            />
            <Button
                className={s.searchBtn}
                type="primary"
                icon={<SearchOutlined />}
                onClick={() => {
                    props.onSubmit(tempSearch)
                }}
            >
                Search
            </Button>
        </div>
    )
}