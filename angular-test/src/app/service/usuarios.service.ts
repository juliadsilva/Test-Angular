import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // Simulação do banco de dados com um vetor de baralho
  usuariosNulo = [
    {
      nome: 'Nome',
      email: 'E-mail',
      msg: '',
      cor: '',
      musica: ''
    },
  ];

  usuarios = [
    {
      nome: 'Exemplo01',
      email: 'ex@exemplo.com',
      msg: 'A persistência é o caminho do êxito',
      cor: 'Azul',
      musica: 'Pop'
    },
    {
      nome: 'Exemplo02',
      email: 'exdois@exemplo.com',
      msg: 'A persistência é o caminho do êxito',
      cor: 'Vermelho',
      musica: 'Rock'
    },
  ]

  constructor() { }

  getUsuriosNulo():any[]{
    return this.usuariosNulo;
  }

  getUsuarios():any[]{
    return this.usuarios;
  }

  getUsuariosByNome(nomeP:string){
    return this.usuarios.filter(u => u.nome == nomeP);
  }
}
