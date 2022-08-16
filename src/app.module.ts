import { DatabaseModule } from './database/database.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { Module } from "@nestjs/common";

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [DatabaseModule]
})
export class AppModule {}