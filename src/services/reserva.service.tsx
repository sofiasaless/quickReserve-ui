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

  public async solicitarReserva(dadosReserva: Reserva) {
    return api.post<Reserva>(`/reservas/cliente/nova-reserva`, dadosReserva)
    .then(response => {
      console.log('reserva solicitada com sucesso ', response.data, response.status)
      return response.status
    })
    .catch(error => {
      console.log('ocorreu um erro ao solicitar a reserva ', error)
    })
  }
  
}