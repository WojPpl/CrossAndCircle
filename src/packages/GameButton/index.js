import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Styles from "./styles";

const GameButton = ({ buttonClick, positionX, player, aiMove }) => {
    const [move, setMove] = useState(false);
    const [buttonFrozen, setButtonFrozen] = useState();

    useEffect(() => {
        if (aiMove?.x === positionX) {
            handleOnClick()
        }
    }, [aiMove]);
    const chooseBorderStyle = () => {
        let style;
        switch (positionX) {
            case 1: style = Styles.sideBorder; break;
            case 3: style = Styles.horizontalBorder; break;
            case 4: style = Styles.fullBorder; break;
            case 5: style = Styles.horizontalBorder; break;
            case 7: style = Styles.sideBorder; break;
            default: style = Styles.noBorder; break;
        }
        return style
    }

    const handleOnClick = () => {
        setMove(true);
        setButtonFrozen(player ? "0" : "x");
        buttonClick(
            {
                positionX: positionX,
                player: player ? "0" : "x"
            }
        )
    }

    return (<div style={chooseBorderStyle()} onClick={!buttonFrozen ? () => { handleOnClick() } : console.log()}>{move ? buttonFrozen ? buttonFrozen : player ? "o" : "x" : ""}</div>)
}


GameButton.propTypes = {
    positionX: PropTypes.number
}

export default GameButton;
