import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';
import Input from '../../../src/components/ui/Input';

describe('Input', () => {
  const mockOnChangeText = jest.fn();
  const mockOnFocus = jest.fn();
  const mockOnBlur = jest.fn();

  it('Should render correctly', () => {
    const {getByTestId} = render(
      <Input
        value=""
        placeholder="Enter Text"
        onBlur={mockOnBlur}
        onFocus={mockOnFocus}
        onChangeText={mockOnChangeText}
      />,
    );
    fireEvent(getByTestId('textInput'), 'focus', {});
    fireEvent(getByTestId('textInput'), 'blur', {});
    fireEvent(getByTestId('textInput'), 'focus', {});
    fireEvent(getByTestId('textInput'), 'blur', {});

    expect(mockOnFocus).toHaveBeenCalledTimes(2);
    expect(mockOnBlur).toHaveBeenCalledTimes(2);
  });

  it('Should display error text when error prop is provided', () => {
    const error = 'This is an error';
    const {getByTestId} = render(
      <Input
        value=""
        error={error}
        placeholder="Enter Text"
        onBlur={mockOnBlur}
        onFocus={mockOnFocus}
        onChangeText={mockOnChangeText}
      />,
    );

    expect(getByTestId('errorText')).toHaveTextContent(error);
  });

  it('Should call onFocus and setFocus state on input focus', () => {
    const {getByTestId} = render(
      <Input
        value=""
        placeholder="Enter Text"
        onFocus={mockOnFocus}
        onChangeText={mockOnChangeText}
      />,
    );
    act(() => {
      fireEvent(getByTestId('textInput'), 'focus', {});
    });
    expect(mockOnFocus).toHaveBeenCalled();
  });

  it('Should apply disable style', () => {
    const {getByTestId} = render(
      <Input
        value=""
        disabled
        placeholder="Enter Text"
        onFocus={mockOnFocus}
        onChangeText={mockOnChangeText}
      />,
    );
    const inputContainer = getByTestId('inputView');
    expect(inputContainer).toHaveStyle({pointerEvents: 'none'});

    const textInput = getByTestId('textInput');
    expect(textInput.props.editable).toBeFalsy();
  });

  it('Should call default onFocus when not provided', () => {
    const {getByTestId} = render(
      <Input
        value=""
        placeholder="Enter Text"
        onChangeText={mockOnChangeText}
      />,
    );

    act(() => {
      fireEvent(getByTestId('textInput'), 'focus', {});
    });
  });

  it('Should call default onBlur when not provided', () => {
    const {getByTestId} = render(
      <Input
        value=""
        placeholder="Enter Text"
        onChangeText={mockOnChangeText}
      />,
    );
    act(() => {
      fireEvent(getByTestId('textInput'), 'blur', {});
    });
  });
});
