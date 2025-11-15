import React from 'react'
import '../components/Card.css'

function Card(props) {
  return (
    <div className='img_box'>
        <a href={props.elem.url} target='_blank'>
            <div className="img">
                <img src={props.elem.download_url} alt="img" />
            </div>
        </a>
            <h2>{props.elem.author}</h2>
    </div>
  )
}

export default Card
