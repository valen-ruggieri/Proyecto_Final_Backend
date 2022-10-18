const yup = require("yup");

const userschema = yup.object({
  userName: yup
    .string()
    .max(10, "El nombre de usuario debe contener maximo 10 caracteres")
    .matches(/^[A-Za-z ]*$/, "Por favor ingrese un nombre valido")
    .required("el nombre de usuario es requerido"),
  email: yup
    .string()
    .email("el email es de formato invalido")
    .required("el email de telefono es requerido"),
  password: yup
    .string()
    .min(8, "La contrasena debe contener mas de 8 caracteres")
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "La contrasena debe contener 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
    ),
  phone: yup
    .string()
    .min(10, "el numero de telefono debe tener mas de 10 digitos")
    .max(15, "el numero de telefono debe tener menos de 15 digitos.")
    .matches(/^\d+$/, "el numero de telefono no puede tener letras")
    .required("el numero de telefono es requerido"),
});

module.exports = userschema;
