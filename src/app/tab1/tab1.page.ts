import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  productos = [
    {
      nombre: "Coca-Cola",
      stock: 15,
      categoria: "BEBIDAS",
      precio: 1
    },
    {
      nombre: "Coronas",
      stock: 15,
      categoria: "BEBIDAS",
      precio: 1
    },
    {
      nombre: "Mc. Bacon",
      stock: 15,
      categoria: "ALIMENTOS",
      precio: 1
    }
  ];
}
