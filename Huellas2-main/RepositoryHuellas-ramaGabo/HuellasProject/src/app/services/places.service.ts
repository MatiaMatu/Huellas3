import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import Place from '../interfaces/place.interface';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore: Firestore) { }

addPlace(place: Place){
  const placeRef = collection(this.firestore, 'places');
  return addDoc(placeRef, place);
}



}
