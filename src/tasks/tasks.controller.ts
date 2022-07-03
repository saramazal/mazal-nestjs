import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';



@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }
    @Post()
    createTask(
        @Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }
}