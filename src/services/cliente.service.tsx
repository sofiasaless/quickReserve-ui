import { Cliente } from "../types/Cliente";
import api from "./api";

export class ClienteService {
  constructor () {}

  public async getClientePorToken() {
    return await api.get<Cliente>(`/cliente/perfil`).then(response => {
      return response.data;
    }
    ).catch(error => {
      console.error("erro ao recuperar o perfil do cliente:", error);
      throw error;
    });
  }

  public async deletarCliente() {
    return await api.delete(`/cliente/deletar`).then(response => {
      console.log('exclusão feita com sucesso')
      localStorage.removeItem('token')
      return response.status;
    }
    ).catch(error => {
      console.error("erro ao exclur a conta do cliente:", error);
      throw error;
    });
  }

}