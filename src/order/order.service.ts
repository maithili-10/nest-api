import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/auth/user/user.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';


@Injectable()
export class OrderService {
  [x: string]: any;
  
constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    private userService: UserService,
  ) {}
 async create(uid: string,createOrderDto: CreateOrderDto) {
  const user = await this.userService.findById(uid);
  
    return this.orderRepository.save({
      
      orderAmount:createOrderDto.amount,
      orderStatus:createOrderDto.status,
      orderDate:createOrderDto.odate,
      shippingDate:createOrderDto.sdate,
      user:user

    
     
     
     
    });
  }

  findAll() {
    return this.orderRepository.find();
  }

 async findOne(id: number) {
    return this.orderRepository.findOne(id).then((data) => {
      if (!data) throw new NotFoundException();
      return data;
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return this.orderRepository.delete(id);
  }
}