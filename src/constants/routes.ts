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
  PROFILE: (id: string) => `/profile/${id}`,
};
