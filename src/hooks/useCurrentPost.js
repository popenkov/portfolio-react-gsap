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
  console.log('projectData', projectData);
  return { isLoading, postData };
};
