import moment from "moment";
export const getCurrentTimestamp = () => moment().toDate();
export const getTrialTimestamp = () => moment().add(14, "days").format();
