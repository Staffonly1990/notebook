import React, { createContext, FC, ReactElement, ReactNode, useContext } from "react";

import { Root } from './root';

const StoreContext = createContext<Root>({} as Root);

type StoreComponent = FC<{ store: Root; children: ReactNode }>

export const useStores = (): Root => useContext(StoreContext);

export const StoreProvider: StoreComponent = ({ children, store }): ReactElement =>
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
