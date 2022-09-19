import { useQuery } from '@tanstack/react-query';
import { BlogService } from '../services/blog.service';

export const useGetPost = (id) => {
  const {
    isLoading,
    data: postData,
    error,
  } = useQuery(['post item', id], () => BlogService.getPost(id), {
    onError: (error) => {
      console.log(error.message);
    },
    enabled: !!id,
  });
  return { isLoading, postData };
};
