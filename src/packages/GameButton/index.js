import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Styles from "./styles";

const GameButton = ({ buttonClick, positionX, positionY, player, aiMove }) => {
    const [move, setMove] = useState(false);
    const [buttonFrozen, setButtonFrozen] = useState();

    useEffect(() => {
        if (aiMove?.x === positionX && aiMove?.y === positionY) {
            handleOnClick()
        }
    }, [aiMove]);
    const chooseBorderStyle = () => {
        let style;
        switch (positionX) {
            case 0:
                if(positionY === 1 ) {
                    style = Styles.sideBorder;
                }
                else {
                    style = Styles.noBorder;
                }
                break;
            case 1:
                if(positionY === 1 ) {
                    style = Styles.fullBorder;
                }
                else {
                    style = Styles.horizontalBorder;
                }
                break;
            case 2:
                if(positionY === 1 ) {
                    style = Styles.sideBorder;
                }
                else {
                    style = Styles.noBorder;
                }
                break;
            default:
                style = Styles.noBorder;
                break;
        }
        return style
    }

    const handleOnClick = () => {
        setMove(true);
        setButtonFrozen(player ? "0" : "x");
        buttonClick(
            {
                positionY: positionY,
                positionX: positionX,
                player: player ? "0" : "x"
            }
        )
    }

    return (<div style={chooseBorderStyle()} onClick={!buttonFrozen ? () => {handleOnClick()} : console.log()}>{move ? buttonFrozen ? buttonFrozen : player ? "o" : "x" : "" }</div>)
}


GameButton.propTypes = {
    positionX: PropTypes.number
}

export default GameButton;

