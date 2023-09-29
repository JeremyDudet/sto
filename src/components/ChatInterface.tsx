// src/components/ChatInterface.tsx
import React from "react";

const ChatInterface: React.FC = () => {
  return (
    <div className="flex h-screen flex-col bg-gray-100">
      <div className="bg-purple-500 p-4 text-xl font-semibold text-white">
        Chat with us
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {/* Sample chat messages */}
        <div className="max-w-md rounded-lg bg-pink-100 p-4">
          {`I should have received a refund for my purchase, but I'm waiting 3
          days already and nothing`}
        </div>
        <div className="ml-auto max-w-md rounded-lg bg-blue-100 p-4">
          {`I apologize for any inconvenience you've experienced with your
          refund...`}
        </div>
        {/* You can map over chat messages and render them here */}
      </div>
      <div className="border-t bg-white p-4">
        <input
          type="text"
          className="w-full rounded-lg border p-2"
          placeholder="Type a question..."
        />
      </div>
    </div>
  );
};

export default ChatInterface;
