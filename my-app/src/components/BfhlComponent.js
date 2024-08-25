import React, { useState } from 'react';

function BfhlComponent() {
    const [operationCode, setOperationCode] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/bfhl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ operation_code: operationCode })
            });
            const data = await response.json();
            setResponseMessage(`POST response: ${JSON.stringify(data)}`);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchGetRequest = async () => {
        try {
            const response = await fetch('http://localhost:5000/bfhl');
            const data = await response.json();
            setResponseMessage(`GET response: ${JSON.stringify(data)}`);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={operationCode}
                    onChange={(e) => setOperationCode(e.target.value)}
                />
                <button type="submit">Submit POST Request</button>
            </form>
            <button onClick={fetchGetRequest}>Fetch GET Request</button>
            <p>{responseMessage}</p>
        </div>
    );
}

export default BfhlComponent;
