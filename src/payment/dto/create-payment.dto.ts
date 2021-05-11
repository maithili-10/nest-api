
import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {

    @ApiProperty()
    pstatus:string

    @ApiProperty()
    pamount:number

    @ApiProperty({required:false})
    pdate?:Date

    @ApiProperty()
    user:string;

   

    @ApiProperty()
    order:string

}
