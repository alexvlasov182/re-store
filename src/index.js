import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <h2>RE-Store</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
