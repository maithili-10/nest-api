import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  mobileNo: string;

  

  @ApiProperty({nullable:true})
 
  line1: string;

  @ApiProperty({nullable:true})
 
  line2: string;

  @ApiProperty({nullable:true})
  
  city: string;

  @ApiProperty({nullable:true})
 
  state: string;

  @ApiProperty()
  
  pincode?: number;

  @ApiProperty()

  userId:string;
}
