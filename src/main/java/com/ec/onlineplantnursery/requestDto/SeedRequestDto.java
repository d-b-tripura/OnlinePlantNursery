package com.ec.onlineplantnursery.requestDto;

import javax.persistence.Column;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import com.ec.onlineplantnursery.entity.Product;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class SeedRequestDto {

	private int pId;
	
	private String productName;
	
	private String description;
	
	
	@ApiModelProperty(name = "SeedName", value = "Hold the min 3 char seed name", required = true)
	@NotEmpty(message = "Seed Name cannot be left blank or null")
	@Size(min = 3, max = 15, message = "Invalid Seed Name, Seed Name should have minimum 3 and maximum 15 characters")
	@Column(unique = true)
	private String commonName;

	@ApiModelProperty(name = "Bloom Time", value = "Hold the min 3 char bloom time", required = true)
	@NotEmpty(message = "bloom time cannot be left blank or null")
	@Size(min = 3, max = 15, message = "Invalid bloom time, bloom time should have minimum 3 and maximum 15 characters")
	private String bloomTime;

	@ApiModelProperty(name = "Watering", value = "Should not be null", required = true)
	@NotEmpty(message = "watering cannot be left blank or null")
	private String watering;

	@ApiModelProperty(name = "Difficulty Level", value = "Should not be null", required = true)
	@NotEmpty(message = "difficulty level cannot be left blank or null")
	private String difficultyLevel;

	@ApiModelProperty(name = "Temperature", value = "Should not be null", required = true)
	@NotEmpty(message = "Temperature cannot be left blank or null")
	private String temparature;

	@ApiModelProperty(name = "Type of Seeds", value = "Should not be null", required = true)
	@NotEmpty(message = "Type of seeds cannot be left blank or null")
	private String typeOfSeeds;


	@ApiModelProperty(name = "SeedStock", value = "Holds only positive value")
	@Positive(message = "Stock should be positive")
	private Integer seedsStock;

	@ApiModelProperty(name = "SeedCost", value = "Holds only positive value")
	@Positive(message = "Cost should be positive")
	private double seedsCost;

	@ApiModelProperty(name = "SeedsPerPacket", value = "Holds only positive value")
	@Positive(message = "SeedsPerPacket should be positive")
	private Integer seedsPerPacket;

	public SeedRequestDto() {
		super();

	}

	public SeedRequestDto(int pId, String productName, String description,
			@NotEmpty(message = "Seed Name cannot be left blank or null") @Size(min = 3, max = 15, message = "Invalid Seed Name, Seed Name should have minimum 3 and maximum 15 characters") String commonName,
			@NotEmpty(message = "bloom time cannot be left blank or null") @Size(min = 3, max = 15, message = "Invalid bloom time, bloom time should have minimum 3 and maximum 15 characters") String bloomTime,
			@NotEmpty(message = "watering cannot be left blank or null") String watering,
			@NotEmpty(message = "difficulty level cannot be left blank or null") String difficultyLevel,
			@NotEmpty(message = "Temperature cannot be left blank or null") String temparature,
			@NotEmpty(message = "Type of seeds cannot be left blank or null") String typeOfSeeds,
			@Positive(message = "Stock should be positive") Integer seedsStock,
			@Positive(message = "Cost should be positive") double seedsCost,
			@Positive(message = "SeedsPerPacket should be positive") Integer seedsPerPacket) {
		this.pId=pId;
		this.productName = productName;
		this.description=description;
		this.commonName = commonName;
		this.bloomTime = bloomTime;
		this.watering = watering;
		this.difficultyLevel = difficultyLevel;
		this.temparature = temparature;
		this.typeOfSeeds = typeOfSeeds;
		this.seedsStock = seedsStock;
		this.seedsCost = seedsCost;
		this.seedsPerPacket = seedsPerPacket;
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

	public String getCommonName() {
		return commonName;
	}

	public void setCommonName(String commonName) {
		this.commonName = commonName;
	}

	public String getBloomTime() {
		return bloomTime;
	}

	public void setBloomTime(String bloomTime) {
		this.bloomTime = bloomTime;
	}

	public String getWatering() {
		return watering;
	}

	public void setWatering(String watering) {
		this.watering = watering;
	}

	public String getDifficultyLevel() {
		return difficultyLevel;
	}

	public void setDifficultyLevel(String difficultyLevel) {
		this.difficultyLevel = difficultyLevel;
	}

	public String getTemparature() {
		return temparature;
	}

	public void setTemparature(String temparature) {
		this.temparature = temparature;
	}

	public String getTypeOfSeeds() {
		return typeOfSeeds;
	}

	public void setTypeOfSeeds(String typeOfSeeds) {
		this.typeOfSeeds = typeOfSeeds;
	}

	

	public Integer getSeedsStock() {
		return seedsStock;
	}

	public void setSeedsStock(Integer seedsStock) {
		this.seedsStock = seedsStock;
	}

	public double getSeedsCost() {
		return seedsCost;
	}

	public void setSeedsCost(double seedsCost) {
		this.seedsCost = seedsCost;
	}

	public Integer getSeedsPerPacket() {
		return seedsPerPacket;
	}

	public void setSeedsPerPacket(Integer seedsPerPacket) {
		this.seedsPerPacket = seedsPerPacket;
	}
	
	

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "SeedRequestDto [pId=" + pId + ", productName=" + productName + ", description=" + description
				+ ", commonName=" + commonName + ", bloomTime=" + bloomTime + ", watering=" + watering
				+ ", difficultyLevel=" + difficultyLevel + ", temparature=" + temparature + ", typeOfSeeds="
				+ typeOfSeeds + ", seedsStock=" + seedsStock + ", seedsCost="
				+ seedsCost + ", seedsPerPacket=" + seedsPerPacket + "]";
	}

	
}
