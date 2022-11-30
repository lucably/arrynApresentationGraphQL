// import fetch from "node-fetch";

// const API_URL = "http://localhost:3000";

//Jeito antigo sem o DATASOURCES
/*

const artists = async (parent, arg, context) => {
  const response = await context.getArtists();
  return response.json();
};

const artist = async (parent, { id }) => {
  const getArtist = await fetch(`${API_URL}/artist/${id}`);

  return getArtist.json();
};

*/

const artists = async (parent, arg, { dataSources }) => {
  const artists = dataSources.ArtistApi.getArtists();
  return artists;
};

const artist = async (parent, { id }, { dataSources }) => {
  const artists = dataSources.ArtistApi.getArtist(id);
  return artists;
};

const createArtist = async (_, { data }, { dataSources }) => {
  return dataSources.ArtistApi.createArtist(data);
};

const deleteArtist = async (_, { id }, { dataSources }) => {
  const deletedartist = dataSources.ArtistApi.deleteArtist(id);
  return deletedartist;
};

const updateArtist = async (_, { id, data }, { dataSources }) => {
  const editedArtist = dataSources.ArtistApi.updateArtist(id, data);
  return editedArtist;
};

export const artistResolvers = {
  Query: {
    artist,
    artists,
  },
  Mutation: {
    createArtist,
    deleteArtist,
    updateArtist,
  },
};
