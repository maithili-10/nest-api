import { UserEntity } from 'src/auth/entities/user.entity';
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
import { Entity,PrimaryGeneratedColumn,Column,ManyToOne, JoinColumn, OneToOne} from 'typeorm';


@Entity({name:'payment'})

export class Payment{
    @PrimaryGeneratedColumn()
    paymentId:number;

    @Column({ type: 'datetime',nullable:true,default: ()=>'CURRENT_TIMESTAMP' })
    paymentDate:Date;
    
    @Column({default:10})
    paymentAmount:number;

    @ManyToOne(()=>UserEntity,(user)=>user.userId)
    @JoinColumn({name:'userId'})
    user:UserEntity

   
    @Column()
    orderId: number;
    
    @Column({ nullable: true })
    paymentMethod: string;



}



