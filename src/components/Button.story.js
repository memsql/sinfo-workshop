import React from 'react';

import Button from './Button';
import Page from '../utils-storybook/Page';

const Template = (args) => (
    <Page title="Button" inverted={args.inverted}>
        <Button {...args}>
            I am a button
        </Button>
    </Page>
    );

export const Primary = Template.bind();
Primary.parameters = {
    jest: ['Button.test.js'],
};

const buttonStory = {
    title: "Components/Button",
    component: Button,
    args: {
        onClick: () => { alert("You clicked me.") },
    },
};

export default buttonStory;
