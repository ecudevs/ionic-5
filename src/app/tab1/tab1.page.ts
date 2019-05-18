import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ProductoFormComponent } from "../common/producto-form/producto-form.component";
import { ProductoService } from "../services/producto.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  productos = [];

  constructor(
    private modalController: ModalController,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    // Carga de datos
    this.getDatos();
  }

  getDatos() {
    this.productoService.getProductos().subscribe((response: any) => {
      this.productos = response.productos;
    });
  }

  insertarProducto(producto) {
    this.productoService
      .insertarProducto(producto)
      .subscribe((response: any) => {
        this.productos = response.productos;
      });
  }

  modificarProducto(producto) {
    this.productoService
      .modificarProducto(producto)
      .subscribe((response: any) => {
        this.productos = response.productos;
      });
  }

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
      debugger;
      if (data.data.producto._id) {
        // editar

        this.modificarProducto(data.data.producto);
      } else {
        this.insertarProducto(data.data.producto);
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
