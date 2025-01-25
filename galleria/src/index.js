import React from 'react';
import ReactDOM from 'react-dom/client';
//import Galleria from './galleria'; 
import GalleriaV2 from './galleria-v2.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Galleria /> */}
    <GalleriaV2 />
  </React.StrictMode>
);


