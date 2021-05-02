import { Component } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  usuarios: any[] = [];

  radio: number;
 
  constructor(private usuariosService: UsuariosService) {}
  
  // Acontece antes da tela ser desenhada
  ngOnInit(): void {
    this.usuarios = this.usuariosService.getUsuriosNulo();
  }
  
  mostraUsuario(form: NgForm){
    this.radio = form.controls['tipo'].value;
    if(this.radio == 1){
      this.usuarios = this.usuariosService.getUsuariosByNome('Exemplo01');
     } else{
      this.usuarios = this.usuariosService.getUsuariosByNome('Exemplo02');
     }      
  }
}
