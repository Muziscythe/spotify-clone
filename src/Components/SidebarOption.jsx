import React from 'react'
import "./SidebarOption.css"

function SidebarOption({Icon, title}) {
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className="sidebarOption__icon" />}
            <h4 className='sidebarOption__title'>{title}</h4>
        </div>
    )
}

export default SidebarOption
