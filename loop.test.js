import loop from './loop';

jest.useFakeTimers();

describe('loop', () => {
  it('calls the function every 1000ms', () => {
    const func = jest.fn();

    loop(func);

    expect(func.mock.calls.length).toBe(0);

    jest.runTimersToTime(999);
    expect(func.mock.calls.length).toBe(0);

    jest.runTimersToTime(1);
    expect(func.mock.calls.length).toBe(1);

    jest.runTimersToTime(5000);
    expect(func.mock.calls.length).toBe(6);
  });
});
