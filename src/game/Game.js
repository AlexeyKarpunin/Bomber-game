import React from 'react';
import './css/game.css';
import {gameStatus, settingNames} from './setting/enums';
import SettingMenu from './SettingMenu';
import CONFIG from './setting/config';
import PlayGound from './PlayGround';
import Map from './Map';
import Party from './characters/Party';

const {minBots, minPlayers} = CONFIG.restrictions;
const {init, started} = gameStatus;

const DEFAULT_STATE = {
    gameStatus: init,
    players: minPlayers,
    bots: minBots,
    x: 18,
    y: 10,
    party: [],
};

class Game extends React.Component {
    constructor (props) {
        super(props);
        this.state = DEFAULT_STATE;

        this.applySetting = this.applySetting.bind(this);
        this.startGame = this.startGame.bind(this);
        this.createParty = this.createParty.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.closeModal);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.closeModal);
    }

    closeModal(e) {
        
    }

    createParty (map) {
        const newParty = new Party({map: map})
        this.setState({party: newParty.makeParty()})
    }

    startGame() {
        this.setState({gameStatus: started});
    }

    applySetting (name, amount) {
        const {playerName, botName, xName, yName} = settingNames;
        switch (name) {
        case playerName:
            this.setState({players: amount});
            break;
        case botName:
            this.setState({bots: amount});
            break;
        case xName:
            this.setState({x: amount });
            break;
        case yName:
            this.setState({y: amount});
            break;
        default:
            break;
        }
    }

    render() {
        const {gameStatus, players, bots, x, y} = this.state;
        const {applySetting, startGame, createParty} = this;
        const newMap = new Map({
            players: players,
            bots: bots,
            x: x,
            y: y,
        });

        return (
            <React.StrictMode>
                 {
                 gameStatus === started ? 
                 <section className='play_ground__container'>
                     <PlayGound {...{map: newMap, x: x, y: y, makeParty: createParty}}/>
                 </section>
                  :
                 <section className='game__container'>
                     <SettingMenu {...{apply: applySetting }}/>
                    <button className='game__container__menu_start' onClick={startGame}>START</button>
                 </section>
                 }
                 {console.log(this.state.party)}
            </React.StrictMode>
        );
    }
}

export default Game;