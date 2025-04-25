import { FunctionComponent } from "react";

interface TitulosProps {
  titulo: string;
  subtitulo?: string;
}

const Titulos:FunctionComponent<TitulosProps> = ({titulo, subtitulo}) => {
  return (
    <div className="py-3 d-flex flex-column">
      <span className="text-um weigth-semibold">{titulo}</span>
      <span className="fst-italic">{subtitulo}</span>
    </div>
  );
}

export default Titulos