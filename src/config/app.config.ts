interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Client'],
  customerRoles: ['Guest'],
  tenantRoles: ['Client', 'Freelancer', 'Agency Owner', 'Agency Team Member', 'Support Staff'],
  tenantName: 'Company',
  applicationName: 'Upwork freelancer site',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read project information',
    'Read support ticket information',
  ],
  ownerAbilities: [
    'Manage own user information',
    'Create and manage own projects',
    'Create support tickets',
    'Read agency information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/ca1d54a5-aa51-4b89-9eea-a94bb4754722',
};
