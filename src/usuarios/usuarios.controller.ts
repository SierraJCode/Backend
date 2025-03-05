import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) { }

    @Post()
    async registrarUsuario(@Body() datos: { usuario: string; contraseña: string }) {
        return this.usuariosService.crearUsuario(datos.usuario, datos.contraseña);
    }

    @Get()
    async obtenerUsuarios() {
        return this.usuariosService.obtenerUsuarios();
    }
}
