
import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {

    

    @ApiProperty()
    pamount:number

    @ApiProperty({required:false})
    pdate?:Date

    @ApiProperty()
    user:string;

    @ApiProperty()
    pMethod?: string;

    @ApiProperty()
    order:string
   
    @ApiProperty()
    pType?: string;
}
