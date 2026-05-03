import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibleItemsService {



  verMasItems(proyectosVisibles: number, cantidad: number): number {
    return proyectosVisibles + cantidad;
  }

  reiniciarItems(cantidad: number): number {
    return cantidad;

  }


}
