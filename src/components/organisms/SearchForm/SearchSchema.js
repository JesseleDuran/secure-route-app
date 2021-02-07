import { object, string, number } from "yup";

const InboundSchema = object().shape({
  address: string().required(),
  userId: number("User ID debe ser un número.")
    .positive("User ID debe ser un número positivo.")
    .min(9999),
  filter: string(),
});

export default InboundSchema;
