import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastController, ToastOptions } from '@ionic/angular';
import { Posteo } from '../clases/posteo';
import { PlacesService } from '../services/places.service';
import Place from '../interfaces/place.interface';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.page.html',
  styleUrls: ['./notices.page.scss'],
})
export class NoticesPage implements OnInit {
  
  places: Place[];

  username: string ='';
  data: any;
  posteos: any;

  posteo: any ={
    id:null,
    titulo: "",
    fechaperdido: "",
    descripcion: ""
  }


  constructor(private activateRoute: ActivatedRoute, private router: Router,  private toastController: ToastController, private placesService: PlacesService) {
    this.activateRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state?.['user'];
        console.log(this.data);
      }else{
        this.router.navigate(["/notices"]);
      }
    });
   }
  




   ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })
    
  }

//---- AGREGAR POSTEO




async presentToast(opts?: ToastOptions){
  const toast = await this.toastController.create(opts);
  toast.present();
}

  cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.router.navigate(["/login"]);
  }


}