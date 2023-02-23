import colors from "../Global/colors";

const styles = {
    buttonStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '272px',
        height: '64px',
        borderRadius: '50px',
        cursor: 'pointer',
        border: '0',
        backgroundColor: colors.blue,
        color: 'white',
        marginLeft: '100px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'
    },

    labelStyle: {
        fontSize: '26px',
        fontWeight: 'bold',
        letterSpacing: '0.95px'
    }
}

export default styles;