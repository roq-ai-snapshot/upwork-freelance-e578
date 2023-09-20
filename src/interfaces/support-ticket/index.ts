import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SupportTicketInterface {
  id?: string;
  user_id: string;
  subject: string;
  description?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface SupportTicketGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  subject?: string;
  description?: string;
  status?: string;
}
