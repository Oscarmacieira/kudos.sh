import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type Meta = {
  __typename?: 'Meta';
  status?: Maybe<Scalars['JSON']['output']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _meta?: Maybe<Meta>;
  account?: Maybe<Account>;
  accounts: AccountPage;
  kudos?: Maybe<Kudos>;
  kudoss: KudosPage;
  reference?: Maybe<Reference>;
  references: ReferencePage;
};


export type QueryAccountArgs = {
  address: Scalars['String']['input'];
};


export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AccountFilter>;
};


export type QueryKudosArgs = {
  id: Scalars['String']['input'];
};


export type QueryKudossArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<KudosFilter>;
};


export type QueryReferenceArgs = {
  id: Scalars['String']['input'];
};


export type QueryReferencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ReferenceFilter>;
};

export type Account = {
  __typename?: 'account';
  address: Scalars['String']['output'];
  referenceCount: Scalars['BigInt']['output'];
};

export type AccountFilter = {
  AND?: InputMaybe<Array<InputMaybe<AccountFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AccountFilter>>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  referenceCount?: InputMaybe<Scalars['BigInt']['input']>;
  referenceCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  referenceCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  referenceCount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  referenceCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  referenceCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  referenceCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  referenceCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type AccountPage = {
  __typename?: 'accountPage';
  items: Array<Account>;
  pageInfo: PageInfo;
};

export type Kudos = {
  __typename?: 'kudos';
  id: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  referenceCount: Scalars['BigInt']['output'];
};

export type KudosFilter = {
  AND?: InputMaybe<Array<InputMaybe<KudosFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<KudosFilter>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  referenceCount?: InputMaybe<Scalars['BigInt']['input']>;
  referenceCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  referenceCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  referenceCount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  referenceCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  referenceCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  referenceCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  referenceCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type KudosPage = {
  __typename?: 'kudosPage';
  items: Array<Kudos>;
  pageInfo: PageInfo;
};

export type Reference = {
  __typename?: 'reference';
  author: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jsonMetadata?: Maybe<Scalars['JSON']['output']>;
  metadata: Scalars['String']['output'];
  recipient: Scalars['String']['output'];
  status: ReferenceStatus;
  timestamp: Scalars['BigInt']['output'];
};

export type ReferenceFilter = {
  AND?: InputMaybe<Array<InputMaybe<ReferenceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ReferenceFilter>>>;
  author?: InputMaybe<Scalars['String']['input']>;
  author_contains?: InputMaybe<Scalars['String']['input']>;
  author_ends_with?: InputMaybe<Scalars['String']['input']>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_not?: InputMaybe<Scalars['String']['input']>;
  author_not_contains?: InputMaybe<Scalars['String']['input']>;
  author_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  author_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with?: InputMaybe<Scalars['String']['input']>;
  recipient?: InputMaybe<Scalars['String']['input']>;
  recipient_contains?: InputMaybe<Scalars['String']['input']>;
  recipient_ends_with?: InputMaybe<Scalars['String']['input']>;
  recipient_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recipient_not?: InputMaybe<Scalars['String']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['String']['input']>;
  recipient_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  recipient_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recipient_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  recipient_starts_with?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ReferenceStatus>;
  status_in?: InputMaybe<Array<InputMaybe<ReferenceStatus>>>;
  status_not?: InputMaybe<ReferenceStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<ReferenceStatus>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type ReferencePage = {
  __typename?: 'referencePage';
  items: Array<Reference>;
  pageInfo: PageInfo;
};

export enum ReferenceStatus {
  Hidden = 'HIDDEN',
  Visible = 'VISIBLE'
}

export type ReferenceFragment = { __typename?: 'reference', id: string, recipient: string, author: string };

export type GetReferencesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReferencesQuery = { __typename?: 'Query', references: { __typename?: 'referencePage', items: Array<{ __typename?: 'reference', id: string, recipient: string, author: string }> } };

export const ReferenceFragmentDoc = gql`
    fragment Reference on reference {
  id
  recipient
  author
}
    `;
export const GetReferencesDocument = gql`
    query GetReferences {
  references {
    items {
      ...Reference
    }
  }
}
    ${ReferenceFragmentDoc}`;

/**
 * __useGetReferencesQuery__
 *
 * To run a query within a React component, call `useGetReferencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferencesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetReferencesQuery(baseOptions?: Apollo.QueryHookOptions<GetReferencesQuery, GetReferencesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReferencesQuery, GetReferencesQueryVariables>(GetReferencesDocument, options);
      }
export function useGetReferencesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReferencesQuery, GetReferencesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReferencesQuery, GetReferencesQueryVariables>(GetReferencesDocument, options);
        }
export function useGetReferencesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetReferencesQuery, GetReferencesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetReferencesQuery, GetReferencesQueryVariables>(GetReferencesDocument, options);
        }
export type GetReferencesQueryHookResult = ReturnType<typeof useGetReferencesQuery>;
export type GetReferencesLazyQueryHookResult = ReturnType<typeof useGetReferencesLazyQuery>;
export type GetReferencesSuspenseQueryHookResult = ReturnType<typeof useGetReferencesSuspenseQuery>;
export type GetReferencesQueryResult = Apollo.QueryResult<GetReferencesQuery, GetReferencesQueryVariables>;