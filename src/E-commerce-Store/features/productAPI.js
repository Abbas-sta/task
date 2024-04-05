import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("https://dummyjson.com/products");

      if (response.ok) { // Check for successful response
        const data = await response.json();
        const categories = []
        for(let x of data.products){
          if(categories.indexOf(x['category']) == -1){
            categories.push(x['category'])
          }
        }
        data['categories'] = categories
        return data;
      } else {
        return thunkAPI.rejectWithValue({
          message: `Failed to fetch products. Status code: ${response.status}`,
        }); // Provide more informative error message
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      return thunkAPI.rejectWithValue({ message: "Network error" }); // Generic error for network issues
    }
  }
);


