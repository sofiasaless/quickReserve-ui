import { StatusReserva } from "../enum/StatusReserva"

export type Reserva = {
  id: number | null,
  mesaId: number | undefined,
  clienteId: number | null,
  dataParaReserva: string | null,
  statusReserva: StatusReserva | null,
  nomeParaReserva: string;
  quantidadePessoas: number,
  observacoes: string,
  criadoEm: Date | string | null
}