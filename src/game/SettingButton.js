import React from 'react';
import PropTypes from 'prop-types';

class SettigButton extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            amount: props.amount,
            name: props.name,
            restrictionsMax: props.restrictionsMax,
            restrictionsMin: props.restrictionsMin
        };
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
    };

    async plus () {
        const {applySettings} = this.props;
        await this.setState ((state) => {
            if (state.amount < state.restrictionsMax) {
                return {amount: state.amount + 1};
            }
        });
        applySettings(this.state.name, this.state.amount);
    }; 

    async minus () {
        const {applySettings} = this.props;
        await this.setState ((state) => {
            if (state.amount > state.restrictionsMin) {
                return {amount: state.amount - 1};
            }
        });
        applySettings(this.state.name, this.state.amount);
    };

    render () {
        const {name, restrictionsMin, restrictionsMax, amount} = this.state;
        const {plus, minus} = this;

        return (
            <div className='setting__bots'>
                <button name= {name} className='setting__button' onClick={minus}>-</button>
                {amount === restrictionsMin ? <span className='configControl'>Min </span> : null}
                <span className='text'>{name}: {amount}</span> 
                {amount === restrictionsMax ? <span className='configControl'> Max </span> : null}
                <button name={name} className='setting__button' onClick={plus}>+</button>
            </div>
        );
    };
}

SettigButton.propTypes = {
    name: PropTypes.string,
    amount: PropTypes.number,
    restrictionsMax: PropTypes.number,
    restrictionsMin: PropTypes.number,
    applySettings: PropTypes.func,
};

export default SettigButton;