import React from 'react';
import { StoryFn } from '@storybook/react';
import { Theme } from '../../../src/app/providers/ThemeProvider';

const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);

export default ThemeDecorator;
