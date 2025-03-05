import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Producto, ProductoDocument } from './producto.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductoService {
    constructor(@InjectModel(Producto.name) private productoModel: Model<ProductoDocument>) { }

    async crearProducto(name: string, price: string, cantidad: number, image: string) {
        const nuevoProducto = new this.productoModel({ name, price, cantidad, image });
        return nuevoProducto.save();
    }

}

