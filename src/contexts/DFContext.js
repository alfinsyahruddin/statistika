// DISTRIBUSI FREKUENSI CONTEXT
import {createContext} from 'react';

const DFContext = createContext()
export const DFProvider = DFContext.Provider;
export const DFConsumer = DFContext.Consumer;
export default DFContext;
