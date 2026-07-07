import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Send, Loader2, RefreshCw, MessageSquare, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

interface Message {
  role: "user" | "model";
  content: string;
}

// Simple custom renderer for markdown responses to handle lists, bold text, and headings cleanly
function renderCustomMarkdown(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    let trimmed = line.trim();
    if (!trimmed) {
      return <div key={i} className="h-2" />;
    }

    // Headers (### or ## or #)
    if (trimmed.startsWith("###")) {
      return (
        <h4 key={i} className="text-sm font-bold text-[#C9A227] mt-3 mb-1 border-r-2 border-[#C9A227] pr-2">
          {trimmed.replace(/^###\s*/, "")}
        </h4>
      );
    }
    if (trimmed.startsWith("##") || trimmed.startsWith("#")) {
      return (
        <h3 key={i} className="text-base font-black text-[#C9A227] mt-4 mb-2 border-r-4 border-[#C9A227] pr-2">
          {trimmed.replace(/^##?\s*/, "")}
        </h3>
      );
    }

    // Lists (- or *)
    if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
      const content = trimmed.replace(/^[-*]\s*/, "");
      return (
        <li key={i} className="mr-4 list-disc text-xs sm:text-sm text-inherit leading-relaxed mb-1 text-justify">
          {parseBoldText(content)}
        </li>
      );
    }

    // Numbered lists (e.g. 1. or 2.)
    if (/^\d+\./.test(trimmed)) {
      const content = trimmed.replace(/^\d+\.\s*/, "");
      const match = trimmed.match(/^(\d+)\./);
      const num = match ? match[1] : "•";
      return (
        <div key={i} className="flex gap-2 mr-1 mb-1.5 text-xs sm:text-sm text-inherit leading-relaxed text-justify">
          <span className="font-bold text-[#C9A227] flex-shrink-0">{num}.</span>
          <span>{parseBoldText(content)}</span>
        </div>
      );
    }

    // Default paragraph
    return (
      <p key={i} className="text-xs sm:text-sm text-inherit leading-relaxed mb-2 text-justify">
        {parseBoldText(trimmed)}
      </p>
    );
  });
}

// Helper to parse **bold** text inside markdown strings
function parseBoldText(text: string) {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((part, index) => {
    // Alternate normal and bold
    if (index % 2 === 1) {
      return (
        <strong key={index} className="text-[#C9A227] font-semibold">
          {part}
        </strong>
      );
    }
    return part;
  });
}

const PRESET_QUESTIONS = [
  "برای جوانسازی پوست چه پیشنهادی داری؟",
  "کدام ادکلن برای رفع استرس و خواب راحت مناسب است؟",
  "برای سم‌زدایی و پاکسازی کبد چرب چه اکسیرهایی داری؟",
  "چگونه طبع سودا و بلغم را تعدیل کنیم؟"
];

export default function GeminiConsultation() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content: "سلام و درود بر شما پوینده تندرستی و حکمت. من **مغز هوش مصنوعی و مشاور تخصصی آتلانتیک** هستم.\n\nمن می‌توانم شما را بر اساس ریشه‌های طلایی **طب اسلامی**، حکمت **مزاج‌شناسی اصفهان** و دستاوردهای علمی **نانوتکنولوژی** برای سلامت پوست، مو، رفع سودا و اخلاط مزاحم یا انتخاب ادکلن‌های درمانی کیهانی راهنمایی کنم.\n\nچگونه می‌توانم در مسیر شفای شما خدمت‌رسانی کنم؟"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;

    setError(null);
    setInput("");
    
    // Add user message to history
    const updatedMessages = [...messages, { role: "user", content: trimmed } as Message];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error("پاسخی از سرور هوش مصنوعی دریافت نشد.");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [...prev, { role: "model", content: data.text }]);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "متأسفانه ارتباط با مشاور هوشمند برقرار نشد. لطفاً دوباره تلاش کنید.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        role: "model",
        content: "سلام مجدد. مشاور هوشمند آتلانتیک آماده است تا با تلفیق اسرار کهن و علم نوین، راهنمای مسیر شفای شما باشد. بفرمایید، چه موضوعی را بررسی کنیم؟"
      }
    ]);
    setError(null);
  };

  return (
    <div className="flex flex-col h-full bg-[#0B1B3D]/30 backdrop-blur-md text-right" dir="rtl">
      
      {/* Messages Window */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 max-h-[300px] sm:max-h-[350px] min-h-[220px] custom-scrollbar scroll-smooth">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col max-w-[85%] ${
              msg.role === "user" ? "mr-auto ml-0 text-left" : "ml-auto mr-0 text-right"
            }`}
          >
            {/* Sender Label */}
            <span className="text-[9px] text-[#C9A227]/60 font-mono mb-1 px-1">
              {msg.role === "user" ? "شما" : "دستیار هوشمند آتلانتیک"}
            </span>

            {/* Bubble */}
            <div
              className={`p-3.5 rounded-2xl text-xs sm:text-sm shadow-md leading-relaxed ${
                msg.role === "user"
                  ? "bg-[#C9A227] text-[#0B1B3D] rounded-tl-none font-medium"
                  : "bg-[#1E4D7B]/20 border border-[#C9A227]/20 text-[#F5F0E1] rounded-tr-none"
              }`}
            >
              {msg.role === "model" ? (
                <div>{renderCustomMarkdown(msg.content)}</div>
              ) : (
                <p className="whitespace-pre-wrap">{msg.content}</p>
              )}
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex flex-col max-w-[80%] ml-auto mr-0 text-right">
            <span className="text-[9px] text-[#C9A227]/60 font-mono mb-1 px-1">آتلانتیک در حال اندیشیدن...</span>
            <div className="p-3 rounded-2xl bg-[#1E4D7B]/15 border border-[#C9A227]/15 text-[#F5F0E1] rounded-tr-none flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin text-[#C9A227]" />
              <span className="text-xs text-[#F5F0E1]/70">اکسیر دانایی آماده می‌شود...</span>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-xs flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 space-y-1">
              <p className="font-bold">خطا در ارتباط</p>
              <p className="text-[11px] leading-relaxed opacity-90">{error}</p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Preset / Chips Container */}
      {messages.length === 1 && (
        <div className="px-4 py-2 border-t border-[#C9A227]/10">
          <p className="text-[10px] text-[#C9A227]/70 mb-1.5 font-bold">سوالات متداول مشاوره:</p>
          <div className="flex flex-wrap gap-1.5 justify-start">
            {PRESET_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="text-[10px] px-2.5 py-1.5 rounded-lg bg-[#1E4D7B]/20 border border-[#C9A227]/15 text-[#F5F0E1]/80 hover:bg-[#C9A227]/10 hover:text-[#C9A227] hover:border-[#C9A227]/30 transition-all text-right cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input / Control Bar */}
      <div className="p-3 border-t border-[#C9A227]/10 bg-[#0B1B3D]/50 flex gap-2 items-center">
        {/* Reset Chat Button */}
        <button
          onClick={handleResetChat}
          title="شروع مجدد گفتگو"
          className="p-2.5 rounded-xl border border-[#C9A227]/20 text-[#C9A227]/70 hover:text-[#C9A227] hover:bg-[#C9A227]/10 hover:border-[#C9A227]/40 transition-all cursor-pointer flex-shrink-0"
        >
          <RefreshCw className="h-3.5 w-3.5" />
        </button>

        {/* Chat Input Field */}
        <div className="flex-1 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage(input);
              }
            }}
            placeholder="پرسش خود را بنویسید (پوست، مزاج، عطر)..."
            className="w-full text-xs sm:text-sm px-3 py-2.5 rounded-xl bg-[#0B1B3D] border border-[#C9A227]/25 text-[#F5F0E1] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/30 transition-all placeholder:text-[#F5F0E1]/30 text-right"
            disabled={isLoading}
          />
        </div>

        {/* Send Button */}
        <button
          onClick={() => handleSendMessage(input)}
          disabled={!input.trim() || isLoading}
          className="p-2.5 rounded-xl bg-[#C9A227] text-[#0B1B3D] hover:bg-[#C9A227]/90 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>

    </div>
  );
}
