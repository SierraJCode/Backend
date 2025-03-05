import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoModule } from './producto/producto.module';


@Module({
  imports: [UsuariosModule, MongooseModule.forRoot('mongodb://localhost:27017/usuariosDB'), ProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
