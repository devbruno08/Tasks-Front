const BASE_URL = process.env.REACT_APP_BACKENDAPP || 'tasks-back-production.up.railway.app';

export const POST_USER = `${BASE_URL}/users`;

export const LOGIN = `${BASE_URL}/users/login`;

export const SEND_PASSWORD = `${BASE_URL}/email/password`;

export const TASKS = `${BASE_URL}/tasks`;

export const TASK_BY_ID = (id: string) => `${BASE_URL}/tasks/${id}`;
