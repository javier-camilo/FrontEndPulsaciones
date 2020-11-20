import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { Persona } from 'src/app/Modelo/persona';
import { NgForm } from '@angular/forms';
import { PersonaService } from 'src/app/Services/persona.service';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  
  persona: Persona;

  sexo:string;
  
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.persona=new Persona();
  
    this.sexo="Seleccione su sexo";
 
  }
 
  add(formulario: NgForm){
    
    this.personaService.createTask(this.persona).subscribe();
    
    
    this.clear(formulario);

  }

  clear(formulario:NgForm){
    formulario.reset();
  }


}
