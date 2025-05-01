import { Cliente } from "../types/Cliente";
import { Restaurante } from "../types/Restaurante";
import { FormLogin } from "../types/FormLogin";
import { Token } from "../types/Token";
import api from "./api";

export class AuthService {

  public constructor () {}

  public async cadastrarCliente(cliente: Cliente) {
    return await api.post<Cliente>(`/cliente/cadastrar`, cliente)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error("Erro ao cadastrar cliente:", error);
        throw error;
      });
  }

  public async cadastrarRestaurante(restaurante: Restaurante) {
    return await api.post<Restaurante>(`/restaurante/cadastrar`, restaurante)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error("Erro ao cadastrar restaurante:", error);
        throw error;
      });
  }

  public async entrarComoRestaurante(dadosLogin: FormLogin) {
    await api.post<Token>(`/entrar/restaurante`, dadosLogin)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      return response.status
    })
    .catch(error => {
      console.log('erro ao tentar fazer login ', error)
      throw error;
    })
  }


}