import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {

 
  @ApiProperty()
  amount: number;

  @ApiProperty()
  status: string;

  @ApiProperty({ required: false })
  odate?: Date;

  @ApiProperty({ required: false })
  sdate?: Date;
  
  @ApiProperty()
  user:string;

  
}