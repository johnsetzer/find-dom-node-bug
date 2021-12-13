import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function App() {
  return (
    <div>
      <h1>To Reproduce Bug:</h1>
      <ol>
        <li>Hover over the div below.</li>
        <li>Then check your browser console to see the warning.</li>
      </ol>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 250 }}
        overlay={(injected) => (
          <Tooltip id="tip" {...injected}>
            <div style={{backgroundColor: 'yellow'}}>Check your browser console for `Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode.`</div>
          </Tooltip>
        )}
      >
        {({ ref, ...triggerHandler }) => (
          <div ref={ref} {...triggerHandler}>Hover over me.</div>
        )}
      </OverlayTrigger>
    </div>
  );
}

export default App;
