import { Restaurante } from "../types/Restaurante";
import api from "./api";

export class RestauranteService {

  constructor() { }

  public async getRestaurantes() {
    return await api.get<Restaurante[]>(`/restaurante/`).then(response => {
      return response.data;
    }
    ).catch(error => {
      console.error("Erro ao buscar restaurantes:", error);
      throw error;
    });
  }

  public async getRestaurantePorId(restauranteId: string | number | undefined) {
    return await api.get<Restaurante>(`/restaurante/${restauranteId}`).then(response => {
      return response.data;
    }
    ).catch(error => {
      console.error("Erro ao buscar restaurantes:", error);
      throw error;
    });
  }

  public async getRestaurantePorToken() {
    return await api.get<Restaurante>(`/restaurante/perfil`).then(response => {
      return response.data;
    }
    ).catch(error => {
      console.error("Erro ao buscar restaurantes:", error);
      throw error;
    });
  }

  public async getRestaurantePorMesaId(mesaId: number) {
    return api.get<Restaurante>(`/restaurante/encontrar?mesaId=${mesaId}`)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log('ocorreu um erro ao buscar o restaurante ', error)
      throw error
    })
  }

}