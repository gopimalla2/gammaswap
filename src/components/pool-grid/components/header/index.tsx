import Skeleton from '@mui/material/Skeleton';

import styles from './index.module.scss';
import ArrowTopRightSquare from '../../../assets/icons/ArrowTopRightSquare';
import Star from '../../../assets/icons/Star';
import { Product } from '../../types';

const InfoHeader = ({ item }: { item: Product }) => {
  const redirect = () => {
    window &&
      window?.open(`https://goerli.etherscan.io/address/${item.address}`, '_blank')?.focus();
  };
  return (
    <div className={styles.infoHeader}>
      <div className={styles.left}>
        <div className={styles.icons}>
          {item.product?.icon || <Skeleton variant="circular" width={40} height={40} />}
          {item.settling?.icon || <Skeleton variant="circular" width={40} height={40} />}
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            {item.product?.symbol ? (
              `${item.product?.symbol} / ${item.settling?.symbol}`
            ) : (
              <Skeleton variant="text" sx={{ fontSize: '18px' }} />
            )}
          </div>
          <div className={styles.additional}>
            <div className={styles.flexCenter}>
              <span>Uniswap v2</span>
              <span onClick={redirect}>
                <ArrowTopRightSquare />
              </span>
            </div>
            <div className={styles.eclipse}></div>
            <div className={styles.flexCenter}>
              <span>View on Etherscan</span>
              <span onClick={redirect}>
                <ArrowTopRightSquare />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Star />
      </div>
    </div>
  );
};

export default InfoHeader;
