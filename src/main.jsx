import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { TransactionProvider } from "./TransactionContext";
import { ImageProvider } from "./useImageContextSender.jsx";
import { ImageReceiveProvider } from "./useImageContextReceiver.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TransactionProvider>
    <ImageProvider>
      <ImageReceiveProvider>
        <App />
      </ImageReceiveProvider>
    </ImageProvider>  
  </TransactionProvider>
);
