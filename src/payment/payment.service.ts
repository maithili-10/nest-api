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

  async create(createPaymentDto: CreatePaymentDto,uid:string) {
    const user = await this.userService.findById(uid);
    
    let [data, count] = await this.paymentRepository.findAndCount();
    console.log(data);
    console.log(count);
    return this.paymentRepository.save({

     
      paymentAmount:createPaymentDto.pamount,
      paymentMethod: createPaymentDto.pMethod,
      paymentType: createPaymentDto.pType,
      orderId: count + 1,
      user:user,
     
});
  }

  async findAll(userId:string) {
    const user=await this.userService.findById(userId)
    return this.paymentRepository.find({where:{userId:user}});
  }
 

 

  findOne(id: number) {
    return this.paymentRepository.findOne(id);
}

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
