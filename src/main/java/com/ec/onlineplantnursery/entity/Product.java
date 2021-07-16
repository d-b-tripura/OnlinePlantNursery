package com.ec.onlineplantnursery.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.TableGenerator;
import javax.validation.constraints.NotEmpty;

import io.swagger.annotations.ApiModelProperty;


@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name = "productType",discriminatorType = DiscriminatorType.STRING)
public class Product implements Comparable<Product>,Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	private int pId;
	
	private String productName;
	
	@ApiModelProperty(name = "Product Description", value = "Should not be null", required = true)
	@NotEmpty(message = "product description cannot be left blank or null")
	private String description;
	
	
	@Column(name="productType", insertable = false, updatable = false)
	private String productType;

	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	


	public Product(int pId, String productName, String description, String productType) {
		super();
		this.pId = pId;
		this.productName = productName;
		this.description = description;
		this.productType = productType;
	}

	
	





	public Product(int pId, String productName,
			@NotEmpty(message = "product description cannot be left blank or null") String description) {
		super();
		this.pId = pId;
		this.productName = productName;
		this.description = description;
	}




	public String getProductType() {
		return productType;
	}




	public void setProductType(String productType) {
		this.productType = productType;
	}




	public int getpId() {
		return pId;
	}



	public void setpId(int pId) {
		this.pId = pId;
	}

	


	public String getProductName() {
		return productName;
	}






	public void setProductName(String productName) {
		this.productName = productName;
	}






	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + pId;
		result = prime * result + ((productName == null) ? 0 : productName.hashCode());
		result = prime * result + ((productType == null) ? 0 : productType.hashCode());
		return result;
	}




	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Product other = (Product) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (pId != other.pId)
			return false;
		if (productName == null) {
			if (other.productName != null)
				return false;
		} else if (!productName.equals(other.productName))
			return false;
		if (productType == null) {
			if (other.productType != null)
				return false;
		} else if (!productType.equals(other.productType))
			return false;
		return true;
	}




	@Override
	public String toString() {
		return "Product [pId=" + pId + ", productName=" + productName + ", description=" + description
				+ ", productType=" + productType + "]";
	}




	@Override
	public int compareTo(Product o) {
		// TODO Auto-generated method stub
		return 0;
	}



	
	

}



