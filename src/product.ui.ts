import { Observer } from './observer';
import { ProductModel } from './product.model';

export class ProductUI implements Observer {
    constructor(private model : ProductModel){
        this.model.attach(this);
        this.renderUI();
    }

    renderUI() {
        console.log("calling render UI")
        this.draw();
    }

    draw() {
        console.log("calling draw")
    }

    update() {
        console.log("calling update");
        this.renderUI();

    }
}
