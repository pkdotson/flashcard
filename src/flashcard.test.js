import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import FlashCard from './components/flashcard';
import sinon from 'sinon';

describe('FlashCard', ()=> {

  it("render", ()=>{
    shallow(<FlashCard/>) 
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<FlashCard onButtonClick={onButtonClick} />);
    console.log('fron', wrapper.find('front'));
    //wrapper.find('front').simulate('click');
    //expect(onButtonClick).to.have.property('callCount', 1);
  }); 

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <FlashCard>
        <div className="unique" />
      </FlashCard>
    ));
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

 });
