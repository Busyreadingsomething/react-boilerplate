import messages from '../messages';

describe('### MESSAGE LIST - MESSAGES ###', () => {
  it('should render the message', () => {
    const { header } = messages;
    expect(messages).toHaveProperty('header');
    expect(header).toHaveProperty('id', 'app.components.MessageList.header');
    expect(header).toHaveProperty('defaultMessage', 'Here are your messages:');
  });
});
