/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/destructuring-assignment */
import React, {Component} from 'react';

import {
  Layout,
  Text,
  Input,
  Radio,
  RadioGroup,
  Select,
  Button,
} from '@ui-kitten/components';
import {StyleSheet, ScrollView, Alert, View} from 'react-native';

import APISession from '../api/apisession';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },

  title: {
    marginTop: 20,
  },

  radio: {
    margin: 8,
  },

  button: {
    marginVertical: 40,
  },
});

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      goal: null,
      sex: null,
      sportFrequency: null,
    };
  }

  onGoalChange(index) {
    this.setState({goal: index});
  }

  onSportFrequencyChange(index) {
    this.setState({sportFrequency: index});
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Layout>
        <ScrollView>
          <View style={styles.view}>
            <Text category="h3" style={styles.title}>
              M'inscrire au projet EatWas
            </Text>
            <Text style={{marginBottom: 10, marginTop: 35}} category="s1">
              Comment dois-on vous appeler ?
            </Text>
            <Input
              placeholder="Exemple : Claude François"
              onChangeText={username => this.setState({username})}
            />
            <Text style={{marginBottom: 10, marginTop: 35}} category="s1">
              Quel sera votre mot de passe ?
            </Text>
            <Input
              placeholder="Votre mot de passe"
              onChangeText={password => this.setState({password})}
              secureTextEntry
            />
            <Text style={{marginBottom: 10, marginTop: 25}} category="s1">
              Quelle est votre date de naissance ?
            </Text>
            <Input placeholder="Par exemple : 12/10/2001" />
            <Text style={{marginBottom: 10, marginTop: 25}} category="s1">
              A propos de vos dépenses dans la journée :
            </Text>
            <RadioGroup
              selectedIndex={this.state.sportFrequency}
              onChange={option => this.onSportFrequencyChange(option)}>
              <Radio style={styles.radio} text="Je fais peu d'exercice" />
              <Radio
                style={styles.radio}
                text="Je fais de l'exercie (je marche, je travail debout ..)"
              />
              <Radio
                style={styles.radio}
                text="Je suis sportif, je fais beaucoup d'exercice"
              />
            </RadioGroup>
            <Text style={{marginBottom: 10, marginTop: 25}} category="s1">
              Votre êtes de sexe :
            </Text>
            <Select
              data={[{text: 'Maculin'}, {text: 'Féminin'}]}
              selectedOption={this.state.sex}
              placeholder="Sélectionnez votre sexe"
              onSelect={option => {
                this.setState({sex: option});
              }}
            />
            <Text style={{marginBottom: 10, marginTop: 25}} category="s1">
              A propos de votre objectif :
            </Text>
            <RadioGroup
              selectedIndex={this.state.goal}
              onChange={goal => this.onGoalChange(goal)}>
              <Radio style={styles.radio} text="J'aimerais perdre du poid" />
              <Radio
                style={styles.radio}
                text="J'aimerais prendre de la masse musculaire"
              />
              <Radio
                style={styles.radio}
                text="J'aimerais manger plus sainement"
              />
              <Radio style={styles.radio} text="Aucun en particulier" />
            </RadioGroup>
            <Button
              status="success"
              style={styles.button}
              onPress={() => {
                const session = new APISession(
                  'http://192.168.1.90:8080',
                  this.state.username,
                  this.state.password,
                );
                session
                  .register(
                    this.state.sex.text,
                    this.state.sportFrequency,
                    this.state.goal,
                    0,
                    'r.mejri',
                  )
                  .then(resp => {
                    switch (resp.code) {
                      case 200:
                        Alert.alert('Inscription', resp.message);
                        navigate('Auth');
                        break;

                      case 500:
                        Alert.alert('Erreur', resp.message);
                        break;

                      case 401:
                        Alert.alert('Erreur', resp.message);
                        break;

                      default:
                        break;
                    }
                  })
                  .catch(() =>
                    Alert.alert('Erreur', 'Une erreur interne a été détectée'),
                  );
              }}>
              Oui, m'inscrire !
            </Button>
          </View>
        </ScrollView>
      </Layout>
    );
  }
}
