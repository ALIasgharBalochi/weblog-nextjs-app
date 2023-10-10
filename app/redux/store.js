import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { weblogApi } from "./weblogApi";

export const store = configureStore({
    reducer: {
        [weblogApi.reducerPath]: weblogApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weblogApi.middleware)
})

setupListeners(store.dispatch);