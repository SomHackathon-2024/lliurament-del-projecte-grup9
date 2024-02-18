import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Activity } from "./activity.entity";
import { DeleteResult, Repository } from "typeorm";

@Injectable()
export class ActivityService {
    constructor(
        @InjectRepository(Activity) private activityRepository: Repository<Activity>,
    ) {}
    
    async findAll(): Promise<Activity[]> {
        return this.activityRepository.find();
    }

    async findById(id: number): Promise<Activity> {
        return this.activityRepository.findOne({ where: { id: id } });
    }

    async findByUser(userId: number): Promise<Activity[]> {
        return this.activityRepository.find({ where: { user: { id: userId } } });
    }

    async save(activity: Partial<Activity>): Promise<Activity> {
        return this.activityRepository.save(await this.activityRepository.create(activity));
    }

    async update(id: number, activity: Activity): Promise<Activity> {
        const toUpdate = await this.activityRepository.findOne({ where: { id: id } });
        const updated = Object.assign(toUpdate, activity);
        return await this.save(updated);
    }

    async delete(id: number): Promise<DeleteResult> {
        return this.activityRepository.delete({ id: id });
    }
}