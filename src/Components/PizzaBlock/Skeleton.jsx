import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="128" cy="132" r="125" />
    <rect x="0" y="280" rx="8" ry="8" width="272" height="21" />
    <rect x="5" y="320" rx="8" ry="8" width="265" height="75" />
    <rect x="8" y="421" rx="9" ry="9" width="80" height="32" />
    <rect x="127" y="413" rx="26" ry="26" width="146" height="46" />
  </ContentLoader>
);

export default Skeleton;
