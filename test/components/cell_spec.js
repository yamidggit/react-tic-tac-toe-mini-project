import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import {Cell} from '../../app/components/cell';

describe('<Cell />', ()=>{
    describe('render()', ()=>{
        const wrapper= shallow(<Cell cell={"X"} />);
        //console.log(wrapper.debug());
        it('renders classname cell' , ()=>{
            expect(wrapper.find('.cell')).to.have.length(1);
        });
        it('renders classname new_span' , ()=>{
            expect(wrapper.find('.new_span')).to.have.length(1);
        });
        it('display cell X', ()=>{
            expect(wrapper).to.include.text("X");
        });
        it('display cell O', ()=>{
            const wrapper= shallow(<Cell cell={"O"} />);
            expect(wrapper).to.include.text("O");
        });
        it('display empty cell', ()=>{
            const wrapper= shallow(<Cell cell={" "} />);
            expect(wrapper).to.include.text(" ");
        });
        
    });
    
});