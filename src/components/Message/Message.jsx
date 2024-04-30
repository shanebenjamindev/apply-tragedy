import { message } from "antd";

const useMessageSuccess = (mes = 'Success') => {
    message.success(mes);
};

const useMessageError = (mes = 'Error') => {

    message.error(mes);
};

const useMessageWarning = (mes = 'Warning') => {
    message.warning(mes);
};

export { useMessageSuccess, useMessageError, useMessageWarning }