import React, {Component} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {LineChart} from 'react-native-chart-kit';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },

  view: {
    marginLeft: 20,
    marginRight: 20,
  },
});

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 0.2,
  color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: [
    'Janvier',
    'Fevrier',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet'
  ],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 6, 27, 83, 9, 12, 2],
      color: (opacity = 1) => `rgba(25, 130, 55, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
};

export default class ProfilScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout style={styles.layout}>
        <ScrollView>
          <View style={styles.view}>
            <Text category="h2" style={{marginTop: 20, marginBottom: 20}}>
              Mon profil
            </Text>
            <Text category="h5" style={{marginBottom: 35}}>
              Dépenses energétiques
            </Text>
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
            />
            <Text category="h5" style={{marginTop: 35, marginBottom: 35}}>
              Consommation de protéines
            </Text>
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
            />
          </View>
        </ScrollView>
      </Layout>
    );
  }
}
