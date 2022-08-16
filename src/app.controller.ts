import { AppService } from "./app.service";
import { Controller, Get } from "@nestjs/common";

@Controller("/api")
export class AppController {
  constructor(private appSerivce: AppService) {}

  @Get("/users")
  getUsers() {
    return this.appSerivce.getUsers();
  }
}
