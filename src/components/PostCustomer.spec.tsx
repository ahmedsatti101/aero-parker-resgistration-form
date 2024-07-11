/**

* @jest-environment jsdom

*/

import React from 'react';
import {render, screen} from '@testing-library/react';
import {PostCustomer} from './PostCustomer';


describe('PostCustomer()', () => {
    it('Test should verify h1 text is being rendered on the screen', async () => {
      render(<PostCustomer handleAddCustomer={() => {}}/>);

      const element = await screen.getByText(/Create an account at AeroParker/i);
      expect(element).not.toBeNull;
    })
})
