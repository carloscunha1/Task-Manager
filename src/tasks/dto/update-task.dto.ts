import { PartialType } from "@nestjs/mapped-types";
import { CreateTaskDto } from "./create-task.dto";
import { IsBoolean, IsOptional } from "class-validator";

export class  UpdateTaskDto extends PartialType(CreateTaskDto) { //Utilizando o PartyalType eu reaproveito o que vem do create e torno-os opcionais

  @IsBoolean()
  @IsOptional()
   readonly completed? : boolean;
}