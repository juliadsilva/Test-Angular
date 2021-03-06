import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  usuario: any= [];
  radio: number;

  constructor(private usuariosService: UsuariosService) {}
  
  mostraUsuario(form: NgForm){
    this.radio = form.controls['tipo']?.value;
    this.usuario = this.usuariosService.getUsuario(this.radio)
  }
}

