import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { DeleteResult, Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findByRole(role: string): Promise<User[]> {
        return this.userRepository.find({ where: { role: role } });
    }

    findById(id: number): Promise<User> {
        return this.userRepository.findOne({ where: { id: id } });
    }

    async insert(user: Partial<User>): Promise<User> {
        return this.userRepository.create(user);
    }

    async save(user: Partial<User>): Promise<User> {
        return this.userRepository.save(await this.insert(user));
    }

    async create(user: User): Promise<User> {
        return this.userRepository.save(this.userRepository.create(user));
    }

    async update(id: number, userDto: User): Promise<User> {
        const toUpdate = await this.userRepository.findOne({ where: { id: id } });
        const updated = Object.assign(toUpdate, userDto);
        return await this.create(updated);
    }

    async delete(id: number): Promise<DeleteResult> {
        return this.userRepository.delete({ id: id });
    }
}