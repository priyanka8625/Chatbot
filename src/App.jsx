import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import ChatBubble from './components/ChatBubble';
import InputBox from './components/InputBox';
import { fetchGeminiResponse } from './services/geminiAPI.js';

function App() {
  const [messages, setMessages] = useState([
    // {
    //   id: 1,
    //   sender: 'rohit',
    //   text: 'Namaste coders! 🙏 Main Rohit Negi hun, Coder Army ka founder. Aaj kya seekhna chahte ho? Programming, DSA, ya koi specific doubt?',
    //   avatar: './assets/img/rohit.jpg'
    // }
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

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    if (showWelcome) {
      setShowWelcome(false);
    }

    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      text: inputValue,
      avatar: "https://via.placeholder.com/40?text=U",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const botResponseText = await fetchGeminiResponse(inputValue, messages);
      const botResponse = {
        id: messages.length + 2,
        sender: "rohit",
        text: botResponseText,
        avatar: "./assets/img/rohit.jpg",
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      const errorResponse = {
        id: messages.length + 2,
        sender: "rohit",
        text: "Arre bhaiya, kuch toh gadbad ho gaya! 😅 Thodi der mein try karo, ya phir doubt clear karne ke liye bolo!",
        avatar: "./assets/img/rohit.jpg",
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
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

      <Header />

      <div className="max-w-4xl mx-auto px-4 py-6 pt-30 pb-32 relative z-10">
        {showWelcome && (
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 backdrop-blur-xl border border-purple-300/20 px-8 py-6 rounded-3xl shadow-xl text-center max-w-md">
              <div className="text-6xl mb-4 animate-wave">👋</div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Welcome to Coder Army!
              </h2>
              <p className="text-gray-600 text-sm">
                Namaste coders! 🙏 Main Rohit Negi, Coder Army ka founder. Aaj kya seekhna hai? DSA, JavaScript, React, ya koi project ka doubt? Chalo, ekdum bawaal shuru karte hain! Bolo, kya plan hai? 🚀
              </p>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {messages.map((message) => (
            <ChatBubble key={message.id} message={message} avatar="./assets/img/rohit.jpg" />
          ))}
          {isTyping && <ChatBubble isTyping={true} avatar="./assets/img/rohit.jpg" />}
        </div>

        <div ref={chatEndRef} />
      </div>

      <InputBox
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSendMessage={handleSendMessage}
        handleKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default App;