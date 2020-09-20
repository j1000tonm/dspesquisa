import React from 'react';
import './styles.css';

type Props = {
    totalPages?: number;
    goToPage: Function;
    activePage: number;
}

const Pagination = ({ totalPages = 0, goToPage, activePage }: Props) => {
    const paginationitems = Array.from(Array(totalPages).keys());

    return (
        <div className="pagination-container">
            {paginationitems.map(item => (
                <button 
                    key={item}
                    className={`pagination-item active ${activePage === item ? 'active' : 'inactive'}`}
                    onClick={() => goToPage(item)}
                >
                    {item + 1}
                </button>
            ))}
        </div>
    );
}

export default Pagination;