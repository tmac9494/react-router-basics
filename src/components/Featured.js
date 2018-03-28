import React from 'react';

const Featured = ({match}) => {
	let name = match.params.name;
	let topic = match.params.topic;
  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing {name}<strong></strong>, a teacher who loves teaching courses about {topic}<strong></strong>!</p>
    </div>
  );
}

export default Featured;