import React from 'react';
import styled from 'styled-components';

const Container = styled.input.attrs({ type: 'checkbox' })`
  zoom: 1.7;
  margin: 0 3px;
  position: relative;
  left: 2px;
  top: 2px;
`;

export function Checkbox(props: any) {
  return (
    <Container
      {...props}
    />
  );
}
