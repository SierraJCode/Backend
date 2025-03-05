import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { Producto, ProductoSchema } from './producto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Producto.name, schema: ProductoSchema }])
  ],
  controllers: [ProductoController],
  providers: [ProductoService],
  exports: [ProductoService], // Exportarlo si lo usas en otros módulos
})
export class ProductoModule { }