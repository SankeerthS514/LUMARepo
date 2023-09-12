package com.grp5.bootcamp4.entity;




import java.util.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {

    private long id;
	private User user;
    private String firstName;
    private String lastName;
    private String emailId;
    private String department;
    private String desiganation;
    private Date doj;
    private Date dob;

    public Employee() {
    	
    }

    public Employee(String firstName, String lastName, String emailId,String department,String desiganation, Date doj, Date dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.department=department;
        this.desiganation=desiganation;
        this.doj=doj;
        this.dob=dob;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "first_name", nullable = false)
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
    	
    	 this.firstName = firstName;
    }

    @Column(name = "last_name", nullable = false)
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Column(name = "email_address", nullable = false)
    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
    @Column(name="deparment",nullable=false)
    public String getdeparment()
    {
    	return department;
    
   }
    public void setdeparment(String deparment) {
    	this.department=deparment;
    }
    
    @Column(name="designation",nullable=false)
    public String getdesignation()
    {
    	return desiganation;
    
   }
    public void setdesignation(String designation) {
    	this.desiganation=designation;
    }
    @Column(name="doj",nullable=false)
    public Date getdoj()
    {
    	return doj;
    
   }
    public void setdoj(Date doj) {
    	this.doj=doj;
    }
    @Column(name="dob",nullable=false)
    public Date getdob()
    {
    	return dob;
    
   }
    public void setdob(Date dob) {
    	this.dob=dob;
    }
    
    
  
    
}
