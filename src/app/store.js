import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { blogApi } from '../feature/blog'

export const store =configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [blogApi.reducerPath]: blogApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(blogApi.middleware),
  })