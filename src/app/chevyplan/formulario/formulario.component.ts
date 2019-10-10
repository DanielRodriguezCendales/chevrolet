import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) { }

  public formulario : FormGroup;
  public paises :any =[];

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nombres: ['', Validators.required],
      pais: ['', Validators.required],
      tipo_documento: ['', Validators.required],
      politica_privacidad: ['', Validators.required],
      numero_documento: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
    });
    this.listarPaises();
  }

  enviar(){
    let json ={
      "pais":this.formulario.value.pais,
      "tipo_documento":this.formulario.value.tipo_documento,
      "politica_privacidad":this.formulario.value.politica_privacidad,
      "numero_documento":this.formulario.value.numero_documento,
      "correo":this.formulario.value.correo,
      "nombres":this.formulario.value.nombres,
      "telefono":this.formulario.value.telefono,
    }
    console.log(json);
    this.formularioService.abrirMensaje("Información enviada correctamente","success");
    this.formulario.reset();
  }
  

  listarPaises() {
    this.formularioService.listar().subscribe(
      response => {
        if(response != null){
          this.paises = response;
          console.log(this.paises);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
