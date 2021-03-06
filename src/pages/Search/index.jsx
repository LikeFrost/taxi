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
        <div className={styles.title}>????????????</div>
      </Cell>
      <Cell colSpan={12}>
        <Tab onClick={() => setSearch(false)}>
          <Tab.Item title="????????????">
            <Cell colSpan={12} style={{ textAlign: 'center' }}>
              <Input placeholder="?????????????????????/????????????/?????????/????????????" size="large" className={styles.input} id="driver" />
              <Button type="secondary" size="large" className={styles.button} onClick={searchUser}>??????</Button>
            </Cell>
            {
              isSearch &&
              <Cell colSpan={12}>
                <Table dataSource={dataUser.users}>
                  <Column title="??????" dataIndex="Name" />
                  <Column title="??????" dataIndex="Id" />
                  <Column title="??????" dataIndex="Auth" />
                  <Column title="??????" dataIndex="Sex" />
                  <Column title="????????????" dataIndex="IdCard" />
                  <Column title="?????????" dataIndex="Telephone" />
                  <Column title="????????????" dataIndex="Birthday" />
                  <Column title="?????????" dataIndex="CarId" />
                </Table>
              </Cell>
            }
          </Tab.Item>
          <Tab.Item title="????????????">
            <Cell colSpan={12} style={{ textAlign: 'center' }}>
              <Input placeholder="??????????????????/??????id/??????" size="large" className={styles.input} id="car" />
              <Button type="secondary" size="large" className={styles.button} onClick={searchCar}>??????</Button>
            </Cell>
            {
              isSearch &&
              <Cell colSpan={12}>
                <Table dataSource={dataCar.cars}>
                  <Column title="?????????" dataIndex="CarId" />
                  <Column title="??????" dataIndex="Color" />
                  <Column title="????????????" dataIndex="CarType" />
                  <Column title="????????????" dataIndex="Id" />
                  <Column title="????????????" dataIndex="CountMoney" />
                  <Column title="????????????" dataIndex="State" />
                  <Column title="????????????" dataIndex="EnsureCompany" />
                  <Column title="????????????" dataIndex="EnsureYear" />
                  <Column title="????????????" dataIndex="SafeDay" />
                  <Column title="????????????" dataIndex="EnsureDay" />
                </Table>
              </Cell>
            }
          </Tab.Item>
          <Tab.Item title="????????????">
            <Cell colSpan={12} style={{ textAlign: 'center' }}>
              <Input placeholder="???????????????id/????????????" size="large" className={styles.input} id="question" />
              <Button type="secondary" size="large" className={styles.button} onClick={searchQuestion}>??????</Button>
            </Cell>
            {
              isSearch &&
              <Cell colSpan={12}>
                <Table dataSource={dataQuestion.questions}>
                  <Column title="????????????" dataIndex="Id" />
                  <Column title="????????????" dataIndex="CarId" />
                  <Column title="????????????" dataIndex="HappenTime" />
                  <Column title="????????????" dataIndex="CreateTime" />
                  <Column title="????????????" dataIndex="Method" />
                  <Column title="????????????" dataIndex="Content" />
                  <Column title="????????????" dataIndex="Result" />
                </Table>
              </Cell>
            }
          </Tab.Item>
          <Tab.Item title="????????????">
            <Cell colSpan={12} style={{ textAlign: 'center' }}>
              <Input placeholder="???????????????id" size="large" className={styles.input} id="traffic" />
              <Button type="secondary" size="large" className={styles.button} onClick={searchTraffic}>??????</Button>
            </Cell>
            {
              isSearch &&
              <Cell colSpan={12}>
                <Table dataSource={dataTraffic.traffics}>
                  <Column title="??????ID" dataIndex="Id" />
                  <Column title="????????????" dataIndex="CarId" />
                  <Column title="????????????" dataIndex="User" />
                  <Column title="????????????" dataIndex="Content" />
                  <Column title="????????????" dataIndex="Time" />
                  <Column title="????????????" dataIndex="Location" />
                  <Column title="????????????" dataIndex="Money" />
                  <Column title="??????" dataIndex="Score" />
                  <Column title="????????????" dataIndex="State" />
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
