import { Injectable } from '@angular/core';
import { Bolo } from '../interfaces/bolo';

@Injectable({
  providedIn: 'root'
})
export class ListaBolosService {

  constructor() { }

 getBolos(): Bolo[] {
   const listBolo: Bolo[] = [
      {
        id: 1,
        imagem: '../../assets/imagens/bolo-cenoura.jpg',
        nome: 'Bolo de Cenoura',
        desc: 'apenas R$ 18,00'
      },
      {
        id: 2,
        imagem: '../../assets/imagens/bolo-nutella.jpg',
        nome: 'Com Nutella',
        desc: 'apenas R$ 29,00'
      },
      {
        id: 3,
        imagem: '../../assets/imagens/bolo-brigadeiro.jpg',
        nome: 'De Brigadeiro',
        desc: 'apenas R$ 24,00'
      },
      {
        id: 4,
        imagem: '../../assets/imagens/bolo-açucarado.jpg',
        nome: 'Açucarado',
        desc: 'apenas R$ 19,00'
      }
   ];

   return listBolo;
 }
}
