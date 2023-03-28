import Skeleton from '@mui/material/Skeleton';

import { Product } from '../../types';
import styles from './index.module.scss';

const Liquidity = ({ item, duration }: { item: Product; duration: string }) => {
  // @ts-ignore
  const liquidity = (item?.liquidity && item?.liquidity[duration]) || {};
  // @ts-ignore
  const apr = (item?.apr && item?.apr[duration]) || {};
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.title}>Liquidity</div>
        <div className={styles.value}>
          {liquidity?.value ? (
            `$${liquidity?.value?.toFixed(2)}M`
          ) : (
            <Skeleton variant="text" sx={{ fontSize: '32px' }} />
          )}
        </div>
        <div className={styles.change}>
          {liquidity?.change ? (
            <>
              <div
                className={liquidity.change > 0 ? styles.positive : styles.negative}
              >{`${liquidity?.change?.toFixed(2)}%`}</div>
              <div className={styles.duration}>{duration} Change</div>
            </>
          ) : (
            <Skeleton variant="text" width={144} height={15} />
          )}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>APR</div>
        <div className={styles.value}>
          {apr?.value ? (
            `${apr?.value?.toFixed(2)}%`
          ) : (
            <Skeleton variant="text" sx={{ fontSize: '32px' }} />
          )}
        </div>
        <div className={styles.change}>
          {apr?.value ? (
            <div className={styles.duration}>{duration} Performance</div>
          ) : (
            <Skeleton variant="text" width={144} height={15} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Liquidity;
