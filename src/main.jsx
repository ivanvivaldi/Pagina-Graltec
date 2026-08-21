import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render( 
    <App />
)
 // LLAMA A MI ELEMENTO ROOT, QUE ESTA EN UN DIV DE MI INDEX.HTML Y LE APLICA EL METODO RENDER, ES DECIR, HACE UN RENDERIZADO DENTRO DEL MISMO ELEMENTO. SE ESTA RENDERIZANDO EL APP

 //APP: es un componente