import { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  const query = event.queryStringParameters;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${query}!`,
    }),
  };
};
