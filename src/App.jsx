import { useState } from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";

function App() {
    const [token, setToken] = useState(null); // Store token

    return (
        <div>
            <SignUpForm setToken={setToken} />
            <Authenticate token={token} />
        </div>
    );
}

export default App;
