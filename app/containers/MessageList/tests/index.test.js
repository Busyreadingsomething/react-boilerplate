/**
 * Test the HomePage
 */

import React from 'react';
import { fromJS } from 'immutable';
import { shallow, mount } from 'enzyme';
import { FormattedMessage, IntlProvider } from 'react-intl';
import Lists from 'components/Lists';

import { MessageList, mapStateToProps, mapDispatchToProps } from '../index';
import { initialState } from '../reducer';
import { loadMessages } from '../actions';
import messages from '../messages';

describe('### <MessageList /> ###', () => {
  it('should render the FromattedMessage', () => {
    const defaultProps = {
      messages: [],
      loading: false,
      success: false,
      error: false,
      loadMessages: () => {},
    };
    const renderedComponent = shallow(<MessageList {...defaultProps} />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });

  it('should render fetch the messages on mount', () => {
    const getSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <MessageList
          messages={[]}
          loading={false}
          success={false}
          error={false}
          loadMessages={getSpy}
        />
      </IntlProvider>,
    );
    expect(getSpy).toHaveBeenCalled();
  });

  it('should render the Lists if a successful fetch occurs', () => {
    const getSpy = jest.fn();
    const message = [{ id: 1, note: 'NOTE' }];
    const renderedComponent = shallow(
      <MessageList
        error={false}
        loading={false}
        success
        loadMessages={getSpy}
        messages={message}
      />,
    );
    expect(getSpy).toHaveBeenCalled();
    expect(
      renderedComponent.contains(<Lists active={true} list={message} />), // eslint-disable-line
    ).toEqual(true);
  });

  describe('___ mapDispatchToProps ___', () => {
    describe('loadMessages', () => {
      it('should inject the properties error, messages, loading, and success', () => {
        const baseState = mapStateToProps(initialState);

        expect(baseState).toHaveProperty('error', false);
        expect(baseState).toHaveProperty('loading', false);
        expect(baseState).toHaveProperty('success', false);
        expect(baseState.messages).toEqual(fromJS([]));
      });
    });
  });

  describe('___ mapStateToProps ___', () => {
    describe('loadMessages', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.loadMessages).toBeDefined();
      });

      it('should dispatch loadMessages when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.loadMessages();
        expect(dispatch).toHaveBeenCalledWith(loadMessages());
      });
    });
  });
});
