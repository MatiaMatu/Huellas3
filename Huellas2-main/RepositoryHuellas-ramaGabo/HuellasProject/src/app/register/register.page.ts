import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; //librerias importadas para crear formulario, controlar y validar registros
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AutheticationService } from '../authetication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  regForm: FormGroup;

  constructor(public formBuilder:FormBuilder, public loadingCtrl: LoadingController, public authService:AutheticationService, public alertController: AlertController) { 

   }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullname :['', [Validators.required]],
      email :['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
      ]],
      password:['', [
        Validators.required,
        Validators.pattern(".{8,}")
      ]]
      
    })

  }

  get errorControl(){
    return this.regForm.controls;
  }

  async signUp(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.regForm.valid){
      const user = await this.authService.registerUser(this.regForm.value.email,this.regForm.value.password).catch(()=>{

      }).catch((error) =>{
        console.log(error);
        loading.dismiss()

      })

      if(user){
        loading.dismiss()

         // Create an alert
       const alert = await this.alertController.create({
        header: 'Registro Exitoso',
        message: 'Te has registrado!',
        buttons: ['OK']
      });

      // Present the alert
      await alert.present();
      }
    }
    else loading.dismiss() 
  }

}