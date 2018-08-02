export default jest.fn(() =>
  Promise.resolve({ data: [{ id: 1, note: 'NOTE' }] }),
);
