/* Core */
import React from 'react';

/* Presentational */
import {
  List,
  ListItem,
  Left,
  Thumbnail,
  Right,
  Body,
  Text,
} from 'native-base';

const RepoList = ({ repositories }) => (
  <List style={{ marginTop: 10 }}>
    { repositories.map(repo => (
      <ListItem key={repo.id} avatar>
        <Left>
          <Thumbnail source={{ uri: repo.owner.avatar_url }} />
        </Left>
        <Body>
          <Text>{repo.full_name}</Text>
          <Text note>{repo.description}</Text>
        </Body>
        <Right>
          <Text note>{repo.stargazers_count} stars</Text>
        </Right>
      </ListItem>
    )) }
  </List>
);

export default RepoList;
