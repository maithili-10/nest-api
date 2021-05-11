import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/auth/user/user.service';
import { OrderService } from 'src/order/order.service';
import { Repository } from 'typeorm';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrderDetails } from './entities/order-detail.entity';

@Injectable()
export class OrderDetailsService {
 
  constructor(
    @InjectRepository(OrderDetails) private orderdetailsRepository: Repository<OrderDetails>,
   
  ) {}
  async create(createOrderDetailsDto: CreateOrderDetailDto) {
   
    

    return this.orderdetailsRepository.save({
     orderAmount:createOrderDetailsDto.Amount,
     orderQty:createOrderDetailsDto.qty,
    

    
      createdAt: new Date().toISOString(),
    });
  }






  

  findAll() {
    return this.orderdetailsRepository.find();
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

