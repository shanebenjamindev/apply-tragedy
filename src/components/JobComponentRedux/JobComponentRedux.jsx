import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../../redux/action';
import AddJobForm from '../AddJobForm/AddJobForm';

function JobComponentRedux({ user, jobs, loading, fetchJobs }) {
    useEffect(() => {
        fetchJobs(user);
    }, [fetchJobs, user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        // Your component JSX
        <>
            <AddJobForm />
        </>
    )
}

const mapStateToProps = (state) => ({
    jobs: state.jobs.jobs,
    loading: state.jobs.loading,
});

export default connect(mapStateToProps, { fetchJobs })(JobComponentRedux);
