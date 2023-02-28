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
        height: '460px',
        borderRadius: '16px',
        zIndex: '10'
    },

    titleStyles: {
        fontSize: '30px',
        fontWeight: 'bold',
        letterSpacing: '0.9px'
    },

    headerFormStyles: {
        width: 'calc(100vw - 200px)',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px'
    },
    
    restrictionFormStyles: {
        width: '920px',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px'
    },

    close: {
        ...globalStyles.pointer,
        width: '20px',
        position: 'absolute',
        top: 'calc(100vh/2 - 214px)',
        left: 'calc(100vw/2 + 272px)'
    }
}

export default styles;