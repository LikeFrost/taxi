import React, { useState } from 'react';
import { ResponsiveGrid, Tab, Input, Button, Message, Table } from '@alifd/next';
import styles from './index.module.scss';
import store from '@/store';

function Search() {
  const { Cell } = ResponsiveGrid;
  const { Column } = Table;
  const [isSearch, setSearch] = useState(false);
  const [dataUser, dispatchers_user] = store.useModel('user');
  const [dataCar, dispatchers_car] = store.useModel('car');
  const [dataQuestion, dispatchers_question] = store.useModel('question');
  const [dataTraffic, dispatchers_traffic] = store.useModel('traffic');
  const searchUser = () => {
    const search = document.getElementById('driver').value;
    dispatchers_user.getSearchUser(search).then((res) => {
      if (res.code === 100) {
        Message.success(res.msg);
        setSearch(true);
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
  const searchCar = () => {
    const search = document.getElementById('car').value;
    dispatchers_car.getSearchCar(search).then((res) => {
      if (res.code === 100) {
        Message.success(res.msg);
        setSearch(true);
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
  const searchTraffic = () => {
    const search = document.getElementById('traffic').value;
    dispatchers_traffic.getSearchTraffic(search).then((res) => {
      if (res.code === 100) {
        Message.success(res.msg);
        setSearch(true);
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
  const searchQuestion = () => {
    const search = document.getElementById('question').value;
    dispatchers_question.getSearchQuestion(search).then((res) => {
      if (res.code === 100) {
        Message.success(res.msg);
        setSearch(true);
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
      <Cell colSpan={12}>
        <div className={styles.title}>信息查询</div>
      </Cell>
      <Cell colSpan={12}>
        <Tab onClick={() => setSearch(false)}>
          <Tab.Item title="司机信息">
            <Cell colSpan={12} style={{ textAlign: 'center' }}>
              <Input placeholder="请输入司机姓名/身份证号/车牌号/驾驶证号" size="large" className={styles.input} id="driver" />
              <Button type="secondary" size="large" className={styles.button} onClick={searchUser}>搜索</Button>
            </Cell>
            {
              isSearch &&
              <Cell colSpan={12}>
                <Table dataSource={dataUser.users}>
                  <Column title="姓名" dataIndex="Name" />
                  <Column title="编号" dataIndex="Id" />
                  <Column title="权限" dataIndex="Auth" />
                  <Column title="性别" dataIndex="Sex" />
                  <Column title="身份证号" dataIndex="IdCard" />
                  <Column title="手机号" dataIndex="Telephone" />
                  <Column title="出生日期" dataIndex="Birthday" />
                  <Column title="车牌号" dataIndex="CarId" />
                </Table>
              </Cell>
            }
          </Tab.Item>
          <Tab.Item title="车辆信息">
            <Cell colSpan={12} style={{ textAlign: 'center' }}>
              <Input placeholder="请输入车牌号/车辆id/车型" size="large" className={styles.input} id="car" />
              <Button type="secondary" size="large" className={styles.button} onClick={searchCar}>搜索</Button>
            </Cell>
            {
              isSearch &&
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
                </Table>
              </Cell>
            }
          </Tab.Item>
          <Tab.Item title="投诉信息">
            <Cell colSpan={12} style={{ textAlign: 'center' }}>
              <Input placeholder="请输入投诉id/投诉日期" size="large" className={styles.input} id="question" />
              <Button type="secondary" size="large" className={styles.button} onClick={searchQuestion}>搜索</Button>
            </Cell>
            {
              isSearch &&
              <Cell colSpan={12}>
                <Table dataSource={dataQuestion.questions}>
                  <Column title="投诉编号" dataIndex="Id" />
                  <Column title="车牌号码" dataIndex="CarId" />
                  <Column title="发生时间" dataIndex="HappenTime" />
                  <Column title="投诉时间" dataIndex="CreateTime" />
                  <Column title="投诉方法" dataIndex="Method" />
                  <Column title="投诉内容" dataIndex="Content" />
                  <Column title="投诉结果" dataIndex="Result" />
                </Table>
              </Cell>
            }
          </Tab.Item>
          <Tab.Item title="违章信息">
            <Cell colSpan={12} style={{ textAlign: 'center' }}>
              <Input placeholder="请输入违章id" size="large" className={styles.input} id="traffic" />
              <Button type="secondary" size="large" className={styles.button} onClick={searchTraffic}>搜索</Button>
            </Cell>
            {
              isSearch &&
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
            }
          </Tab.Item>
        </Tab>
      </Cell>
    </ResponsiveGrid>
  );
}

export default Search;
