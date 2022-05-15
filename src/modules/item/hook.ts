import { useQuery, UseQueryResult } from 'react-query';
import { PaginateParams, ResourceList } from '../common/types';
import { getItems, getItem } from './api';
import { Item } from './entities';

export const useGetItems = (params: PaginateParams): UseQueryResult<ResourceList> => {
  return useQuery(['items', params], () => getItems(params));
};

export const useGetItem = (name: string): UseQueryResult<Item> => {
  return useQuery(['item', name], () => getItem(name));
};
