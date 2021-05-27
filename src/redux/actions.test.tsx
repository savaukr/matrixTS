import { textSpanIsEmpty } from 'typescript'
import  * as actions from './actions'
import * as types from './types'
import {IRowItem, ActionsTypes} from '../typesTS/typesTS'

describe('actions', () => {
    it('should create an action to add row in matrix', () => {
        const row = [{amount: 2, bright: false, id: '2x4', part: false }]
        const expectedAction = {
            type: types.ADD_ROW,
            payload: row

        }
        expect(actions.addRow(row)).toEqual(expectedAction)
    })
    it('should create an action to delete row in matrix', () => {
        const ind = 5
        const expectedAction = {
            type: types.DELETE_ROW,
            payload: ind

        }
        expect(actions.deleteRow(ind)).toEqual(expectedAction)
    })
    it('should create an action to increase amount of a ceil in matrix', () => {
        const row=1
        const column = 2
        const expectedAction = {
            type: types.INCREASE_AMOUNT,
            payload: {row, column}

        }
        expect(actions.increaseAmount(row, column)).toEqual(expectedAction)
    })
    it('should create an action to mouseOverCeil', () => {
        const arr  = [[{amount: 400, bright: false, id: '0x0', part: false }, {amount: 100, bright: false, id: '0x1', part: false }]]
        const expectedAction = {
            type: types.MOUSE_OVER_CEIL,
            payload: arr
        }
        expect(actions.mouseOverCeil(arr)).toEqual(expectedAction)
    })
    it('should create an action to mouseOverSum', () => {
        const arr  = [[{amount: 400, bright: false, id: '0x0', part: false }, {amount: 100, bright: false, id: '0x1', part: false }]]
        const expectedAction = {
            type: types.MOUSE_OVER_SUM,
            payload: arr
        }
        expect(actions.mouseOverSum(arr)).toEqual(expectedAction)
    })
    it('should create an action to mouseOut', () => {
        const arr  = [[{amount: 400, bright: false, id: '0x0', part: false }, {amount: 100, bright: false, id: '0x1', part: false }]]
        const expectedAction = {
            type: types.MOUSE_OVER_CEIL,
            payload: arr
        }
        expect(actions.mouseOverCeil(arr)).toEqual(expectedAction)
    })
})