import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
 // LLAMA A MI ELEMENTO ROOT, QUE ESTA EN UN DIV DE MI INDEX.HTML Y LE APLICA EL METODO RENDER, ES DECIR, HACE UN RENDERIZADO DENTRO DEL MISMO ELEMENTO. SE ESTA RENDERIZANDO EL APP

 //APP: es un componente