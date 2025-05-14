import {
  buildingsIcon,
  houseViewIcon,
  insightsIcon,
  supportIcon,
  walletIcon,
} from '~/assets/icons';

export const sidebarArr = [
  {
    svg: houseViewIcon,
    route: 'Overview',
    link: '.',
  },
  {
    svg: insightsIcon,
    route: 'Insights',
    link: 'insights',
  },
  {
    svg: buildingsIcon,
    route: 'My Listings',
    link: 'listings',
  },
  {
    svg: walletIcon,
    route: 'Token',
    link: 'token',
  },
  {
    svg: supportIcon,
    route: 'Support',
    link: 'support',
  },
]