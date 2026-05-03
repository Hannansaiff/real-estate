import { useState } from 'react';
import { conversations, messages } from '../../data/content';

const MessagesPage = () => {
  const [selectedId, setSelectedId] = useState('M1');
  const conversation = conversations[selectedId];

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <aside className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Conversations</p>
        <div className="mt-6 space-y-3">
          {messages.map((message) => (
            <button key={message.id} onClick={() => setSelectedId(message.id)} className={`w-full rounded-3xl p-4 text-left transition ${selectedId === message.id ? 'bg-sky-50 text-slate-900 dark:bg-slate-800 dark:text-white' : 'bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800'}`}>
              <p className="font-semibold">{message.name}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{message.lastMessage}</p>
            </button>
          ))}
        </div>
      </aside>
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Chat</p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{messages.find((m) => m.id === selectedId)?.name}</h2>
          </div>
        </div>
        <div className="space-y-4 pb-6">
          {conversation.map((message, index) => (
            <div key={index} className={`${message.sender === 'me' ? 'ml-auto bg-sky-600 text-white' : 'mr-auto bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100'} max-w-xl rounded-3xl px-5 py-4`}> 
              <p>{message.text}</p>
              <span className="mt-2 block text-xs text-slate-500 dark:text-slate-400">{message.time}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
          <input type="text" placeholder="Type your message" className="flex-1 bg-transparent text-sm text-slate-900 outline-none dark:text-slate-100" />
          <button className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">Send</button>
        </div>
      </section>
    </div>
  );
};

export default MessagesPage;
