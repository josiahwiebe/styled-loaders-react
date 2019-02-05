import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rotate, bounce } from '../../utils/animations'
import { getSize, getColor } from '../../utils/defaults'

const RotateScale = ({ color, duration, size }) => {
    const Spinner = styled.div`
        margin: 100px auto;
        position: relative;
        width: ${getSize(size)};
        height: ${getSize(size)};
        text-align: center;
        animation: ${rotate} 2s infinite ease-in-out;
        animation-duration: ${props =>
        props.duration ? props.duration : '2s'};
    `

    const DefaultCube = styled.div`
        width: 60%;
        height: 60%;
        display: inline-block;
        position: absolute;
        top: 0;
        border-radius: 100%;
        background-color: ${getColor(color)};
        animation: ${bounce} 2s infinite ease-in-out;
        animation-duration: ${props =>
        props.duration ? props.duration : '2s'};
    `

    const Cube = styled(DefaultCube)`
        top: auto;
        bottom: 0;
        animation-delay: -1s;
    `

    return (
        <Spinner size={size} duration={duration}>
            <DefaultCube color={color} duration={duration} />
            <Cube color={color} duration={duration} />
        </Spinner>
    )
}

export default RotateScale

RotateScale.propTypes = {
    /**
	 * Background of the spinner
	 * default is #333
	 */
    color: PropTypes.string,

    /**
	 * Animation duration
	 * default is 1.2s
	 */
    duration: PropTypes.string,

    /**
	 * Size of the spinner
	 * default is 40px
	 */
    size: PropTypes.string,
}
