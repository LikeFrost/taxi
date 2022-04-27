import React, { useState } from 'react';
import { Input, Tab, Button, ResponsiveGrid, Select, Message } from '@alifd/next';
import store from '@/store';
import { useHistory } from 'ice';
import styles from './index.module.scss';

function Login() {
  const { Cell } = ResponsiveGrid;
  const { Option } = Select;
  const history = useHistory();
  const [, dispatchers_user] = store.useModel('user');
  const [auth, setAuth] = useState('user');
  const login = () => {
    const name = document.getElementById('login_name').value;
    const password = document.getElementById('login_password').value;
    dispatchers_user.login({ name, password }).then((res) => {
      if (res.code === 100) {
        Message.success(res.msg);
        setTimeout(() => {
          history.push('/');
        }, 1000);
      } else {
        Message.error(res.msg);
      }
    });
  };
  const logUp = () => {
    const name = document.getElementById('logUp_name').value;
    const password = document.getElementById('logUp_password').value;
    const password1 = document.getElementById('logUp_password1').value;
    if (!name || !auth || !password || !password1) {
      Message.error('表单项不能为空!');
    } else if (password !== password1) {
      Message.error('两次输入密码不同,请检查后重试!');
    } else {
      sessionStorage.setItem('auth', auth);
      dispatchers_user.logUp({ name, auth, password }).then((res) => {
        if (res.code === 100) {
          Message.success(res.msg);
          setTimeout(() => {
            history.push('/');
          }, 1000);
        } else {
          Message.error(res.msg);
        }
      });
    }
  };
  return (
    <ResponsiveGrid>
      <Cell colSpan={4} />
      <Cell colSpan={4} className={styles.cell}>
        <div className={styles.container}>
          <Tab>
            <Tab.Item title="登录">
              <div className={styles.list}>
                <span>用户名&nbsp;&nbsp;</span>
                <Input placeholder="请输入用户名" size="large" className={styles.input} id="login_name" />
              </div>
              <div className={styles.list}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;密码&nbsp;&nbsp;</span>
                <Input.Password placeholder="请输入密码" size="large" className={styles.input} id="login_password" />
              </div>
              <div className={styles.list}><Button type="secondary" size="large" onClick={login}>登录</Button></div>
            </Tab.Item>
            <Tab.Item title="注册">
              <div className={styles.list}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;用户名&nbsp;&nbsp;</span>
                <Input placeholder="请输入用户名" size="large" className={styles.input} id="logUp_name" />
              </div>
              <div className={styles.list}>
                <span>选择身份&nbsp;&nbsp;</span>
                <Select defaultValue="司机" className={styles.input} onChange={(value) => setAuth(value)}>
                  <Option value="user">司机</Option>
                  <Option value="admin">管理员</Option>
                  <Option value="super">超级管理员</Option>
                </Select>
              </div>
              <div className={styles.list}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密码&nbsp;&nbsp;</span>
                <Input.Password placeholder="请输入密码" size="large" className={styles.input} id="logUp_password" />
              </div>
              <div className={styles.list}>
                <span>确认密码&nbsp;&nbsp;</span>
                <Input.Password placeholder="请输入密码" size="large" className={styles.input} id="logUp_password1" />
              </div>
              <div className={styles.list}><Button type="secondary" size="large" onClick={logUp}>注册</Button></div>
            </Tab.Item>
          </Tab>
        </div>
      </Cell>
    </ResponsiveGrid>
  );
}

export default Login;
