import React from 'react';

import Input, { TEXT_TYPES } from './Input';
import Page from '../utils-storybook/Page';


const Template = (args) => (
        <Input {...args} />
    );

export const Text = Template.bind();
Text.args = {
    type: "text",
    name: "text-input",
    label: "Input label",
};

const inputStory = {
    title: "Components/Input",
    component: Input,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: TEXT_TYPES,
            }
        },
        name: { table: 
            { disable: true }
        },
        onClick: { table: 
            { disable: true }
        },
    },
    decorators: [
        Story => (
            <Page title="Input">
                <Story />
            </Page>
        ),
    ],
};

export default inputStory;
