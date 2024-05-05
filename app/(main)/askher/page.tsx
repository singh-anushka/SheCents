import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import AskHerSVG from './askher.svg'; // Import the SVG file
import Image from 'next/image';

const ChatPage = () => {
  // Dummy messages
  const messages = [
    { id: 1, text: "Hey there!", sender: "user" },
    { id: 2, text: "Hi! How can I help you?", sender: "bot" },
    { id: 3, text: "Can you tell me about future investment options for my girl child ? ", sender: "user" },
    { id: 4, text: "Sure, if her age is below 10 years you can start investing in Sukanya Samridhi Scheme.", sender: "bot" },
    // Add more dummy messages here
  ];

  return (
    
    <div className="flex flex-col h-screen bg-gray-200">
      {/* AskHer SVG */}
      <div className="flex w-full flex-col items-center">
          <Image src="/askher.svg" alt="Shop" height={90} width={90} />

          <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
            askher.ai
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
          Your Virtual Financial Guru: Chat, Learn, Prosper
          </p>

          
        </div>
      <div className="flex-1 p-6 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                message.sender === 'user' ? 'bg-rose-500 text-white' : 'bg-gray-300'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      {/* Chat input */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full px-4 py-2 border rounded-lg outline-none focus:border-rose-500"
        />
      </div>
    </div>
  );
};

export default ChatPage;
