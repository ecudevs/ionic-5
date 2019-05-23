import { Component, OnInit, Input } from "@angular/core";
import {
  AlertController,
  ToastController,
  ModalController
} from "@ionic/angular";

@Component({
  selector: "app-producto-form",
  templateUrl: "./producto-form.component.html",
  styleUrls: ["./producto-form.component.scss"]
})
export class ProductoFormComponent implements OnInit {
  @Input() producto: any = {};

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  async guardar() {
    this.modalController.dismiss({
      producto: this.producto,
      otrosDatos: {}
    });
    // console.log(this.producto);
    // const alert = await this.alertController.create({
    //   header: "Guardando",
    //   message:
    //     '<div class="ion-text-center"><ion-spinner name="crescent"></ion-spinner></div>'
    // });

    // await alert.present();

    // setTimeout(async () => {
    //   await alert.dismiss();

    //   const toast = await this.toastController.create({
    //     message: "Se guardó el producto!",
    //     duration: 2000
    //   });
    //   toast.present();

    //   this.producto = {};
    // }, 2000);
  }
}
