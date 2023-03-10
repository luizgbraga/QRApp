import globalStyles from "../Global/globalStyles";
import shadows from "../Global/shadows";
import colors from "../Global/colors";

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
        width: '980px',
        height: '600px',
        padding: '36px 56px 36px 56px',
        borderRadius: '16px',
        zIndex: '10'
    },

    titleStyles: {
        fontSize: '30px',
        fontWeight: 'bold',
        letterSpacing: '0.9px',
        margin: '0px 0px 30px 0px'
    },

    close: {
        ...globalStyles.pointer,
        width: '20px',
        position: 'absolute',
        top: 'calc(100vh/2 - 282px)',
        left: 'calc(100vw/2 + 450px)'
    },

    mainInfo: {
        ...globalStyles.horizontalSpaceBetween,
        margin: '0px 0px 20px 0px'
    },

    header: {
        ...globalStyles.horizontalSpaceBetween,
        width: '640px',
    },

    subtitle: {
        ...globalStyles.pointer,
        fontSize: '20px',
        fontWeight: '500',
        color: colors.grey
    },

    subtitleSelected: {
        ...globalStyles.pointer,
        fontSize: '20px',
        fontWeight: '500'
    },

    form: {
        margin: '20px 0px 0px 0px',
        height: '300px'
    },

    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
    }
}

export default styles;


