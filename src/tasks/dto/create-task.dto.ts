import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateTaskDto{
  @IsString()
  @MinLength(5, {message: "O nome da tarefa precisa ter no mínimo 5 caracteres."})
  @IsNotEmpty({message: "O texto não pode ser vazio."})
  readonly name: string;

  @IsString()
  @MinLength(5, {message: "A descrição da tarefa precisa ter no mínimo 5 caracteres."})
  @IsNotEmpty({message: "O texto não pode ser vazio."})
  readonly description: string;
}