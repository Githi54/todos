import { useSelector } from 'react-redux';
import { RootState } from '../types/RootState';

export const useAppSelector = <T>(selector: (state: RootState) => T): T => {
  return useSelector<RootState, T>(selector);
};
