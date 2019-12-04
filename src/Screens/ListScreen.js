import React from "react";
import { gql } from "apollo-boost";
import { Spin } from "antd";
import { useQuery } from "@apollo/react-hooks";
import FETCH_ALL_FILMS from "../graphql/queries/fetchAllFilms";
import CardItem from "../Components/CardItem";

export default function ListScreen() {
  const { loading, error, data } = useQuery(FETCH_ALL_FILMS);

  if (loading) {
    return (
      <div className="spinner">
        <Spin />
      </div>
    );
  }

  let films = data ? data.allFilms.films : [];
  console.log(films);

  return (
    <div className="cardContainer">
      {films.map(e => (
        <CardItem
          title={e.title}
          crawl={e.openingCrawl}
          key={e.id}
          director={e.director}
          released={e.releaseDate}
        />
      ))}
    </div>
  );
}
