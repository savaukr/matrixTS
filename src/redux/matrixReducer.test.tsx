import {matrixReducer} from './matrixReducer'
import * as types from './types'
import * as actions from './actions'

import {getMatrix} from './matrixReducer'

describe('matrix reducer', () => {
    it('should return the state with new row', () => {
        expect(matrixReducer({matrix:[]}, actions.addRow(
            [{amount: 400, bright: false, id: '0x0', part: false }, {amount: 100, bright: false, id: '0x1', part: false }]
        ))).toEqual(
            {
                matrix: [[{amount: 400, bright: false, id: '0x0', part: false }, {amount: 100, bright: false, id: '0x1', part: false }]]
            }
        )
    })
})