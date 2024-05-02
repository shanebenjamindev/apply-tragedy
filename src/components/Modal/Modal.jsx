import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const DeleteModal = ({ visible, onConfirm, onCancel }) => {
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleOk = () => {
        // Set loading state to true to indicate processing
        setConfirmLoading(true);

        // Simulate async operation (e.g., API call)
        setTimeout(() => {
            // Once the async operation is completed, reset loading state
            setConfirmLoading(false);

            // Call the onConfirm function passed from the parent component
            onConfirm();
        }, 1000); // Simulating a delay of 1 second
    };

    return (
        <Modal
            title="Confirm Delete"
            visible={visible}
            confirmLoading={confirmLoading}
            onOk={handleOk}
            onCancel={onCancel}
            okText="Yes, delete"
            okType="danger"
        >
            <p>Are you sure you want to delete this job?</p>
        </Modal>
    );
};

export { DeleteModal };
