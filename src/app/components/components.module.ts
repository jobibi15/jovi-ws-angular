import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from './body/body.component';
import { OrderInputComponent } from './orderInputs/orderInput.component';
import { OrderGridComponent } from './orderGrid/orderGrid.component';
import { BodyService } from './body/body.service';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],        
    declarations: [
       BodyComponent,
       OrderInputComponent,
       OrderGridComponent
    ],
    exports: [
        BodyComponent,
        OrderInputComponent,
        OrderGridComponent
    ]
})
export class ComponentModule {};