import { Handler } from "@netlify/functions";

type Event = {
  body: {
    name: string;
    email: string;
    message: string;
  };
};
export const handler: Handler = async (event, context) => {
  const query = event;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: event,
    }),
  };
};
