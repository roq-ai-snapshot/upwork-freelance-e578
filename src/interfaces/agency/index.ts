import { AgencyMemberInterface } from 'interfaces/agency-member';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AgencyInterface {
  id?: string;
  name: string;
  description?: string;
  owner_id: string;
  created_at?: any;
  updated_at?: any;
  agency_member?: AgencyMemberInterface[];
  user?: UserInterface;
  _count?: {
    agency_member?: number;
  };
}

export interface AgencyGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  owner_id?: string;
}
