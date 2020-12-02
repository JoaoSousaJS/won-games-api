/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter({ version }) {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
        <a key="website" href="https://www.linkedin.com/in/joao-sousa-751628111/" target="_blank" rel="noopener noreferrer">
          Joao Sousa
        </a>
        &nbsp;



      </div>
    </Wrapper>
  );
}


export default LeftMenuFooter;
