import prisma from "../shared/prisma/client";
import { getCurrentTimestamp } from "../shared/functions/date";

//Create an Event
export const createEvent = async (payload) => {
  return await prisma.event.create({
    data: {
      event_name: payload.eventName,
      event_description: payload.eventDescription,
      event_type: payload.eventType,
      event_date: payload.eventDate,
      created_by: payload.createdBy,
      created_on: getCurrentTimestamp(),
      campus_id: payload.campusId,
      company_id: payload.companyId,
    },
  });
};

// Get All Events
export const getAllEvents = async (companyId) => {
  return await prisma.event.findMany({ where: { company_id: companyId } });
};

//Update an Event
export const updateEvent = async (payload) => {
  return await prisma.event.update({
    data: {
      event_name: payload.eventName,
      event_description: payload.eventDescription,
      event_type: payload.eventType,
      campus_id: payload.campusId,
      is_active: payload.isActive,
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};

// Soft Delete An Event
export const deleteEvent = async (payload) => {
  return await prisma.event.update({
    data: {
      is_deleted: true,
      deleted_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
    },
    where: {
      id: payload.id,
    },
  });
};
