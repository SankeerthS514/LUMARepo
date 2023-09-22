package com.grp5.bootcamp4.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employee_issue")
public class Issued {

    private long id;
    private long empid;
    private long loan_id;
    private long item_id;
    private Date issue_date;
   
    private Date return_date;
    
    
   
    



	public Issued() {
    	
    }

    public Issued(long empid, long item_id, Date issue_date, Date return_date ) {
        
        this.item_id=item_id;
        this.empid=empid;
        this.issue_date=issue_date;
        this.return_date=return_date;
        
        
       
        
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

  

    
   @Column(name = "EmpId", nullable = false)
    
    public long getempid() {
	return empid;
}

public void setempid(long empid) {
	this.empid = empid;
}
@Column(name = "Itemid", nullable = false)
public long getitem_id() {
	return item_id;
}

public void setitem_id(long item_id) {
	this.item_id = item_id;
}
@Column(name = "Issue Date", nullable = false)

public Date getissue_date() {
	return issue_date;
}

public void setissue_date(Date issue_date) {
	this.issue_date = issue_date;
}
@Column(name = "Return Date", nullable = false)

public Date getreturn_date() {
	return return_date;
}

public void setreturn_date(Date return_date) {
	this.return_date = return_date;
}



	

    
}
