import { Reserva } from "../types/Reserva";
import api from "./api";

export class ReservaService {
  constructor() {}

  public async buscarDisponibilidadeDeReservaDaMesa(mesaId: number, dataParaReserva: string) {
    return api.get<Reserva>(`/reservas/encontrar/${mesaId}?dataParaReserva=${dataParaReserva}`)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error('erro ao verificar disponibilidade da mesa ', error)
      throw error
    })
  }
}