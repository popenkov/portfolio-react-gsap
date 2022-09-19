import { useQuery } from '@tanstack/react-query';
import { BlogService } from '../services/blog.service';

export const useGetAllPosts = () => {
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
      select: ({ data }) => {
        return Array.from(data.posts);
      },
    }
  );
  return { arePostsLoading, allBlogData };
};
