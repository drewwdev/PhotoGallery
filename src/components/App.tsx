import React from 'react'
import objects from '../objects.json'

export function App() {
  const panda = objects.pandas
  const pandasTitle = panda.title
  const pandasDescription = panda.description
  const pandaPhotos = panda.photos
  const firstPanda = pandaPhotos[0]
  const firstPandaPhoto = firstPanda.imageURL

  const miniatures = objects.miniatures
  const miniaturesTitle = miniatures.title
  const miniaturesDescription = miniatures.description
  const miniaturePhotos = miniatures.photos
  const firstMiniature = miniaturePhotos[0]
  const firstMiniaturePhoto = firstMiniature.imageURL

  return (
    <div>
      <header>
        Things Jason likes
        <div className="title">
          A Photo Gallery of Jason L Perry's favorite things
        </div>
      </header>
      <main>
        <div className="pandas">
          {pandasTitle}
          <div className="pandadescription">{pandasDescription}</div>
          <img src={firstPandaPhoto} width="300"></img>
        </div>
        <div className="miniatures">
          {miniaturesTitle}
          <div className="miniaturedescription">{miniaturesDescription}</div>
          <img src={firstMiniaturePhoto} width="300"></img>
        </div>
      </main>
    </div>
  )
}
