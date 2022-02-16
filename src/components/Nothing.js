import React from 'react'

const Nothing = () => {
    return (

      <div>

        <div>
            <nav className="navbar navbar-light p-3 mb-3">
              <form className="container-fluid justify-content-start">
                <a href='/' className="btn btn-md btn-outline-success" type="button">Página Principal</a>
              </form>
            </nav>
        </div>

        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main className="px-3 text-warning">
            <h1>No hay nada aquí</h1>
          </main>
        </div>
      </div>
    )
}

export default Nothing