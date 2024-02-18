import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsBoolean, IsEnum, IsNumber, IsString } from 'class-validator';
import { User } from '../user/user.entity';

@Entity()
export class Activity {
    @PrimaryGeneratedColumn()
    @IsNumber()
    id: number;

    @Column()
    @IsString()
    name: string;

    @Column()
    @IsString()
    description: string;

    @ManyToOne(() => User, (user: User) => user.id)
    user: User;

    @Column()
    @IsString()
    img: string;

    @Column()
    @IsString()
    location: string;

    @Column()
    @IsString()
    date: string;

    @Column()
    @IsString()
    time: string;

    @Column()
    @IsString()
    duration: string;

    @Column()
    @IsString()
    price: string;

    @Column()
    @IsString()
    idioma: string;

    @Column()
    @IsString()
    capacity: string;

    @Column()
    @IsString()
    category: string;

    @Column()
    @IsString()
    type: string;

    @Column()
    @IsString()
    status: string;

    @Column()
    @IsString()
    guide: string;

    @Column()
    @IsString()
    company: string;

    @Column()
    @IsString()
    activity: string;

    @Column()
    @IsString()
    DNI: string;

    @Column()
    @IsString()
    phone: string;

    @Column()
    @IsString()
    email: string;

    @Column()
    @IsString()
    username: string;

    @Column()
    @IsString()
    password: string;

    @Column()
    @IsString()
    role: string;
}