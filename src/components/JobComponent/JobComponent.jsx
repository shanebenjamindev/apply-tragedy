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

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setNewJob({
            ...newJob,
            [name]: value,
        })
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
            key: 'position',
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
                record.status && (
                    <Select defaultValue={record.status}>
                        <Option value={record.status}>{record.status}</Option>
                    </Select>
                )
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
                <Button danger onClick={() => handleDeleteJob(record._id)}>
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
                    <Form.Item >
                        <Input name="position" placeholder="Position" onChange={handleOnChange} />
                    </Form.Item>
                    <Form.Item >
                        <Input name="company" placeholder="Company" onChange={handleOnChange} />
                    </Form.Item>
                    <Form.Item >
                        <Input name="status" placeholder="Status" onChange={handleOnChange} />
                    </Form.Item>
                    <Form.Item >
                        <Input name="address" placeholder="Address" onChange={handleOnChange} />
                    </Form.Item>
                    <Form.Item >
                        <Input name="url" placeholder="URL" onChange={handleOnChange} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Add Job
                        </Button>
                    </Form.Item>
                </Form>

            </div>
            {jobs ? (
                <div className='' style={{overflow: "auto"}}>
                    <Table dataSource={jobs} columns={columns} rowKey={"_id"} />
                </div>
            ) : (
                <Loading />
            )}
        </section>
    );
}
