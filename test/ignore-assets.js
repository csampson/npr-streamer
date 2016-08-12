'use strict';

function noop() {}

require.extensions['.html'] = noop;
require.extensions['.css']  = noop;
