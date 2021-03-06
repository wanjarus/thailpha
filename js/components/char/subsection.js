import React from 'react'

const CharSubsection = props => (
  <dl className="char-subsection">
    <dt className="char-subsection__header">
      <h2 className="h1">{props.title}</h2>
    </dt>
    <dd className="char-subsection__content">{props.children}</dd>
  </dl>
)

export default CharSubsection
