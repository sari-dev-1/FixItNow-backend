import React from 'react';
import { Table, Tag, Space ,Layout} from 'antd';
import { useNavigate } from 'react-router-dom';

const columns = [
  {
    title: 'שם עובד',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'קטגוריה',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: ',תאריך',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'דחיפות',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag == "נמוך" ? 'geekblue' : 'green';
          if (tag === 'דחוף') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'סטטוס',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'טובה כהן',
    category: 32,
    date: '03/11/2024',
    tags: ['רגיל'],
  },
  {
    key: '2',
    name: 'לאה רוזן',
    category: 45,
    date: '21/05/2024',
    tags: ['דחוף'],
  },
  {
    key: '3',
    name: 'שירה לב',
    category: 28,
    date: '28/2/2025',
    tags: ['נמוך'],
  },
  {
    key: '4',
    name: 'טובה כהן',
    category: 32,
    date: '03/11/2024',
    tags: ['רגיל'],
  },
  {
    key: '5',
    name: 'לאה רוזן',
    category: 45,
    date: '21/05/2024',
    tags: ['דחוף'],
  },
  {
    key: '6',
    name: 'שירה לב',
    category: 28,
    date: '28/2/2025',
    tags: ['נמוך'],
  },
  {
    key: '7',
    name: 'טובה כהן',
    category: 32,
    date: '03/11/2024',
    tags: ['רגיל'],
  },
  {
    key: '8',
    name: 'לאה רוזן',
    category: 45,
    date: '21/05/2024',
    tags: ['דחוף'],
  },
  {
    key: '9',
    name: 'שירה לב',
    category: 28,
    date: '28/2/2025',
    tags: ['נמוך'],
  },
  {
    key: '10',
    name: 'טובה כהן',
    category: 32,
    date: '03/11/2024',
    tags: ['רגיל'],
  },
  {
    key: '11',
    name: 'לאה רוזן',
    category: 45,
    date: '21/05/2024',
    tags: ['דחוף'],
  },
  {
    key: '12',
    name: 'שירה לב',
    category: 28,
    date: '28/2/2025',
    tags: ['נמוך'],
  },
];

const MyRequests = () => {
    const navigate=useNavigate()
  return (

    <Layout
             style={{
                minHeight: '85vh',
             }}
        >
            <div style={{ padding: '24px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>הבקשות שלי</h2>
                <Table columns={columns} dataSource={data} onRow={(record) => ({
                onClick: () => {navigate(`/MyRequests/${record.key}`);},
                style: { cursor: 'pointer' },
                })}/>
            </div>
    </Layout>

    
  );
};

export default MyRequests;
