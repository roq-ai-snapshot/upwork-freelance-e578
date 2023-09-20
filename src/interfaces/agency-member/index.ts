import { AgencyInterface } from 'interfaces/agency';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AgencyMemberInterface {
  id?: string;
  agency_id: string;
  user_id: string;
  joined_at?: any;
  role: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  agency?: AgencyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AgencyMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  agency_id?: string;
  user_id?: string;
  role?: string;
  status?: string;
}
