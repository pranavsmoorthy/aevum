import { assets } from "../../assets/assets";

export const styleJSON = (params) => {return {
  container: {
    flex: 1, // Takes up full screen height
    width: '100%',
    backgroundColor: 'black',
  },
  swipeUpArea: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64, // Equivalent to h-16
    backgroundColor: 'transparent', // No background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsMenu: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: params.screenHeight * 0.95, // 80% of screen height
    backgroundColor: 'white',
    borderTopLeftRadius: 24, // Equivalent to rounded-t-3xl
    borderTopRightRadius: 24,
    shadowColor: '#000', // Equivalent to shadow-2xl
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 15, // For Android shadow
    overflow: 'hidden', // Ensures rounded corners clip content
  },
  settingsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20, // Equivalent to p-5
    borderBottomWidth: 1,
    borderBottomColor: assets.swipeUpMenu.borderBottomColor, // Equivalent to border-gray-200
    backgroundColor: '#ffffffff', // Equivalent to bg-gray-50
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  settingsTitle: {
    fontSize: 22, // Equivalent to text-2xl
    color: assets.swipeUpMenu.headerTextColor, // Equivalent to text-gray-800
    fontFamily: assets.basic.fonts.RALEWAY_BOLD,
  },
  closeButton: {
    padding: 8, // Equivalent to p-2
    borderRadius: 9999, // Equivalent to rounded-full
    backgroundColor: 'transparent',
  },
  closeButtonText: {
    fontSize: 15, // Adjusted size for 'X' to match lucide-react size
    color: assets.basic.darkGray, // Equivalent to text-gray-500
    fontFamily: assets.basic.fonts.RALEWAY_REGULAR,
  },
  settingsContent: {
    flex: 1,
    padding: 24, // Equivalent to p-6
    overflow: 'scroll', // Enable scrolling for long content
    justifyContent: 'flex-start',
  },
  aboutAppInfoHeader: {
    color: assets.swipeUpMenu.appInfoHeaderColor,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: "Raleway-Regular",
    backgroundColor: assets.basic.mediumGray, // Tailwind's gray-100

  },
  aboutAppInfoSubject: {
    color: assets.swipeUpMenu.appInfoSubjectColor,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 11,
    fontFamily: "Raleway-Light",
    backgroundColor: assets.basic.mediumGray, // Tailwind's gray-100
  },
}};