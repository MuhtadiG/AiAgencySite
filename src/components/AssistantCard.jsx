import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { askAI } from '../api';

const red = "#d32f2f";
const darkRed = "#b71c1c";
const black = "#18191a";

export default function AssistantCard({ name, description }) {
  const [question, setQuestion] = useState('');
  const [chat, setChat] = useState([]); // [{q, a}]
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);

    const prompt = `You are an expert ${name}. ${description}. Here is a question: "${question}". Answer it clearly in less than 50 words.`;
    try {
      const response = await askAI(prompt);
      setChat([...chat, { q: question, a: response }]);
      setQuestion('');
    } catch (err) {
      setChat([...chat, { q: question, a: 'Sorry, there was an error.' }]);
    }
    setLoading(false);
  };

  const handleClear = () => {
    setChat([]);
    setQuestion('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.045,
        boxShadow: `0 0 0 2.5px ${red}, 0 8px 32px 0 rgba(0,0,0,0.28)`
      }}
      style={{
        border: `1.5px solid ${red}55`,
        borderRadius: 22,
        padding: '32px 24px 24px 24px',
        width: '100%',
        maxWidth: 330,
        minHeight: 320,
        background: 'linear-gradient(135deg, #1f2229 70%, #242736 100%)',
        boxShadow: `0 2px 16px ${red}08`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'box-shadow 0.25s, border 0.18s',
        marginBottom: 8
      }}
    >
      <div
        style={{
          background: `linear-gradient(90deg, ${red} 40%, ${darkRed} 100%)`,
          borderRadius: '50%',
          width: 54,
          height: 54,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 14,
          boxShadow: `0 2px 16px ${red}30`
        }}
      >
        <span style={{
          fontSize: 30,
          color: '#fff',
          fontWeight: 900,
          letterSpacing: '-2px'
        }}>
          {name[0]}
        </span>
      </div>
      <h3 style={{
        fontWeight: 700,
        fontSize: 22,
        margin: '0 0 4px 0',
        letterSpacing: '-1px',
        color: '#f1f1f1'
      }}>
        {name}
      </h3>
      <p style={{
        color: '#c0c4cc',
        margin: 0,
        fontSize: 15,
        marginBottom: 14
      }}>
        {description}
      </p>
      <div
        style={{
          width: '100%',
          background: '#202127',
          borderRadius: 8,
          minHeight: 60,
          maxHeight: 170,
          overflowY: 'auto',
          padding: '10px 7px',
          marginBottom: 10,
          border: `1px solid ${red}18`
        }}
      >
        {chat.length === 0 ? (
          <div style={{ color: '#8b8b8b', fontSize: 14, textAlign: 'center' }}>
            Start the conversation
          </div>
        ) : (
          chat.map((item, idx) => (
            <div key={idx} style={{ marginBottom: 11 }}>
              <div style={{
                color: '#fff', fontWeight: 600, marginBottom: 3, fontSize: 15
              }}>You: <span style={{ fontWeight: 400 }}>{item.q}</span></div>
              <div style={{
                color: red, fontWeight: 600, marginBottom: 0, fontSize: 14
              }}>{name}: <span style={{ fontWeight: 400, color: '#f4bfc2' }}>{item.a}</span></div>
            </div>
          ))
        )}
      </div>
      <input
        type="text"
        placeholder={`Ask the ${name}...`}
        value={question}
        onChange={e => setQuestion(e.target.value)}
        style={{
          marginTop: 6,
          width: '96%',
          padding: '8px 10px',
          borderRadius: 9,
          border: `1px solid ${red}44`,
          background: '#23242a',
          color: '#e9e9e9',
          fontSize: 15,
          outline: 'none',
          marginBottom: 10,
          boxShadow: '0 1px 3px #191a1f50'
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') handleAsk();
        }}
        disabled={loading}
      />
      <button
        onClick={handleAsk}
        style={{
          marginTop: 0,
          marginBottom: 8,
          padding: '8px 0',
          borderRadius: 7,
          border: 'none',
          background: `linear-gradient(90deg, ${red} 40%, ${darkRed} 100%)`,
          color: '#fff',
          fontWeight: 700,
          fontSize: 15,
          width: '100%',
          boxShadow: `0 1px 4px ${red}18`,
          cursor: loading ? 'wait' : 'pointer',
          opacity: loading ? 0.7 : 1,
          letterSpacing: 0.1,
          transition: 'background 0.16s'
        }}
        disabled={loading}
      >
        {loading ? 'Thinking...' : `Ask ${name}`}
      </button>
      {chat.length > 0 && (
        <button
          onClick={handleClear}
          style={{
            marginTop: 3,
            padding: '5px 0',
            borderRadius: 7,
            border: 'none',
            background: '#19191c',
            color: red,
            fontWeight: 600,
            fontSize: 13.8,
            width: '60%',
            boxShadow: '0 1px 4px #14141a22',
            cursor: 'pointer',
            opacity: loading ? 0.55 : 1,
            letterSpacing: 0.1,
            borderBottom: `2px solid ${red}88`
          }}
          disabled={loading}
        >
          Clear
        </button>
      )}
    </motion.div>
  );
}
