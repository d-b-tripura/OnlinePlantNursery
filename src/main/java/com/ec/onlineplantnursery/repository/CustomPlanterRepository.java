package com.ec.onlineplantnursery.repository;

import java.util.List;

import com.ec.onlineplantnursery.entity.Planter;
import com.ec.onlineplantnursery.responseDto.ProductResponseDto;



public interface CustomPlanterRepository {

	List<Planter> viewPlanter(String planterShape);

	List<Planter> getPlantersByRange(double minCost, double maxCost);
	
	List<Planter> searchProduct(String text);
}
