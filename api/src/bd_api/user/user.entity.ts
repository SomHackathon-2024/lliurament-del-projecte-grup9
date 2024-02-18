import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsBoolean, IsDate, IsEnum, IsNumber, IsString } from 'class-validator';
import * as bcrypt from 'bcrypt';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
    @IsNumber()
    id: number;

    @Column()
    @IsString()
    name: string;

    @Column()
    @IsString()
    cognoms: string;

    @Column({ unique: true })
    @IsString()
    username: string;

    @Column({
        select: false,
    })
    @IsString()
    password: string;

    @Column()
    @IsEnum(['HOMBRE', 'MUJER', 'OTRO'])
    sexe: string;

    @Column()
    @IsString()
    email: string;

    @Column()
    @IsString()
    phone: string;

    @Column()
    @IsString()
    img: string;

    @Column()
    @IsDate()
    data_naixement: Date;

    @Column()
    @IsEnum(['ADMIN', 'TURISME', 'RESIDENT', 'EMPRESA'])
    role: string;

    @Column()
    @IsString()
    DNI: string;

    @Column()
    @IsString()
    idioma: string;
     
    @Column({ default: true })
    @IsBoolean()
    active: boolean;

    @BeforeUpdate()
    @BeforeInsert()
    async hashPassword() {
        if (this.password) {
            if (this.password.length < 60 && this.password.substring(0, 4) != '$2b$') {
                const salt = await bcrypt.genSalt();
                this.password = await bcrypt.hash(this.password, salt);
            }
        }
    }
}