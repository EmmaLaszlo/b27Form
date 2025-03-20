import { useState } from "react";

export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState(null); // New state to store username

    async function handleClick() {
        setError(null); 
        setSuccessMessage(null); 
        setUsername(null); // Clear previous username

        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const result = await response.json();
            console.log("Authentication Response:", result);

            if (!response.ok) {
                throw new Error(result.error || "Authentication failed!");
            }

            setSuccessMessage(result.message);
            setUsername(result.data?.username); // Store username from response

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h2>Authenticate</h2>

            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            {username && <p>Welcome, <strong>{username}</strong>!</p>} {/* Display Username */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <button onClick={handleClick}>Authenticate Token!</button>
        </div>
    );
}
