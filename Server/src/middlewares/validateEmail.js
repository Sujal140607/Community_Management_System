const validateEmail = (req, res, next) => {
  const { email } = req.body;

  // Email exist check
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  if (!email.toLowerCase().endsWith("@gmail.com")) {
    return res.status(404).json({
      success: false,
      message: "Only Gmail addresses are allowed"
    });
  }

  next();
};

module.exports = validateEmail;