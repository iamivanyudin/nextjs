import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'componentry'
import svgSymbolSpriteLoader from 'svg-symbol-sprite-loader'

// ========================================================
// Application Core Elements
// ========================================================

// ⚠️ Import application styles before application components so that base CSS
// styles are included before component styles.
import './index.scss'
import './lib/import-icons'
import App from './components/App/App'

// Injects SVG symbol sprite into document from local storage if it exists,
// otherwise fetch, cache in local storage and inject.
svgSymbolSpriteLoader({ useCache: process.env.NODE_ENV === 'production' })

// Componentry theme defaults
const theme = {
  Button: {
    color: 'primary',
    outline: true,
  },
}

render(
  <ThemeProvider.Provider value={theme}>
    <App />
  </ThemeProvider.Provider>,
  document.getElementById('root'),
)
