import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import buttonStory, { BrandPrimary } from './Button.story';

describe('renders the button in the primary state:', () => {
    render( <BrandPrimary {...buttonStory.args} />);
    const button = screen.getByRole('button');

    //🎯 Fix broken test
    it('button has class "primary"', () => {
        expect(button).toHaveClass("primary");
    });

    //🎯 Add more tests
    //   e.g. Is the button enabled? Is the content correct?
});

//📙 Testing Library jest-dom: https://github.com/testing-library/jest-dom
//   Testing with Storybook: https://storybook.js.org/docs/react/workflows/testing-with-storybook
//   Storybook addon Jest: https://www.npmjs.com/package/@storybook/addon-jest