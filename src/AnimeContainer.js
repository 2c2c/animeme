import React from "react";
import {
  Image,
  Container,
  Header,
  Grid,
  Button,
  Checkbox,
  Form,
  Table
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import amazon from "./amazon_icon.png";
import crunchyroll from "./crunchyroll_icon.png";
import mal from "./mal_icon.png";

const amazon_query = "https://www.amazon.com/s/?field-keywords=";
const crunchyroll_query = "http://www.crunchyroll.com/search?from=&q=";
const mal_query = "https://myanimelist.net/anime/";
const AnimeContainer = ({ ratings }) => {
  return (
    <Table basic="very" singleLine celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell collapsing>Links</Table.HeaderCell>
          <Table.HeaderCell>Anime</Table.HeaderCell>
          <Table.HeaderCell collapsing>Predicted Rating</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {ratings.map((r, i) => (
          <Table.Row key={i}>
            <Table.Cell>
              <Image.Group>
                {" "}
                <Image
                  verticalAlign="bottom"
                  as="a"
                  src={amazon}
                  href={amazon_query + r.title}
                  target="_blank"
                />{" "}
                <Image
                  verticalAlign="bottom"
                  as="a"
                  src={crunchyroll}
                  href={crunchyroll_query + r.title}
                  target="_blank"
                />{" "}
                <Image
                  verticalAlign="bottom"
                  as="a"
                  src={mal}
                  href={mal_query + r.animeId}
                  target="_blank"
                />{" "}
              </Image.Group>
            </Table.Cell>
            <Table.Cell>{r.title}</Table.Cell>
            <Table.Cell>{r.rating}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default AnimeContainer;
