import ETH from '../assets/coins/ETH';
import USDC from '../assets/coins/USDC';

export const defaultData = [
    {
      id: 1,
      product: {
        symbol: 'ETH',
        icon: <ETH />,
        reserve: '6598',
      },
      settling: {
        symbol: 'USDC',
        icon: <USDC />,
        reserve: '11,581,900.00',
      },
      liquidity: {
        '24h': {
          value: 23.0,
          change: 2.38,
        },
        '7d': {
          value: 123.0,
          change: -12.38,
        },
        '30d': {
          value: 323.0,
          change: 15.38,
        },
        '3m': {
          value: 523.0,
          change: -6.66,
        },
        '6m': {
          value: 623.0,
          change: 21.38,
        },
        '1y': {
          value: 823.0,
          change: 22.38,
        },
      },
      apr: {
        '24h': {
          value: 2.34,
        },
        '7d': {
          value: 5.3,
        },
        '30d': {
          value: 6.3
        },
        '3m': {
          value: 7.3
        },
        '6m': {
          value: 8.3
        },
        '1y': {
          value: 9.3
        },
      },
      volume: {
        '24h': {
          value: '15,00M',
        },
        '7d': {
          value: '16,00M',
        },
        '30d': {
          value: '21,000M',
        },
        '3m': {
          value: '25,000M',
        },
        '6m': {
          value: '35,000M',
        },
        '1y': {
          value: '45,000M',
        },
      },
      fees: {
        '24h': {
          value: '50,000',
        },
        '7d': {
          value: '60,000',
        },
        '30d': {
          value: '70,000',
        },
        '3m': {
          value: '80,000',
        },
        '6m': {
          value: '90,000',
        },
        '1y': {
          value: '100,000',
        },
      },
      address: '0xB4B0570038d3C9c4Bd2590637c48Cb1964D887a5',
    },
  ];
  
  export const filterRangeList = [
    {
      id: '24h',
      label: 'Last 24h'
    },
    {
      id: '7d',
      label: 'Last 7 days'
    },
    {
      id: '30d',
      label: 'Last 30 days'
    },
    {
      id: '3m',
      label: 'Last 3 months'
    },
    {
      id: '6m',
      label: 'Last 6 months'
    },
    {
      id: '1y',
      label: 'Last 1 year'
    },
  ];
  