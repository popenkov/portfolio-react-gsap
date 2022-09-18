import { useQuery } from '@tanstack/react-query';
import { ProjectsService } from '../services/projects.service';

export const useGetAllProjects = () => {
  const {
    areProjectsLoading,
    data: allProjectsData,
    error,
  } = useQuery(
    ['projects'], // уникальный ключ для запроса
    () => ProjectsService.getAll(),
    {
      onError: (error) => {
        console.log(error.message);
      },
    }
  );
  return { areProjectsLoading, allProjectsData };
};
