import React, { Suspense } from 'react';

// Import the Map component lazily
const Map = React.lazy(() => import('./Map'));

function MapLoader({...props}) {
  return (
    <Suspense fallback={<div>Loading Map...</div>}>
      <Map {...props} />
    </Suspense>
  );
}

export default MapLoader;
