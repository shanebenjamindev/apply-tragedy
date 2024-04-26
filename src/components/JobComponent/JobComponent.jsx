import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actAddJob, actDeleteJob, fetchJobs } from '../../redux/action';
import { Table, Select, Button, Form, Input } from 'antd';
import Loading from '../Loading';
import './style.css';

const { Option } = Select;

export default function JobComponent() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const jobs = useSelector(state => state.jobReducer.data);
    const [newJob, setNewJob] = useState({
        company: "",
        address: "",
        url: "",
        position: "",
        status: "",
    })

    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch]);

    const handleDeleteJob = (id) => {

        dispatch(actDeleteJob(id))
    }

    const onSubmitJob = () => {

        dispatch(actAddJob(newJob))

        form.resetFields();
    };

    const columns = [
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'job',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => (
                <Select defaultValue={record.status}>
                    <Option value={record.status}>{record.status}</Option>
                </Select>
            ),
        },
        {
            title: 'Next Step',
            dataIndex: 'followUp',
            key: 'followUp',
        },
        {
            title: 'Note',
            dataIndex: 'note',
            key: 'note',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Button
                    danger
                    onClick={() => handleDeleteJob(record._id)}
                >
                    Delete
                </Button>
            ),
        },
    ];

    return (
        <section className="jobs-container">
            <h2 className="text-2xl font-bold mb-4">Saved Jobs</h2>


            <div className="mb-4">
                <Form form={form} onFinish={onSubmitJob} layout="">
                    <Form.Item name="position">
                        <Input placeholder="Position" onChange={(e) => setNewJob({ ...newJob, position: e.target.value })} />
                    </Form.Item>
                    <Form.Item name="company">
                        <Input placeholder="Company" onChange={(e) => setNewJob({ ...newJob, company: e.target.value })} />
                    </Form.Item>
                    <Form.Item name="status">
                        <Input placeholder="Status" onChange={(e) => setNewJob({ ...newJob, status: e.target.value })} />
                    </Form.Item>
                    <Form.Item name="address">
                        <Input placeholder="Address" onChange={(e) => setNewJob({ ...newJob, address: e.target.value })} />
                    </Form.Item>
                    <Form.Item name="url">
                        <Input placeholder="URL" onChange={(e) => setNewJob({ ...newJob, url: e.target.value })} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Add Job
                        </Button>
                    </Form.Item>
                </Form>

            </div>
            {jobs ? (
                <Table dataSource={jobs} columns={columns} rowKey={"_id"} />
            ) : (
                <Loading />
            )}
        </section>
    );
}
