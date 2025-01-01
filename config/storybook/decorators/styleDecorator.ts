import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';

export const StyleDecorator = (story: ()=> StoryFn) => story();
