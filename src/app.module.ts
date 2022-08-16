import { AppService } from './app.service';
import { AppController } from './app.controller';
import { Module } from "@nestjs/common";

@Module({
    controllers: [AppController],
    providers: [AppService],
    exports: []
})
export class AppModule {}