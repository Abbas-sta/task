import { createSlice } from "@reduxjs/toolkit";
import { fetchHomePageData } from "./homeAPI";

const initialState = {
  loading: false,
  error: "",
  data: undefined
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    // setSelectedCategory: (state, action) => {
    //   state.filteredProducts = state.products.filter(
    //     (product) => product.category === action.payload
    //   );
    //   state.totalPages = Math.ceil(
    //     state.filteredProducts.length / state.productsPerPage
    //   );
    //   state.productNumber = 0;
    //   state.currentCategory = action.payload;
    // },
    // setCart: (state, action) =>{
    //   state.cart.push(action.payload)
    // },
    // setCurrentPage: (state, action)=>{
    //   state.currentPage = action.payload
    // },
    // setProductNumber: (state, action) =>{
    //   state.productNumber = action.payload
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomePageData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchHomePageData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; 
        })
      // })
      .addCase(fetchHomePageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default homeSlice.reducer;
