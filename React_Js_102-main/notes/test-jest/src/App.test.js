import React from 'react';
import renderer from 'react-test-renderer';
import Link from './App';
import TestRenderer from 'react-test-renderer';
    
const {act} = TestRenderer;

test('Link changes on hovering', () =>{
    const component = renderer.create(
         <Link page="http://www.google.com">Google</Link>,
    );    

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => tree.props.onMouseEnter());

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => tree.props.onMouseLeave());    

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
