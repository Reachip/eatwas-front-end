import React, {Component} from 'react';
import {
  TopNavigationAction,
  TopNavigation,
  Icon,
  OverflowMenu,
} from '@ui-kitten/components';
import AsyncStorage from '@react-native-community/async-storage';

const MenuIcon = style => <Icon {...style} name="more-vertical" />;
const InfoIcon = style => <Icon {...style} name="info" />;
const LogoutIcon = style => <Icon {...style} name="log-out" />;

const menuData = [
  {title: 'Crédit', icon: InfoIcon},
  {title: 'Se déconnecter', icon: LogoutIcon},
];

export default class CustomTopNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
    };
  }

  handlePress() {
    this.setState({menuVisible: !this.state.menuVisible});
  }

  onItemSelect(index) {
    if (index === 1) {
      AsyncStorage.multiRemove(['token', 'decodedToken']).then(() =>
        this.props.navigation.navigate('Auth'),
      );
    } else {
      this.props.navigation.navigate('About');
    }
  }

  renderMenuAction = () => (
    <OverflowMenu
      visible={this.state.menuVisible}
      data={menuData}
      onSelect={index => this.onItemSelect(index)}
      onBackdropPress={() => this.handlePress()}>
      <TopNavigationAction icon={MenuIcon} onPress={() => this.handlePress()} />
    </OverflowMenu>
  );

  render() {
    return (
      <TopNavigation
        title="Projet EatWas"
        alignment="center"
        rightControls={this.renderMenuAction()}
      />
    );
  }
}
