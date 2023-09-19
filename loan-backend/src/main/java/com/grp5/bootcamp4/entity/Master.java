package com.grp5.bootcamp4.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "loan_master")
public class Master {

    private long id;
    private long emp_id;
    private  String item_cat;
    private String item_make;
   private String item_desc;
    private int duration_in_years;
    private long item_value;
    private Date issue_date;
   private String status;
   
    



	public Master() {
    	
    }

    public Master(long emp_id, String item_cat, String item_make, String item_desc, long item_value,Date issue_date, String status,int duration_in_years) {
        this.emp_id=emp_id;
        this.item_cat=item_cat;
        this.item_make=item_make;
        this.item_desc=item_desc;
        this.item_value=item_value;
        this.issue_date=issue_date;
        this.status=status;
        this.duration_in_years = duration_in_years;
        
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "emp_id", nullable = false)
    public long getemp_id() {
        return emp_id;
    }
    public void setemp_id(long emp_id) {
    	
    	 this.emp_id = emp_id;
    }

    @Column(name = "duration_in_years", nullable = false)
    public int getduration_in_years() {
        return duration_in_years;
    }
    public void setduration_in_years(int duration_in_years) {
        this.duration_in_years = duration_in_years;
        
    }  
   @Column(name = "Item Category", nullable = false)
    
    public String getItem_cat() {
	return item_cat;
}

public void setItem_cat(String item_cat) {
	this.item_cat = item_cat;
}
@Column(name = "Item Make", nullable = false)
public String getItem_make() {
	return item_make;
}

public void setItem_make(String item_make) {
	this.item_make = item_make;
}
@Column(name = "Item Desc", nullable = false)

public String getItem_desc() {
	return item_desc;
}

public void setItem_desc(String item_desc) {
	this.item_desc = item_desc;
}
@Column(name = "Item Value", nullable = false)

public long getItem_value() {
	return item_value;
}

public void setItem_value(long item_value) {
	this.item_value = item_value;
}
@Column(name = "issue date", nullable = false)
public Date getIssue_date() {
	return issue_date;
}

public void setIssue_date(Date issue_date) {
	this.issue_date = issue_date;
}
@Column(name = "Status", nullable = false)
public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

	

    
}
