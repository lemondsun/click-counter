import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { waitForElementToBeRemoved } from '@testing-library/react';

Enzyme.configure({ adapter: new EnzymeAdapter() })

  it('renders without error', () => {
    const wrapper = shallow(<App />)
    const appComponent = wrapper.find("[data-test='component-app']")
    expect(appComponent.length).toBe(1)
  })

it('renders inctement button', () => {
   
})
 
it('renders counter display', () => {
   
})

it('counter starts at 0', () => {

})

it('clicking button increments counter', () => {

})

