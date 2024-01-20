const mailValidation = (mail) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
};

const passwordValidation = (password) => {
  return /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])(?=.*[a-zA-Z0-9]).{8,}$/.test(
    password
  );
};

module.exports = {
  mailValidation,
  passwordValidation,
};
