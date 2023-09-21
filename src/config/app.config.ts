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
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Patient', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read clinic information',
    'Read healthcare provider information',
    'Read appointment information',
    'Read insurance information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage clinic information',
    'Manage appointments',
    'Manage insurance information',
    'Manage healthcare provider information',
    'Manage medical records',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/c443cdff-762b-4728-83a7-252b568240e2',
};
