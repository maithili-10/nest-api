import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/auth/user/user.service';
import { Repository } from 'typeorm';
import { ProductService } from 'src/product/product.service';
import { OrderService } from 'src/order/order.service';

@Injectable()
export class PaymentService {

  constructor(
    @InjectRepository(Payment) private paymentRepository: Repository<Payment>,
    private userService: UserService

    
  ) {}

  async create(uid:string, createPaymentDto: CreatePaymentDto) {
    const user = await this.userService.findById(uid);
    
    
    return this.paymentRepository.save({

      paymentStatus:createPaymentDto.pstatus,
      paymentAmount:createPaymentDto.pamount,
      paymentDate:createPaymentDto.pdate,
      user:user,
     
     
      
      
      
      
      

     
     
     
    });
  }


 

  findAll() {
    return this.paymentRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
