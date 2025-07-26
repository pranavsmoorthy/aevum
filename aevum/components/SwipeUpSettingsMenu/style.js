export const styleJSON = (params) => {return {
  container: {
    flex: 1, // Takes up full screen height
    width: '100%',
    backgroundColor: 'transparent', // Equivalent to bg-gray-100
  },
  swipeUpArea: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64, // Equivalent to h-16
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsMenu: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: params.screenHeight * 0.6, // 80% of screen height
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
    borderBottomColor: '#e5e7eb', // Equivalent to border-gray-200
    backgroundColor: '#ffffffff', // Equivalent to bg-gray-50
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  settingsTitle: {
    fontSize: 22, // Equivalent to text-2xl
    color: '#333', // Equivalent to text-gray-800
    fontFamily: "Raleway-Bold"
  },
  closeButton: {
    padding: 8, // Equivalent to p-2
    borderRadius: 9999, // Equivalent to rounded-full
    backgroundColor: 'transparent',
  },
  closeButtonText: {
    fontSize: 15, // Adjusted size for 'X' to match lucide-react size
    color: '#6b7280', // Equivalent to text-gray-500
    fontFamily: "Raleway-Medium"
  },
  settingsContent: {
    flex: 1,
    padding: 24, // Equivalent to p-6
    overflow: 'scroll', // Enable scrolling for long content
  },
  settingItemDescription: {
    color: '#4b5563', // Equivalent to text-gray-700
  },
  aboutAppInfoHeader: {
    color: '#2c3138ff',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: "Raleway-Regular",
    backgroundColor: '#F3F4F6', // Tailwind's gray-100

  },
  aboutAppInfoSubject: {
    color: '#4b5563',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 11,
    fontFamily: "Raleway-Light",
    backgroundColor: '#F3F4F6', // Tailwind's gray-100
  }
}};