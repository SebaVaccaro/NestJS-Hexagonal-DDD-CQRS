import { Controller, Get } from "@nestjs/common";

@Controller()
export class HomeController{
@Get()
helloWord(){
    return "helloWord"
}
}