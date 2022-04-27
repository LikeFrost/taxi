import React, { useEffect } from 'react';
import { ResponsiveGrid } from '@alifd/next';
import store from '@/store';
import styles from './index.module.scss';

function CarMessage() {
  const { Cell } = ResponsiveGrid;
  const [, dispatchers_user] = store.useModel('user');
  const [dataCar, dispatchers_car] = store.useModel('car');
  useEffect(() => {
    dispatchers_user.getUser().then((res) => {
      dispatchers_car.getCar(res.user.CarId);
    });
  }, []);
  return (
    <ResponsiveGrid >
      <Cell colSpan={12}>
        <div className={styles.title}>车辆信息查看</div>
      </Cell>
      <Cell colSpan={3} rowSpan={1} className={styles.list}>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车牌号:&nbsp;&nbsp;</span>
        <span className={styles.span}>{dataCar.car.CarId}</span>
      </Cell>
      <Cell colSpan={3} className={styles.list}>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;颜色:&nbsp;&nbsp;</span>
        <span className={styles.span}>{dataCar.car.Color}</span>
      </Cell>
      <Cell colSpan={3} className={styles.list}>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车型:&nbsp;&nbsp;</span>
        <span className={styles.span}>{dataCar.car.CarType}</span>
      </Cell>
      <Cell colSpan={3} className={styles.list}>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车辆ID:&nbsp;&nbsp;</span>
        <span className={styles.span}>{dataCar.car.Id}</span>
      </Cell>
      <Cell colSpan={3} className={styles.list}>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;计价器号:&nbsp;&nbsp;</span>
        <span className={styles.span}>{dataCar.car.CountMoney}</span>
      </Cell>
      <Cell colSpan={3} className={styles.list}>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;车辆状态:&nbsp;&nbsp;</span>
        <span className={styles.span}>{dataCar.car.State}</span>
      </Cell>
      <Cell colSpan={3} className={styles.list}>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;保险公司:&nbsp;&nbsp;</span>
        <span className={styles.span}>{dataCar.car.EnsureCompany}</span>
      </Cell>
      <Cell colSpan={3} className={styles.list}>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;年审日期:&nbsp;&nbsp;</span>
        <span className={styles.span}>{dataCar.car.EnsureYear}</span>
      </Cell>
      <Cell colSpan={3} className={styles.list}>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;安检日期:&nbsp;&nbsp;</span>
        <span className={styles.span}>{dataCar.car.SafeDay}</span>
      </Cell>
      <Cell colSpan={3} className={styles.list}>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;保险日期:&nbsp;&nbsp;</span>
        <span className={styles.span}>{dataCar.car.EnsureDay}</span>
      </Cell>
    </ResponsiveGrid>
  );
}

export default CarMessage;
