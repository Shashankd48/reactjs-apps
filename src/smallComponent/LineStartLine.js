import React from 'react'
const LineStarLine = ({color}) => {
    return (
        <div className={color}>
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
    )
}

export default LineStarLine;