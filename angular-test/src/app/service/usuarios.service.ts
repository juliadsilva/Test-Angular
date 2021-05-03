import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // Simulação do banco de dados com um vetor de baralho
  usuarioNulo = 
    {
      nome: 'Nome',
      email: 'E-mail',
      msg: '',
      cor: '',
      musica: ''
    };
  
  usuarioUm = 
    {
      nome: 'Exemplo01',
      email: 'ex@exemplo.com',
      msg: 'A persistência é o caminho do êxito',
      cor: 'Azul',
      musica: 'Pop'
    };
  
    usuarioDois=
    {
      nome: 'Exemplo02',
      email: 'exdois@exemplo.com',
      msg: 'A persistência é o caminho do êxito',
      cor: 'Vermelho',
      musica: 'Rock'
    };

  constructor() { }

  getUsurioNulo(){
    return this.usuarioNulo;
  }

  getUsuarioUm(){
    return this.usuarioUm;
  }

  getUsuarioDois(){
    return this.usuarioDois;
  }
}
