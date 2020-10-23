import React from 'react';
import './css/setPage.css';
import CONFIG from './setting/config';
import SettingButton from './SettingButton';
import {settingNames} from './setting/enums';
import PropTypes from 'prop-types';

const {minPlayers, minBots, maxPlayers, maxBots, maxX, maxY, minX, minY} = CONFIG.restrictions;
const {playerName, botName, xName, yName} = settingNames;

const DEFULT_STATE = {
    players: minPlayers,
    bots: minBots,
    x: 18,
    y: 10
};

class SetPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = DEFULT_STATE;

    };

    render() {
        const {bots, x, y} = this.state;
        const {apply} = this.props;
        
        return (
            <article className="setting__container_menu">
                <SettingButton {...{
                    amount: minPlayers,
                    name: playerName,
                    restrictionsMax: maxPlayers,
                    restrictionsMin: minPlayers,
                    applySettings: apply,
                }}/>
                <SettingButton {...{
                    amount: bots,
                    name: botName,
                    restrictionsMax: maxBots,
                    restrictionsMin: minBots,
                    applySettings: apply,
                }}/>
                <SettingButton {...{
                    amount: x,
                    name: xName,
                    restrictionsMax: maxX,
                    restrictionsMin: minX,
                    applySettings: apply,
                }}/>
                <SettingButton {...{
                    amount: y,
                    name: yName,
                    restrictionsMax:
                    maxY,
                    restrictionsMin: minY,
                    applySettings: apply,
                }}/>
            </article>
        );
    }
}

SetPage.propTypes = {
    apply: PropTypes.func,
};

export default SetPage;