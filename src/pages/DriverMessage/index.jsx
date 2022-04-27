import React, { useEffect, useState } from 'react';
import { ResponsiveGrid, Input, Button, DatePicker, Select, Message } from '@alifd/next';
import store from '@/store';
import styles from './index.module.scss';
import moment from 'moment';
import { useHistory } from 'ice';

function DriverMessage() {
  const { Cell } = ResponsiveGrid;
  const [dataUser, dispatchers_user] = store.useModel('user');
  const [sex, setSex] = useState();
  const [birthday, setBirthday] = useState();
  const [look, setLook] = useState(true);
  const history = useHistory();
  useEffect(() => {
    dispatchers_user.getUser();
    setLook(true);
    setBirthday(dataUser.user.Birthday);
    setSex(dataUser.user.Sex);
  }, []);
  const changeSex = (value) => {
    setSex(value);
  };
  const changeBirthday = (value) => {
    setBirthday(moment(value).format('YYYY-MM-DD'));
  };
  const updateUser = () => {
    setSex(sex || '男');
    const id = document.getElementById('input_id').value || '未填写';
    const id_card = document.getElementById('input_id_card').value || '未填写';
    const telephone = document.getElementById('input_telephone').value || '未填写';
    const home = document.getElementById('input_home').value || '未填写';
    const car_id = document.getElementById('input_car_id').value || '未填写';
    const drive_id = document.getElementById('input_drive_id').value || '未填写';
    const drive_car = document.getElementById('input_drive_car').value || '未填写';
    const drive_year = document.getElementById('input_drive_year').value || '未填写';
    setBirthday(birthday || (dataUser.user.Birthday ? dataUser.user.Birthday : '未填写'));
    dispatchers_user.updateUser({ id, sex, id_card, telephone, birthday, home, car_id, drive_id, drive_car, drive_year }).then((res) => {
      if (res.code === 100) {
        Message.success(res.msg);
        setTimeout(() => {
          setLook(true);
          dispatchers_user.getUser();
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
        look &&
        <>
          <Cell colSpan={12}>
            <div className={styles.title}>个人信息查看</div>
          </Cell>
          <Cell colSpan={4} className={styles.list1}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姓名&nbsp;&nbsp;</span>
            <span className={styles.span}>{dataUser.user.Name}</span>
          </Cell>
          <Cell colSpan={4} className={styles.list1}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编号&nbsp;&nbsp;</span>
            <span className={styles.span}>{dataUser.user.Id}</span>
          </Cell>
          <Cell colSpan={4} className={styles.list1}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;性别&nbsp;&nbsp;</span>
            <span className={styles.span}>{dataUser.user.Sex}</span>
          </Cell>
          <Cell colSpan={4} className={styles.list1}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;身份证号&nbsp;&nbsp;</span>
            <span className={styles.span}>{dataUser.user.IdCard}</span>
          </Cell>
          <Cell colSpan={4} className={styles.list1}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;手机号&nbsp;&nbsp;</span>
            <span className={styles.span}>{dataUser.user.Telephone}</span>
          </Cell>
          <Cell colSpan={4} className={styles.list1}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;出生日期&nbsp;&nbsp;</span>
            <span className={styles.span}>{dataUser.user.Birthday}</span>
          </Cell>
          <Cell colSpan={4} className={styles.list1}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;家庭住址&nbsp;&nbsp;</span>
            <span className={styles.span}>{dataUser.user.Home}</span>
          </Cell>
          <Cell colSpan={4} className={styles.list1}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车牌号&nbsp;&nbsp;</span>
            <span className={styles.span}>{dataUser.user.CarId}</span>
          </Cell>
          <Cell colSpan={4} className={styles.list1}>
            <span>驾驶证编号&nbsp;&nbsp;</span>
            <span className={styles.span}>{dataUser.user.DriveId}</span>
          </Cell>
          <Cell colSpan={4} className={styles.list1}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;准驾车型&nbsp;&nbsp;</span>
            <span className={styles.span}>{dataUser.user.DriveCar}</span>
          </Cell>
          <Cell colSpan={4} className={styles.list1}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;驾龄&nbsp;&nbsp;</span>
            <span className={styles.span}>{dataUser.user.DriveYear}</span>
          </Cell>
          <Cell colSpan={12} className={styles.list1} style={{ textAlign: 'center' }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="secondary" size="large" onClick={() => setLook(false)}>修改信息</Button>
          </Cell>
        </>
      }
      {
        !look &&
        <>
          <Cell colSpan={12} >
            <div className={styles.title}>个人信息修改</div>
          </Cell>
          <Cell colSpan={12}>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姓名&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" disabled defaultValue={dataUser.user.Name} />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编号&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" defaultValue={dataUser.user.Id} placeholder="请输入编号" id="input_id" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;性别&nbsp;&nbsp;</span>
              <Select className={styles.input} size="large" defaultValue={dataUser.user.Sex} onChange={changeSex} >
                <Select.Option value="男">男</Select.Option>
                <Select.Option value="女">女</Select.Option>
              </Select>
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;身份证号&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" defaultValue={dataUser.user.IdCard} placeholder="请输入身份证号" id="input_id_card" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;手机号&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" defaultValue={dataUser.user.Telephone} placeholder="请输入手机号" id="input_telephone" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;出生日期&nbsp;&nbsp;</span>
              <DatePicker format="YYYY-MM-DD" className={styles.input} size="large" defaultValue={dataUser.user.Birthday} onChange={changeBirthday} />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;家庭住址&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" defaultValue={dataUser.user.Home} placeholder="请输入家庭住址" id="input_home" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车牌号&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" defaultValue={dataUser.user.CarId} placeholder="请输入车牌号" id="input_car_id" />
            </div>
            <div className={styles.list}>
              <span>驾驶证编号&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" defaultValue={dataUser.user.DriveId} placeholder="请输入驾驶证编号" id="input_drive_id" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;准驾车型&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" defaultValue={dataUser.user.DriveCar} placeholder="请输入准驾车型" id="input_drive_car" />
            </div>
            <div className={styles.list}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;驾龄&nbsp;&nbsp;</span>
              <Input className={styles.input} size="large" defaultValue={dataUser.user.DriveYear} placeholder="请输入驾龄" id="input_drive_year" />
            </div>
            <div className={styles.list}>
              <Button type="secondary" size="large" onClick={updateUser}>确认修改</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button size="large" onClick={() => setLook(true)}>取消修改</Button>
            </div>
          </Cell>
        </>
      }
    </ResponsiveGrid>
  );
}

export default DriverMessage;
