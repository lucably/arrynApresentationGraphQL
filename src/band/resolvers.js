import fetch from "node-fetch";

const API_URL = "http://localhost:3000";

const bands = async (parent, arg, context) => {
  const response = await context.getBands();
  return response.json();
};

const band = async (parent, { id }) => {
  const getBand = await fetch(`${API_URL}/band/${id}`);
  return getBand.json();
};

export const bandResolvers = {
  Query: {
    bands,
    band,
  },
};
