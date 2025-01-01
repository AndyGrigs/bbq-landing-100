import type { Preview } from '@storybook/react';
import { StyleDecorator } from './decorators/styleDecorator'; // Adjust the path as necessary
import ThemeDecorator from './decorators/themeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    // @ts-ignore
    decorators: [StyleDecorator, ThemeDecorator(Theme.DARK)],
};

export default preview;
