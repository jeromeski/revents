import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import * as serviceWorker from "./serviceWorker";
import App from "./app/layout/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ScrollToTop from "./app/common/util/ScrollToTop";

import { configureStore } from "./redux/store/store";
import ReduxToastr from "react-redux-toastr";

const store = configureStore();


const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <ReduxToastr 
            position='bottom-right'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
          />
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./app/layout/App.jsx", () => {
    setTimeout(render);
  });
}

store.firebaseAuthIsReady.then(() => {
  render();
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
