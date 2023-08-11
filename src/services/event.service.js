import * as eventModel from "../models/Event";

export const createEvent = async (body) => {
  try {
    return await eventModel.createEvent(body);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const allEvents = async (companyId) => {
  try {
    return await eventModel.getAllEvents(companyId);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const updateEvent = async (data) => {
  try {
    const { params, body } = data;
    const payload = {
      event_name: body.eventName,
      event_description: body.eventDescription,
      event_type: body.eventType,
      event_date: body.eventDate,
      campus_id: body.campusId,
      company_id: body.companyId,
    };
    return await eventModel.updateEvent(params.id, payload);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};

export const removeEvent = async (id) => {
  try {
    return await eventModel.deleteEvent(id);
  } catch (error) {
    console.log(error);
    return {
      Error: error,
    };
  }
};
