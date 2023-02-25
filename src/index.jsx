import React from "react";
import ReactDOM from "react-dom/client";
import "./styling/style";
import App from "./App";
import { AppProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

// опять же Апп обертывается в компонент обертку
root.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>,
);
