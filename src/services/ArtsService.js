import { AppState } from "@/AppState.js";
import { api } from "./AxiosService.js"
import { Artwork } from "@/models/Artwork.js";

class ArtsService{
  async changeCurrentPage(pageNum) {
    const response = await api.get(`/api/artworks/?page=${pageNum}`)
    // eslint-disable-next-line no-console
    console.log(response.data);

    const newArtworks = response.data.artworks.map(artworkPOJO => new Artwork(artworkPOJO))

    AppState.artworks = newArtworks
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }

  async getArtworks() {
    const response = await api.get('/api/artworks')
    // eslint-disable-next-line no-console
    console.log('load art to the page', response.data);

    const newArtworks = response.data.artworks.map(artworkPOJO => new Artwork(artworkPOJO))

    AppState.artworks = newArtworks
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }
}
export const artsService = new ArtsService()