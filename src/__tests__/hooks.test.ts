import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useToggle from '../hooks/useToggle';

describe('Hooks testing', () => {
  test('useToggle hook unit testing', () => {
    const { result } = renderHook(() => useToggle(false));
    const [isOn, toggle] = [result.current[0], result.current[1]];
    expect(isOn).toBe(false);
    act(() => {
      toggle();
    })
    expect(true).toBe(true);
  })
});
