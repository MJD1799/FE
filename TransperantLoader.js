import React from 'react';

import PropTypes from 'prop-types';

import cx from 'classnames';

import Loader from 'tcomponents/molecules/loader';

import { PropertyControlledComponent } from 'tcomponents/molecules';

import { EMPTY_STRING } from 'tbase/app.constants';

import styles from './translucentLoader.module.scss';

const TranslucentLoader = ({
  children,

  containerClassName,

  loaderClassName,

  isLoading,
}) => (
  <div className={cx('relative', containerClassName)}>
    <PropertyControlledComponent controllerProperty={isLoading}>
      <Loader
        className={cx('absolute', styles.translucentLoader, loaderClassName)}
      />
    </PropertyControlledComponent>

    {children}
  </div>
);

TranslucentLoader.propTypes = {
  children: PropTypes.node,

  containerClassName: PropTypes.string,

  loaderClassName: PropTypes.string,

  isLoading: PropTypes.bool,
};

TranslucentLoader.defaultProps = {
  children: null,

  containerClassName: EMPTY_STRING,

  loaderClassName: EMPTY_STRING,

  isLoading: false,
};

export default TranslucentLoader;
