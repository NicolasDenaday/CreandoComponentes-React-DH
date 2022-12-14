import React from "react";
import { TablaRow } from "./TablaRow";

export const Tabla = () => {

    let peliculas = [{
        titulo: 'Billie Elliot',
        duracion: '123',
        rating: '5',
        generos: ['Drama','Comedia'],
        premios: '2'
    },
    {
        titulo: 'Alicia en el pais de las maravillas',
        duracion: '180',
        rating: '4.8',
        generos: ['Drama','Comedia', 'Terror'],
        premios: '5'
    }];
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Duracion</th>
            <th scope="col">Rating</th>
            <th scope="col">Género</th>
            <th scope="col">Premios</th>
          </tr>
        </thead>
        <tbody>
            {peliculas.map((pelicula, index) => {
                return <TablaRow {...pelicula} key={index}/> // envio elemento de toda iteracion con spread operator
            })}
          <tr>
            <th scope="row">Billie Elliot</th>
            <td>123</td>
            <td>5</td>
            <td>
              <ul>
                <li>Drama</li>
                <li>Comedia</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Alicia en el pais de las maravillas</th>
            <td>142</td>
            <td>4.8</td>
            <td>
              <ul>
                <li>Drama</li>
                <li>Accion</li>
                <li>Comedia</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Titulo</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
