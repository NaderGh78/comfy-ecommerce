import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter } from "react-router-dom";
import App from './App';
import { OpenModalContextProvider } from './context/OpenModalContext';
import { AuthContextProvider } from './context/AuthContext';
import { CartContextProvider } from './context/CartContext';
import { ConfirmModalProvider } from './context/ConfirmModalContext';

/*======================================*/
/*======================================*/
/*======================================*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* use HashRouter NOT BrouwserRouter,coz the project upload on github */}
    <HashRouter>
      <AuthContextProvider>
        <OpenModalContextProvider>
          <CartContextProvider>
            <ConfirmModalProvider>
              <App />
            </ConfirmModalProvider>
          </CartContextProvider>
        </OpenModalContextProvider>
      </AuthContextProvider>
    </HashRouter>
  </React.StrictMode>
); 