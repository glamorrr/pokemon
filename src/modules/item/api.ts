import { fetcher } from '@/utils/fetcher';
import { PaginateParams, ResourceList } from '../common/types';
import { Item } from './entities';

export const getItems = async (params: PaginateParams): Promise<ResourceList> => {
  const res = await fetcher.get<ResourceList>('/item', { params });
  return res.data;
};

export const getItem = async (name: string): Promise<Item> => {
  const res = await fetcher.get<Item>(`/item/${name}`);
  return res.data;
};
