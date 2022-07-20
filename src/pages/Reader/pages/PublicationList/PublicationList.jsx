import React, { useState } from 'react';
import { Preview } from '../Preview/Preview';

import { deletePublications } from 'services/readerApi';

import { useFetch } from 'hooks';
import { withApiState } from 'services/ApiState';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const List = ({ apiState }) => {
  const [publicationId, setPublicationId] = useState(0);

  const takeId = id => {
    setPublicationId(id);
    navigate('/react-homework-template/ReaderWithApi/list')
    toast.success('Publication has been deleted');
  };

  const navigate = useNavigate();

  const { state } = useFetch({
    fetchFunc: deletePublications,
    apiState: apiState,
    firstRenderCheck: true,
    initialValue: null,
    addProp: publicationId,
    stopFirstRender: false,
  });

  return (
    <div>
      <Preview newState={state} onClick={takeId} />
    </div>
  );
};

export const PublicationList = withApiState(List);
