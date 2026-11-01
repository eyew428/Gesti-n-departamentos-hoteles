import { prismaDB } from "../src/bin/prisma";
import bcrypt from "bcrypt"

async function seed() {

//CLIENTES
const hashedPassword = await bcrypt.hash("12345", 10);
/* await prismaDB.cliente.upsert({
  where: {id: "1"},
  update: {},  
  create: {
    nombre: "Juan Pérez",
    email: "juan@example.com",
    tel: "99999999",
    contraseña: hashedPassword
  },
}); 

 await prismaDB.cliente.upsert({
  where: {id: "2"},
  update: {},  
  create: {
    nombre: "Diogo Mendez",
    email: "diogo@example.com",
    tel: "99999999",
    contraseña: hashedPassword

  },
});

await prismaDB.cliente.upsert({
  where: {id: "3"},
  update: {},  
  create: {
    nombre: "Franklin Miranda",
    email: "franklin@example.com",
    tel: "99999999",
    contraseña: hashedPassword

  },
});

await prismaDB.cliente.upsert({
  where: {id: "4"},
  update: {},  
  create: {
    nombre: "Leo Acosta",
    email: "leo@example.com",
    tel: "99999999",
    contraseña: hashedPassword

  },
}); */

//INMUEBLES

  /* await prismaDB.inmueble.upsert({
  where: {id: "1"},
  update: {},  
  create: {
    nombre: "Hotel Central",
    precio: 2500,
    },
    });

    await prismaDB.inmueble.upsert({
  where: {id: "2"},
  update: {},  
  create: {
    nombre: "Departamento Central",
    precio: 1900,
    },
    });

    await prismaDB.inmueble.upsert({
  where: {id: "3"},
  update: {},  
  create: {
    nombre: "Apart Hotel Rivera",
    precio: 2200,
    },
    }); */

//ALQUILERES

  await prismaDB.alquiler.upsert({
  where: {id: "1"},
  update: {},  
  create: {
    clienteId: "61ffe7fd-7046-4a04-953f-23dcf340a11f",
    fecha: new Date(),
    impuesto: 0.10,
    },
    });

   await prismaDB.alquiler.upsert({
  where: {id: "2"},
  update: {},  
  create: {
    clienteId: "9d277b05-97f0-46d9-bfb7-1b45085b1c58",
    fecha: new Date(),
    impuesto: 0.10,
    },
    });

//DETALLES DE ALQUILER

    await prismaDB.detalleAlquiler.upsert({
  where: {id: "1"},
  update: {},  
  create: {
    alquilerId: "",
    inmuebleId: "cc90428e-7a23-421a-8164-5234816ee464",
    cantidad: 1,
    precio: 2500,
    },
    });

   await prismaDB.detalleAlquiler.upsert({
  where: {id: "2"},
  update: {},  
  create: {
    alquilerId: "1f75467a-437a-4145-b52e-d82e10508409",
    inmuebleId: "da313e9a-9571-4034-a0bd-c4e6c841a428",
    cantidad: 1,
    precio: 2200,
    },
    });

}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prismaDB.$disconnect)
