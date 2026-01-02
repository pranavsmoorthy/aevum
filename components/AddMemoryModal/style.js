import { StyleSheet } from 'react-native';
import { assets } from '../../assets/assets';

export const styleJSON = () => ({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modalContainer: {
        width: '90%',
        maxWidth: 400,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1f2937',
        fontFamily: assets.basic.fonts.RALEWAY_BOLD,
    },
    closeButton: {
        padding: 4,
    },
    form: {
        width: '100%',
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        color: '#4b5563',
        textTransform: 'uppercase',
        marginBottom: 8,
        fontFamily: assets.basic.fonts.RALEWAY_SEMIBOLD,
    },
    input: {
        backgroundColor: '#f3f4f6',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: '#1f2937',
        borderWidth: 1,
        borderColor: '#d1d5db',
        marginBottom: 16,
        fontFamily: assets.basic.fonts.RALEVAY_LIGHT,
    },
    descriptionInput: {
        height: 120,
    },
    saveButton: {
        backgroundColor: assets.basic.blue,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: assets.basic.fonts.RALEWAY_BOLD,
    },
    errorText: {
        color: '#ef4444',
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: assets.basic.fonts.RALEWAY_REGULAR,
    }
});
