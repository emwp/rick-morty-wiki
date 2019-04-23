import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import RelayNetworkLogger from 'relay-runtime/lib/RelayNetworkLogger';

const fetchQuery = async (operation, variables) => {
  const response = await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
  const data = await response.json();

  return data;
};

const network = Network.create(RelayNetworkLogger.wrapFetch(fetchQuery));

const environment = new Environment({
  network,
  store: new Store(new RecordSource()),
});

export default environment;
