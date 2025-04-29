import axios from "axios";
import { Cliente } from "../types/Cliente";
import { Restaurante } from "../types/Restaurante";

export class AuthService {

  private apiUrl: string = 'http://localhost:8080';

  // posteriormente será usado...
  // private token: string | null = null;

  public constructor () {
    // this.token = token || null;
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

  public async cadastrarRestaurante(restaurante: Restaurante) {
    return await axios.post<Restaurante>(`${this.apiUrl}/restaurante/cadastrar`, restaurante)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error("Erro ao cadastrar restaurante:", error);
        throw error;
      });
  }


}