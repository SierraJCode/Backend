import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
    @Prop({ required: true, unique: true })
    usuario: string;

    @Prop({ required: true })
    contraseña: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
