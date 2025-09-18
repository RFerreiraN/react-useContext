import { useState, useEffect } from 'react';

export const FetchProductos = () => {

  const [productos, setProductos] = useState([])
  const url = 'https://fakestoreapi.com/products'

  const getProductos = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setProductos(data)
      console.log(data)
    } catch (error) {
      console.log('Ha ocurrido un error ', error)
    }
  }

  useEffect(() => {
    getProductos()
  }, [])

  return (
    <>
      <div className="container my-4">
        <div className="row g-3">
          {productos.map(item => (
            <div className="col-6 col-md-4 col-lg-3" key={item.id}>
              <div className="card text-center" style={{ width: "100%", height: "260px" }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "100px", objectFit: "cover" }}
                />
                <div className="card-body p-2 d-flex flex-column">
                  <h6 className="card-title mb-1 text-truncate">{item.title}</h6>
                  <p
                    className="card-text small flex-grow-1 overflow-hidden"
                    style={{ maxHeight: "40px" }}
                  >
                    {item.description}
                  </p>
                  <p className="mb-2 fw-bold">{item.price}€</p>
                  <a href="#" className="btn btn-warning btn-sm mt-auto">
                    Añadir a Carrito
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
