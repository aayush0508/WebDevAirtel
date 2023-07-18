import React from 'react'

function SidebarRow({ Icon, title, className }) {
    const classes = ["sidebarRow__icon"]
    classes.push(className)
    return (
        <div className='sidebarRow'>
            <Icon className={classes.join(" ")} />

            <h2 className="sidebarRow__title">

                {title}
            </h2>
        </div>
    )
}

export default SidebarRow
