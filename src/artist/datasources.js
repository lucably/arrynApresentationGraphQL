import { RESTDataSource } from "apollo-datasource-rest";
import { ValidationError } from "apollo-server";

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

  async deleteArtist(id) {
    if (!id) throw new ValidationError(`User ${id} does not exist`);

    const deleted = await this.delete(id);
    return !!deleted;
  }

  async updateArtist(id, artistData) {
    if (!id) {
      throw new ValidationError("Missing Id");
    }

    return await this.patch(`/${id}`, { ...artistData });
  }
}
