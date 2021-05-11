import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDetailDto {

    @ApiProperty()
    Amount:number

    @ApiProperty()
    qty:number

    @ApiProperty()
    order:string

    
    @ApiProperty()
    user:string
   
    @ApiProperty()
    product:string


}
