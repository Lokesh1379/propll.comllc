import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { encryptTransform } from "redux-persist-transform-encrypt";

import commonSlice from "@/features/commonProps";
import adminSlice from "@/features/admin";
import jobsSlice from "@/features/jobs";

// 🔐 Use environment variable in production
const encryptor = encryptTransform({
  secretKey: import.meta.env.VITE_REDUX_SECRET_KEY || "dev-secret-key",
  onError: (error) => {
    console.error("Encryption error:", error);
  },
});

const rootReducer = combineReducers({
  commonProps: commonSlice,
  adminData: adminSlice,
  jobData: jobsSlice,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  transforms: [encryptor],
  whitelist: ["adminData", "jobData", "commonProps"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);

/* -------------------------
   🔥 Export Types (Important)
-------------------------- */

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
