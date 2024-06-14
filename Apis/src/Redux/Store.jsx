import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

import { 
    persistStore,
    persistReducer,
    
  } from 'redux-persist'
const persistConfig = {
    key: 'cartdata',
    version: 1,
    storage,
  }
  import Cartreducer from './Cartslice'

  const keyvalues=combineReducers({cartInfo:Cartreducer})
  const persistedReducer = persistReducer(persistConfig,keyvalues)
  export const store = configureStore({
    reducer: persistedReducer,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
  })
  
  export let persistor = persistStore(store)
  
  // ReactDOM.render(
  //   <Provider store={store}>
  //     <PersistGate loading={null} persistor={persistor}>
  //       <App />
  //     </PersistGate>
  //   </Provider>,
  //   document.getElementById('root'),
  // )
