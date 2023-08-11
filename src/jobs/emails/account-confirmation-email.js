import jwt from "jsonwebtoken";
import mail from "@sendgrid/mail";
import { sendGridApi, frontUrl } from "../../shared/config/config";

export const registerEmail = (to, token) => {
  const link = `${frontUrl()}/#/auth/verify/${token}`;
  mail.setApiKey(sendGridApi());
  const msg = {
    to: to,
    from: {
      name: "Technologia Solution LLC",
      email: "alex@technologiasolutions.com",
    },

    templateId: "d-7fd7609e0c62408aaf614fce017910b3",
    dynamicTemplateData: {
      verifyUrl: link,
    },
    asm: { groupId: 36993 },
  };

  // send the email
  mail
    .send(msg)
    .then(() => {
      console.log(`Authentication code sent to ${to}`);
    })
    .catch((error) => {
      console.error(error);
    });
};
