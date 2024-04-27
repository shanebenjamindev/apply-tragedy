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
    const [filter, setFilter] = useState(null);

    const jobs = useSelector(state => state.jobReducer.data);


    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch]);

    const handleDeleteJob = (id) => {

        dispatch(actDeleteJob(id))
    }

    const onSubmitJob = (e) => {
        dispatch(actAddJob(e))
        form.resetFields();
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

    const handleStatusChange = (jobId, newStatus) => {
        console.log(jobId, newStatus);
    };
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
                    <Select className='flex justify-center' defaultValue={record.status}>
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
            title: 'Next Step',
            dataIndex: 'followUp',
            key: 'followUp',
            align: 'center'
        },
        {
            title: 'Note',
            dataIndex: 'note',
            key: 'note',
            align: 'center'
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
        <section className=''>


            <div className='flex md:hidden'>
                <Select className='w-2/5' placeholder="Status" onChange={(e) => handleFilter(e.target.value)}>
                    <Option value="Bookmarked">Bookmarked</Option>
                    <Option value="Applying">Applying</Option>
                    <Option value="Interview">Interview</Option>
                    <Option value="Pending">Pending</Option>
                    <Option value="Accepted">Accepted</Option>
                    <Option value="Closed">Closed</Option>
                </Select>
            </div>


            <div className="mb-4 p-3">
                <div className="hidden md:flex justify-around">
                    <button className="job-pipeline-button" onClick={() => handleFilter('Bookmarked')}>
                        <div className="section-value h4">{countJobs('Bookmarked')}</div>
                        <div className="section-label">Bookmarked</div>
                    </button>
                    <button className="job-pipeline-button" onClick={() => handleFilter('Applying')}>
                        <div className="section-value h4">{countJobs('Applying')}</div>
                        <div className="section-label">Applying</div>
                    </button>
                    <button className="job-pipeline-button" onClick={() => handleFilter('Interview')}>
                        <div className="section-value h4">{countJobs('Interview')}</div>
                        <div className="section-label">Interview</div>
                    </button>
                    <button className="job-pipeline-button" onClick={() => handleFilter('Pending')}>
                        <div className="section-value h4">{countJobs('Pending')}</div>
                        <div className="section-label">Pending</div>
                    </button>
                    <button className="job-pipeline-button" onClick={() => handleFilter('Accepted')}>
                        <div className="section-value h4">{countJobs('Accepted')}</div>
                        <div className="section-label">Accepted</div>
                    </button>
                    <button className="job-pipeline-button" onClick={() => handleFilter('Closed')}>
                        <div className="section-value h4">{countJobs('Closed')}</div>
                        <div className="section-label">Closed</div>
                    </button>
                </div>
                <h2 className="text-2xl font-bold mb-4">Add Jobs</h2>
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
                    <Form.Item name="url" rules={[{ required: true, message: 'Please input URL!' }]}>
                        <Input placeholder="URL" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Add Job
                        </Button>
                    </Form.Item>
                </Form>

                {
                    jobs ? (
                        <div style={{ overflow: "auto" }}>
                            <Table dataSource={filteredJobs} columns={columns} className='text-center' rowKey={"_id"} />
                        </div>

                    ) : (
                        <Loading />
                    )
                }
            </div>

        </section >
    );
}
