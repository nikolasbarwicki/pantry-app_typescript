import React from 'react';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.paleblue};
`;

const Root: React.FC = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Content />
    </Wrapper>
  );
};

export default Root;
