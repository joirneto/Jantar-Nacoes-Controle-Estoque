import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loading;
