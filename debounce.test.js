import debounce from './debounce';

describe('debounce', () => {
  it('should debounce fast function calls', () => {
    jest.useFakeTimers();

    const originalFn = jest.fn();
    const debouncedFn = debounce(originalFn, 100);

    setTimeout(debouncedFn, 50);
    setTimeout(debouncedFn, 100);
    setTimeout(debouncedFn, 150);
    setTimeout(debouncedFn, 200);

    setTimeout(debouncedFn, 600);

    jest.runTimersToTime(200); // total is 200
    expect(originalFn.mock.calls.length).toEqual(0);

    jest.runTimersToTime(100); // total is 300
    expect(originalFn.mock.calls.length).toEqual(1);

    jest.runTimersToTime(400); // total is 700
    expect(originalFn.mock.calls.length).toEqual(2);
  });
});
