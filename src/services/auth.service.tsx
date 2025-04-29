import axios from "axios";
import { Cliente } from "../types/Cliente";

export class AuthService {

  private apiUrl: string = 'http://localhost:8080';

  // posteriormente será usado...
  private token: string | null = null;

  public constructor (token?: string) {
    this.token = token || null;
  }

  public async cadastrarCliente(cliente: Cliente) {
    return await axios.post<Cliente>(`${this.apiUrl}/cliente/cadastrar`, cliente)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error("Erro ao cadastrar cliente:", error);
        throw error;
      });
  }


}