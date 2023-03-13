import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ChildAbout from './child';
import DemoUseReducer from './demoUseReducer';
import CustomHooks from './CustomHooks/CustomHooks';

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;    
`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: ${(props) => (props.primary ? "blue" : "palevioletred")};
`;

export default function AboutPage() {
    const [number, setNumber] = useState(8);
    const listUser = [
        { id: 1, name: "Hieu", age: 18 },
        { id: 2, name: "Minh", age: 38 },
    ];
    const listUserMemo = useMemo(() => listUser, []);

    const countUp = () => {
        let i = 0;
        while (i < 2) {
            i++;
        }
        console.log(i);
        return i;
    };

    const countUpMemo = useMemo(() => countUp(), []);

    const renderNoti = () => {
        console.log("renderNoti");
    }

    const renderNotiCallback = useCallback(renderNoti, []);

    return (
        <div>
            <Wrapper>
                <Title>Hello World!</Title>
                <Title primary>Hello</Title>
                <Button type="primary" shape='circle' icon={<SearchOutlined />}></Button>
                <Title>Number : {number}</Title>
                <Title>Number Increase : {countUpMemo}</Title>
                <Button type='primary' onClick={() => {
                    setNumber(number + 10000);
                }}>Click</Button>
                <ChildAbout renderNoti={renderNotiCallback} />
                <hr />
                <DemoUseReducer />
                <hr />
                <CustomHooks />
            </Wrapper>
        </div>
    );
}
