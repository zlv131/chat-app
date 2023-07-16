import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react'
import store from "./store/store.ts";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <QueryClientProvider client={queryClient}>
              <ChakraProvider>
                  <App />
              </ChakraProvider>
          </QueryClientProvider>
      </Provider>
  </React.StrictMode>,
)
