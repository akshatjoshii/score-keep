/**
 * Created by Akshat on 23-06-2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

export default class Player extends React.Component {
    render() {
        return (
            <div key={this.props.player._id} className="item">
                <div className="player">
                    <div>
                        <h3 className="player__name">
                            {this.props.player.name}
                        </h3>
                        <p className="player__stats">{this.props.player.score} points.

                        </p>
                    </div>
                    <div class="player__actions">

                            <button className="button button--round" onClick={()=>{
                Players.update({
                    _id: this.props.player._id
                },{
                    $inc: {
                       score: 1
                    }
                })
                 }}>+
                            </button>

                            <button className="button button--round" onClick={()=>{
                Players.update({
                    _id: this.props.player._id
                }, {
                    $inc: {
                          score: -1
                    }
                })
            }}>-
                            </button>

                            <button className="button button--round" type="button" onClick={(e)=>{
             Players.remove({
        _id: this.props.player._id
    })
           }}>X
                            </button>
                        </div>
                    </div>
                </div>
        )
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired
}