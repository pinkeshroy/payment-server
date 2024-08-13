
import nodeMailer from "../config/nodeMailer";

const sendMail = async (to: string, subject: string, text: string) => {
    await nodeMailer.sendMail({
        to,
        subject,
        text
    });
};

export { sendMail };
