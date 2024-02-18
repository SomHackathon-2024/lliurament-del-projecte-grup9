import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { DeleteResult } from 'typeorm';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    public async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    public async findById(@Param('id') id: string): Promise<User> {
        return this.userService.findById(+id);
    }

    @Post()
    public async create(@Body() createUserDto: User): Promise<User> {
        return this.userService.create(createUserDto);
    }

    @Put(':id')
    public async update(@Param('id') id: string, @Body() updateUserDto: User): Promise<User> {
        return this.userService.update(+id, updateUserDto);
    }

    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<DeleteResult> {
        return this.userService.delete(+id);
    }
}
