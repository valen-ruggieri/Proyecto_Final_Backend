require("dotenv").config();
const nodeMailer = require("nodemailer");
const transporter = nodeMailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: `${process.env.MAIL_USER}`,
    pass: `${process.env.MAIL_PASS}`,
  },
});
const sendMailWelcome = async (name, email, phone) => {
  const mailOptions = {
    from: "ShopBasic <valeru.251@gmail.com>",
    to: email,
    subject: "Bienvenida",
    html: `<h1>Buenos dias ${name} nos da gusto tenerte en shopBasic!! 👋</h1>
          <h2>Datos de registro</h2>
          <h4>Nombre: ${name}</h4>
          <h4>Email: ${email}</h4>
          <h4>Telefono: ${phone}</h4>
        `,
  };
  await transporter.sendMail(mailOptions);
};

const sendMailTicket = async (email, date, precioTotal, products) => {
  const listEmail = products.map(
    (e, index) =>
      `<div>
            <h3>Producto ${index + 1} </h3>
            <h4> titulo: ${e.titulo}</h4>
            <h4> precio: $${e.precio} </h4>
            <h4>categoria: ${e.categoria} </h4>
            <h4>codigo: ${e.codigo}</h4>
            </div>`
  );
  const mailOptions = {
    from: "ShopBasic <valeru.251@gmail.com>",
    to: email,
    subject: `Nuevo pedido de ${email}`,
    html: `<h1>Gracias por comprar en shopBasic!! 🤝</h1>
           <h2>Datos de registro</h2>
           <h4>fecha: ${date}</h4>
           <h4>Email: ${email}</h4>
           <h2>Lista de productos</h2>
           ${listEmail.join("")}
           <h3>Total: $${precioTotal}</h3>
      
         `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendMailTicket, sendMailWelcome };
