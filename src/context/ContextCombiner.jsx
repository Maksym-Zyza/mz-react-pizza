import React from 'react';
import { AppContextWrapper } from './AppContextWrapper';

export const ContextCombiner = props => {
  return <AppContextWrapper>{props.children}</AppContextWrapper>;
};
