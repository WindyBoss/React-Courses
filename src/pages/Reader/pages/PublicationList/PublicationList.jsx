import React, { useState } from 'react';
import Preview from '../Preview';

import { deletePublications } from 'services/readerApi';

import { useFetch } from 'hooks';
import { withApiState } from 'services/ApiState';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const List = ({ apiState }) => {
  const [publicationId, setPublicationId] = useState(0);

  const location = useLocation(); // - hook which returns object with url features (pathName, searchParams, hashes, etc...)
  console.log(location);

  const takeId = id => {
    setPublicationId(id);
    navigate(-1)
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

const PublicationList = withApiState(List);

export default PublicationList;
