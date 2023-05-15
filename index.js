require('dotenv').config(); // Load the environment file

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Function to send a message to ChatGPT and get a response
async function sendMessage(message) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003", // Choose the appropriate ChatGPT model version
    prompt: message,
    // maxTokens: 50, // Adjust the response length as needed
    // temperature: 0.7, // Adjust the response randomness as needed
    // n: 1, // Number of responses to generate
    // stop: '\n', // Stop generating response at a newline
  });

  const reply = completion.data.choices[0].text.trim();
  return reply;
}

// Example usage
sendMessage('Hello, ChatGPT!')
  .then(reply => {
    console.log('ChatGPT response:', reply);
  })
  .catch(error => {
    console.error('Error:', error);
  });