import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import sinon from 'sinon';

describe('App', () => {
  const wrapper = mount(<App />); 

  it("renders", ()=>{
      shallow(<App/>);
  });

  it('should have three buttons', ()=> {
    expect(wrapper.find('Button')).to.have.lengthOf(3); 
  });

  it('should show addflashcard when app first loads', ()=>{
    const wrapper = mount(<App />);
    expect(wrapper.find('AddFlashCard')).to.have.lengthOf(1);
  });
});
