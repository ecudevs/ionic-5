import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-producto-list",
  templateUrl: "./producto-list.component.html",
  styleUrls: ["./producto-list.component.scss"]
})
export class ProductoListComponent implements OnInit {
  @Input() listaProductos: any = [];

  constructor() {}

  ngOnInit() {}
}
