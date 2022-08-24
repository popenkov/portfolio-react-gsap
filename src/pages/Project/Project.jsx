import React from 'react';
import { useParams } from 'react-router-dom';

function Project() {
  const { newsId } = useParams();
  return <div>Project: ${newsId}</div>;
}

export default Project;
