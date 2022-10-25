/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n    query person($id: Int!) {\n      findPerson(id: $id) {\n        firstName\n        lastName\n      }\n    }\n  ": types.PersonDocument,
    "\n    query persons($page: Int!, $size: Int!) {\n      findPersons(page: $page, size: $size) {\n        content {\n          firstName\n          lastName\n        }\n      }\n    }\n  ": types.PersonsDocument,
};

export function graphql(source: "\n    query person($id: Int!) {\n      findPerson(id: $id) {\n        firstName\n        lastName\n      }\n    }\n  "): (typeof documents)["\n    query person($id: Int!) {\n      findPerson(id: $id) {\n        firstName\n        lastName\n      }\n    }\n  "];
export function graphql(source: "\n    query persons($page: Int!, $size: Int!) {\n      findPersons(page: $page, size: $size) {\n        content {\n          firstName\n          lastName\n        }\n      }\n    }\n  "): (typeof documents)["\n    query persons($page: Int!, $size: Int!) {\n      findPersons(page: $page, size: $size) {\n        content {\n          firstName\n          lastName\n        }\n      }\n    }\n  "];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;