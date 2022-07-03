import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm'


@Module({
    imports: [
        TasksModule,
        TypeOrmModule.forRoot({
           
        }),
    ],

})
export class AppModule { }
