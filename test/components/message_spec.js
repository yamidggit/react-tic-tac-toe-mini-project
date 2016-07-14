import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import {Message} from '../../app/components/message';

describe('<Message />', ()=>{
    describe('render()', ()=>{
        const wrapper= shallow(<Message winner={"X"} />);
        //console.log(wrapper.debug());
        it('renders classname message' , ()=>{
            expect(wrapper.find('.message')).to.have.length(1);
        });
        
        it('renders an p tag', () => {
            expect(wrapper).to.have.exactly(1).descendants('p');
        });
        
        it('renders message with the winner', () => {
            expect(wrapper).to.include.text("X won the game");
        });
        
        it('renders a button Next Game', () => {
            expect(wrapper).to.have.exactly(1).descendants('button');
            expect(wrapper.find('button')).to.have.text("Next Game");
        });
    });
});