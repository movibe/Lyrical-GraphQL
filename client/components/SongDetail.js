import React from "react";
import {graphql} from "react-apollo";
import query from "../queries/fetchSong";
import Back from "./backButton";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

class SongDetail extends React.Component {

    render() {
        const {song} = this.props.data;

        if (!song)  return (<div>Loading...</div>)

        return (<div>
            <Back/>
            <h3>{song.title}</h3>
            <LyricList lyrics={song.lyrics}/>
            <LyricCreate songId={this.props.params.id }/>
        </div>)
    }
}


export default graphql(query, {
    options: props => {
        return {variables: {id: props.params.id}}
    }
})(SongDetail)