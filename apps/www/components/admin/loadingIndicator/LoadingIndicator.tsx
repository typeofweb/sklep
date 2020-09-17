import { Loading } from 'carbon-components-react';
import React from 'react';
import { useIsFetching } from 'react-query';

import styles from './loadingIndicator.module.scss';

export const LoadingIndicator = () => {
  const isFetching = useIsFetching();
  return (
    isFetching && (
      <Loading
        small
        description="Active loading indicator"
        className={styles.loading}
        withOverlay={false}
      />
    )
  );
};
