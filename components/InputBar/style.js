import { assets } from "../../assets/assets"
import { Platform } from 'react-native';

export const styleJSON = () => ({
    container: {
        padding: 16,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#e5e7eb',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    textInput: {
        flex: 1,
        backgroundColor: '#f3f4f6',
        borderRadius: 22,
        paddingLeft: 20,
        paddingRight: 50,
        height: 44,
        fontSize: 16,
        color: '#1f2937',
        fontFamily: assets.basic.fonts.RALEWAY_LIGHT,
    },
    sendButton: {
        position: 'absolute',
        right: 4,
        backgroundColor: assets.basic.main,
        borderRadius: 20,
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
    },
});