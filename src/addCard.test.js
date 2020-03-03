import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import AddCard from './components/addCard';
import sinon from 'sinon';

describe('AddCard', ()=> {
  const container = mount(<AddCard />);
  it('renders', ()=> {
    shallow(<AddCard />);
  });

  it('should be able input question and answer', () => {
    container.find('input[type="questionText"]').simulate('change', {
      target: {
        value: 'somerandomtext',
      },
    });

    expect(container.find('input[type="questionText"]').prop('value')).to.equal(
      'somerandomtext',
    );
  });
 
  it('should be able input question and answer', () => {
    container.find('input[type="answerText"]').simulate('change', {
      target: {
        value: 'somerandomtext',
      }
    });
    expect(container.find('input[type="answerText"]').prop('value')).to.equal(
        'somerandomtext',
      );
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<AddCard addCard={onButtonClick} />);
    window.alert = jest.fn();
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});
