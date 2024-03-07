import React from 'react'
import {
    withServiceWorkerUpdater
} from '@3m1/service-worker-updater';
  
const Updater = (props) => {
    const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;

  return newServiceWorkerDetected ? (
      <div style={{ backgroundColor: 'red', marginBottom: 25, margin: 25 }}>
          Nueva versión detectada v4
          <button onClick={onLoadNewServiceWorkerAccept}>¡Actualizar!</button>
      </div>
  ) : null
}

export default withServiceWorkerUpdater(Updater);