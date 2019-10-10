import { addDecorator, configure } from '@storybook/react';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';
import { theme } from '../src/modules/todo-list';

const themes = [theme];

addDecorator(withThemesProvider(themes));
configure(require.context('../src', true, /\.stories\.tsx?$/), module);
