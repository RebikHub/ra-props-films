import React from 'react'
import Star from './Star'
import shortid from 'shortid';

export default function Stars({count}) {
  let countKeys = [];
  if (count && count === 1) {
    for (let i = 0; i < count; i++) {
      countKeys.push(shortid.generate())
    }
  } else if (count > 1 && count <= 5) {
    for (let i = 0; i < count; i++) {
      countKeys.push(shortid.generate())
    }
  }
  return (
    <ul className="card-body-stars">
      <Star countStars={countKeys}/>
    </ul>
  )
}

Stars.defaultProps = {
  count: 0
}
