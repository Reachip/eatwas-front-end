/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/destructuring-assignment */
import React, {Component} from "react"

import {Layout, Text, Input, Radio, RadioGroup, Select, Button} from "@ui-kitten/components"
import {StyleSheet, ScrollView} from "react-native"

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15
    },

    title: {
        marginTop: 20,
    },

    radio: {
        margin: 8,
    },

    button: {
        marginVertical: 40
    }
});
 
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            regime: null,
            sex: null
        }
    }

    onCheckedChange(index) {
        this.setState({selectedIndex: index})
    }

    render() {
        return( 
            <Layout style={styles.layout}>
                <ScrollView>
                    <Text category="h3" style={styles.title}>M'inscrire au projet EatWas</Text>
                    <Text style={{marginBottom: 10, marginTop: 35}} category="s1">Comment dois-on vous appeler ?</Text>
                    <Input placeholder="Exemple : Rached Mejri" />
                    <Text style={{marginBottom: 10, marginTop: 35}} category="s1">Quel sera votre mot de passe ?</Text>
                    <Input placeholder="Votre mot de passe" secureTextEntry />
                    <Text style={{marginBottom: 10, marginTop: 25}} category="s1">Quelle  est votre date de naissance ?</Text>
                    
                    <Text style={{marginBottom: 10, marginTop: 25}} category="s1">A propos de vos dépenses dans la journée :</Text>
                    <RadioGroup
                        selectedIndex={this.state.selectedIndex}
                        onChange={(i) => this.onCheckedChange(i)}
                    >
                        <Radio style={styles.radio} text="Je fais peu d'exercice"/>
                        <Radio style={styles.radio} text="Je fais de l'exercie (je marche, je travail debout ..)"/>
                        <Radio style={styles.radio} text="Je suis sportif, je fais beaucoup d'exercice"/>
                    </RadioGroup>
                    <Text style={{marginBottom: 10, marginTop: 25}} category="s1">Vous suivez un régime :</Text>
                    <Select
                        data={[{text: "Vegan"}, {text: "Neutre (aucun régime)"}, {text: "Végétalien"}]}
                        selectedOption={this.state.regime}
                        placeholder="Sélectionnez un régime"
                        onSelect={(option) => {
                            this.setState({regime: option})
                        }}
                    />

                    <Text style={{marginBottom: 10, marginTop: 25}} category="s1">Votre êtes de sexe :</Text>
                    <Select
                        data={[{text: "Maculin"}, {text: "Féminin"}]}
                        selectedOption={this.state.sex}
                        placeholder="Sélectionnez votre sexe"
                        onSelect={(option) => {
                            this.setState({sex: option})
                        }}
                    />
                    <Text style={{marginBottom: 10, marginTop: 25}} category="s1">A propos de votre objectif :</Text>
                    <RadioGroup
                        selectedIndex={this.state.selectedIndex}
                        onChange={(i) => this.onCheckedChange(i)}
                    >
                        <Radio style={styles.radio} text="J'aimerais perdre du poid"/>
                        <Radio style={styles.radio} text="J'aimerais prendre du poid"/>
                        <Radio style={styles.radio} text="J'aimerais prendre de la masse musculaire"/>
                        <Radio style={styles.radio} text="J'aimerais manger plus sainement"/>
                        <Radio style={styles.radio} text="Aucun en particulier"/>
                    </RadioGroup>
                    <Button 
                        status="success" 
                        style={styles.button}
                    >
                        Oui, m'inscrire !
                    </Button>
                </ScrollView>
            </Layout>
        );
    }
}