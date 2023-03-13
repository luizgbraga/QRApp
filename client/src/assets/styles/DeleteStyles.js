import globalStyles from "./Global/globalStyles";
import colors from "./Global/colors";

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
        height: '292px',
        borderRadius: '12px',
        zIndex: '10',
        position: 'relative'
    },

    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        height: '80px',
        margin: '0px 0px 0px 30px'
    },

    body: {
        backgroundColor: colors.lightgrey,
        
    },  

    bodyText: {
        padding: '30px',
        fontSize: '16px',
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: colors.lesslightgrey,
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: colors.lesslightgrey
    },

    inputsStyles: {
        ...globalStyles.column,
        height: '210px',
        justifyContent: 'space-around'
    },

    titleStyles: {
        fontSize: '24px',
        fontWeight: 'bold'
    },

    buttonsContainer: {
        ...globalStyles.horizontalSpaceBetween,
        width: '400px',
        margin: '30px 20px 0px 100px'
    }
}

export default styles;


