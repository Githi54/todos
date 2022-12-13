import { store } from '../Redux/store';

export type RootState = ReturnType<typeof store.getState>