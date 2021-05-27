import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Import your own reducer
import {rootReducer} from './redux/rootReducer'

function render(
  ui:any,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  }:any = {}
) {
  function Wrapper({ children }:any) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }