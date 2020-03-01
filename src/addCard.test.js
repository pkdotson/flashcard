import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import AddCard from './components/addCard';
import sinon from 'sinon';

describe('AddCard', ()=> {
  const container = render(<AddCard />);
  console.log('container', container);
  it('renders', ()=> {
    shallow(<AddCard />);
  });

  it('should set the password value on change event with trim', () => {
    container.find('input[type="questionText"]').simulate('change', {
      target: {
        value: 'somerandomtext ',
      },
    });

    expect(container.find('input[type="questionText"]').prop('value')).toEqual(
      'somerandomtext',
    );
  });
  
});
