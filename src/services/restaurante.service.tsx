import axios from "axios";
import { Restaurante } from "../types/Restaurante";

export class RestauranteService {

  private apiUrl: string = 'http://localhost:8080';

  constructor () {}

  public async getRestaurantes() {
    return await axios.get<Restaurante[]>(`${this.apiUrl}/restaurante/`).then(response => {
      return response.data;
    }
    ).catch(error => {
      console.error("Erro ao buscar restaurantes:", error);
      throw error;
    });
  }

  public async getRestaurantePorId(restauranteId: string | number | undefined) {
    return await axios.get<Restaurante>(`${this.apiUrl}/restaurante/${restauranteId}`).then(response => {
      return response.data;
    }
    ).catch(error => {
      console.error("Erro ao buscar restaurantes:", error);
      throw error;
    });
  }

}