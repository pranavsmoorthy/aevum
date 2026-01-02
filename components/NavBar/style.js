import { Platform } from 'react-native';
import { assets } from '../../assets/assets';

export const styleJSON = () => ({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
        paddingVertical: 8,
        paddingBottom: Platform.OS === 'android' ? 8 : 24,
    },
    navButton: {
        alignItems: 'center',
        padding: 8,
        borderRadius: 12,
        width: 80,
    },
    navText: {
        fontSize: 10,
        fontWeight: '500',
        marginTop: 4,
        fontFamily: assets.basic.fonts.RALEWAY_MEDIUM,
        marginBottom: 40
    }
});
