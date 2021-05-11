import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { UserService } from 'src/auth/user/user.service';
import { OrderService } from 'src/order/order.service';
import { ProductService } from 'src/product/product.service';
import { Repository } from 'typeorm';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrderDetails } from './entities/order-detail.entity';

@Injectable()
export class OrderDetailsService {
  orderRepository: any;
  constructor(
    @InjectRepository(OrderDetails) private orderdetailsRepository: Repository<OrderDetails>,
    private orderService:OrderService,private productService:ProductService,
    
   
  ) {}
  async create(orderId:number,productId:number,createOrderDetailsDto: CreateOrderDetailDto) {
    return this.orderdetailsRepository.save({
     orderAmount:createOrderDetailsDto.Amount,
     orderQty:createOrderDetailsDto.qty,
    
  
    });
  }






  

  async findAll(orderId: number,productId:number) {
    const data = await this.orderdetailsRepository.find({
      where: { orderId: orderId,productId:productId }
    });
    if (data.length == 0)
      throw new NotFoundException();
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderDetail`;
  }

  update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return `This action updates a #${id} orderDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderDetail`;
  }
}
function id(id: any) {
  throw new Error('Function not implemented.');
}

