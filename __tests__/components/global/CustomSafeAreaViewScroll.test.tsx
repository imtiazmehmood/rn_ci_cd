import React from 'react';
import {render} from '@testing-library/react-native';
import CustomSafeAreaScrollView from '../../../src/components/global/CustomSafeAreaViewScroll';
import {Text} from 'react-native';

describe('CustomSafeAreaScrollView', () => {
  it('Should render children', () => {
    const {getByText} = render(
      <CustomSafeAreaScrollView>
        <Text>Im Text Children</Text>
      </CustomSafeAreaScrollView>,
    );

    expect(getByText('Im Text Children')).toBeTruthy();
  });
});
