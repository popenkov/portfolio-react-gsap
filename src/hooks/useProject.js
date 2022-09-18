import { useQuery } from '@tanstack/react-query';
import { ProjectsService } from '../services/projects.service';

export const useGetProject = (id) => {
  const {
    isLoading,
    data: projectData,
    error,
  } = useQuery(
    ['project item', id], // уникальный ключ для запроса
    () => ProjectsService.getProject(id),
    {
      //   onSuccess: ({ data }) => {
      //     //   setProject(data[0]);
      //   },
      onError: (error) => {
        console.log(error.message);
      },
      //   select: ({ data }) => {
      //     console.log(data);
      //   },
    }
  );
  console.log('projectData', projectData);
  return { isLoading, projectData };
};
