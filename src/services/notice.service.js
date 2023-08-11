import * as noticeRepository from '../models/Notice.js';

export const addNotice = async (req,res) => {
    try{
        let payload = {
            type : req.type,
            description : req.description,
            createdBy : req.createdBy,
            companyId : req.companyId
        }
        const notice = await noticeRepository.createNotice(payload);
        return res.status(201).json({
            success: true,
            data: notice
        })
    }catch(exception){
        console.log('Exception Occured while performing the Operation.. please check.');
        //Exception addition to stacktrace db for technical team only
        return res.status(500).json();
    }
}

export const allNotices = async (req,res) => {
    try{
        const notices = await noticeRepository.getAllNotices();
        return res.status(200).json({
            success: true,
            data: notices
        })
    }catch(exception){
        console.log('Exception Occured while performing the Operation.. please check.');
        //Exception addition to stacktrace db for technical team only
        return res.status(500).json();
    }
}

export const noticeById = async (req, res) =>{
    try{

        let payload = {
            id: req.id
        }
        const uniqueNotice = await noticeRepository.getNoticeById(payload);
        return res.status(200).json({
            success: true,
            data: uniqueNotice
        })
    }catch(exception){
        console.log('Exception Occured while performing the Operation.. please check.');
        return res.status(500).json();
    }
}

export const updateNotice = async (req,res) => {
    try{
        let payload = {
            type : req.type,
            description : req.description,
            createdBy : req.createdBy,
            companyId : req.companyId
        }
        const notice = await noticeRepository.updateNotice(payload);
        return res.status(204).json({
            success: true,
            data: notice
        })
    }catch(exception){
        console.log('Exception Occured while performing the Operation.. please check.');
        //Exception addition to stacktrace db for technical team only
        return res.status(500).json();
    }
}

export const removeNotice = (req, res) => {
    try{
        let payload = {
            id: req.id
        }
        const result = noticeRepository.DeleteNotice(payload);
        return res.status(200).json({
            success: true,
            data: result
        })
    }catch(exception){
        console.log('Exception Occured while performing the Operation.. please check.');
        //Exception addition to stacktrace db for technical team only
        return res.status(500).json();
    }
}