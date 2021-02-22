import React from 'react';

import Button from './Button';
import Page from '../utils-storybook/Page';

const Template = (args) => (
    <Page title="Button" inverted={args.inverted}>
        <Button {...args}>
            {args.children}
        </Button>
    </Page>
    );

export const Primary = Template.bind();

export const Secondary = Template.bind();
Secondary.args = {
    type: "secondary",
};

export const Inverted = Template.bind();
Inverted.args = {
    inverted: true,
};

const buttonStory = {
    title: "Components/Button",
    component: Button,
    args: {
        children: "I am a button",
        // onClick: () => { alert("You clicked me.") },
        // onClick: null,
    },
    argTypes: {
        // type: {
        //     control: {
        //         type: 'select',
        //         options: BUTTON_TYPES,
        //     }
        // },
        children: { control: 'text' },
    },
};

export default buttonStory;

export const defaultView = () => <div>Jest results in storybook</div>;
defaultView.parameters = {
    jest: ['Button.test.js'],
};
