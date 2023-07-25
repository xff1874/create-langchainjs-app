import * as dotenv from "dotenv";
import { OpenAI } from "langchain/llms/openai";


dotenv.config();

const model = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY, temperature: 1
});

const res1 = await model.call(
    "What would be a good company name a company that makes colorful socks?"
);
console.log(res1);