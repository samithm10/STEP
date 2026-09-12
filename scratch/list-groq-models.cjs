require('dotenv').config();
const Groq = require('groq-sdk');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

async function listModels() {
  try {
    const models = await groq.models.list();
    console.log("Available models:");
    models.data.forEach(m => console.log(m.id));
  } catch (error) {
    console.error("Error listing models:", error.message);
  }
}

listModels();
