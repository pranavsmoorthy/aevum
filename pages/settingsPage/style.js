import { assets } from '../../assets/assets';

export const styleJSON = () => ({
    container: {
        flex: 1,
        backgroundColor: assets.basic.mediumGray,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 30,
        fontFamily: assets.basic.fonts.RALEWAY_BOLD,
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    buttonText: {
        fontSize: 18,
        color: '#ef4444',
        fontFamily: assets.basic.fonts.RALEWAY_BOLD,
    },
});
