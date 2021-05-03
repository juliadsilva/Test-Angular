import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  usuario: any= [];

  radio: number;
 
  constructor(private usuariosService: UsuariosService) {}
  
  // Acontece antes da tela ser desenhada
  ngOnInit(): void {
    this.usuario = this.usuariosService.getUsurioNulo();
  }
  
  mostraUsuario(form: NgForm){
    this.radio = form.controls['tipo'].value;
    
    if(this.radio == 1){
      this.usuario = this.usuariosService.getUsuarioUm();
     } else if(this.radio == 2){
      this.usuario = this.usuariosService.getUsuarioDois();
     }     
     else {
      this.usuario = this.usuariosService.getUsurioNulo();
     }
  }
}
