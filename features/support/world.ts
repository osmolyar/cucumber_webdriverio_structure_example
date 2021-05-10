import ManagementPortalBusinessOptions from '../../businessOptions/managementPortalBusinessOptions';

import _ from "lodash";

export function CustomWorld() {
    const options: Context = _.merge(
        {},
        new ManagementPortalBusinessOptions(),
        // Merge with other business options classes here
        {
            page: "",
            chart: "",
            stackP: []
        }
    );
    this.nav = {};
    this.context=options;
}

export default CustomWorld


