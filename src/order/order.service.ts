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
 async create(createOrderDto: CreateOrderDto,uid:string) {
  const user = await this.userService.findById(uid);
  
    return this.orderRepository.save({
      
      orderAmount:createOrderDto.amount,
      orderStatus:createOrderDto.status,
      orderDate:createOrderDto.odate,
      shippingDate:createOrderDto.sdate,
      products: createOrderDto.products,
      user:user

    
     
     
     
    });
  }
   findById(id:string){
    return this.orderRepository.find({
      where:{user:id},
      relations: ["user"]

    });
  }


  findAll() {
    return this.orderRepository.find({ relations: ["user", "address"] });
  }

 async findOne(id: number) {
    return this.orderRepository.findOne(id).then((data) => {
      if (!data) throw new NotFoundException();
      return data;
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(
        { orderId: id },
        {
          orderAmount:updateOrderDto.amount,
          orderStatus:updateOrderDto.status,
          orderDate:updateOrderDto.odate,
          shippedDate:updateOrderDto.sdate,
        }
    );
}

  remove(id: number) {
    return this.orderRepository.delete(id);
  }
}

