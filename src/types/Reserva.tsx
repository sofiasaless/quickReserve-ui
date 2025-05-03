import { StatusReserva } from "../enum/StatusReserva"

export type Reserva = {
  id: number | null,
  mesaId: number | null,
  clienteId: number | null,
  dataParaReserva: string | null,
  statusReserva: StatusReserva | null,
  criadoEm: Date | string | null
}