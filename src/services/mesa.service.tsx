import { Mesa } from "../types/Mesa";
import api from "./api";

export class MesaService {
  constructor () {}

  public async adicionarNovaMesa(dadosMesa: Mesa) {
    return await api.post('/restaurante/mesas/nova-mesa', dadosMesa).then(response => {
      console.log(response.status)
    })
    .catch(error => {
      console.log('erro ao adicionar nova mesa ', error)
    })
  }

  public async getMesaPorRestauranteId(restauranteId: number | string | undefined) {
    return await api.get<Mesa[]>(`/restaurante/mesas/${restauranteId}`).then(response => {
      return response.data
    })
    .catch(error => {
      console.log('erro ao recuperar as mesas do restaurante ', error)
      throw error
    })
  }
}