export class UpdateTaskDto{
  readonly name?: string; /* O ponto de interrogação faz com que receber aquele atributo do body seja opcional */
  readonly description?: string;
  readonly completed?: boolean;
}