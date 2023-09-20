const mapping: Record<string, string> = {
  agencies: 'agency',
  'agency-members': 'agency_member',
  companies: 'company',
  projects: 'project',
  'support-tickets': 'support_ticket',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
