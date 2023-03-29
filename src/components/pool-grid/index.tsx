import Info from '../assets/icons/Info';
import styles from './index.module.scss';
import Arbitrum from '../assets/icons/Arbitrum';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoHeader from './components/header';
import { useEffect, useState } from 'react';
import { Product } from './types';
import Liquidity from './components/liquidity';
import Invest from './components/invest';
import GammaSwapSelect from '../UIKit/Select';
import { defaultData, filterRangeList } from './helper';

const PoolGrid = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<Product[]>([]);
  // @ts-ignore
  const [selectedItem, setSelectedItem] = useState<Product>({});
  const [duration, setDuration] = useState('24h');

  const filterCallBack = (item: { id: string, label: string}) => {
    setDuration(item.id);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setData(defaultData);
      setSelectedItem(defaultData[0]);
    }, 1000);

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
            <div>
              <GammaSwapSelect title={duration} list={filterRangeList} callBack={filterCallBack}/>
            </div>
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
        <Invest item={selectedItem} duration={duration} />
      </div>
    </div>
  );
};

export default PoolGrid;
