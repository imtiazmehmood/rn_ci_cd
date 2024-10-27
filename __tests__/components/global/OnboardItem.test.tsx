import React from 'react';
import {render} from '@testing-library/react-native';
import OnboardItem from '../../../src/components/global/OnboardItem';

describe('OnboardItem', () => {
  const mockOnPressFirst = jest.fn();
  const mockOnPressSeconf = jest.fn();
  const imageSource = {uri: 'https://gif.png'};
  const title = 'My Title';
  const subtitle = 'My Subtitle';
  const buttonTitleFirst = 'First Button';
  const buttonTitleSecond = 'Second Button';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly one button', () => {
    const {getByText, getByTestId} = render(
      <OnboardItem
        title={title}
        subtitle={subtitle}
        imageSource={imageSource}
        onPressFirst={mockOnPressFirst}
        buttonTitleFirst={buttonTitleFirst}
      />,
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByText(subtitle)).toBeTruthy();
    expect(getByText(buttonTitleFirst)).toBeTruthy();
    expect(getByTestId('background-image')).toBeTruthy();
  });

  it('Should render correctly two buttons', () => {
    const {getByText, getByTestId} = render(
      <OnboardItem
        title={title}
        subtitle={subtitle}
        imageSource={imageSource}
        onPressFirst={mockOnPressFirst}
        onPressSecond={mockOnPressSeconf}
        buttonTitleFirst={buttonTitleFirst}
        buttonTitleSecond={buttonTitleSecond}
      />,
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByText(subtitle)).toBeTruthy();
    expect(getByText(buttonTitleFirst)).toBeTruthy();
    expect(getByText(buttonTitleSecond)).toBeTruthy();
    expect(getByTestId('background-image')).toBeTruthy();
  });
});
