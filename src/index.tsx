
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './App'; // Your main App component
import { Provider } from 'react-redux';
import store from './reducers/store';
import { CommonProvider } from './Context/CommonContext';

// Create the ApolloClient instance
const client = new ApolloClient({
  uri: 'http://localhost:4000/', // Your GraphQL server URL
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
    <CommonProvider
        handleButtonClick={() => {}}
        handleCloseModal={() => {}}
        handleCloseDeleteModal={() => {}}
        handleChangePage={(event, newPage) => {}}
        handleChangeRowsPerPage={(event) => {}}
      >
        <App />
      </CommonProvider>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
