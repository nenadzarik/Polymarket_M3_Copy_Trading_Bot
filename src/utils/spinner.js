import ora from 'ora';
import {
    _dispatch_internal_event
} from './helper.js';


const spinner = ora({
    spinner: {
        interval: 200,
        frames: [
            '▰▱▱▱▱▱▱',
            '▰▰▱▱▱▱▱',
            '▰▰▰▱▱▱▱',
            '▰▰▰▰▱▱▱',
            '▰▰▰▰▰▱▱',
            '▰▰▰▰▰▰▱',
            '▰▰▰▰▰▰▰',
            '▱▱▱▱▱▱▱',
        ],
    },
});



export default spinner;