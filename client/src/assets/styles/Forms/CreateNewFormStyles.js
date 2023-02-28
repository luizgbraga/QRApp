import globalStyles from "../Global/globalStyles";
import shadows from "../Global/shadows";

const styles = {
    background: {
        ...globalStyles.center,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        zIndex: '9'
    },

    containerStyles: {
        ...globalStyles.column,
        backgroundColor: '#FFFFFF',
        width: '520px',
        height: '420px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: '16px',
        zIndex: '10'
    },

    inputsStyles: {
        ...globalStyles.column,
        height: '210px',
        justifyContent: 'space-around'
    },

    titleStyles: {
        fontSize: '30px',
        fontWeight: 'bold',
        letterSpacing: '0.9px'
    },

    close: {
        ...globalStyles.pointer,
        width: '20px',
        position: 'absolute',
        top: 'calc(100vh/2 - 194px)',
        left: 'calc(100vw/2 + 220px)'
    }
}

export default styles;


