import React from 'react'

export const TablaRow = (props) => {

  return (
    <>
        <tr>
        <th scope="row">{props.titulo}</th>
        <td>{props.duracion}</td>
        <td>{props.rating}</td>
        <td>
          <ul>
            {props.generos.map((genero, index) => {
                return <li key={index}>{genero}</li>
            })}
            <li>{props.genero}</li>
          </ul>
        </td>
        <td>2</td>
      </tr>
    </>
  );
};
