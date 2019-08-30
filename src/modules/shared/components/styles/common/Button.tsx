import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ITheme } from 'shared';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  theme?: ITheme;
}

/* Adapt the colors based on primary prop */
const ButtonStyle = styled.button<IButtonProps>`
  background: ${(props) => props.primary ? props.theme.primaryColor : 'white'};
  color: ${(props) => props.primary ? 'white' : props.theme.primaryColor};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.primaryColor};
  border-radius: 3px;
`;

export class Button extends React.Component<IButtonProps> {
  static defaultProps = {
    primary: false,
  };

  render() {
    return <ButtonStyle {...this.props} />;
  }
}
