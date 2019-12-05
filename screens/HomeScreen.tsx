import React from "react"
import {Component} from "react"
import CardMenu from "../components/CardMenu"
import {Layout} from "@ui-kitten/components"

interface Props {}
interface State {}

export default class HomeScreen extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return( 
            <Layout style={{flex: 1}}>
                <CardMenu 
                    title="Consulter ma progression" 
                    subtitle="Consulter votre progression via vos données personnelles"
                >    
                </CardMenu>

                <CardMenu 
                    title="Mes suggestions" 
                    subtitle="Recevez des suggestions qui prennent en comptre vos objectifs et l'environnement"
                >    
                </CardMenu>

                <CardMenu 
                    title="Mon bracelet connecté" 
                    subtitle="Connecter le bracelet connecté à l'application afin d'en savoir plus sur votre dépense journalière"
                >    
                </CardMenu>
            </Layout>
        );
    }
}