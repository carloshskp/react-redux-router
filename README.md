# react-router-redux-test
This library replace @testing-library/react render with a new render wrapper to use components with router and redux and reexport all from @testing-library/react

## How to install
### Install with npm

`npm i react-router-redux-test`

### Install with yarn

`yarn add react-router-redux-test`

## Examples

Sample component using react-router-dom Link, usually this component throw an error, because depends on the react-router initialize.
```javascript
import React from 'react';
import {Link} from 'react-router-dom';

const MyComponent = props => <Link data-testid='MyComponent' to={props.to}>{props.children}</Link>;

export default MyComponent;
```

The test sample
```javascript
import React from 'react';
import {cleanup, render, screen} from 'react-router-redux-test';
import MyComponent from './MyComponent';

afterEach(cleanup);

describe('<MyComponent /> spec', () => {
  it('should render my component', function () {
    render(<MyComponent to='/'>Boo!</MyComponent>);
    
    expect(screen.getByTestId('MyComponent')).toHaveTextContent('Boo!');
  });
});

```