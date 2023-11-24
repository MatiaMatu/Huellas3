import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AutheticationService } from '../authetication.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {
  email:any


  constructor(public route:Router, public authService:AutheticationService, public alertController: AlertController) { 
  }
  

  ngOnInit() {
  }

  async resetPassword(){
    this.authService.resetPassword(this.email).then(()=>{
      console.log('reset link sent')
      this.route.navigate(['/login'])
    }

    ).catch((error)=>{
      console.log(error);
    })
  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Recuperar Contraseña',
      message: 'Se ha enviado un enlace para la recuperación de la contraseña a tu e-mail.',
      buttons: ['OK']
    });
   
    await alert.present();
   }
}

