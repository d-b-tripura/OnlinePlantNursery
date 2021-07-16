package com.ec.onlineplantnursery.requestDto;

import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
public class ProductRequestDto {
	
	private int pId;
	
	@NotEmpty
	private String productName;
	
	@NotEmpty
	private String description;

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
	
	
	

}
