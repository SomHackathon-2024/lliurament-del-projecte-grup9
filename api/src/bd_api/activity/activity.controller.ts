import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ActivityService } from "./activity.service";
import { Activity } from "./activity.entity";
import { Delete } from "@nestjs/common";
import { DeleteResult } from "typeorm";

@Controller('activities')
export class ActivityController {
    constructor(private readonly ActivityService: ActivityService) {}

    @Get()
    public async findAll(): Promise<Activity[]> {
        return this.ActivityService.findAll();
    }

    @Get(':id')
    public async findById(@Param('id') id: string): Promise<Activity> {
        return this.ActivityService.findById(+id);
    }

    @Get(':userId')
    public async findByUser(@Param('userId') userId: string): Promise<Activity[]> {
        return this.ActivityService.findByUser(+userId);
    }

    @Post()
    public async create(@Body() createActivityDto: Activity): Promise<Activity> {
        return this.ActivityService.save(createActivityDto);
    }

    @Put(':id')
    public async update(@Param('id') id: string, @Body() updateActivityDto: Activity): Promise<Activity> {
        return this.ActivityService.update(+id, updateActivityDto);
    }

    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<DeleteResult> {
        return this.ActivityService.delete(+id);
    }

    
}