import React, { useState, useRef, useEffect } from 'react';
import { Mic, Send, User, Bot, Circle, MessageCircle, Sparkles } from 'lucide-react';

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'rohit',
      text: 'Namaste coders! 🙏 Main Rohit Negi hun, Coder Army ka founder. Aaj kya seekhna chahte ho? Programming, DSA, ya koi specific doubt?',
      avatar: './assets/img/rohit.jpg' // Replace with the actual image URL
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('namaste')) {
      return 'Arre waah! Namaste bhai! 🙏 Kaisa chal raha hai coding? Koi doubt hai toh pooch lo!';
    }
    if (lowerMessage.includes('dsa') || lowerMessage.includes('algorithm')) {
      return 'DSA toh mera favorite topic hai! 💪 Konsa topic chahiye - Arrays, Linked Lists, Trees, ya Graphs? Step by step sikhayenge!';
    }
    if (lowerMessage.includes('javascript') || lowerMessage.includes('js')) {
      return 'JavaScript! 🚀 Ye toh web development ki jaan hai. Kya seekhna hai - basics, DOM manipulation, ya advanced concepts?';
    }
    if (lowerMessage.includes('react')) {
      return 'React.js! ⚛️ Bahut powerful library hai. Components, hooks, state management - sab cover karenge. Kahan se start karna hai?';
    }
    if (lowerMessage.includes('python')) {
      return 'Python! 🐍 Beginners ke liye perfect language. Syntax simple hai, applications bahut. Kya banayenge - web app, automation, ya ML?';
    }
    if (lowerMessage.includes('job') || lowerMessage.includes('placement')) {
      return 'Placement ki baat! 💼 Pehle strong foundation banao - DSA, projects, aur communication skills. Resume bhi accha hona chahiye!';
    }
    if (lowerMessage.includes('project')) {
      return 'Projects! 🛠️ Ye toh portfolio ka backbone hai. Real-world problems solve karo, GitHub pe upload karo. Kya type ka project banayenge?';
    }
    
    return 'Interesting question! 🤔 Main iske baare mein detail mein bata sakta hun. Coder Army mein hum practical approach follow karte hain. Aur kya jaanna chahte ho?';
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    if (showWelcome) {
      setShowWelcome(false);
    }

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputValue,
      avatar: 'https://via.placeholder.com/40?text=U'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        sender: 'rohit',
        text: getBotResponse(inputValue),
        avatar: './assets/img/rohit.jpg' // Replace with the actual image URL
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-poppins text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-20 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="./assets/img/rohit.jpg" // Replace with the actual image URL
                  alt="Rohit Sir Avatar"
                  className="w-12 h-12 rounded-full object-cover shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <Circle className="w-2 h-2 text-white fill-current" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Chat with Rohit Negi
                </h1>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Circle className="w-2 h-2 text-green-500 fill-current" />
                  <span>Online • Founder, Coder Army</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Padding to Avoid Header Overlap */}
      <div className="max-w-4xl mx-auto px-4 py-6 pt-30 pb-32 relative z-10">
        {showWelcome && (
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 backdrop-blur-xl border border-purple-300/20 px-8 py-6 rounded-3xl shadow-xl text-center max-w-md">
              <div className="text-6xl mb-4 animate-wave">👋</div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Welcome to Coder Army!
              </h2>
              <p className="text-gray-600 text-sm">
                Start a conversation with Rohit Sir and get your coding doubts cleared!
              </p>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
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
          ))}
        </div>

        {isTyping && (
          <div className="flex items-start space-x-3 mt-6 animate-slide-in-left">
            <img
              src="./assets/img/rohit.jpg" // Replace with the actual image URL
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
        )}
        
        <div ref={chatEndRef} />
      </div>

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
    </div>
  );
}

export default App;