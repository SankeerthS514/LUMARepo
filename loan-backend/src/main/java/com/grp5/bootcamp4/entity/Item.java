package com.grp5.bootcamp4.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "items")
public class Item {

    private long id;
    private String item_cat;
    
    private String item_make;
    private String item_desc;
   
    private long item_value;
    
    private String status;
   
    



	public Item() {
    	
    }

    public Item(String item_cat, String item_make, String item_desc, long item_value, String status) {
        
        this.item_cat=item_cat;
        this.item_make=item_make;
        this.item_desc=item_desc;
        this.item_value=item_value;
        
        this.status=status;
       
        
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
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

@Column(name = "Status", nullable = false)
public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

	

    
}
