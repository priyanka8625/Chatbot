import React from 'react';
import { User } from 'lucide-react';

const ChatBubble = ({ message, isTyping, avatar }) => {
  if (isTyping) {
    return (
      <div className="flex items-start space-x-3 mt-6 animate-slide-in-left">
        <img
          src={avatar}
          alt="Rohit Sir Avatar"
          className="w-10 h-10 rounded-full object-cover shadow-lg"
        />
        <div className="bg-gradient-to-br from-purple-500/90 to-indigo-600/90 backdrop-blur-xl border border-purple-300/30 px-5 py-4 rounded-2xl rounded-tl-md shadow-xl">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-start space-x-3 animate-slide-in-left ${
        message.sender === 'user' ? 'flex-row-reverse space-x-reverse animate-slide-in-right' : ''
      }`}
    >
      <div className="flex-shrink-0 relative">
        {message.sender === 'rohit' ? (
          <img
            src={message.avatar}
            alt="Rohit Sir Avatar"
            className="w-10 h-10 rounded-full object-cover shadow-lg"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center shadow-lg">
            <User className="w-5 h-5 text-white" />
          </div>
        )}
      </div>
      <div
        className={`max-w-md px-5 py-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
          message.sender === 'rohit'
            ? 'bg-gradient-to-br from-purple-500/90 to-indigo-600/90 border-purple-300/30 text-white rounded-tl-md shadow-xl'
            : 'bg-white/90 border-gray-200/50 text-gray-800 rounded-tr-md shadow-lg'
        }`}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <p className="text-sm leading-relaxed">{message.text}</p>
      </div>
    </div>
  );
};

export default ChatBubble;