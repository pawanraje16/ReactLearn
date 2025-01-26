import React,{ StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import App from './App.jsx'

const anotherUser="chai aur React"
const reactElement =React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {reactElement}
    {/* <App/> */}
  </StrictMode>,
)
