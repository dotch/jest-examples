import simpleAsync from './simpleAsync';

describe('simple async function', () => {
  it('should resolve with true', async () => {
    const result = await simpleAsync();
    expect(result).toBe(true);
  });
});
