import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  description?: string;
  client_id: string;
  freelancer_id: string;
  start_date?: any;
  end_date?: any;
  status: string;
  created_at?: any;
  updated_at?: any;

  user_project_client_idTouser?: UserInterface;
  user_project_freelancer_idTouser?: UserInterface;
  _count?: {};
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  client_id?: string;
  freelancer_id?: string;
  status?: string;
}
