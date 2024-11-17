import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({
        url: "api/divan-categories/",
        params,
      }),
      providesTags: ["Product"],
    }),
    getProductById: build.query({
      query: (id) => ({
        url: `/api/categories/${id}/`,
      }),
      providesTags: ["Product"],
    }),
    getTextById: build.query({
      query: (id) => ({
        url: `/api/divantexts/${id}/`,
      }),
      providesTags: ["Product"],
    }),
    getBoburnomaId: build.query({
      query: (id) => ({
        url: `/api/boburnoma/${id}/`,
      }),
      providesTags: ["Product"],
    }),
    SearchProducts: build.query({
      query: (params) => ({
        url: "api/search/",
        params,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useSearchProductsQuery,
  useGetTextByIdQuery,
  useGetBoburnomaIdQuery,
} = productApi;
