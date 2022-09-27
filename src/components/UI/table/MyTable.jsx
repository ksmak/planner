import React from 'react';
import classes from './MyTable.module.css';

const MyTable = ({title, headers, rows}) => {
    return (
        <div className={classes.group}>
            <h3>{title}</h3>
            <table>
                <thead>
                    <tr>
                        {headers.map((item, index) => 
                            <th key={index}>{item}</th>
                        )}
                        <th>Операции</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((item, index) => 
                        <tr key={index}>
                            <td>{index + 1}</td>
                            {Object.values(item).slice(1).map((val, index) => <td key={index}>{val}</td>)}
                            <td>
                                <button>Открыть</button>
                                <button>Удалить</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MyTable;