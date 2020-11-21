import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Task } from '../interfaces/task';
import { Persona } from '../Modelo/persona';
import { catchError, tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})



export class PersonaService {

  
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


  bassePath="/PulsacionesApi";


  url: string = "https://pulsacionesapi2020.azurewebsites.net/";


  constructor(private http: HttpClient, private handleErrorService:HandleHttpErrorService) { }

  
  getAll(){

    return this.http.get<Persona[]>(this.url+"api/Pulsaciones")
    .pipe(
      tap(_ => this.handleErrorService.log("Consultar Listado", "se consulto correctamente")),
      catchError(this.handleErrorService.handleError<Persona[]>('trayendo el listado', null))
    );

  }

  getTask(id: string) {
    const path = this.url+`api/Pulsaciones/${id}`;
    return this.http.get<Persona>(path);
  }

  createTask(persona: Persona) {

      return this.http.post<Persona>(this.url+"api/Pulsaciones", persona, this.httpOptions).pipe(

        tap(_=>this.handleErrorService.log("Se guardo correctamente","Guardado")),
        catchError(this.handleErrorService.handleError<Persona>('Error al guardar'))

      );

  }

  updateTask(persona: Persona) {
    const path = this.url+`api/Pulsaciones/${persona.identificacion}`;
    return this.http.put<Persona>(path, persona);
  }

  deleteTask(id: string) {
    const path = this.url+`api/Pulsaciones/${id}`;
    return this.http.delete(path);
  }




}
