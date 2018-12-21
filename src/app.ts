import {ProductUI} from './product.ui';
import {ProductModel} from './product.model'

let model = new ProductModel();

const ui = new ProductUI(model);

model.make = "Toyota";
model.title  = "good title";

