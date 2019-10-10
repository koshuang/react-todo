import { addDecorator, configure } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { withTests } from '@storybook/addon-jest';
import { theme } from '../src/modules/todo-list';
import results from '../.jest-test-results.json';

const themes = [theme];

addDecorator(withThemesProvider(themes));
addDecorator(
  withTests({
    results,
  }),
);
configure(require.context('../src', true, /\.stories\.tsx?$/), module);
