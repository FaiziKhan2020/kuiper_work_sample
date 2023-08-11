import * as noticeService from '../../services/notice.service';

export const addNotice = async (req, res) => {
    return await noticeService.addNotice(req,res);
}

export const allNotices = async (req, res) => {
    return await noticeService.allNotices(req,res);
}

export const noticeById = async (req, res) => {
    return await noticeService.noticeById(req,res);
}

export const  removeNotice = async (req, res) => {
    return await noticeService.removeNotice(req,res);
}

export const updateNotice = async (req, res) => {
    return await noticeService.updateNotice(req,res);
}