import React from "react";
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import {hashHistory} from "react-router";
import query from "../queries/fetchSongs";
import Back from "./backButton";

class SongCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{query}]
        }).then(() => hashHistory.push('/'))
        ;
    }

    render() {
        return (<div>
            <Back/>
            <h3>Create a New Song</h3>
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Song Title:</label>
                <input
                    onChange={event => this.setState({title: event.target.value})}
                    value={this.state.value}
                    type="text"/>

            </form>
        </div>)
    }
}

const mutation = gql`
    mutation AddSong ($title:String) {
        addSong (title:$title) {
            id
            title
        }
    }
`
export default graphql(mutation)(SongCreate)