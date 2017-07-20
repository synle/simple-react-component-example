//import "babel-register";
import util from 'Util'

const finalutil = {
	getValue: () => {
		let a = util.getValue(Date.now());
		let b = util.getValue(Date.now());

		return a + ' ' + b;
	}
}

export default finalutil;
