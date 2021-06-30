import React from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/MenuItem'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDiirectorySections } from '../../redux/directory/directory.selector'
const Directory =({sections}) => {
        return (
            <div className="directory-menu">
                {
                    sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
}
const mapStateToProps = createStructuredSelector({
    sections: selectDiirectorySections
})

export default connect(mapStateToProps)(Directory)
