import Selector from '../Selector';

export default class ConstantValue extends Selector {
	constructor(options) {
		super(options);
		this.updateData(options, this.getFeatures());
	}

	canReturnMultipleRecords() {
		return false;
	}

	canHaveChildSelectors() {
		return false;
	}

	canHaveLocalChildSelectors() {
		return false;
	}

	canCreateNewJobs() {
		return false;
	}

	willReturnElements() {
		return false;
	}

	async _getData(parentElement) {
		return [{ [this.id]: this.value }];
	}

	getDataColumns() {
		return [this.id];
	}

	getFeatures() {
		return ['value'];
	}
}
