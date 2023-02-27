import globalStyles from "../Global/globalStyles";

const styles = {
    logoStyles: {
        ...globalStyles.pointer,
        width: '320px'
    },

    navContainerStyles: {
        ...globalStyles.horizontalSpaceBetween,
        width: '100%',
        height: '80px'
    },

    linksContainerStyles: {
        ...globalStyles.horizontalSpaceAround,
        width: 'min(100% - 360px, 800px)',
        marginLeft: '26px'
    },

    buttonsContainerStyles: {
        ...globalStyles.horizontalSpaceAround,
        width: '360px',
        marginRight: '26px'
    },

    navLinkStyles: {
        ...globalStyles.pointer,
        fontSize: '20.5px'
    }
}

export default styles;