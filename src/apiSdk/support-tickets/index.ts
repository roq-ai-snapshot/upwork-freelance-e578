import axios from 'axios';
import queryString from 'query-string';
import { SupportTicketInterface, SupportTicketGetQueryInterface } from 'interfaces/support-ticket';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSupportTickets = async (
  query?: SupportTicketGetQueryInterface,
): Promise<PaginatedInterface<SupportTicketInterface>> => {
  const response = await axios.get('/api/support-tickets', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSupportTicket = async (supportTicket: SupportTicketInterface) => {
  const response = await axios.post('/api/support-tickets', supportTicket);
  return response.data;
};

export const updateSupportTicketById = async (id: string, supportTicket: SupportTicketInterface) => {
  const response = await axios.put(`/api/support-tickets/${id}`, supportTicket);
  return response.data;
};

export const getSupportTicketById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/support-tickets/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSupportTicketById = async (id: string) => {
  const response = await axios.delete(`/api/support-tickets/${id}`);
  return response.data;
};
