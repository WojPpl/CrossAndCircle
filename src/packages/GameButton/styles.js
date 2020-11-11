const container = {
    width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        borderStyle: "solid",
        borderColor: "gray",
        cursor: "pointer",
        alignItems: "center"
}

export default {

    circlePlayer: {
        color: "red"
    },
    crossPlayer: {
        color: "green"
    },
    sideBorder: {
        ...container,
        borderLeftWidth: "1px",
        borderRightWidth: "1px",
        borderBottomWidth: 0,
        borderTopWidth: 0
    },
    horizontalBorder: {
        ...container,
        borderTopWidth: "1px",
        borderBottomWidth: "1px",
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    fullBorder: {
        ...container,
        borderWidth: "1px"
    },
    noBorder: {
        ...container,
        borderWidth: 0
    }
}