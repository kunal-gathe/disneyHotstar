import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <div className="overflow-y-scroll no-scrollbar">
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
