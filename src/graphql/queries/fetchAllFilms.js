import gql from "graphql-tag";

const FETCH_ALL_FILMS = gql`
  {
    allFilms {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      films {
        id
        episodeID
        openingCrawl
        title
        director
        producers
        releaseDate
        created
        edited
        characterConnection {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          characters {
            id
            name
            birthYear
            eyeColor
            gender
            hairColor
          }
        }
        planetConnection {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          planets {
            id
            diameter
            name
            rotationPeriod
            orbitalPeriod
            gravity
            population
          }
        }
        starshipConnection {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          starships {
            name
            model
            starshipClass
            pilotConnection {
              pilots {
                id
                name
                birthYear
                eyeColor
                gender
                hairColor
              }
            }
          }
        }
        speciesConnection {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          species {
            name
            classification
            designation
            averageHeight
            averageLifespan
            eyeColors
            hairColors
            skinColors
            language
            homeworld {
              id
              diameter
              name
              rotationPeriod
              orbitalPeriod
              gravity
              population
            }
          }
        }
      }
    }
  }
`;

export default FETCH_ALL_FILMS;
