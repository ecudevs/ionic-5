import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-producto-list",
  templateUrl: "./producto-list.component.html",
  styleUrls: ["./producto-list.component.scss"]
})
export class ProductoListComponent implements OnInit {
  @Input() listaProductos: any = [];

  @Output() editar = new EventEmitter<any>();
  @Output() eliminar = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  _editar(producto) {
    this.editar.next(producto);
  }

  _eliminar(producto) {
    this.eliminar.next(producto);
  }
}
