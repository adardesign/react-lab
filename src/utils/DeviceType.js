// isMobile
function DeviceType(type) {
	if(window.innerWidth < 500) return "mobile";
	return "desktop";
}

export default DeviceType;
