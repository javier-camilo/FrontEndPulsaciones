import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { MensajeService } from '../mensajes/mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class HandleHttpErrorService {


  constructor(private mensaje:MensajeService) { }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`, "error");

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  public log(message: string, operacion:string) {
    this.mensaje.presentAlert(operacion,message);
  }





}
