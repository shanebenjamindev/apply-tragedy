import React from 'react';
import { useDispatch } from 'react-redux';
import { actAddJob, actDeleteJob, actStatusUpdate } from '../../redux/action';
import { Table, Select, Button, Form, Input } from 'antd';
import Loading from '../Loading';
const { Option } = Select;

export default function JobComponent({ user, listJob }) {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const userId = user?.userData?._id;


    const handleDeleteJob = (id) => {
        dispatch(actDeleteJob(id))
    }

    const onSubmitJob = (values) => {
        const jobData = { ...values, user: userId };
        dispatch(actAddJob(jobData))
        form.resetFields();
    };

    const handleStatusChange = (jobId, e) => {
        dispatch(actStatusUpdate(jobId, e, userId))
    }
    const columns = [
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            align: 'center'
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
            align: 'center'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            align: 'center'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            align: 'center',
            render: (_, record) => (
                record.status && (
                    <Select onChange={(e) => handleStatusChange(record._id, e)} className='flex justify-center' defaultValue={record.status}>
                        <Option value={record.status}>{record.status}</Option>
                        <Option value="Bookmarked" key={1}>Bookmarked</Option>
                        <Option value="Applying" key={2}>Applying</Option>
                        <Option value="Interview" key={3}>Interview</Option>
                        <Option value="Pending" key={4}>Pending</Option>
                        <Option value="Accepted" key={5}>Accepted</Option>
                        <Option value="Closed" key={6}>Closed</Option>
                    </Select>
                )
            ),
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (_, record) => (
                <div className='flex gap-2 justify-center'>
                    <Button danger onClick={() => handleDeleteJob(record._id)}>
                        Delete
                    </Button>
                    <Button href={record.url} target="_blank" rel="noopener noreferrer">
                        Go
                    </Button>

                </div>
            ),
        }
    ];

    return (
        <div>
            <div className='md:w-10/12 m-auto flex-col gap-30'>
                <div className='md:flex gap-10 w-full'>
                    <div className='md:w-5/12'>
                        <Form form={form} onFinish={onSubmitJob} layout="">
                            <Form.Item name="position" rules={[{ required: true, message: 'Please input position!' }]}>
                                <Input placeholder="Position" />
                            </Form.Item>
                            <Form.Item name="company" rules={[{ required: true, message: 'Please input company!' }]}>
                                <Input placeholder="Company" />
                            </Form.Item>
                            <Form.Item name="status" rules={[{ required: true, message: 'Please select status!' }]}>
                                <Select placeholder="Status">
                                    <Option value="Bookmarked">Bookmarked</Option>
                                    <Option value="Applying">Applying</Option>
                                    <Option value="Interview">Interview</Option>
                                    <Option value="Pending">Pending</Option>
                                    <Option value="Accepted">Accepted</Option>
                                    <Option value="Closed">Closed</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="address" rules={[{ required: true, message: 'Please input address!' }]}>
                                <Input placeholder="Address" />
                            </Form.Item>

                            <Form.Item name="user" style={{ display: 'none' }} >
                                <Input placeholder="User" value={userId} type="hidden" />
                            </Form.Item>

                            <Form.Item name="url" rules={[{ required: true, message: 'Please input URL!' }]}>
                                <Input placeholder="URL" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Add Job
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                    <div className='md:w-7/12'>
                        <div style={{ overflow: "auto" }}>
                            <Table dataSource={listJob} columns={columns} className='text-center' rowKey={"_id"} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
