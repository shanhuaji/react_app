import React, { useState, useRef, useEffect } from 'react';
import { Button, Row, Col, Divider, Input, Form, Modal } from 'antd';
import styles from './index.less';
import WorkListTable from './WorkListTable';
import Uploads from './Uploads';
import { connect } from 'umi';
export default connect(work => work)(function WorkList({
  dispatch,
  work: { lists },
}) {
  let [bool, setBool] = useState(false);
  let [imgVal, setImgVal] = useState('');
  let Ref = useRef(null);
  let query = useRef(null);
  useEffect(() => {
    dispatch({
      type: 'work/getTable',
    });
  }, []);

  const showModal = function() {
    setBool(true);
  };

  const handleOk = function() {
    setBool(false);
    // console.log('dada',a.current);
    Ref.current.submit();
  };

  const imgHandler = function(val) {
    setImgVal(val);
  };
  /* 添加 */
  const onFinish = values => {
    values.imgRul = imgVal;
    dispatch({
      type: 'work/addTable',
      payload: {
        data: {
          ...values,
        },
      },
    });
    
  };
  /* 删除 */
  const removeHandler = function(val) {
    dispatch({
      type: 'work/deleteTable',
      payload: {
        data: val,
      },
    });
  };
  /* 修改 */
  const updateHandler = function(id, num) {
    dispatch({
      type: 'work/searchTable',
      payload: {
        id,
        num,
      },
    });
  };
  /* 查询 */
  const queryHandler = function() {
    let {
      current: {
        state: { value },
      },
    } = query;
    dispatch({
      type: 'work/queryTable',
      payload: {
        value,
      },
    });
  };
  const handleCancel = function() {
    setBool(false);
  };
  const style = { background: '#0092ff', padding: '8px 0' };

  return (
    <div className={styles.work}>
      <Row gutter={16} className={styles.box}>
        <Col className="gutter-row" span={4}>
          <div className={styles.content}>
            <Input placeholder="请输入价格查询" ref={query} />
            <Button type="primary" onClick={queryHandler}>
              查询
            </Button>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div className={styles.content}>
            <Input placeholder="请输入主题查询" />
            <Button type="primary">查询</Button>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div className={styles.content}>
            <Input placeholder="请输入数量查询" />
            <Button type="primary">查询</Button>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div className={styles.content}>
            <Input placeholder="请输入姜亮查询" />
            <Button type="primary">查询</Button>
          </div>
        </Col>
      </Row>
      {/* 点击+号弹出框 */}
      <Button type="primary" onClick={showModal}>
        +
      </Button>
      <Modal
        title="Basic Modal"
        visible={bool}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* 添加 */}
        <Form
          ref={Ref}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item label="商品ID" name="shopId">
            <Input placeholder="商品ID" />
          </Form.Item>
          <Form.Item label="商品logo" name="imgRul">
            <Uploads imgHandler={imgHandler} />
          </Form.Item>
          <Form.Item label="商品主题" name="d_title">
            <Input placeholder="商品主题" />
          </Form.Item>
          <Form.Item label="商品价格" name="price">
            <Input placeholder="商品价格" />
          </Form.Item>
          <Form.Item label="商品原价" name="original">
            <Input placeholder="商品原价" />
          </Form.Item>
          <Form.Item label="商品销量" name="sales">
            <Input placeholder="商品销量" />
          </Form.Item>
          <Form.Item label="商品评论" name="comment">
            <Input placeholder="商品评论" />
          </Form.Item>
          <Form.Item label="商品数量" name="num">
            <Input placeholder="商品数量" />
          </Form.Item>
        </Form>
      </Modal>
      {/* 列表组件 */}
      <WorkListTable
        lists={lists}
        removeHandler={removeHandler}
        updateHandler={updateHandler}
      ></WorkListTable>
      ,
    </div>
  );
});
