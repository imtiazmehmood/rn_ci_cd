import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

test('The Main App Renders Correctly', () => {
  const {toJSON} = render(<App />);
  expect(toJSON()).toMatchSnapshot();
});
