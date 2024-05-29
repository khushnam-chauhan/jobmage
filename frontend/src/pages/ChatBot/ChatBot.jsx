import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './ChatBot.css'; // Make sure to create this CSS file

const ChatBot = ({ isOpen, toggleChat }) => {
  const [messages, setMessages] = useState([
    { text: 'Welcome! I am TechSage, a career counselling chatbot by JobMage. How can I help you today?', isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const userMessage = { message: inputValue };
    setMessages((prevMessages) => [...prevMessages, { text: inputValue, isBot: false }]);

    try {
      const response = await axios.post('http://localhost:5000/chat', userMessage);

      const botMessages = response.data.map((res) => ({ text: res.text, isBot: true }));
      setMessages((prevMessages) => [...prevMessages, ...botMessages]);
    } catch (error) {
      console.error('Error sending message to Flask server:', error);
      const errorMessage = { text: 'Sorry, there was an error. Please try again.', isBot: true };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : 'closed'}`}>
      <div className="chatbot-header">
        <h2>Sage</h2>
        <button onClick={toggleChat}></button>
      </div>
      <div className="chatbot-body">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.isBot ? 'bot' : 'user'}`}>
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
