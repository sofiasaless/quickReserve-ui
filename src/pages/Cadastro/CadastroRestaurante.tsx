import './style.css'

// assets
import logo from '../../assets/material/reservationLogo.png';

// imports
import { Categoria } from '../../enum/Categoria';
import { Restaurante } from '../../types/Restaurante';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthService } from '../../services/auth.service';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FotoSeletor from '../../components/FotoSeletor/FotoSeletor';
import UploadImagem from '../../services/cloudinary.service';

const CadastroRestaurante = () => {

  const { register, handleSubmit } = useForm<Restaurante>();
  const [enviando, setEnviando] = useState<boolean>(false)

  // state para fotos
  const [fotoPerfil, setFotoPerfil] = useState<File | null>(null);
  const [fotoCapa, setFotoCapa] = useState<File | null>(null);

  const onSubmitCadastrar: SubmitHandler<Restaurante> = async (dadosRestaurante: Restaurante) => {
    // console.log(dadosRestaurante)
    setEnviando(true);

    // primeiro é necessário fazer o upload das fotos
    try {
      dadosRestaurante.imagemPerfil = await UploadImagem(fotoPerfil);
      dadosRestaurante.imagemCapa = await UploadImagem(fotoCapa);
    } catch (error) {
      console.log("Erro ao fazer upload das imagens:", error);
    }

    // console.log("Dados do restaurante:", dadosRestaurante);

    // agora é possível cadastrar o restaurante
    const authService = new AuthService();
    try {
      const response = await authService.cadastrarRestaurante(dadosRestaurante);
      console.log("Restaurante cadastrado com sucesso:", response);
    } catch (error) {
      console.log("Erro ao cadastrar restaurante:", error);
    }

    setEnviando(false);
  };

  return (
    <div className='area-cad d-flex justify-content-center align-items-center py-4'>

      <form className='p-4 bg-white rounded-3 shadow-sm d-flex flex-column gap-3 justify-content-center align-items-center'>
        <img src={logo} className='text-center' style={{ width: '80px' }} />

        <div className='d-flex gap-4'>
          <FotoSeletor 
            onImageSelect={(file) => console.log("Imagem selecionada:", file)}
            alturaImagem={100}
            larguraImagem={100}
            arredondamento={50}
            descricao='Foto de perfil'
            guardarImagem={(file) => setFotoPerfil(file)}
          />
          <FotoSeletor 
            onImageSelect={(file) => console.log("Imagem selecionada:", file)}
            alturaImagem={100}
            larguraImagem={160}
            arredondamento={10}
            descricao='Foto de capa'
            guardarImagem={(file) => setFotoCapa(file)}
          />
        </div>

        <div>
          <label className="form-label ms-1">Nome do estabelecimento</label>
          <input type="text" className="form-control"  {...register("nome", { required: "Nome é obrigatório" })} />
        </div>

        <div>
          <label className="form-label ms-1">Descrição</label>
          <textarea className="form-control"  {...register("descricao", { required: "Nome é obrigatório" })} rows={3}/>
        </div>

        <div>
          <label className="form-label ms-1">E-mail</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" {...register("email", { required: "Nome é obrigatório" })} />
        </div>

        <div>
          <label className="form-label ms-1">CNPJ</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" {...register("cnpj", { required: "Nome é obrigatório" })} />
        </div>

        <div style={{ width: '100%' }}>
          <label className="form-label ms-1">Categoria</label>
          <select className="form-select" aria-label="Default select example" {...register("tipoRestaurante", { required: "Nome é obrigatório" })}>
            <option selected>Selecione uma categoria</option>
            <option value={Categoria.HAMBURGUERIA}>Hamburgueria</option>
            <option value={Categoria.CHURRASCARIA}>Churrascaria</option>
            <option value={Categoria.LANCHONETE}>Lanchonete</option>
            <option value={Categoria.PIZZARIA}>Pizzaria</option>
            <option value={Categoria.RESTAURANTE}>Restaurante</option>
          </select>
        </div>

        <div>
          <label className="form-label ms-1">Senha</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="" {...register("senha", { required: "Nome é obrigatório" })} />
        </div>

        <div className='d-flex justify-content-between' style={{ width: '100%' }}>
          <button className='btn-laranja-um' onClick={handleSubmit(onSubmitCadastrar)} disabled={enviando}>
            {enviando ? (
              <span className="spinner-border spinner-border-sm mx-5" role="status" aria-hidden="true"></span>
            ) : (
              'Fazer cadastro'
            )}
          </button>

          <Link to={'/login-restaurante'} className='btn-outline-laranja py-2 px-4'>Entrar</Link>
        </div>

        <div className='d-flex justify-content-center mt-2'>
          <Link to={'/cadastro-cliente'} className='text-decoration-none btn-outline-laranja py-2 px-4 text-decoration-underline fst-italic'>Sou um cliente</Link>
        </div>
      </form>

    </div>
  )
}

export default CadastroRestaurante;