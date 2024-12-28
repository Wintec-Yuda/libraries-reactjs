import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from 'react-redux';
import { store } from '../lib/redux/store';
import { RecoilRoot } from "recoil";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const queryClient = new QueryClient();

const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <DndProvider backend={HTML5Backend}>
            {children}
          </DndProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </Provider>
  )
}

export default Wrapper