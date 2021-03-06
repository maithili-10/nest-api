import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsController } from './order-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetails } from './entities/order-detail.entity';
import { OrderService } from 'src/order/order.service';
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
import { ProductService } from 'src/product/product.service';

@Module({
  imports:[TypeOrmModule.forFeature( [OrderDetails,Order,Product])],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService,OrderService,ProductService]
})
export class OrderDetailsModule {}
