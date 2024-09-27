import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://heny-api.beta.zormor.com/graphql',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`, 
  },
});

export default client;