import { Module } from "@nestjs/common";
import { TaskControler } from "./task.controler";
import { TaskService } from "./task.service";
import { PrismaModule } from "../prisma.module";

@Module({
    controllers: [TaskControler],
    providers: [TaskService],
    imports: [PrismaModule],
})
export class TaskModule {}