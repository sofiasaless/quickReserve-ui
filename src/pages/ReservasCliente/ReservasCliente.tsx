import { useEffect, useState } from "react"
import CardReservaCliente from "../../components/CardReservaCliente/CardReservaCliente"
import { StatusReserva } from "../../enum/StatusReserva"
import { ReservaService } from "../../services/reserva.service"
import { Reserva } from "../../types/Reserva"

const ReservasCliente = () => {

  const [reservasPendentes, setReservasPendentes] = useState<Reserva[]>()
  const [reservasConfirmadas, setReservasConfirmadas] = useState<Reserva[]>()
  const [reservasCanceladas, setReservasCanceladas] = useState<Reserva[]>()

  const reservServ = new ReservaService()

  useEffect(() => {

    const buscar = async () => {
      const pendentes = await reservServ.getReservasClientePorStatus(StatusReserva.PENDENTE)
      setReservasPendentes(pendentes);

      const confirmadas = await reservServ.getReservasClientePorStatus(StatusReserva.CONFIRMADA)
      setReservasConfirmadas(confirmadas);

      const canceladas = await reservServ.getReservasClientePorStatus(StatusReserva.CANCELADA)
      setReservasCanceladas(canceladas);
    }

    buscar()
  }, [])

  return (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex flex-column">
        <span className="text-um fw-bold">Minhas reservas</span>
        <div className="d-flex align-items-center gap-2">
          <span className="fst-italic">Reservas em andamento</span>
          <div style={{
            height: '10px',
            backgroundColor: 'var(--cinza-escuro)',
            width: '10px',
          }}
            className="rounded-circle"
          />
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

          {
            reservasPendentes?.map((reserva) => (
              <div key={reserva.id} className="col">
                <CardReservaCliente reservaObj={reserva} />
              </div>
            ))
          }

        </div>
      </div>

      <div className="d-flex align-items-center gap-2">
        <span className="fst-italic">Reservas confirmadas</span>
        <div style={{
          height: '10px',
          backgroundColor: 'var(--verde)',
          width: '10px',
        }}
          className="rounded-circle"
        />
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {
            reservasConfirmadas?.map((reserva) => (
              <div key={reserva.id} className="col">
                <CardReservaCliente reservaObj={reserva} />
              </div>
            ))
          }
        </div>
      </div>

      <div className="d-flex align-items-center gap-2">
        <span className="fst-italic">Reservas finalizadas ou canceladas</span>
        <div style={{
          height: '10px',
          backgroundColor: 'var(--vermelho)',
          width: '10px',
        }}
          className="rounded-circle"
        />
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {
            reservasCanceladas?.map((reserva) => (
              <div key={reserva.id} className="col">
                <CardReservaCliente reservaObj={reserva} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ReservasCliente