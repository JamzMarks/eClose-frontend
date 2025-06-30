export const ROUTES = {
  HOME: '/',
  AUTH: {
    SIGNIN: '/signin',
    SIGNUP: '/signup',
    LOGOUT: '/logout',
  },
  FEED: '/feed',
  MAP: '/map',
  EXPLORE: '/explore',
  HELP: '/help',
  PROFILE: (id: string) => `/profile/${id}`,
};
