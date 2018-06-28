export default function(height, padding) {
	if (window.innerHeight <= 760 && window.innerWidth < 1840) {
		return padding
	} else if (window.innerHeight <= 930 && window.innerWidth >= 1840) {
		return padding
	} else {
		return 0;
	}
}