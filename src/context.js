import fetch from "node-fetch";

const API_URL = "http://localhost:3000";

export const context = () => {
  return {
    getArtists: () => fetch(`${API_URL}/artist`),
    getBands: () => fetch(`${API_URL}/bands`),
  };
};
