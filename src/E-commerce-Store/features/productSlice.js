import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productAPI";

const initialState = {
  loading: false,
  error: "",
  products: [],
  currentPage: 1,
  filteredProducts : [],
  productsPerPage: 12,
  totalPages: 0,
  productNumber: 0,
  currentCategory: "smartphones",
  cart:[]
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.filteredProducts = state.products.filter(
        (product) => product.category === action.payload
      );
      state.totalPages = Math.ceil(
        state.filteredProducts.length / state.productsPerPage
      );
      state.productNumber = 0;
      state.currentCategory = action.payload;
    },
    setCart: (state, action) =>{
      state.cart.push(action.payload)
    },
    setCurrentPage: (state, action)=>{
      state.currentPage = action.payload
    },
    setProductNumber: (state, action) =>{
      state.productNumber = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.currentPage = state.products.slice(0, 12);
        const categories = []
        for(let x of state.products){
          if(categories.indexOf(x['category']) == -1){
            categories.push(x['category'])
          }
        };
        state.categories = categories;
        state.filteredProducts = state.products.filter((item) => item['category'] == state.currentCategory);
        state.totalPages = Math.ceil(
          state.filteredProducts.length / state.productsPerPage
        );
          
        })
      // })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  actions: { setCurrentPage, setProducts, setCategories, setSelectedCategory, setCart, setProductNumber},
  reducer,
} = productSlice;

export default reducer;
