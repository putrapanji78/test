import { renderHook, act } from '@testing-library/react-hooks';
import useForm from '../src/pages/form/useForm';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAppDispatch } from '../src/store/hooks';
import fetchMock from 'jest-fetch-mock';

jest.mock('@react-navigation/native');
jest.mock('../src/store/hooks');

fetchMock.enableMocks();

describe('useForm', () => {
  const mockNavigation = { goBack: jest.fn() };
  const mockDispatch = jest.fn();
  const mockParams = { id: '123' };

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
    (useRoute as jest.Mock).mockReturnValue({ params: mockParams });
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    fetchMock.resetMocks();
  });

  test('should fetch and set contact data correctly', async () => {
    const mockContactData = {
      data: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        photo: 'url-to-photo',
      },
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockContactData));

    const { result, waitForNextUpdate } = renderHook(() => useForm());

    expect(result.current.data.loading).toBe(false);

    await waitForNextUpdate();

    expect(result.current.data.loading).toBe(false);
    expect(result.current.data.form).toEqual({
      firstName: 'John',
      lastName: 'Doe',
      age: '30',
      photo: 'url-to-photo',
    });
  });

  test('should handle form updates', () => {
    const { result } = renderHook(() => useForm());

    act(() => {
      result.current.method.setForm({
        firstName: 'Jane',
        lastName: 'Doe',
        age: '25',
        photo: 'url-to-photo-2',
      });
    });

    expect(result.current.data.form).toEqual({
      firstName: 'Jane',
      lastName: 'Doe',
      age: '25',
      photo: 'url-to-photo-2',
    });
  });

  test('should handle adding a contact', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 201 });

    const { result } = renderHook(() => useForm());

    await act(async () => {
      await result.current.method.handleAddContact();
    });

    expect(result.current.data.loading).toBe(false);
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });

  test('should handle updating a contact', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 200 });

    const { result } = renderHook(() => useForm());

    await act(async () => {
      await result.current.method.handleUpdateContactById();
    });

    expect(result.current.data.loading).toBe(false);
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});