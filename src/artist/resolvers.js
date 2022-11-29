import fetch from "node-fetch";

const API_URL = "http://localhost:3000";

const artists = async (parent, arg, context) => {
  const response = await context.getArtists();
  return response.json();
};

const artist = async (parent, { id }) => {
  const getArtist = await fetch(`${API_URL}/artist/${id}`);

  return getArtist.json();
};

export const artistResolvers = {
  Query: {
    artist,
    artists,
  },
};
