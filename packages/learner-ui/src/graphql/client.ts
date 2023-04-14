import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  concat,
} from "@apollo/client";
import { getAllQuestionItems, getQuestionItem } from "~/graphql/queries";

const getClient = (deliveryToken: string, schemaUrl: string) => {
  const httpLink = new HttpLink({ uri: schemaUrl });

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({ headers: { access_token: deliveryToken } });
    return forward(operation);
  });

  return new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
  });
};

export class ContentStackGraphQLClient {
  client: ApolloClient<NormalizedCacheObject>;
  getAllQuestionItems = getAllQuestionItems;
  getQuestionItem = getQuestionItem;

  constructor(deliveryToken: string, schemaUrl: string) {
    this.client = getClient(deliveryToken, schemaUrl);
  }
}
