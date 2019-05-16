import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ProductoFormComponent } from "../common/producto-form/producto-form.component";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  productos = [
    {
      _id: 1,
      nombre: "Coca - Cola",
      imagen:
        "https://www.myamericanmarket.com/873-large_default/coca-cola-classic.jpg",
      stock: 15,
      categoria: "BEBIDAS",
      precio: 1
    },
    {
      _id: 2,
      nombre: "6 pack Coronas",
      imagen:
        "https://dpf77bhxauhdh.cloudfront.net/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/c/e/cerveza-corona-extra-355-cc-pack-24-botellas.jpg",
      stock: 25,
      categoria: "BEBIDAS",
      precio: 1
    },
    {
      _id: 3,
      nombre: "Mc. Bacon",
      imagen:
        "https://i.pinimg.com/originals/49/24/b6/4924b6db6dccd4667741510d6f8d0e88.png",
      stock: 20,
      categoria: "ALIMENTOS",
      precio: 3
    },
    {
      _id: 4,
      nombre: "Encebollado",
      imagen: "/assets/images/encebollado.jpg",
      stock: 20,
      categoria: "ALIMENTOS",
      precio: 1.5
    }
  ];

  constructor(private modalController: ModalController) {}

  async mostrarModal(producto?) {
    if (!producto) {
      producto = {};
    }

    const modal = await this.modalController.create({
      component: ProductoFormComponent,
      componentProps: {
        producto: { ...producto }
      }
    });

    modal.present();

    modal.onDidDismiss().then((data: any) => {
      if (!data.data) {
        return;
      }

      if (data.data.producto._id) {
        // editar
        let index = this.productos.findIndex(
          productoAEncontrar => productoAEncontrar._id == data.data.producto._id
        );
        this.productos[index] = data.data.producto;
      } else {
        this.productos.push(data.data.producto);
      }
    });
    // const { data } = await modal.onDidDismiss();
  }

  eliminar(producto) {
    let index = this.productos.findIndex(
      productoAEncontrar => productoAEncontrar._id == producto._id
    );

    this.productos.splice(index, 1);
  }
}
