import _ from 'lodash';
import './css/style.scss';
import './img/图层2.png';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

var a = 2
let b = 3
console.log(b)
console.log(a)
console.log(1)
