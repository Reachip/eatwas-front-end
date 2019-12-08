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
                    imageUrl="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" 
                    title="Mon profil"
                ></CardMenu>
                <CardMenu 
                    imageUrl="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" 
                    title="Mes suggestions"></CardMenu>
                <CardMenu 
                    imageUrl="https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" 
                    title="Mon bracelet connecté"></CardMenu>
            </Layout>
        );
    }
}