import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {fromJS} from 'immutable';
import {Board} from '../../app/components/board';

const board = fromJS([ 
            ['X', 'O', ''],
            ['X', '', 'O'],
            ['O', 'O', 'O'] ]);

describe('<Board >', ()=>{
    describe('render()', ()=>{
        const wrapper= shallow(<Board board={board} />);
        console.log(wrapper.debug());
        it('renders classname board' , ()=>{
            expect(wrapper.find('.board')).to.have.length(1);
        });
        
        it('renders Cell with correct props' , ()=>{
            expect(wrapper.find('Cell')).to.have.length(9);
            
            const firstCell=wrapper.find('Cell').first();         
            expect(firstCell.props()).to.include.key('cell');
            expect(firstCell.props().cell).to.equal('X');
            
            const lastCell=wrapper.find('Cell').last();         
            expect(lastCell.props()).to.include.key('cell');
            expect(lastCell.props().cell).to.equal('O');
        });
        
        it('renders Message when "O" is the winner', ()=>{
            expect(wrapper.find('Message')).to.have.length(1);
            expect(wrapper.find('Message').props()).to.include.key('winner');
            expect(wrapper.find('Message').props().winner).to.equal('O');
            
        });
    });
});