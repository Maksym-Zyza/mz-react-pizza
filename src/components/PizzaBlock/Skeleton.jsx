import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = props => (
  <ContentLoader
    speed={0}
    width={280}
    height={485}
    viewBox="0 0 280 485"
    backgroundColor="#f1efef"
    foregroundColor="#d6d1d1"
    {...props}
  >
    <circle cx="142" cy="119" r="110" />
    <rect x="2" y="255" rx="10" ry="10" width="278" height="28" />
    <rect x="3" y="314" rx="10" ry="10" width="276" height="87" />
    <rect x="4" y="423" rx="10" ry="10" width="94" height="30" />
    <rect x="129" y="415" rx="25" ry="25" width="150" height="45" />
  </ContentLoader>
);
