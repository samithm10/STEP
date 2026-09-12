import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import Groq from 'groq-sdk';
import './AiChat.css';

const groq = new Groq({ 
  apiKey: import.meta.env.VITE_GROQ_API_KEY, 
  dangerouslyAllowBrowser: true 
});

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const AiChat = () => {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      content: 'Hello! I am STEP AI, your personal career assistant. I can help you find jobs, write a cover letter, prepare for interviews, or explore AI career paths. How can I help you today?',
      timestamp: new Date()
    }
  ]);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const fetchAiResponse = async () => {
      try {
        const completion = await groq.chat.completions.create({
          messages: [
            { role: 'system' as const, content: 'You are STEP AI, a helpful career assistant guiding users in the AI economy.' },
            ...messages.map(m => ({ 
              role: (m.role === 'ai' ? 'assistant' : 'user') as 'assistant' | 'user', 
              content: m.content 
            })),
            { role: 'user' as const, content: input.trim() }
          ],
          model: 'openai/gpt-oss-20b',
        });

        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          role: 'ai',
          content: completion.choices[0]?.message?.content || "Sorry, I couldn't process that.",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
      } catch (error: any) {
        console.error("Groq API Error:", error);
        const errorMessage = error?.message || "Unknown error occurred";
        const errorResponse: Message = {
          id: (Date.now() + 1).toString(),
          role: 'ai',
          content: `Error communicating with server: ${errorMessage}`,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorResponse]);
      } finally {
        setIsTyping(false);
      }
    };

    fetchAiResponse();
  };

  return (
    <div className="ai-chat-page container">
      <div className="ambient-glow glow-1"></div>
      
      <div className="chat-container">
        <div className="chat-messages" ref={messagesContainerRef}>
          <div className="chat-welcome-header">
            <div className="chat-welcome-icon">
              <Sparkles size={32} />
            </div>
            <h2>STEP AI Assistant</h2>
            <p>Your intelligent guide to the AI economy</p>
          </div>

          {messages.map((msg) => (
            <div key={msg.id} className={`message-wrapper ${msg.role}`}>
              <div className="message-avatar">
                {msg.role === 'ai' ? <Bot size={20} /> : <User size={20} />}
              </div>
              <div className="message-bubble">
                {msg.content}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message-wrapper ai">
              <div className="message-avatar">
                <Bot size={20} />
              </div>
              <div className="message-bubble">
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="chat-input-container">
          <form className="chat-input-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="chat-input"
              placeholder="Ask about AI jobs, interview tips, or career paths..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
            />
            <button 
              type="submit" 
              className="chat-send-btn"
              disabled={!input.trim() || isTyping}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AiChat;
