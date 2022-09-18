import { useQuery } from '@tanstack/react-query';
import { BlogService } from '../services/blog.service';

export const useGetAllProjects = () => {
  const {
    arePostsLoading,
    data: allBlogData,
    error,
  } = useQuery(
    ['projects'], // уникальный ключ для запроса
    () => BlogService.getAll(),
    {
      onError: (error) => {
        console.log(error.message);
      },
    }
  );
  return { arePostsLoading, allBlogData };
};
