import React, { useEffect, useState } from 'react';
import { ResponsiveGrid, Table, Message, DatePicker, Input, Button } from '@alifd/next';
import styles from './index.module.scss';
import store from '@/store';
import moment from 'moment';

function Traffic() {
  const { Cell } = ResponsiveGrid;
  const { Column } = Table;
  const [, dispatchers_user] = store.useModel('user');
  const [dataTraffic, dispatchers_traffic] = store.useModel('traffic');
  const auth = sessionStorage.getItem('auth');
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (auth === 'user') {
      dispatchers_user.getUser().then((res) => {
        dispatchers_traffic.getTrafficByCarId(res.user.Name);
      });
    } else {
      dispatchers_traffic.getAllTraffic();
    }
  }, []);
  const deleteTraffic = (record) => {
    dispatchers_traffic.deleteTraffic(record.Id).then((res) => {
      if (res.code === 100) {
        Message.success(res.msg);
        dispatchers_traffic.getAllTraffic();
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
  const [happen_time, setHappenTime] = useState();
  const changeHappenTime = (value) => {
    setHappenTime(moment(value).format('YYYY-MM-DD'));
  };
  const addTraffic = () => {
    setHappenTime(happen_time || '未填写');
    const car_id = document.getElementById('input_car_id').value || '未填写';
    const user = document.getElementById('input_user').value || '未填写';
    const content = document.getElementById('input_content').value || '未填写';
    const location = document.getElementById('input_location').value || '未填写';
    const money = document.getElementById('input_money').value || '未填写';
    const score = document.getElementById('input_score').value || '未填写';
    const state = document.getElementById('input_state').value || '未填写';
    dispatchers_traffic.addTraffic({ car_id, time: happen_time, user, content, location, money, score, state }).then((res) => {
      if (res.code === 100) {
        Message.success(res.msg);
        setTimeout(() => {
          dispatchers_traffic.getAllTraffic().then(() => {
            setCurrent(0);
          });
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
        auth === 'user' &&
        <>
          <Cell colSpan={12}>
            <div className={styles.title}>违章信息查看</div>
          </Cell>
          <Cell colSpan={12}>
            <Table dataSource={dataTraffic.traffics}>
              <Column title="违章ID" dataIndex="Id" />
              <Column title="车牌号码" dataIndex="CarId" />
              <Column title="司机姓名" dataIndex="User" />
              <Column title="违章内容" dataIndex="Content" />
              <Column title="违章时间" dataIndex="Time" />
              <Column title="违章地点" dataIndex="Location" />
              <Column title="罚款金额" dataIndex="Money" />
              <Column title="扣分" dataIndex="Score" />
              <Column title="处理状态" dataIndex="State" />
            </Table>
          </Cell>
        </>
      }
      {
        auth !== 'user' && current === 0 &&
        <>
          <Cell colSpan={12}>
            <div className={styles.title}>违章信息管理</div>
          </Cell>
          <Cell colSpan={12}>
            <Table dataSource={dataTraffic.traffics}>
              <Column title="违章ID" dataIndex="Id" />
              <Column title="车牌号码" dataIndex="CarId" />
              <Column title="司机姓名" dataIndex="User" />
              <Column title="违章内容" dataIndex="Content" />
              <Column title="违章时间" dataIndex="Time" />
              <Column title="违章地点" dataIndex="Location" />
              <Column title="罚款金额" dataIndex="Money" />
              <Column title="扣分" dataIndex="Score" />
              <Column title="处理状态" dataIndex="State" />
              <Column
                title="操作"
                cell={(value, index, record) => {
                  return (
                    <div>
                      <span className={styles.clickRed} onClick={() => deleteTraffic(record)}>删除违章</span>
                    </div>);
                }}
              />
            </Table>
          </Cell>
          <Cell colSpan={12} style={{ textAlign: 'center', margin: '20px 0' }}>
            <Button type="secondary" size="large" onClick={() => setCurrent(1)}>添加投诉信息</Button>
          </Cell>
        </>
      }
      {
        auth !== 'user' && current === 1 &&
        <>
          <Cell colSpan={12}>
            <div className={styles.title}>投诉信息添加</div>
          </Cell>
          <Cell colSpan={12}>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车牌号&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入车牌号" id="input_car_id" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;司机姓名&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入司机姓名" id="input_user" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;违章内容&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入违章内容" id="input_content" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;违章时间&nbsp;&nbsp;</span>
              <DatePicker format="YYYY-MM-DD" className={styles.input} size="large" onChange={changeHappenTime} />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;违章地点&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入违章地点" id="input_location" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;罚款金额&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入罚款金额" id="input_money" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;扣分&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入扣分" id="input_score" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;处理状态&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入处理状态" id="input_state" />
            </div>
            <div className={styles.list}>
              <Button type="secondary" size="large" onClick={addTraffic} >确认添加</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button size="large" onClick={() => setCurrent(0)}>取消添加</Button>
            </div>
          </Cell>
        </>
      }
    </ResponsiveGrid>
  );
}

export default Traffic;
