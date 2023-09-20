import axios from 'axios';
import queryString from 'query-string';
import { AgencyMemberInterface, AgencyMemberGetQueryInterface } from 'interfaces/agency-member';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAgencyMembers = async (
  query?: AgencyMemberGetQueryInterface,
): Promise<PaginatedInterface<AgencyMemberInterface>> => {
  const response = await axios.get('/api/agency-members', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAgencyMember = async (agencyMember: AgencyMemberInterface) => {
  const response = await axios.post('/api/agency-members', agencyMember);
  return response.data;
};

export const updateAgencyMemberById = async (id: string, agencyMember: AgencyMemberInterface) => {
  const response = await axios.put(`/api/agency-members/${id}`, agencyMember);
  return response.data;
};

export const getAgencyMemberById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/agency-members/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAgencyMemberById = async (id: string) => {
  const response = await axios.delete(`/api/agency-members/${id}`);
  return response.data;
};
