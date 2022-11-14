/* eslint-disable*/
import { accountMetadata } from "./entities/Account";
import { activitypartyMetadata } from "./entities/ActivityParty";
import { emailMetadata } from "./entities/Email";

export const Entities = {
  Account: "account",
  ActivityParty: "activityparty",
  Email: "email",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    account: accountMetadata,
    activityparty: activitypartyMetadata,
    email: emailMetadata,
  },
  actions: {
  }
};