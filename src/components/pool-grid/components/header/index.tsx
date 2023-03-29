import Skeleton from '@mui/material/Skeleton';
import StarIcon from '@mui/icons-material/Star';

import styles from './index.module.scss';
import ArrowTopRightSquare from '../../../assets/icons/ArrowTopRightSquare';
import Star from '../../../assets/icons/Star';
import { Product } from '../../types';
import { useEffect, useState } from 'react';
import { getFavListFromLocalStorage } from '../../../../helpers';

const InfoHeader = ({ item }: { item: Product }) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setUserLoggedIn] = useState(false);
  const [isFav, setIsFav] = useState(false);
  
  const redirect = () => {
    window &&
      window?.open(`https://goerli.etherscan.io/address/${item.address}`, '_blank')?.focus();
  };

  useEffect(() => {
    const favList = getFavListFromLocalStorage();
    if(favList.indexOf(item.id) !== -1){
      setIsFav(true);
    }
  }, [item.id]);

  const handleFav = () => {
    if(!isLoggedIn){
      let favList = getFavListFromLocalStorage();
      if(favList.indexOf(item.id) !== -1){
        favList.splice(favList.indexOf(item.id));
        setIsFav(false);
      } else {
        favList.push(item.id);
        setIsFav(true);
      }
      localStorage.setItem('fav_list', JSON.stringify(favList));
    } else{
      // Make an API call to set the item in the fav list
    }
  }

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
        <div onClick={handleFav} className={`${styles.favContainer} ${isFav ? styles.filled : ''}`}>
          {
            isFav ? <StarIcon /> : <Star/>
          }
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
