import React, { useState, useEffect } from 'react';
import { Button, Table, Image, Form, Input, Modal } from 'antd';

export default function WorkListTable({ lists, removeHandler,updateHandler }) {
  let [bool, setBool] = useState(false);
  let [num, setNum] = useState(0);
  let [Id, setId] = useState(0);
  /* 删除 */
  const deleteHandler = val => {
    removeHandler(val);
  };
  /* 修改 */
 const searchHandler = (id, val) => {
    /*  console.log(id, num); */
   setNum(val);
    setBool(true);
    setId(id)
  };
  const handleOk = function() {
    setBool(false);
    updateHandler(Id,num)
   /*  console.log(num);
    console.log(Id); */
  };
  const handleCancel = function() {
    setBool(false);
  };
  const changeHandler = function(e) {
    setNum(e.target.value);
  };
  let columns = [
    {
      title: '商品ID',
      dataIndex: 'shopId',
      key: '1',
      width: 150,
    },
    {
      title: '商品logo',
      dataIndex: 'imgUrl',
      key: '2',
      width: 150,
      render: imgUrl => {
        return <Image src={imgUrl} width={100} height={100} />;
      },
    },
    {
      title: '商品主题',
      dataIndex: 'd_title',
      key: '3',
      width: 150,
    },
    {
      title: '商品价格',
      dataIndex: 'price',
      key: '4',
      width: 150,
    },

    {
      title: '商品销量',
      dataIndex: 'sales',
      key: '6',
      width: 150,
    },
    {
      title: '商品评论',
      dataIndex: 'comment',
      key: '7',
      width: 150,
    },
    { title: '商品数量', dataIndex: 'num', key: '8', width: 150 },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 150,
      render: ({ shopId, num }) => (
        <div style={{ display: 'flex' }}>
          <Button
            type="primary"
            onClick={() => {
              searchHandler(shopId, num);
            }}
          >
            修改
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              deleteHandler(shopId);
            }}
          >
            删除
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={lists}
        scroll={{ x: 1500, y: 300 }}
      />
      <Modal
        title="Basic Modal"
        visible={bool}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form.Item>
          <Input placeholder="商品数量" value={num} onChange={changeHandler} />
        </Form.Item>
      </Modal>
    </div>
  );
}
