import React, { useEffect, useState } from 'react';
import { ResponsiveGrid, Table, Button, Input, DatePicker, Message } from '@alifd/next';
import styles from './index.module.scss';
import moment from 'moment';
import store from '@/store';

function Car() {
  const { Cell } = ResponsiveGrid;
  const { Column } = Table;
  const [dataCar, dispatchers_car] = store.useModel('car');
  const [current, setCurrent] = useState(0);
  const [ensure_year, setEnsureYear] = useState();
  const [safe_day, setSafeDay] = useState();
  const [ensure_day, setEnsureDay] = useState();
  useEffect(() => {
    dispatchers_car.getAllCar();
  }, []);
  const changeEnsureYear = (value) => {
    setEnsureYear(moment(value).format('YYYY-MM-DD'));
  };
  const changeSafeDay = (value) => {
    setSafeDay(moment(value).format('YYYY-MM-DD'));
  };
  const changeEnsureDay = (value) => {
    setEnsureDay(moment(value).format('YYYY-MM-DD'));
  };
  const getCar = (record) => {
    dispatchers_car.getCar(record.CarId).then((res) => {
      setEnsureYear(res.car.EnsureYear);
      setSafeDay(res.car.SafeDay);
      setEnsureDay(res.car.EnsureDay);
      setCurrent(2);
    });
  };
  const deleteCar = (record) => {
    dispatchers_car.deleteCar(record.CarId).then((res) => {
      if (res.code === 100) {
        Message.success(res.msg);
        setTimeout(() => {
          dispatchers_car.getAllCar();
        }, 500);
      } else if (res.code === 102) {
        Message.error(res.msg);
        setTimeout(() => {
          history.push('/login');
        });
      } else {
        Message.error(res.msg);
      }
    });
  };
  const addCar = () => {
    setEnsureYear(ensure_year || '未填写');
    setSafeDay(safe_day || '未填写');
    setEnsureDay(ensure_day || '未填写');
    const car_id = document.getElementById('input_car_id').value || '未填写';
    const color = document.getElementById('input_color').value || '未填写';
    const car_type = document.getElementById('input_car_type').value || '未填写';
    const id = document.getElementById('input_id').value || '未填写';
    const count_money = document.getElementById('input_count_money').value || '未填写';
    const state = document.getElementById('input_state').value || '未填写';
    const ensure_company = document.getElementById('input_ensure_company').value || '未填写';
    dispatchers_car.addCar({ car_id, color, car_type, id, count_money, state, ensure_company, ensure_year, safe_day, ensure_day }).then((res) => {
      if (res.code === 100) {
        Message.success(res.msg);
        dispatchers_car.getAllCar();
        setTimeout(() => {
          setCurrent(0);
        }, 1000);
      } else if (res.code === 102) {
        Message.error(res.msg);
        setTimeout(() => {
          history.push('/login');
        });
      } else {
        Message.error(res.msg);
      }
    });
  };
  const updateCar = () => {
    // setEnsureYear(ensure_year || dataCar.car.EnsureYear);
    // setSafeDay(safe_day || dataCar.car.SafeDay);
    // setEnsureDay(ensure_day || dataCar.car.EnsureDay);
    const car_id = document.getElementById('input_car_id1').value || '未填写';
    const color = document.getElementById('input_color1').value || '未填写';
    const car_type = document.getElementById('input_car_type1').value || '未填写';
    const id = document.getElementById('input_id1').value || '未填写';
    const count_money = document.getElementById('input_count_money1').value || '未填写';
    const state = document.getElementById('input_state1').value || '未填写';
    const ensure_company = document.getElementById('input_ensure_company1').value || '未填写';
    dispatchers_car.updateCar({ car_id, color, car_type, id, count_money, state, ensure_company, ensure_year, safe_day, ensure_day }).then((res) => {
      if (res.code === 100) {
        Message.success(res.msg);
        dispatchers_car.getAllCar();
        setTimeout(() => {
          setCurrent(0);
        }, 1000);
      } else if (res.code === 102) {
        Message.error(res.msg);
        setTimeout(() => {
          history.push('/login');
        });
      } else {
        Message.error(res.msg);
      }
    });
  };
  return (
    <ResponsiveGrid>
      {
        current === 0 &&
        <>
          <Cell colSpan={12}>
            <div className={styles.title}>车辆信息管理</div>
          </Cell>
          <Cell colSpan={12}>
            <Table dataSource={dataCar.cars}>
              <Column title="车牌号" dataIndex="CarId" />
              <Column title="颜色" dataIndex="Color" />
              <Column title="车辆类型" dataIndex="CarType" />
              <Column title="车辆编号" dataIndex="Id" />
              <Column title="计价器号" dataIndex="CountMoney" />
              <Column title="车辆状态" dataIndex="State" />
              <Column title="保险单位" dataIndex="EnsureCompany" />
              <Column title="年审日期" dataIndex="EnsureYear" />
              <Column title="安检日期" dataIndex="SafeDay" />
              <Column title="保险日期" dataIndex="EnsureDay" />
              <Column
                title="操作"
                cell={(value, index, record) => {
                  return (
                    <div>
                      <span className={styles.click} onClick={() => getCar(record)}>修改</span>
                      &nbsp;&nbsp;|&nbsp;&nbsp;
                      <span className={styles.clickRed} onClick={() => deleteCar(record)}>删除车辆</span>
                    </div>);
                }}
              />
            </Table>
          </Cell>
          <Cell colSpan={12} style={{ textAlign: 'center', margin: '20px 0' }}>
            <Button type="secondary" size="large" onClick={() => setCurrent(1)}>添加车辆信息</Button>
          </Cell>
        </>
      }
      {
        current === 1 &&
        <>
          <Cell colSpan={12}>
            <div className={styles.title}>车辆信息添加</div>
          </Cell>
          <Cell colSpan={12}>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车牌号&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入车牌号" id="input_car_id" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;颜色&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入颜色" id="input_color" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;车辆类型&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入车辆类型" id="input_car_type" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;车辆编号&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入车辆编号" id="input_id" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;计价器号&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入计价器号" id="input_count_money" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;车辆状态&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入车辆状态" id="input_state" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;保险单位&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入保险单位" id="input_ensure_company" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;年审日期&nbsp;&nbsp;</span>
              <DatePicker format="YYYY-MM-DD" className={styles.input} size="large" onChange={changeEnsureYear} />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;安检日期&nbsp;&nbsp;</span>
              <DatePicker format="YYYY-MM-DD" className={styles.input} size="large" onChange={changeSafeDay} />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;保险日期&nbsp;&nbsp;</span>
              <DatePicker format="YYYY-MM-DD" className={styles.input} size="large" onChange={changeEnsureDay} />
            </div>
            <div className={styles.list}>
              <Button type="secondary" size="large" onClick={addCar} >确认添加</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button size="large" onClick={() => setCurrent(0)}>取消添加</Button>
            </div>
          </Cell>
        </>
      }
      {
        current === 2 &&
        <>
          <Cell colSpan={12}>
            <div className={styles.title}>车辆信息修改</div>
          </Cell>
          <Cell colSpan={12}>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车牌号&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" defaultValue={dataCar.car.CarId} disabled id="input_car_id1" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;颜色&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" defaultValue={dataCar.car.Color} id="input_color1" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;车辆类型&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" defaultValue={dataCar.car.CarType} id="input_car_type1" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;车辆编号&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" defaultValue={dataCar.car.Id} id="input_id1" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;计价器号&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" defaultValue={dataCar.car.CountMoney} id="input_count_money1" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;车辆状态&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" defaultValue={dataCar.car.State} id="input_state1" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;保险单位&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" defaultValue={dataCar.car.EnsureCompany} id="input_ensure_company1" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;年审日期&nbsp;&nbsp;</span>
              <DatePicker format="YYYY-MM-DD" className={styles.input} size="large" onChange={changeEnsureYear} defaultValue={dataCar.car.EnsureYear} />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;安检日期&nbsp;&nbsp;</span>
              <DatePicker format="YYYY-MM-DD" className={styles.input} size="large" onChange={changeSafeDay} defaultValue={dataCar.car.SafeDay} />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;保险日期&nbsp;&nbsp;</span>
              <DatePicker format="YYYY-MM-DD" className={styles.input} size="large" onChange={changeEnsureDay} defaultValue={dataCar.car.EnsureDay} />
            </div>
            <div className={styles.list}>
              <Button type="secondary" size="large" onClick={updateCar} >确认修改</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button size="large" onClick={() => setCurrent(0)}>取消修改</Button>
            </div>
          </Cell>
        </>
      }
    </ResponsiveGrid>
  );
}

export default Car;
