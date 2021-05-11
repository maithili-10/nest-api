import { Controller, Get, Post, Body, Patch, Param,Request, Delete } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

@Controller('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  @Post()
  create(@Request() req:any,@Body() createorderdetailsDto: CreateOrderDetailDto) {
    return this.orderDetailsService.create(req.orderId,req.productId,createorderdetailsDto);
  }
  @Get()
  findAll(@Request() req:any) {
    return this.orderDetailsService.findAll(req.body.orderId,req.body.productId);
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
