import { prismaDB } from "../bin/prisma.js";
import jwt from "jsonwebtoken"
import bcrypt, { hash } from "bcrypt"



export async function getAllClientes(req, res) {
  const clientes = await prismaDB.cliente.findMany();
res.json(
    clientes.map((clientes) => {
        const { contraseña, ...cli } = cliente;
        return cli;
    })
)
}

export async function deleteClientById(req, res) {
    const clienteId = Number(req.params.id);
    if (!clienteId)
        return res.status(400).json({ message: "Falta el ID del usuario a eliminar" });

    await prismaDB.cliente.delete({ where: { id: clienteId } });

    res.json({ message: "cliente eliminado" });
}

export async function getClientById(req, res) {
    const cliente = await prismaDB.cliente.findUnique({
        where : { id: Number(req.params.id) },
    });
    if (!cliente)
        return res.status(404).json({ message: "cliente no encontrado" });

    res.json({
        id: cliente.id,
        nombre: cliente.nombre,
        email: cliente.email,
        tel: cliente.tel,
        rol: cliente.rol,
        createdAt: cliente.createdAt,
        updatedAt: cliente.updatedAt,
    });
}

export async function createCliente(req, res) {
    const nuevoCliente = req.body;
    if (!nuevoCliente)
        return res.status(400).json({ message: "Falta la info del cliente" });

    const hashedPassword = await bcrypt.hash(nuevoCliente.contraseña, 10);

    await prismaDB.cliente.upsert({
        where: { 
            email: nuevoCliente.email,
            nombre: nuevoCliente.nombre,
            contraseña: hashedPassword,
            rol: "Guest",
         },
    });

    res.status(201).json({ message: "cliente registrado" });
}


export async function login_old(req, res) {
  const body = req.body;
  if (!body)
    return res.status(400).json({ message: "Falta usuario y contraseña" });

  const users = await prismaDB.cliente.findMany();
  const user = users.find((u) => u.email === body.email);
  if (!user) return res.status(404).json({ message: "Credenciales invalidas" });

  const valid = await bcrypt.compare(body.password, user.password);
  if (!valid)
    return res.status(404).json({ message: "Credenciales invalidas" });

  // Generación del token
  const token = jwt.sign(
    { userId: user.id, rol: user.rol },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  return res.json({ message: "usuario y contraseña valida", token });
}

const authenticateUser = async (body) => {
  try {
    const users = await prismaDB.cliente.findMany();
    const user = users.find((u) => u.email === body.email);

    const valid = await bcrypt.compare(body.password, user.password);
    if (valid) return user;
  } catch (error) {
    return null;
  }
};


export async function login(req, res) {

    //se comprueba que el body no esta vacio
    let clienteBody = req.body
    if(clienteBody == null)
    return res.status(404).json({ message: "Credenciales invalidas" })

    //busca a el cliente en la base de datos

    const cliente = await prismaDB.cliente.findUnique({
    where: {
        email: clienteBody.email
    }
})

  if(cliente == null)
    return res.status(404).json({ message: "Credenciales invalidas" })


    //combrobar la contraseña

    const contraseñaValida = await bcrypt.compare(clienteBody.contraseña,cliente.contraseña)
    if(!contraseñaValida)
        return res.status(404).json({ message: "Credenciales invalidas" })

    //generar token de acceso

    const token = jwt.sign({
        id: cliente.id,name:cliente.nombre
    },process.env.JWT_SECRET,{ expiresIn: "1d"})
    res.cookie("access_token", token, {
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 15 * 60 * 1000,
        path: "/",
    })
res.json({message: "Cliente Logueado",
    id: cliente.id,
    name: cliente.nombre
});

}

export async function yo(req, res) {
    const cliente = req.cliente;
    if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });

    res.json({
        id: cliente.id,
        nombre_usuario: cliente.nombre_usuario,
        nombre: cliente.nombre,
        tel: cliente.tel,
        createdAt: cliente.createdAt,
        updatedAt: cliente.updatedAt,
    });
}

export function logout(req, res) {
  res.clearCookie("access_token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  })

  res.sendStatus(204);
}