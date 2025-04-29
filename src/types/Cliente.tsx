export type Cliente = {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  dataAniversario: string;
  cpf: string;
  criadoEm?: Date;
}