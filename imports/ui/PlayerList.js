/**
 * Created by Akshat on 24-06-2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import FlipMove from 'react-flip-move';


export default class PlayerList extends React.Component{
    renderPlayers(playerList){
        console.log(playerList);
        if(playerList.length===0){
            return (
                <div className="item">
                    <p className="item__message item__message--message">Add your first player</p>
                </div>
            )
        }else{
            return playerList.map((player)=> {
                return  <Player key={player._id} player={player}/>
            });
        }

    }
    render(){
        console.log(this.props.players);
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayers(this.props.players)}
                </FlipMove>

            </div>
        );
    }
}

PlayerList.propType = {
    players: PropTypes.array.isRequired
};