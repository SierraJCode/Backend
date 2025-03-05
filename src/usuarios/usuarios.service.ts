import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from './usuario.schema';

@Injectable()
export class UsuariosService {
    constructor(@InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>) { }

    async crearUsuario(usuario: string, contraseña: string): Promise<Usuario> {
        const nuevoUsuario = new this.usuarioModel({ usuario, contraseña });
        return nuevoUsuario.save();
    }

    async obtenerUsuarios(): Promise<Usuario[]> {
        return this.usuarioModel.find().exec();
    }
}
