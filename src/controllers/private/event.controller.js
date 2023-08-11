import * as eventService from "../../services/event.service";

export const createEvent = async (req, res) => {
  try {
    const { body } = req;
    const event = await eventService.createEvent(body);
    return res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const allEvent = async (req, res) => {
  try {
    const { body } = req;
    const event = await eventService.allEvents(body);
    return res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { body, params } = req;
    const payload = {
      body,
      params,
    };
    const event = await eventService.updateEvent(payload);
    return res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    return res.status(500).json();
  }
};

export const removeEvent = async (req, res) => {
  try {
    const { params } = req;
    const event = await eventService.removeEvent(params);
    return res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    return res.status(500).json();
  }
};
