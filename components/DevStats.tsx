import React from 'react'

const DevStats = () => {
    return (
        <div className="w-full stats shadow">
            
            <div className="stat">
                <div className="stat-title">Total Projects</div>
                <div className="stat-value text-primary">10</div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Total Mission</div>
                <div className="stat-value text-secondary">6</div>
            </div>
            
            <div className="stat">
                <div className="stat-value">1200</div>
                <div className="stat-title">Total commit</div>
                
            </div>
            
        </div>
    )
}

export default DevStats