import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {

  constructor(private readonly taskService: TasksService) { }

  @Get()
  findAllTasks() {
    return this.taskService.findAll()
  }

  @Get(":id")
  findOneTask(@Param('id', ParseIntPipe)  id: number) { //O parseintpipe ja transforma o number (caso seja somente um numero) da rota em número para que a func possa receber
    return this.taskService.findOne(id)
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto)

  }

  @Patch(":id")
  updateTask(@Param("id", ParseIntPipe) id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto)
  }

  @Delete(":id")
  deleteTask(@Param("id", ParseIntPipe) id: number) {
    return this.taskService.delete(id)

  }
}
