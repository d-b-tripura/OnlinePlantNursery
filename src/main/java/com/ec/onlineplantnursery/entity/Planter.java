package com.ec.onlineplantnursery.entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import javax.persistence.Table;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;



@Entity
@Table(name = "Planter")
@DiscriminatorValue("planter")
public class Planter extends Product{

	@Positive
	private float planterheight;

	@Min(value = 1, message = "Capacity cannot be less than 1")
	private int planterCapacity;

	@Positive
	private int drinageHoles;

	@Positive
	private int planterColor;

	@NotEmpty(message = "Planter shape cannot be left blank or null")
	@Size(min = 3, max = 15, message = "Invalid Planter shape")
	private String planterShape;

	@Min(value = 1, message = "In stock cannot be less than 1")
	private int planterStock;

	@Min(value = 50, message = "Cost cannot be less than 50")
	private double planterCost;


	public Planter() {
		super();

	}

	public Planter(int pId, String productName, String description, float planterheight,
			@Min(value = 1, message = "Capacity cannot be less than 1") int planterCapacity, int drinageHoles,
			int planterColor,
			@NotEmpty(message = "Planter shape cannot be left blank or null") @Size(min = 3, max = 15, message = "Invalid Planter shape") String planterShape,
			@Min(value = 1, message = "In stock cannot be less than 1") int planterStock,
			@Min(value = 50, message = "Cost cannot be less than 50") double planterCost) {
		super(pId, productName, description);

		this.planterheight = planterheight;
		this.planterCapacity = planterCapacity;
		this.drinageHoles = drinageHoles;
		this.planterColor = planterColor;
		this.planterShape = planterShape;
		this.planterStock = planterStock;
		this.planterCost = planterCost;
		
	}

	

	public float getPlanterheight() {
		return planterheight;
	}

	public void setPlanterheight(float planterheight) {
		this.planterheight = planterheight;
	}

	public int getPlanterCapacity() {
		return planterCapacity;
	}

	public void setPlanterCapacity(int planterCapacity) {
		this.planterCapacity = planterCapacity;
	}

	public int getDrinageHoles() {
		return drinageHoles;
	}

	public void setDrinageHoles(int drinageHoles) {
		this.drinageHoles = drinageHoles;
	}

	public int getPlanterColor() {
		return planterColor;
	}

	public void setPlanterColor(int planterColor) {
		this.planterColor = planterColor;
	}

	public String getPlanterShape() {
		return planterShape;
	}

	public void setPlanterShape(String planterShape) {
		this.planterShape = planterShape;
	}

	public int getPlanterStock() {
		return planterStock;
	}

	public void setPlanterStock(int planterStock) {
		this.planterStock = planterStock;
	}

	public double getPlanterCost() {
		return planterCost;
	}

	public void setPlanterCost(double planterCost) {
		this.planterCost = planterCost;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + drinageHoles;
		result = prime * result + planterCapacity;
		result = prime * result + planterColor;
		long temp;
		temp = Double.doubleToLongBits(planterCost);
		result = prime * result + (int) (temp ^ (temp >>> 32));
	
		result = prime * result + ((planterShape == null) ? 0 : planterShape.hashCode());
		result = prime * result + planterStock;
		result = prime * result + Float.floatToIntBits(planterheight);
		
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
		Planter other = (Planter) obj;
		if (drinageHoles != other.drinageHoles)
			return false;
		
		if (planterCapacity != other.planterCapacity)
			return false;
		if (planterColor != other.planterColor)
			return false;
		if (Double.doubleToLongBits(planterCost) != Double.doubleToLongBits(other.planterCost))
			return false;

		if (planterShape == null) {
			if (other.planterShape != null)
				return false;
		} else if (!planterShape.equals(other.planterShape))
			return false;
		if (planterStock != other.planterStock)
			return false;
		if (Float.floatToIntBits(planterheight) != Float.floatToIntBits(other.planterheight))
			return false;
		
		return true;
	}

	@Override
	public String toString() {
		return "Planter [planterheight=" + planterheight + ", planterCapacity="
				+ planterCapacity + ", drinageHoles=" + drinageHoles + ", planterColor=" + planterColor
				+ ", planterShape=" + planterShape + ", planterStock=" + planterStock + ", planterCost=" + planterCost
				+  "]";
	}

}
