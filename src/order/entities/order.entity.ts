import { UserEntity } from 'src/auth/entities/user.entity';
//import { Product } from 'src/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column,JoinColumn,ManyToOne } from 'typeorm';


@Entity({name:'order'})
export class Order {
    @PrimaryGeneratedColumn()
    orderId:number;

    @Column({default:'pending',nullable:true})
    orderStatus:string;
    
    @Column({default:0})
    orderAmount:number

    @Column({ type: 'datetime',nullable:true,default: ()=>'CURRENT_TIMESTAMP' })
    orderDate:Date;

    @Column({type:'date',nullable:true})
    shippedDate:Date;

  

    @ManyToOne(()=>UserEntity,(user)=>user.userId)
    @JoinColumn({name:'userId'})
    user:UserEntity
}