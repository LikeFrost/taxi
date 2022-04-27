import React, { useEffect, useState } from 'react';
import { ResponsiveGrid, Table, Message, Button, Input, DatePicker } from '@alifd/next';
import styles from './index.module.scss';
import store from '@/store';
import moment from 'moment';

function Question() {
  const { Cell } = ResponsiveGrid;
  const { Column } = Table;
  const [, dispatchers_user] = store.useModel('user');
  const [dataQuestion, dispatchers_question] = store.useModel('question');
  const auth = sessionStorage.getItem('auth');
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (auth === 'user') {
      dispatchers_user.getUser().then((res) => {
        dispatchers_question.getQuestionByCarId(res.user.CarId);
      });
    } else {
      dispatchers_question.getAllQuestion();
    }
  }, []);
  const deleteQuestion = (record) => {
    dispatchers_question.deleteQuestion(record.Id).then((res) => {
      if (res.code === 100) {
        Message.success(res.msg);
        dispatchers_question.getAllQuestion();
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
  const [create_time, setCreateTime] = useState();
  const changeHappenTime = (value) => {
    setHappenTime(moment(value).format('YYYY-MM-DD'));
  };
  const changeCreateTime = (value) => {
    setCreateTime(moment(value).format('YYYY-MM-DD'));
  };
  const addQuestion = () => {
    setCreateTime(create_time || '未填写');
    setHappenTime(happen_time || '未填写');
    const car_id = document.getElementById('input_car_id').value || '未填写';
    const method = document.getElementById('input_method').value || '未填写';
    const content = document.getElementById('input_content').value || '未填写';
    const result = document.getElementById('input_result').value || '未填写';
    dispatchers_question.addQuestion({ car_id, happen_time, create_time, method, content, result }).then((res) => {
      if (res.code === 100) {
        Message.success(res.msg);
        setTimeout(() => {
          dispatchers_question.getAllQuestion().then(() => {
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
            <div className={styles.title}>投诉信息查看</div>
          </Cell>
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
        </>
      }
      {
        auth !== 'user' && current === 0 &&
        <>
          <Cell colSpan={12}>
            <div className={styles.title}>投诉信息管理</div>
          </Cell>
          <Cell colSpan={12}>
            <Table dataSource={dataQuestion.questions}>
              <Column title="投诉编号" dataIndex="Id" />
              <Column title="车牌号码" dataIndex="CarId" />
              <Column title="发生时间" dataIndex="HappenTime" />
              <Column title="投诉时间" dataIndex="CreateTime" />
              <Column title="投诉方法" dataIndex="Method" />
              <Column title="投诉内容" dataIndex="Content" />
              <Column title="投诉结果" dataIndex="Result" />
              <Column
                title="操作"
                cell={(value, index, record) => {
                  return (
                    <div>
                      <span className={styles.clickRed} onClick={() => deleteQuestion(record)}>删除投诉</span>
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
              <span>&nbsp;&nbsp;&nbsp;&nbsp;发生时间&nbsp;&nbsp;</span>
              <DatePicker format="YYYY-MM-DD" className={styles.input} size="large" onChange={changeHappenTime} />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;投诉时间&nbsp;&nbsp;</span>
              <DatePicker format="YYYY-MM-DD" className={styles.input} size="large" onChange={changeCreateTime} />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;投诉方式&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入投诉方式" id="input_method" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;投诉内容&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入投诉内容" id="input_content" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;处理结果&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" placeholder="请输入处理结果" id="input_result" />
            </div>
            <div className={styles.list}>
              <Button type="secondary" size="large" onClick={addQuestion} >确认添加</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button size="large" onClick={() => setCurrent(0)}>取消添加</Button>
            </div>
          </Cell>
        </>
      }
    </ResponsiveGrid>
  );
}

export default Question;
