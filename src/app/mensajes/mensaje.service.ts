import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(public alertController: AlertController) { }

  
  async presentAlert(operacion: string, mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: operacion,
      subHeader: 'resultado de la operacion',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }


}
