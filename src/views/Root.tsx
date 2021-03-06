import React from 'react';
import styled from 'styled-components';

import Sidebar from '../components/sidebar/Sidebar';
import Content from '../components/inventory/Content';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.secondary};
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
