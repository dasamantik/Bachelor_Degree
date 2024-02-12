import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(2).trim().required(),
  phone: Joi.string()
    .pattern(new RegExp("^\\+?3?8?(0[5-9][0-9]\\d{7})$"))
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[-_*./\\\\])[A-Za-z\\d-_.*./\\\\]{6,}$"
      )
    )
    .required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
