import { RESTDataSource } from "apollo-datasource-rest";

export class ArtistApi extends RESTDataSource {
  constructor() {
    super(); // chamando o construtor do RESTDataSource
    this.baseURL = "http://localhost:3000/artist";
  }

  async getArtists() {
    return this.get(""); // Já esta trazendo todos pq a baseURL esta tudo.
  }

  async getArtist(id) {
    return this.get(`/${id}`); // Já esta trazendo todos pq a baseURL esta tudo.
  }

  async createArtist(artistData) {
    return this.post("", artistData);
  }
}
