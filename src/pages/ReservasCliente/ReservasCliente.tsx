import CardReservaCliente from "../../components/CardReservaCliente/CardReservaCliente"

const ReservasCliente = () => {
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
          <div className="col">
            <CardReservaCliente />
          </div>
          <div className="col">
            <CardReservaCliente />
          </div>
          <div className="col">
            <CardReservaCliente />
          </div>
          <div className="col">
            <CardReservaCliente />
          </div>
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
          <div className="col">
            <CardReservaCliente />
          </div>
          <div className="col">
            <CardReservaCliente />
          </div>
          <div className="col">
            <CardReservaCliente />
          </div>
          <div className="col">
            <CardReservaCliente />
          </div>
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
          <div className="col">
            <CardReservaCliente />
          </div>
          <div className="col">
            <CardReservaCliente />
          </div>
          <div className="col">
            <CardReservaCliente />
          </div>
          <div className="col">
            <CardReservaCliente />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservasCliente