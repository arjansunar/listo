import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

function MainInfoContainer() {
    return (
        <div>
            <main className="app__main" style={{ display: "flex" }}>
                <LeftSidebar />
                <RightSidebar />
            </main>
        </div>
    )
}

export default MainInfoContainer
