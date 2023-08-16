// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Configuration, OpenAIApi } = require("openai");

export default async function handler(req, res) {
  // if method not post send this
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed!!" });
    return;
  }
  // if method post then do it
  if (req.method === "POST") {
    // req body with name is chat
    const chat = req.body.chat;
    // if there is a chat
    if (chat) {
      // configuration api openai
      const configuration = new Configuration({
        apiKey: process.env.API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: chat}],
      });
      // if get data from openai send json
      if (response.data?.choices) {
        res.json(response.data.choices[0].message.content);
        // if can't get data from openai send error
      } else {
        res.status(500).send("Oops, Something went wrong!!");
      }
      // if no chat send error not found
    } else {
      res.status(404).send("Please, write your chat!!");
    }
  }
}
