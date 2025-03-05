import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: string;

    @Prop({ required: true })
    cantidad: number;

    @Prop({ required: true })
    image: string;


}

export const ProductoSchema = SchemaFactory.createForClass(Producto);