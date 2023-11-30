import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException } from "@nestjs/common";
import { TaskService } from "./task.service";
import { Task } from "@prisma/client";

@Controller('tasks')
export class TaskControler{

    constructor(private readonly taskService: TaskService) {}

    @Get()
    async getAllTask(){
        return this.taskService.getAllTask()
    }

    @Post()
    async createTask(@Body() data: Task) {
        return this.taskService.createTask(data)
    }

    @Get(':id')
    async getTaskById( @Param('id') id: String) {
        const taskFound = await this.taskService.getTaskById(Number(id));
        if (!taskFound) throw new BadRequestException("Task does not exist");
        return taskFound;
    }

    @Delete(':id')
    async deleteTask( @Param('id') id: String) {
        try{
            return await this.taskService.deleteTask(Number(id))
        } catch (error) {
            throw new BadRequestException("Task does not exist")
        }
    }

    @Put(':id')
    async updateTask( @Param('id') id: String, @Body() data: Task) {
        try{
            return this.taskService.updateTask(Number(id), data)
        } catch (error){
            throw new BadRequestException("Task does not exist")
        }
    }
}