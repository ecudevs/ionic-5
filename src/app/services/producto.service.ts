import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { GlobalConfigService } from "./global-config.service";

@Injectable({
  providedIn: "root"
})
export class ProductoService {
  constructor(private http: Http, private config: GlobalConfigService) {}

  getProductos() {
    return this.http
      .get(this.config.getUrlBase() + "/productos")
      .pipe(map((response: Response) => response.json()));
  }

  insertarProducto(producto) {
    return this.http
      .post(this.config.getUrlBase() + "/productos", producto)
      .pipe(map((response: Response) => response.json()));
  }

  modificarProducto(producto) {
    return this.http
      .put(this.config.getUrlBase() + "/productos", producto)
      .pipe(map((response: Response) => response.json()));
  }
}
