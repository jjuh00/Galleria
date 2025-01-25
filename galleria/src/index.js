import React from 'react';
import ReactDOM from 'react-dom/client';
//import Galleria from './galleria'; 
import GalleriaV2 from './galleria-v2.tsx';

/*
  Jos haluat Gallerian (JavaScript version) näkyviin, ota import-lause Gallerialle pois kommenteista,
  ja vaihda <GalleriaV2>-komponentin tilalle <Galleria>-komponentti
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GalleriaV2 />
  </React.StrictMode>
);


