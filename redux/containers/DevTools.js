import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';

export default createDevTools(
  <DockMonitor toggleVisibilityKey='H'
               changePositionKey='Q'
               defaultIsVisible={false}>
    <LogMonitor />
  </DockMonitor>
);

// export default createDevTools(
//   <DockMonitor toggleVisibilityKey='H'
//                changePositionKey='Q'
//                defaultPosition='bottom'
//                defaultIsVisible={false}>
//     <SliderMonitor />
//   </DockMonitor>
// );
