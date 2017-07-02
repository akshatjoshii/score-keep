import React from 'react';
import ReactDOM from 'react-dom';

import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import {calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';



Meteor.startup(function () {
    let title = "Score Keep";
    let subTitle = "Created By Akshat";
    Tracker.autorun(function () {
        let players = Players.find({}, {sort: {score: -1}}).fetch();
        let positionedPlayer = calculatePlayerPositions(players);

        ReactDOM.render(<App players={positionedPlayer} title={title} subTitle={subTitle} />, document.getElementById('app'))
    });


});