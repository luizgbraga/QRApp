const styles = {
    containerStyles: {
        display: 'flex',
        flexDirection: 'column'
    },

    labelContainer: {
        width: '240px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    labelStyles: {
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: '0.9px'
    },

    additionalStyles: {
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: '0.9px',
        color: '#13C47A',
        cursor: 'pointer'
    },

    inputSyles: {
        width: '220px',
        height: '54px',
        padding: '10px 20px 10px 20px',
        fontSize: '20px',
        borderRadius: '6px',
        borderStyle: 'solid',
        borderWidth: '1px',
        marginTop: '8px',
    },

    selectsContainerStyles: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '8px'
    },

    selectMonthStyles: {
        width: '160px',
        height: '54px',
        padding: '10px 20px 10px 20px',
        fontSize: '20px',
        borderTopLeftRadius: '6px',
        borderBottomLeftRadius: '6px',
        borderStyle: 'solid',
        borderWidth: '1px',
    },

    selectWeekDayStyles: {
        width: '190px',
        height: '54px',
        padding: '10px 20px 10px 20px',
        fontSize: '20px',
        borderStyle: 'solid',
        borderWidth: '1px',
    },

    selectFromHourStyles: {
        width: '140px',
        height: '54px',
        padding: '10px 20px 10px 20px',
        fontSize: '20px',
        borderStyle: 'solid',
        borderWidth: '1px',
    },

    selectToHourStyles: {
        width: '140px',
        height: '54px',
        padding: '10px 20px 10px 20px',
        fontSize: '20px',
        borderTopRightRadius: '6px',
        borderBottomRightRadius: '6px',
        borderStyle: 'solid',
        borderWidth: '1px',
    }
}

export default styles;