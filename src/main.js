/**
 * Created by Julia on 05.07.2016.
 */
require('./main.scss');
document.write(require('./content'));

import _ from 'lodash';
console.log(_.isEqual(1,2));

var obj = {
    field: 111,
    someFn () {
        console.log('someFn');
    }
};
obj.someFn();