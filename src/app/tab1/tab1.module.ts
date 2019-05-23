import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { ProductoCardComponent } from "../common/producto-card/producto-card.component";
import { ProductoFormComponent } from "../common/producto-form/producto-form.component";
import { ProductoListComponent } from "../common/producto-list/producto-list.component";
import { NumeroDirective } from "../_directives/numero.directive";
import { DecimalPipe } from "../_pipe/decimal.pipe";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: Tab1Page }])
  ],
  declarations: [
    Tab1Page,
    ProductoCardComponent,
    ProductoFormComponent,
    ProductoListComponent,
    NumeroDirective,
    DecimalPipe
  ],
  entryComponents: [ProductoFormComponent]
})
export class Tab1PageModule {}
