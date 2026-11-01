const inmuebles = [ 
    { id: 1,
      name: "Hotel Central",
      type: "Hotel",
      location: "Montevideo",
      price: 2500
    },
    {
      id: 2,
      name: "Departamento Centro",
      type: "Departamento",
      location: "Montevideo",
      price: 1800
    },
    {
      id: 3,
      name: "Apart Hotel Rivera",
      type: "Hotel",
      location: "Rivera",
      price: 2200
}]

export function getInmuebles(req, res) {
    res.json(inmuebles);
}

export function getInmueble(req, res) {
    const id = Number(req.params.id);
    const place = inmuebles.find(p => p.id === id)
    if(!place) return res.status(404).json({message: "Inmueble no encontrado"})
    
    res.json(place)
}