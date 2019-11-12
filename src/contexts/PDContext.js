// DISTRIBUSI FREKUENSI CONTEXT
import {createContext} from 'react';

const PDContext = createContext()
export const PDProvider = PDContext.Provider;
export const PDConsumer = PDContext.Consumer;
export default PDContext;
