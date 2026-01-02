import { Platform } from 'react-native';
import { assets } from '../../assets/assets';

export const styleJSON = () => ({
    header: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? 40 : 50,
    },
    headerTitle: {
        fontSize: 24,
        color: assets.basic.blue,
        fontFamily: assets.basic.fonts.RALEWAY_BOLD,
    },
    headerSubtitle: {
        fontSize: 12,
        color: '#9ca3af',
        fontFamily: assets.basic.fonts.RALEVAY_LIGHT,
        marginLeft: 1.5
    },
    addButton: {
        backgroundColor: '#eff6ff',
        padding: 8,
        borderRadius: 999,
    }
});
