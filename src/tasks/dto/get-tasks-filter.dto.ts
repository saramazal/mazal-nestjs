import { TaskStatus } from '../task.model';
import { IsEnum, IsOptiona, IsString } from 'class-validator'


export class GetTasksFilterDto {
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;

    @IsOptional()
    @IsString()
    search?: string;
}