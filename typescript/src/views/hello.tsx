import * as React from 'react';
import MyFile from './newfile';
import MyFile2 from './oldfile';
import * as classNames from 'classnames';
import Button from 'carbon/lib/components/button';

export const Hello = () => {
  /* return React.createElement('div', { children: 'Hello' }); */
  let thing: string = classNames('foo', 'bar', 'baz');
  let foo = MyFile2
  debugger
  return (
    <div>
      { thing }
      { foo }
      <MyFile />
    </div>
  )
}

/* export interface HelloProps { compiler: string; framework: string; } */

/* export const Hello = (props: HelloProps) => { */
/*   `<h1>Hello from { props.compiler } and { props.framework }!</h1>`; */
/* } */
