import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';

const Wrapper = styled.aside`
  display: block;
  position: fixed;
  top: 6rem;
  right: 10rem;
  z-index: 999;
  width: 3rem;
  height: auto;
  cursor: pointer;
`;

const ToggleMode: React.FC = () => {
  return (
    <Wrapper>
      <Icon type="moon" />
    </Wrapper>
  );
};

export default ToggleMode;
