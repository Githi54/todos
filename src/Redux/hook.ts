import { useSelector } from 'react-redux';
import { RootState } from '../types/RootState';

export const useAppSelector = useSelector<RootState>;
