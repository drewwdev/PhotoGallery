import React from 'react'
import objects from '../objects.json'

type objectType = {
  object: {
    title: string
    description: string
    photos: [
      {
        title: string
        imageURL: string
        sourceURL: string
      }
    ]
  }
}

export function App() {
  return (
    <div>
      <header className="header">
        <div className="header-body">
          <div className="container">
            <h1 className="title">
              <a href="/">Things I Like</a>
            </h1>
            <h2 className="description">A Photo Gallery by Jason L Perry</h2>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="main-body">
          <div className="columns is-mobile">
            {Object.keys(objects).map((object) => {
              return (
                <div key={object} className="column">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>
                          <a href="/pandas">{objects[object].title}</a>
                        </h2>
                        <p>{objects[object].description}</p>
                      </div>
                    </div>
                    <div className="card-image">
                      <figure className="image">
                        <img
                          src={objects[object].photos[0].imageURL}
                          alt={objects[object].photos[0].title}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
