import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Layout, Text, Button, Icon} from '@ui-kitten/components';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 340,
    height: 480,
    resizeMode: 'cover',
    marginBottom: 15,
  },
});
export default class SuggestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout style={styles.layout}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          }}
        />
        <Text category="h3">Blanquette de veau</Text>
        <Button
          style={{marginTop: 15}}
          status="success"
          appearance="outline"
          icon={() => <Icon name="activity-outline" />}
          size="giant">
          Proposer un repas
        </Button>
      </Layout>
    );
  }
}
