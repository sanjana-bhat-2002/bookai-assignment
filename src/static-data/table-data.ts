const apiHeadings = ["Parameter", "Type", "Description"];
const apiData = [
  {
    parameter: "api",
    type: "string",
    description: 'The API provider to use. Options: "openai" or "together"',
  },
  {
    parameter: "model",
    type: "string",
    description:
      'The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")',
  },
  {
    parameter: "topic",
    type: "string",
    description: "The main topic or theme of the book",
  },
  {
    parameter: "language",
    type: "string",
    description: "The language in which the book should be generated",
  },
  {
    parameter: "word_count",
    type: "integer",
    description: "The approximate number of words for the generated book",
  },
];

const pricingDataHeadings = ["API", "Model", "Price per 1K Tokens"];
const pricingData = [
  {
    api: "OpenAI",
    model: "GPT-3.5",
    price: "$0.002",
  },
  {
    api: "OpenAI",
    model: "GPT-4",
    price: "$0.03",
  },
  {
    api: "Together AI",
    model: "Llama-2-70b",
    price: "$0.0008",
  },
  {
    api: "Together AI",
    model: "Llama-2-13b",
    price: "$0.0006",
  },
];

export { apiData, apiHeadings, pricingData, pricingDataHeadings };
