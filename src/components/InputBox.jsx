import React from 'react';
import { Send, Mic } from 'lucide-react';

const InputBox = ({ inputValue, setInputValue, handleSendMessage, handleKeyPress }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 backdrop-blur-xl bg-white/80 border-t border-white/20 shadow-2xl">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Arre bhaiya, kaisa code chal raha hai? 🤔"
              className="w-full px-5 py-4 bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/50 transition-all duration-300 shadow-lg"
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="p-4 bg-gradient-to-br from-purple-500 to-indigo-600 backdrop-blur-xl rounded-full text-white hover:from-purple-600 hover:to-indigo-700 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 shadow-xl"
          >
            <Send size={20} />
          </button>
          <button
            className="p-4 bg-gradient-to-br from-gray-400 to-gray-600 backdrop-blur-xl rounded-full text-white hover:from-gray-500 hover:to-gray-700 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:ring-offset-2 shadow-xl"
          >
            <Mic size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputBox;