import { Categoria } from "../enum/Categoria";

export type Restaurante = {
  id?: number;
  nome: string;
  descricao: string;
  email: string;
  cnpj: string;
  tipoRestaurante?: Categoria | string;
  senha: string;
  imagemPerfil?: string;
  imagemCapa?: string;
  dataCadastro?: Date;
}