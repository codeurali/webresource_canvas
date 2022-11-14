import { AccountAttributes } from "../dataverse-gen/entities/Account";

export class AccountForm {
  static async onload(context: Xrm.Events.EventContext): Promise<void> {
    await AccountForm.setTabVisibility(context);
    context.getFormContext().getAttribute(AccountAttributes.Name).addOnChange(AccountForm.setTabVisibility);
  }
  static async setTabVisibility(context: Xrm.Events.EventContext): Promise<void> {
    // set tab visibility based on account name value on load
    const formContext = context.getFormContext();
    const nameAttribute = formContext.getAttribute(AccountAttributes.Name);
    const nameValue = nameAttribute.getValue();
    const detailsTab = formContext.ui.tabs.get("DETAILS_TAB");

    if (nameValue == "hide") {
      // Hide tab "Details"
      detailsTab.setVisible(false);
    } else {
      // Show tab "Details"
      detailsTab.setVisible(true);
    }
  }
}
