/**
 * Created by Akshat on 23-06-2017.
 */
import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component{
    handleSubmit(e){
        e.preventDefault(e);
        let playerName = e.target.playerName.value;

        if (playerName) {
            e.target.playerName.value = '';
            Players.insert({
                name: playerName,
                score: 0
            })
        }
    }

    render(){
        return (
            <div className="item">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input className="form__input" type="text" name="playerName" placeholder="Name" required/>
                    <button className="button" type="submit">Add Player</button>
                </form>
            </div>
        )
    }
}