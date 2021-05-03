import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // Simulação do banco de dados com um vetor de baralho
   usuarioUm = 
    {
      nome: 'Exemplo01',
      email: 'ex@exemplo.com',
      msg: 'No fim tudo dá certo, e se não deu certo é porque ainda não chegou ao fim',
      cor: 'Azul',
      musica: 'Pop'
    };
  
    usuarioDois=
    {
      nome: 'Exemplo02',
      email: 'exdois@exemplo.com',
      msg: 'Não crie limites para si mesmo. Você deve ir tão longe quanto sua mente permitir. O que você mais quer pode ser conquistado',
      cor: 'Vermelho',
      musica: 'Rock'
    };

  constructor() { }

  getUsuario(n: number){
    if (n == 1)
      return this.usuarioUm;
    else
      return this.usuarioDois;
  }
}
