import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, Form} from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AutheticationService } from '../authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;




  constructor(public formBuilder:FormBuilder, public loadingCtrl: LoadingController, public authService:AutheticationService,public alertController: AlertController,public route: Router) {}
 
   ngOnInit() {
    this.loginForm = this.formBuilder.group({
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
    return this.loginForm.controls;
  }

  async login(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.loginForm?.valid){
      const user = await this.authService.loginUser(this.loginForm.value.email,this.loginForm.value.password).catch(()=>{

      }).catch((error) =>{
        console.log(error);
        loading.dismiss()

      })

      if(user){
        localStorage.setItem('ingresado', 'true');
        loading.dismiss()
        this.route.navigate(['/notices'])
      }else{
        console.log('provide correct values'),
        loading.dismiss()
      }
    }else loading.dismiss() 
  }

}
