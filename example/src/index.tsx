import React from 'react'
import ReactDOM from 'react-dom/client'
import { Counter } from '@jun5e00/test'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Default counter</h2>
      <Counter value={0} />
    </div>
    <hr />
    <div>
      <h2>Counter with predefined value</h2>
      <Counter value={5} />
    </div>
  </React.StrictMode>,
)
