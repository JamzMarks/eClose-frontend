export const ROUTES = {
  HOME: '/',
  AUTH: {
    SIGNIN: '/signin',
    SIGNUP: '/signup',
    LOGOUT: '/logout',
  },
  ACCOUNT: {
    SETTINGS: '/settings',
    NOTIFICATIONS:'/notifications'
  },
  FEED: '/feed',
  MAP: '/map',
  EXPLORE: '/explore',
  HELP: '/help',
  PROFILE: (username: string) => `/profile/${username}`,
};
