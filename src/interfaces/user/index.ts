import { AdministratorInterface } from 'interfaces/administrator';
import { TeamMemberInterface } from 'interfaces/team-member';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;

  administrator: AdministratorInterface[];
  team_member: TeamMemberInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  roq_user_id?: string;
  tenant_id?: string;
}
