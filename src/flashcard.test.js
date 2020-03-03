import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import FlashCard from './components/flashcard';
import sinon from 'sinon';

describe('FlashCard', ()=> {

  it("render", ()=>{
    shallow(<FlashCard/>) 
  });

  it('simulates nextCArd click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<FlashCard nextCard={onButtonClick} />);
    wrapper.find('.next').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  }); 
  
  it('simulates flipCard click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<FlashCard flipCard={onButtonClick} />);
    wrapper.find('.sides').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  }); 

  it('should render answer when side is true', () => {
    const wrapper = mount(
      <FlashCard 
        answer={'answer'} 
        question={'question'}
        side={true}
      />
    );
    const side = wrapper.find('.front');
    expect(side.text()).to.equal('answer');
  });

   it('should render question when side is false', ()=> {
     const wrapper = mount(
        <FlashCard 
          answer={'answer'}
          question={'question'}
          side={false}
        />
     );
    const side = wrapper.find('.front');
    expect(side.text()).to.equal('questionclick to see answer');
 
   });
 });
