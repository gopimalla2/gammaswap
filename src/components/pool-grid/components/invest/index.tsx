import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';

import { Product } from '../../types';
import styles from './index.module.scss';

const Invest = ({ item, duration }: { item: Product; duration: string }) => {
  // @ts-ignore
  const volume = (item?.volume && item?.volume[duration]) || {};
  // @ts-ignore
  const fees = (item?.fees && item?.fees[duration]) || {};
  return (
    <div className={styles.container}>
      <div className={styles.reserves}>
        <div className={styles.title}>Reserves</div>
        <div className={styles.range}>
          <div className={styles.bars}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
          </div>
        </div>
        <div className={styles.numbers}>
          <div>
            <span className={styles.num}>
              {item.product?.reserve || <Skeleton variant="text" width={75} height={18} />}
            </span>
            <span className={styles.symbol}>{item.product?.symbol}</span>
          </div>
          <div>
            <span className={styles.num}>
              {item.settling?.reserve || <Skeleton variant="text" width={150} height={18} />}
            </span>
            <span className={styles.symbol}>{item.settling?.symbol}</span>
          </div>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.titles}>
          <div className={styles.title}>{duration} Volume</div>
          <div className={styles.title}>{duration} Fees</div>
        </div>
        <div className={styles.values}>
          <div className={styles.value}>${volume?.value}</div>
          <div className={styles.value}>${fees?.value}</div>
        </div>
      </div>
      <div className={styles.button}>
        <Button variant="contained">Invest in Pool</Button>
      </div>
    </div>
  );
};

export default Invest;
