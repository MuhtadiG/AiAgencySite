import axios from 'axios';

export function askAI(prompt) {
  return axios
    .post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`
        }
      }
    )
    .then(res => res.data.choices[0].message.content);
}
