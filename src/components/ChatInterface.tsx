// src/components/ChatInterface.tsx
import React from "react";

const ChatInterface: React.FC = () => {
  return (
    <div className="flex h-screen flex-col bg-gray-200">
      {/* Top Bar */}
      <div className="border-b bg-white p-4 text-xl font-semibold text-gray-800">
        Chat with us
      </div>

      {/* Chat Area */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {/* User Message */}
        <div className="max-w-md rounded-lg bg-gray-300 p-4">
          {`I should have received a refund for my purchase, but I'm waiting 3
          days already and nothing`}
        </div>

        {/* Bot/Support Response */}
        <div className="ml-auto max-w-md rounded-lg bg-purple-500 p-4 text-white">
          {`I apologize for any inconvenience you've experienced with your
          refund...`}
        </div>

        {/* Add more chat messages as needed */}
      </div>

      {/* Input Field */}
      <div className="border-t bg-gray-100 p-4">
        <div className="flex items-center space-x-4 rounded-lg bg-white shadow">
          <button className="p-3">
            <img src="/path-to-icon.png" alt="Optional Icon" />
          </button>
          <input
            type="text"
            className="flex-1 rounded-lg border-0 py-2 pr-4 outline-none"
            placeholder="Type a question..."
          />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
