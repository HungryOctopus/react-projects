import React from 'react';

const List = ({ people }) => {
  return (
    <>

{/* Add logic here: if birthday is today, show the writers */}

      {people.map((person) => {
        const { name, birthday } = person;
        return (
          <article key={name} className="person">
            {/* <img src={image} alt={name} /> */}
            <div>
              <h4>{name}</h4>
              <p>{birthday}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
