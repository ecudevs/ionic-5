import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-producto-card",
  templateUrl: "./producto-card.component.html",
  styleUrls: ["./producto-card.component.scss"]
})
export class ProductoCardComponent implements OnInit {
  @Input() producto: any = {};

  constructor() {}

  ngOnInit() {}
}
