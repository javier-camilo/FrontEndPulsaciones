import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Services/persona.service';
import { Persona } from 'src/app/Modelo/persona';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  persona: Persona;
  formGroup: FormGroup;
  codigo: string;
  listadoPersona: Persona[] = [];

  constructor(private formBuilder: FormBuilder, private rutaActiva: ActivatedRoute, private personaService: PersonaService) { }

  ngOnInit() {
    this.persona = new Persona();
    this.obtenerRuta();
    this.cargarPersona();
  } 

  obtenerRuta() {
    const id = this.rutaActiva.snapshot.paramMap.get('identificacion');
    this.personaService.getTask(id).subscribe(a => {
      if (a != null) {
        this.persona = a;
      }
    });
  }

  update(formulario: NgForm) {
    this.personaService.updateTask(this.persona).subscribe();
    this.clear(formulario);
  }
  
  delete(){
    this.personaService.deleteTask(this.persona.identificacion).subscribe();
    
  }

  clear(formulario:NgForm){
    formulario.reset();
  }

  public cargarPersona() {
    this.personaService.getAll().subscribe(result => {
      this.listadoPersona = result;
    });
  }
}
