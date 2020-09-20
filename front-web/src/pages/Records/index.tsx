import React from 'react';
import './styles.css';

const Records = () => (
    <div className="page-container">
        <table className="records-table" cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>INSTANTE</th>
                    <th>IDADE</th>
                    <th>PLATAFORMA</th>
                    <th>GÉNERO</th>
                    <th>TÍTULO DO GAME</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>19/09/2020 18:31</td>
                    <td>José Milton</td>
                    <td>53</td>
                    <td>XBOX</td>
                    <td>Ação - Aventura</td>
                    <td>The last of US</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Records;