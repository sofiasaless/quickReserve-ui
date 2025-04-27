import { FunctionComponent } from "react";

interface TitulosProps {
  titulo: string;
  subtitulo?: string;
  status?: boolean;
}

const Titulos:FunctionComponent<TitulosProps> = ({titulo, subtitulo, status}) => {
  return (
    <div className="py-3 d-flex flex-column">
      <div className="d-flex gap-2 align-items-center">
        <span className="text-um weigth-semibold">{titulo}</span>
        <div style={{display: status ?'flex':'none', backgroundColor: 'var(--verde)', width: '12px', height: '12px'}} className="rounded-circle"></div>
      </div>
      <span className="fst-italic">{subtitulo}</span>
    </div>
  );
}

export default Titulos