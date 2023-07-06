const mapping: Record<string, string> = {
  administrators: 'administrator',
  'guest-users': 'guest_user',
  organizations: 'organization',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
