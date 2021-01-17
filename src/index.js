const React = require('react');
const {render:rtlRender, ...all} = require('@testing-library/react');
const {Provider} = require('react-redux');
const {createStore} = require('redux');
const {BrowserRouter, Switch, Route} = require('react-router-dom');

const render = function render(ui, {initialState, store, ...renderOptions} = {initialState: {}}) {
  const mockStore = store || createStore((state, action) => state, {...initialState});

  const Wrapper = function Wrapper({ children }) {
    return (
      <Provider store={mockStore}>
        <BrowserRouter>
          <Switch>
            <Route path='*'>
              {children}
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

module.exports = {
  ...all,
  render,
};
