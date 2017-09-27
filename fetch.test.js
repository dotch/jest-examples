import fetchWeather from './fetch';

jest.mock('./utils/fetchWrapper', () => () => {
  return new Promise((resolve, reject) => {
    resolve({
      query: {results: {channel: {item: {condition: {text: 'sunny'}}}}},
    });
  });
});

describe('fetchWeather', () => {
  it('returns the condition text', async () => {
    const condition = await fetchWeather();
    expect(condition).toBe('sunny');
  });
});
