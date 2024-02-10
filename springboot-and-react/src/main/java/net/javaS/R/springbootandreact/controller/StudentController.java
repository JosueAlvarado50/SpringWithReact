package net.javaS.R.springbootandreact.controller;

import net.javaS.R.springbootandreact.bean.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class StudentController {
    @GetMapping("/student")
    public Student getStudent(){
        Student student = new Student(
                1,
                "Josue",
                "alvarado"
        );
        return student;
    }
    @GetMapping("/students")
    public List<Student> getStudents(){
        List<Student> students = new ArrayList<>();
        students.add(new Student(69,"yoshua", "alvarado"));
        students.add(new Student(666, "c-antrax", "maquiavelico"));
        students.add(new Student(999, "leo", "alva"));
        students.add(new Student(888, "emi", "alva"));
        return students;
    }

    //Spring boot REST API with Path Variable

    @GetMapping("students/{id}/{first-name}/{last-name}")
    public Student studentPathVariable(
            @PathVariable("id") int id,
            @PathVariable("first-name") String firstName,
            @PathVariable("last-name") String lastName){
        return  new Student(id,firstName, lastName);
    }

    // Spring boot REST API with Request Param
    //http://localhost:8080/students/query?id=69&firstName=yoshi&lastName=alva
    @GetMapping("/students/query")
     public Student studentRequestVariable(@RequestParam int id, @RequestParam String firstName, @RequestParam String lastName){
        return  new Student(id,firstName,lastName);
     }
}
