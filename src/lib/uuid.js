// @flow
import {
  v1 as uuid_timestamp,
  v4 as uuid_random,
  v5 as uuid_namespace,
} from 'uuid';

export function generateUUID(namespace: ?String) {
  if (namespace) {
    return generateUUIDForNamespace(namespace);
  }
  return generateUUIDForTimestamp();
}

export function generateUUIDForTimestamp() {
  return uuid_timestamp();
}

export function generateUUIDRandom() {
  return uuid_random();
}

export function generateUUIDForNamespace(namespace: String) {
  return uuid_namespace(namespace);
}
