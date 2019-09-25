import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { IThemeProps } from '@modules/shared';

const GridContainer = styled.div<IThemeProps>`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "sidebar footer";
  height: 100vh;
  margin: 0px auto;

  .header {
    grid-area: header;
    background-color: ${(props: IThemeProps) => props.theme.backgroundColorThird};
  }

  .sidebar {
    grid-area: sidebar;
    display: flex; /* Will be hidden on mobile */
    flex-direction: column;
    grid-area: sidebar;
    background-color: ${(props: IThemeProps) => props.theme.backgroundColorFive};
    border-right: 1px solid ${(props: IThemeProps) => props.theme.backgroundColorFour};
  }

  .main {
    grid-area: main;
  }

  .footer {
    grid-area: footer;
  }

  .header, .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
  }
`;

export function Page(props: any) {
  const { header, sidebar, main, footer, theme } = props;
  const GlobalStyles = createGlobalStyle`
    body {
      @import url('https://fonts.googleapis.com/css?family=Roboto');
      font-family: 'Roboto', sans-serif;

      background-color: ${theme.backgroundColor};
      color: ${theme.backgroundColorFive};
      font-size: 16px;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />

      <GridContainer>
        <header className="header">{header}</header>
        <aside className="sidebar">{sidebar}</aside>
        <main className="main">{main}</main>
        <footer className="footer">{footer}</footer>
      </GridContainer>
      </>
    </ThemeProvider>
  );
}
