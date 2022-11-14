import { EntityReference, XrmContextDataverseClient } from "dataverse-ify";
import { Account, accountMetadata } from "../dataverse-gen/entities/Account";

export class AccountRibbion {
  static async closeOpportunities(context: Xrm.Events.EventContext): Promise<void> {
    const service = new XrmContextDataverseClient(Xrm.WebApi);
    service.create({
      parentaccountid: new EntityReference(accountMetadata.logicalName, "hello world"),
    } as Account);
  }
}
