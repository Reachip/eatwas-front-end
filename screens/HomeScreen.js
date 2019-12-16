import React, {Component} from 'react';
import {Layout} from '@ui-kitten/components';
import CardMenu from '../components/CardMenu';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Layout style={{flex: 1}}>
        <CardMenu
          imageUrl="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          title="Mon profil"
          switchTo={() => navigate('Profil')}
        />
        <CardMenu
          imageUrl="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
          title="Mes suggestions"
          switchTo={() => navigate('Suggestion')}
        />
        <CardMenu
          imageUrl="https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          title="Mon bracelet connecté"
          switchTo={() => navigate('Bracelet')}
        />
      </Layout>
    );
  }
}
