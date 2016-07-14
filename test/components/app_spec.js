import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {fromJS} from 'immutable';
import {App} from '../../app/components/app';


const initialState = fromJS({
    board: [ ['X', 'O', ''],
             ['X', '', 'O'],
             ['O', '', 'X'] ],
    gameOver: false,
    winner: undefined
});


describe('<App />',()=>{
    
    const wrapper= shallow(<App name="Test App Name" state={initialState}/>);
    
    
    describe('render',()=>{
        
        it('render className app',()=>{
            expect(wrapper.find('.app')).to.have.length(1);
        });
        
        it('renders an h1 tag', () => {
            expect(wrapper).to.have.exactly(1).descendants('h1');
        });
        
        it('renders name of application', () => {
            expect(wrapper).to.include.text("Test App Name");
        });
        it ('render Board with correct props', ()=>{
            expect(wrapper.find('Board')).to.have.length(1);
            expect(wrapper.find('Board').props()).to.include.key('board');
            expect(wrapper.find('Board').props().board).not.to.be.an('undefined');
        });
        
    });
    
});
