import { Route } from 'next';

export const routes = {
  home: '/' as Route,
  insideInvitation: '/inside_invitation' as Route,
} as const;

export type AppRoutes = keyof typeof routes;
