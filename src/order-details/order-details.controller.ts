import { Controller, Get, Post, Body, Patch, Param,Request, Delete } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

@Controller('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  @Post()
  create( @Body() createorderdetailsDto: CreateOrderDetailDto) {
    return this.orderDetailsService.create(createorderdetailsDto);
  }
  findAll() {
    return this.orderDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDetailDto: UpdateOrderDetailDto) {
    return this.orderDetailsService.update(+id, updateOrderDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderDetailsService.remove(+id);
  }
}
function uid(uid: any, productId: any, createOrderDetailDto: CreateOrderDetailDto) {
  throw new Error('Function not implemented.');
}

function productId(uid: (uid: any, productId: any, createOrderDetailDto: CreateOrderDetailDto) => void, productId: any, createOrderDetailDto: CreateOrderDetailDto) {
  throw new Error('Function not implemented.');
}

