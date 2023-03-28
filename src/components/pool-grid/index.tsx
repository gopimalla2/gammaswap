import Info from '../assets/icons/Info';
import styles from './index.module.scss';
import Arbitrum from '../assets/icons/Arbitrum';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoHeader from './components/header';
import ETH from '../assets/coins/ETH';
import USDC from '../assets/coins/USDC';
import { useEffect, useState } from 'react';
import { Product } from './types';
import Liquidity from './components/liquidity';
// import GammaSwapSelect from '../UIKit/Select';

const defaultData = [
  {
    id: 1,
    product: {
      symbol: 'ETH',
      icon: <ETH />,
    },
    settling: {
      symbol: 'USDC',
      icon: <USDC />,
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
    },
    apr: {
      '24h': {
        value: 2.34,
      },
      '7d': {
        value: 5.3,
      },
    },
    address: '0xB4B0570038d3C9c4Bd2590637c48Cb1964D887a5',
  },
];

const PoolGrid = () => {
  const [data, setData] = useState<Product[]>([]);
  // @ts-ignore
  const [selectedItem, setSelectedItem] = useState<Product>({});
  const [duration, setDuration] = useState('7d');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setData(defaultData);
      setSelectedItem(defaultData[0]);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.header} ${styles.flexCenter}`}>
        <div className={styles.left}>
          <h2>Pools</h2>
        </div>
        <div className={`${styles.right} ${styles.flexCenter}`}>
          <div className={`${styles.prange} ${styles.flexCenter}`}>
            <div>
              Performance Range
              <Tooltip title="This is the performance range tooltip">
                <IconButton>
                  <Info />
                </IconButton>
              </Tooltip>
            </div>
            <div>{/* <GammaSwapSelect/> */}</div>
          </div>
          <div className={`${styles.arbitrum} ${styles.flexCenter}`}>
            <Arbitrum />
            <div>Arbitrum</div>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <InfoHeader item={selectedItem} />
        <Liquidity item={selectedItem} duration={duration} />
      </div>
    </div>
  );
};

export default PoolGrid;
