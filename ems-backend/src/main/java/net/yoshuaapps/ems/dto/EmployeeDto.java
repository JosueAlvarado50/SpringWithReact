package net.yoshuaapps.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {

    private Long id;
    private  String firstName;
    

    private  String lastName;
    private  String email;

    public Long getId() {
        return  id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return  lastName;
    }

    public String getEmail() {
        return  email;
    }
}
