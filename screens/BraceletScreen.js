import React, {Component} from 'react';
import {Menu, Icon} from '@ui-kitten/components';

export default class BraceletScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuData: [
        {
          title: 'Me connecter au bracelet',
          icon: style => <Icon {...style} name="link-outline" />,
        },
        {
          title: 'Me déconnecter du bracelet',
          disabled: true,
          icon: style => <Icon {...style} name="minus-circle-outline" />,
        },
        {
          title: 'Configurer un bracelet',
          icon: style => <Icon {...style} name="settings-2-outline" />,
        },
        {
          title: 'Envoyer mes données à EatWas',
          disabled: true,
          icon: style => <Icon {...style} name="save-outline" />,
        },
      ],

      selectedIndex: null,
    };
  }

  render() {
    return (
      <Menu
        appearance="default"
        data={this.state.menuData}
        selectedIndex={this.state.selectedIndex}
        onSelect={index => this.setState({selectedIndex: index})}
        style={{flex: 1}}
      />
    );
  }
}
