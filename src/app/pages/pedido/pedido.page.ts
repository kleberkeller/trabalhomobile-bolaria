import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaBolosService } from 'src/app/services/lista-bolos.service';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  public boloID: number;
  public item: {} = {};
  private loading: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private listaBolos: ListaBolosService,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {
    this.boloID = this.activatedRoute.snapshot.params['id'] - 1;
  }

  ngOnInit() {
    this.getItem();
  }

  getItem() {
    console.log(this.boloID);
    this.item = this.listaBolos.getBolos()[this.boloID];
  }

  confirmaPedido(){
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Aguarde, por Favor...',
      duration: 500
    });
    await loading.present();

    this.presentToast('Pedido Confirmado'); 
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({message,
      duration: 2000
    });
    toast.present();
 
  }

}
