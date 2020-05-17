import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Intervalo = props => {
    const { min, max } = props;

    return (
        <Card title='Intervalo de Numero' red>
            <div className='Intervalo'>
                <span>
                    <strong>Minimo</strong>
                    <input type='number' value={min} readOnly/>
                </span>
                <span>
                    <strong>Maximo</strong>
                    <input type='number' value={max} readOnly/>
                </span>
            </div>
        </Card>
    );
}

const mapStateToProps = state => {
    const { min, max } = state.numeros;
    return {
        min,
        max
    };
}

export default connect(mapStateToProps)(Intervalo);