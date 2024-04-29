import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actAddJob, actDeleteJob, actStatusUpdate, fetchJobs } from '../../redux/action';
import { Table, Select, Button, Form, Input } from 'antd';
import Loading from '../Loading';
import './style.css';
import { Link } from 'react-router-dom';

const { Option } = Select;

export default function JobComponent({ user }) {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState(null);
    const [activeFilter, setActiveFilter] = useState(null)
    const userId = user?.userData?._id;

    useEffect(() => {
        if (userId) {
            dispatch(fetchJobs(userId));
        }
    }, [userId, dispatch]);

    const jobs = useSelector(state => state.jobReducer.data);

    const handleDeleteJob = (id) => {
        dispatch(actDeleteJob(id))
    }

    const onSubmitJob = (values) => {
        setLoading(true);
        const jobData = { ...values, user: userId };
        dispatch(actAddJob(jobData))
        form.resetFields();
        setLoading(false);
    };

    const handleFilter = (filterValue) => {
        setFilter(filterValue);
    };
    const filteredJobs = filter ? jobs.filter(job => job.status === filter) : jobs;


    const countJobs = (status) => {
        if (jobs) {
            return jobs.filter(job => job.status === status).length;
        }
    };

    const handleStatusChange = (jobId, e) => {
        // console.log(e);
        dispatch(actStatusUpdate(jobId, e, userId))
        const updatedJobs = jobs.map(job => {
            if (job._id === jobId) {
                return { ...job, status: e };
            } else {
                return job;
            }
        })
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
        <main className='bg-white'>
            {user ?
                <section className='md:w-10/12 m-auto flex-col gap-30'>
                    <div className='flex md:hidden p-4'>
                        <Select className='w-2/5' placeholder="Status" onChange={(e) => handleFilter(e.target.value)}>
                            <Option value="Bookmarked">Bookmarked</Option>
                            <Option value="Applying">Applying</Option>
                            <Option value="Interview">Interview</Option>
                            <Option value="Pending">Pending</Option>
                            <Option value="Accepted">Accepted</Option>
                            <Option value="Closed">Closed</Option>
                        </Select>
                    </div>


                    <div>
                        <div className="hidden md:flex process-container">
                            {['Bookmarked', 'Applying', 'Interview', 'Pending', 'Accepted', 'Closed'].map((status, index) => (
                                <button
                                    key={index}
                                    className={`job-pipeline-button ${activeFilter === status ? 'active' : ''}`}
                                    onClick={() => handleFilter(status)}
                                >
                                    <div className="section-value h4">{countJobs(status)}</div>
                                    <div className="section-label">{status}</div>
                                </button>
                            ))}
                        </div>

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
                                        <Button type="primary" htmlType="submit" loading={loading}>
                                            Add Job
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>

                            <div className='md:w-7/12'>
                                {jobs ? (
                                    <div style={{ overflow: "auto" }}>
                                        <Table dataSource={filteredJobs} columns={columns} className='text-center' rowKey={"_id"} />
                                    </div>

                                ) : (
                                    <Loading />
                                )
                                }
                            </div>
                        </div>


                    </div>
                </section>
                : <>Chưa có dữ liệu</>}

        </main >
    );
}
