import globalStyles from "../Global/globalStyles";

const styles = {
    background: {
        ...globalStyles.center,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        zIndex: '9'
    },

    formContainer: {
        ...globalStyles.columnCentered,
        display: 'flex',
        backgroundColor: '#FFFFFF',
        width: '620px',
        height: '480px',
        borderRadius: '16px',
        zIndex: '10',
        padding: '32px'
    },

    titleStyles: {
        fontSize: '30px',
        fontWeight: 'bold',
        letterSpacing: '0.9px',
        margin: '24px 0px 30px 0px'
    },

    headerFormStyles: {
        width: '600px',
        ...globalStyles.columnCentered,
        marginBottom: '20px'
    },
    
    restrictionFormStyles: {
        width: '920px',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px'
    },

    inputsContainer: {
        height: '216px'
    },

    close: {
        ...globalStyles.pointer,
        width: '20px',
        position: 'absolute',
        top: 'calc(100vh/2 - 220px)',
        left: 'calc(100vw/2 + 272px)'
    },

    buttonsContainer: {
        ...globalStyles.horizontalSpaceBetween,
        width: '420px',
        margin: '20px 0px 0px 0px'
    },

    rightButtonsContainer: {
        ...globalStyles.horizontalSpaceBetween,
        width: '260px',
    }
}

export default styles;