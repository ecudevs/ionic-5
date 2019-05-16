import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-producto-card",
  templateUrl: "./producto-card.component.html",
  styleUrls: ["./producto-card.component.scss"]
})
export class ProductoCardComponent implements OnInit {
  @Input() producto: any = {};

  @Output() editar = new EventEmitter<any>();
  @Output() compra = new EventEmitter<any>();

  @Output() eliminar = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  _editar() {
    this.editar.next(this.producto);
  }

  _compra() {
    this.compra.next(this.producto);
  }

  _eliminar() {
    this.eliminar.next(this.producto);
  }
}
