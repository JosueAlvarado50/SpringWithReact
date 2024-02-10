package net.javaS.R.springbootandreact.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller// esto es para hacer de nuestra clase un controller
@ResponseBody//esto es para indicar que retornara el objeto en tipo json
public class HelloWorldController {
    @GetMapping("/hello-world") //sirve para controllar HTTP get request
    public String helloWorld (){
        return  "hello World";
    }
}
