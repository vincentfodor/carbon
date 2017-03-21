import * as React from 'react';
import { OldSchool } from './oldfile';
import * as classNames from 'classnames';

export const Hello = () => {
  /* return React.createElement('div', { children: 'Hello' }); */
  let thing = classNames('foo', 'bar', 'baz');
  return (
    <div>
      { thing }
      <OldSchool />
    </div>
  )
}

/* export interface HelloProps { compiler: string; framework: string; } */

/* export const Hello = (props: HelloProps) => { */
/*   `<h1>Hello from { props.compiler } and { props.framework }!</h1>`; */
/* } */
