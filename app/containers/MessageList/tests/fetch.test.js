import mockAxios from 'axios';
import fetch from '../fetch';

describe('### FETCH ###', () => {
  it('should return an array of objects', async () => {
    mockAxios(() => Promise.resolve({ data: [{ id: 1, note: 'NOTE' }] }));

    const result = await fetch();
    expect(result).toBeInstanceOf(Object);
    expect(result).toHaveProperty('data');

    const { data } = result;
    expect(data).toBeInstanceOf(Array);
    expect(data[0].id).toBe(1);
    expect(data[0].note).toBe('NOTE');
  });
});
