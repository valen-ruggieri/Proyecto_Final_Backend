const yup = require("yup");

const productSchema = yup.object({
  titulo: yup
    .string("Debe ser de tipo string")
    .max(10, "El titulo debe tener menos de 10 caracteres")
    .required("El titulo es requerido")
    .matches(/^[aA-zZ\s]+$/, "El titulo solo debe contener letras "),
  precio: yup
    .string("Debe ser de tipo string")
    .max(5, "El precio debe tener menos de 5 caracteres")
    .required("El precio es requerido"),
  descripcion: yup
    .string("Debe ser de tipo string")
    .min(6, "La descripcion debe tener mas de 6 caracteres")
    .max(20, "La descripcion debe tener meos de 20 caracteres")
    .required("La descripcion es requerida"),
  codigo: yup
    .string("Debe ser de tipo string")
    .min(6, "El codigo debe tener mas de 6 caracteres")
    .max(7, "El codigo debe tener menos de 7 caracteres")
    .required("El codigo es requerido"),
  img: yup.string("Debe ser de tipo string").required("La imagen es requerida"),
});

module.exports = productSchema;
