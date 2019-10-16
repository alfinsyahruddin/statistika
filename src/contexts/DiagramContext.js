// DISTRIBUSI FREKUENSI CONTEXT
import {createContext} from 'react';

const DiagramContext = createContext()
export const DiagramProvider = DiagramContext.Provider;
export const DiagramConsumer = DiagramContext.Consumer;
export default DiagramContext;
