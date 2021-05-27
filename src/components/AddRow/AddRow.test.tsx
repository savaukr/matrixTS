import React, {FC} from 'react'
import  { AddRow } from './AddRow'
import {render, unmountComponentAtNode } from 'react-dom'
import { act, renderIntoDocument } from 'react-dom/test-utils'

let container:any = null

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container)
})
afterEach( () => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it("render with text on button", () => {
    act( () => {
        render(<AddRow addRowHandle={( event ) => console.log(`${event.target}`)}/>, container)
    })
    expect(container.textContent).toBe("Створити рядок")
})

