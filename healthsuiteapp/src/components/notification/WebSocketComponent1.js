import React, { useEffect, useState, useRef } from 'react';

const WebSocketComponent1 = () => {
    const authToken = 'your-auth-token-123344';
    //const socket = new WebSocket(`ws://localhost:8081/websocket-endpoint?token=${authToken}`);
    const [messages, setMessages] = useState([]);

    const socket = useRef(null);
    const heartbeatIntervalRef = useRef(null);
    const serverTimeoutRef = useRef(null);

    // Function to send a variable to the backend via websocket
    // function sendData(variable) {
    //         if (socket.readyState === WebSocket.OPEN) {
    //             const data = JSON.stringify({ variable: variable });
    //             socket.send(data);
    //         } else {
    //             console.error('WebSocket is not open');
    //         }
    // }
    // useEffect(() => {
    //     socketRef.current = new WebSocket('ws://localhost:8081/websocket-endpoint');

    //     socket.onopen = () => {
    //         console.log('WebSocket connection established');
    //         const myVariable = 'Hello, WebSocket!';
    //         sendData(myVariable);
    //     };

    //     socket.onmessage = (event) => {
    //         const newMessage = event.data;
    //         setMessages((prevMessages) => [...prevMessages, newMessage]);
    //     };

    //     socket.onclose = () => {
    //         console.log('WebSocket connection closed');
    //     };

    //     socket.onerror = (error) => {
    //         console.error('WebSocket error:', error);
    //     };

    //     return () => {
    //        // socket.close();
    //     };
    // }, []);

    // return (
    //     <div>
    //         <h1>WebSocket Messages</h1>
    //         <ul>
    //             {messages.map((message, index) => (
    //                 <li key={index}>{message}</li>
    //             ))}
    //         </ul>
    //     </div>
    // );

    useEffect(() => {

        // Initialize WebSocket connection
        socket.current = new WebSocket('ws://localhost:8081/websocket-endpoint');

        socket.current.onopen = () => {
            console.log('Connection established');
            startHeartbeat();
        };

        socket.current.onmessage = (event) => {
            console.log('Message from server:', event.data);
            if (event.data === 'ping') {
                socket.current.send('pong');
            }
            resetServerTimeout();
        };

        socket.current.onerror = (error) => {
            console.error('WebSocket Error:', error);
        };

        socket.current.onclose = (event) => {
            console.log('Connection closed', event);
            stopHeartbeat();
        };

        return () => {
            if (socket.current) {
                socket.current.close();
            }
            stopHeartbeat();
        };
    }, []);

    return (
        <div>
            WebSocket Component
        </div>
    );
};

const startHeartbeat = () => {
    heartbeatIntervalRef.current = setInterval(() => {
        if (socket.current.readyState === WebSocket.OPEN) {
            socket.current.send('ping');
        }
    }, 30000); // 30 seconds
    resetServerTimeout();
};

const stopHeartbeat = () => {
    if (heartbeatIntervalRef.current) {
        clearInterval(heartbeatIntervalRef.current);
    }
    if (serverTimeoutRef.current) {
        clearTimeout(serverTimeoutRef.current);
    }
};

const resetServerTimeout = () => {
    if (serverTimeoutRef.current) {
        clearTimeout(serverTimeoutRef.current);
    }
    serverTimeoutRef.current = setTimeout(() => {
        if (socket.current) {
            socket.current.close();
        }
    }, 60000); // 60 seconds
};



export default WebSocketComponent1;
