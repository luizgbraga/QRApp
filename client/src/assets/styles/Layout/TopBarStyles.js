import globalStyles from "../Global/globalStyles";

const styles = {
    topBarContainer: {
        ...globalStyles.horizontalSpaceAround,
        width: 'calc(100vw - 310px)',
        height: '80px',
        marginBottom: '16px'
    },

    shortCutIconsContainer: {
        ...globalStyles.horizontalSpaceBetween,
        width: '140px'
    },

    profileContainer: {
        ...globalStyles.horizontalSpaceBetween,
        ...globalStyles.pointer,
        width: '100px',
        letterSpacing: '0.7px'
    },

    profileTitle: {
        fontSize: '20px'
    },

    shortCutIcons: {
        ...globalStyles.pointer,
        width: '24px'
    }
}

export default styles;