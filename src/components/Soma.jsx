import './Intervalo.css';
import React from 'react';

import Card from './Card';

export default props => {
    return (
        <Card title='Soma dos Numeros' blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>Soma:</strong>
                </span>
            </div>
        </Card>
    );
}