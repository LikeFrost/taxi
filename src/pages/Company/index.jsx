import React, { useEffect, useState } from 'react';
import { ResponsiveGrid, Table, Message, Button, Input, DatePicker, Select } from '@alifd/next';
import styles from './index.module.scss';
import store from '@/store';
import moment from 'moment';

function Company() {
  const { Cell } = ResponsiveGrid;
  const { Column } = Table;
  const [dataMoney, dispatchers_money] = store.useModel('money');
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    dispatchers_money.getAllMoney();
  }, []);
  const deleteMoney = (record) => {
    dispatchers_money.deleteMoney(record.Id).then((res) => {
      if (res.code === 100) {
        Message.success(res.msg);
        dispatchers_money.getAllMoney();
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
  const [time, setTime] = useState();
  const [types, setTypes] = useState();
  const changeTime = (value) => {
    setTime(moment(value).format('YYYY-MM-DD'));
  };
  const changeType = (value) => {
    setTypes(value);
  };
  const addMoney = () => {
    setTime(time || '未填写');
    setTypes(types || '未填写');
    const in_type = document.getElementById('in_type').value || '未填写';
    const in_money = document.getElementById('in_money').value || '未填写';
    const people = document.getElementById('people').value || '未填写';
    const more = document.getElementById('more').value || '未填写';
    dispatchers_money.addMoney({ types, in_type, in_money, in_time: time, people, more }).then((res) => {
      if (res.code === 100) {
        Message.success(res.msg);
        setTimeout(() => {
          dispatchers_money.getAllMoney().then(() => {
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
        current === 0 &&
        <>
          <Cell colSpan={12}>
            <div className={styles.title}>公司信息管理</div>
          </Cell>
          <Cell colSpan={12}>
            <Table dataSource={dataMoney.money}>
              <Column title="类型" dataIndex="Type" />
              <Column title="收入/支出日期" dataIndex="InTime" />
              <Column title="收入/支出类型" dataIndex="InType" />
              <Column title="收入/支出金额" dataIndex="InMoney" />
              <Column title="经办人" dataIndex="People" />
              <Column title="备注" dataIndex="More" />
              <Column
                title="操作"
                cell={(value, index, record) => {
                  return (
                    <div>
                      <span className={styles.clickRed} onClick={() => deleteMoney(record)}>删除信息</span>
                    </div>);
                }}
              />
            </Table>
          </Cell>
          <Cell colSpan={12} style={{ textAlign: 'center', margin: '20px 0' }}>
            <Button type="secondary" size="large" onClick={() => setCurrent(1)}>添加收支信息</Button>
          </Cell>
        </>
      }
      {
        current === 1 &&
        <>
          <Cell colSpan={12}>
            <div className={styles.title}>收支信息添加</div>
          </Cell>
          <Cell colSpan={12}>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型&nbsp;&nbsp;</span>
              <Select className={styles.input} size="large" onChange={changeType} >
                <Select.Option value="收入">收入</Select.Option>
                <Select.Option value="支出">支出</Select.Option>
              </Select>
            </div>
            <div className={styles.list}>
              <span>收入/支出时间&nbsp;&nbsp;</span>
              <DatePicker format="YYYY-MM-DD" className={styles.input} size="large" onChange={changeTime} />
            </div>
            <div className={styles.list}>
              <span>收入/支出类型&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入收入/支出类型" id="in_type" />
            </div>
            <div className={styles.list}>
              <span>收入/支出金额&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入收入/支出金额" id="in_money" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经办人&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入经办人" id="people" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入备注" id="more" />
            </div>
            <div className={styles.list}>
              <Button type="secondary" size="large" onClick={addMoney} >确认添加</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button size="large" onClick={() => setCurrent(0)}>取消添加</Button>
            </div>
          </Cell>
        </>
      }
    </ResponsiveGrid>
  );
}

export default Company;
