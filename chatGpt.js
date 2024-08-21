const OpenAI = require('openai');
const secret = require('./secret')


const openai = new OpenAI({
  apiKey: secret
});

async function chatGpt(msg) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: msg }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
  return completion.choices[0]
}

module.exports = chatGpt
