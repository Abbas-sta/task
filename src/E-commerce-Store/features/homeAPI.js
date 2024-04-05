
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const backendUrl = "https://run.mocky.io/v3";

export const fetchHomePageData = createAsyncThunk(
    "fetchHomePageData",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(`${backendUrl}/48f264ae-db1c-402b-987f-8e9ee653d10b`)
        if (response.statusText == "OK") { // Check for successful response
        
        var data = response.data;
          return data;
        } else {
          return thunkAPI.rejectWithValue({
            message: `Failed to fetch data. Status code: ${response.status}`,
          }); // Provide more informative error message
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        return thunkAPI.rejectWithValue({ message: "Network error" }); // Generic error for network issues
      }
    }
  );
  