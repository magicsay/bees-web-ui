import React from 'react'
import ReactDom from 'react-dom'
import { Test } from '../src'

const App = () => <Test />

ReactDom.render(<App />, document.getElementById('root'))
