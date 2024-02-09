import AppiError from "../exceptions/appi-errors.js";

export default (err, req, res) => {
  console.log(123);
  if (err instanceof AppiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: "Щось пішло не так" });
};
