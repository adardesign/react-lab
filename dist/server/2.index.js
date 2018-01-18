__isBrowser__ = false;
exports.ids = [2];
exports.modules = {

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {


/**
 * body.js
 *
 * Body interface provides common methods for Request and Response
 */

var convert = __webpack_require__(207).convert;
var bodyStream = __webpack_require__(210);
var PassThrough = __webpack_require__(8).PassThrough;
var FetchError = __webpack_require__(204);

module.exports = Body;

/**
 * Body class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body, opts) {

	opts = opts || {};

	this.body = body;
	this.bodyUsed = false;
	this.size = opts.size || 0;
	this.timeout = opts.timeout || 0;
	this._raw = [];
	this._abort = false;

}

/**
 * Decode response as json
 *
 * @return  Promise
 */
Body.prototype.json = function() {

	var self = this;

	return this._decode().then(function(buffer) {
		try {
			return JSON.parse(buffer.toString());
		} catch (err) {
			return Body.Promise.reject(new FetchError('invalid json response body at ' + self.url + ' reason: ' + err.message, 'invalid-json'));
		}
	});

};

/**
 * Decode response as text
 *
 * @return  Promise
 */
Body.prototype.text = function() {

	return this._decode().then(function(buffer) {
		return buffer.toString();
	});

};

/**
 * Decode response as buffer (non-spec api)
 *
 * @return  Promise
 */
Body.prototype.buffer = function() {

	return this._decode();

};

/**
 * Decode buffers into utf-8 string
 *
 * @return  Promise
 */
Body.prototype._decode = function() {

	var self = this;

	if (this.bodyUsed) {
		return Body.Promise.reject(new Error('body used already for: ' + this.url));
	}

	this.bodyUsed = true;
	this._bytes = 0;
	this._abort = false;
	this._raw = [];

	return new Body.Promise(function(resolve, reject) {
		var resTimeout;

		// body is string
		if (typeof self.body === 'string') {
			self._bytes = self.body.length;
			self._raw = [new Buffer(self.body)];
			return resolve(self._convert());
		}

		// body is buffer
		if (self.body instanceof Buffer) {
			self._bytes = self.body.length;
			self._raw = [self.body];
			return resolve(self._convert());
		}

		// allow timeout on slow response body
		if (self.timeout) {
			resTimeout = setTimeout(function() {
				self._abort = true;
				reject(new FetchError('response timeout at ' + self.url + ' over limit: ' + self.timeout, 'body-timeout'));
			}, self.timeout);
		}

		// handle stream error, such as incorrect content-encoding
		self.body.on('error', function(err) {
			reject(new FetchError('invalid response body at: ' + self.url + ' reason: ' + err.message, 'system', err));
		});

		// body is stream
		self.body.on('data', function(chunk) {
			if (self._abort || chunk === null) {
				return;
			}

			if (self.size && self._bytes + chunk.length > self.size) {
				self._abort = true;
				reject(new FetchError('content size at ' + self.url + ' over limit: ' + self.size, 'max-size'));
				return;
			}

			self._bytes += chunk.length;
			self._raw.push(chunk);
		});

		self.body.on('end', function() {
			if (self._abort) {
				return;
			}

			clearTimeout(resTimeout);
			resolve(self._convert());
		});
	});

};

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   String  encoding  Target encoding
 * @return  String
 */
Body.prototype._convert = function(encoding) {

	encoding = encoding || 'utf-8';

	var ct = this.headers.get('content-type');
	var charset = 'utf-8';
	var res, str;

	// header
	if (ct) {
		// skip encoding detection altogether if not html/xml/plain text
		if (!/text\/html|text\/plain|\+xml|\/xml/i.test(ct)) {
			return Buffer.concat(this._raw);
		}

		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	if (!res && this._raw.length > 0) {
		for (var i = 0; i < this._raw.length; i++) {
			str += this._raw[i].toString()
			if (str.length > 1024) {
				break;
			}
		}
		str = str.substr(0, 1024);
	}

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(
		Buffer.concat(this._raw)
		, encoding
		, charset
	);

};

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
Body.prototype._clone = function(instance) {
	var p1, p2;
	var body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (bodyStream(body) && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance.body = p1;
		body = p2;
	}

	return body;
}

// expose Promise
Body.Promise = global.Promise;


/***/ }),

/***/ 203:
/***/ (function(module, exports) {


/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

module.exports = Headers;

/**
 * Headers class
 *
 * @param   Object  headers  Response headers
 * @return  Void
 */
function Headers(headers) {

	var self = this;
	this._headers = {};

	// Headers
	if (headers instanceof Headers) {
		headers = headers.raw();
	}

	// plain object
	for (var prop in headers) {
		if (!headers.hasOwnProperty(prop)) {
			continue;
		}

		if (typeof headers[prop] === 'string') {
			this.set(prop, headers[prop]);

		} else if (typeof headers[prop] === 'number' && !isNaN(headers[prop])) {
			this.set(prop, headers[prop].toString());

		} else if (Array.isArray(headers[prop])) {
			headers[prop].forEach(function(item) {
				self.append(prop, item.toString());
			});
		}
	}

}

/**
 * Return first header value given name
 *
 * @param   String  name  Header name
 * @return  Mixed
 */
Headers.prototype.get = function(name) {
	var list = this._headers[name.toLowerCase()];
	return list ? list[0] : null;
};

/**
 * Return all header values given name
 *
 * @param   String  name  Header name
 * @return  Array
 */
Headers.prototype.getAll = function(name) {
	if (!this.has(name)) {
		return [];
	}

	return this._headers[name.toLowerCase()];
};

/**
 * Iterate over all headers
 *
 * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
 * @param   Boolean   thisArg   `this` context for callback function
 * @return  Void
 */
Headers.prototype.forEach = function(callback, thisArg) {
	Object.getOwnPropertyNames(this._headers).forEach(function(name) {
		this._headers[name].forEach(function(value) {
			callback.call(thisArg, value, name, this)
		}, this)
	}, this)
}

/**
 * Overwrite header values given name
 *
 * @param   String  name   Header name
 * @param   String  value  Header value
 * @return  Void
 */
Headers.prototype.set = function(name, value) {
	this._headers[name.toLowerCase()] = [value];
};

/**
 * Append a value onto existing header
 *
 * @param   String  name   Header name
 * @param   String  value  Header value
 * @return  Void
 */
Headers.prototype.append = function(name, value) {
	if (!this.has(name)) {
		this.set(name, value);
		return;
	}

	this._headers[name.toLowerCase()].push(value);
};

/**
 * Check for header name existence
 *
 * @param   String   name  Header name
 * @return  Boolean
 */
Headers.prototype.has = function(name) {
	return this._headers.hasOwnProperty(name.toLowerCase());
};

/**
 * Delete all header values given name
 *
 * @param   String  name  Header name
 * @return  Void
 */
Headers.prototype['delete'] = function(name) {
	delete this._headers[name.toLowerCase()];
};

/**
 * Return raw headers (non-spec api)
 *
 * @return  Object
 */
Headers.prototype.raw = function() {
	return this._headers;
};


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {


/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

module.exports = FetchError;

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {

	this.name = this.constructor.name;
	this.message = message;
	this.type = type;

	// when err.type is `system`, err.code contains system error code
	if (systemError) {
		this.code = this.errno = systemError.code;
	}

	// hide custom error implementation details from end-users
	Error.captureStackTrace(this, this.constructor);
}

__webpack_require__(21).inherits(FetchError, Error);


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var realFetch = __webpack_require__(206);
module.exports = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return realFetch.call(this, url, options);
};

if (!global.fetch) {
	global.fetch = module.exports;
	global.Response = realFetch.Response;
	global.Headers = realFetch.Headers;
	global.Request = realFetch.Request;
}


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {


/**
 * index.js
 *
 * a request API compatible with window.fetch
 */

var parse_url = __webpack_require__(51).parse;
var resolve_url = __webpack_require__(51).resolve;
var http = __webpack_require__(20);
var https = __webpack_require__(201);
var zlib = __webpack_require__(88);
var stream = __webpack_require__(8);

var Body = __webpack_require__(202);
var Response = __webpack_require__(211);
var Headers = __webpack_require__(203);
var Request = __webpack_require__(212);
var FetchError = __webpack_require__(204);

// commonjs
module.exports = Fetch;
// es6 default export compatibility
module.exports.default = module.exports;

/**
 * Fetch class
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function Fetch(url, opts) {

	// allow call as function
	if (!(this instanceof Fetch))
		return new Fetch(url, opts);

	// allow custom promise
	if (!Fetch.Promise) {
		throw new Error('native promise missing, set Fetch.Promise to your favorite alternative');
	}

	Body.Promise = Fetch.Promise;

	var self = this;

	// wrap http.request into fetch
	return new Fetch.Promise(function(resolve, reject) {
		// build request object
		var options = new Request(url, opts);

		if (!options.protocol || !options.hostname) {
			throw new Error('only absolute urls are supported');
		}

		if (options.protocol !== 'http:' && options.protocol !== 'https:') {
			throw new Error('only http(s) protocols are supported');
		}

		var send;
		if (options.protocol === 'https:') {
			send = https.request;
		} else {
			send = http.request;
		}

		// normalize headers
		var headers = new Headers(options.headers);

		if (options.compress) {
			headers.set('accept-encoding', 'gzip,deflate');
		}

		if (!headers.has('user-agent')) {
			headers.set('user-agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
		}

		if (!headers.has('connection') && !options.agent) {
			headers.set('connection', 'close');
		}

		if (!headers.has('accept')) {
			headers.set('accept', '*/*');
		}

		// detect form data input from form-data module, this hack avoid the need to pass multipart header manually
		if (!headers.has('content-type') && options.body && typeof options.body.getBoundary === 'function') {
			headers.set('content-type', 'multipart/form-data; boundary=' + options.body.getBoundary());
		}

		// bring node-fetch closer to browser behavior by setting content-length automatically
		if (!headers.has('content-length') && /post|put|patch|delete/i.test(options.method)) {
			if (typeof options.body === 'string') {
				headers.set('content-length', Buffer.byteLength(options.body));
			// detect form data input from form-data module, this hack avoid the need to add content-length header manually
			} else if (options.body && typeof options.body.getLengthSync === 'function') {
				// for form-data 1.x
				if (options.body._lengthRetrievers && options.body._lengthRetrievers.length == 0) {
					headers.set('content-length', options.body.getLengthSync().toString());
				// for form-data 2.x
				} else if (options.body.hasKnownLength && options.body.hasKnownLength()) {
					headers.set('content-length', options.body.getLengthSync().toString());
				}
			// this is only necessary for older nodejs releases (before iojs merge)
			} else if (options.body === undefined || options.body === null) {
				headers.set('content-length', '0');
			}
		}

		options.headers = headers.raw();

		// http.request only support string as host header, this hack make custom host header possible
		if (options.headers.host) {
			options.headers.host = options.headers.host[0];
		}

		// send request
		var req = send(options);
		var reqTimeout;

		if (options.timeout) {
			req.once('socket', function(socket) {
				reqTimeout = setTimeout(function() {
					req.abort();
					reject(new FetchError('network timeout at: ' + options.url, 'request-timeout'));
				}, options.timeout);
			});
		}

		req.on('error', function(err) {
			clearTimeout(reqTimeout);
			reject(new FetchError('request to ' + options.url + ' failed, reason: ' + err.message, 'system', err));
		});

		req.on('response', function(res) {
			clearTimeout(reqTimeout);

			// handle redirect
			if (self.isRedirect(res.statusCode) && options.redirect !== 'manual') {
				if (options.redirect === 'error') {
					reject(new FetchError('redirect mode is set to error: ' + options.url, 'no-redirect'));
					return;
				}

				if (options.counter >= options.follow) {
					reject(new FetchError('maximum redirect reached at: ' + options.url, 'max-redirect'));
					return;
				}

				if (!res.headers.location) {
					reject(new FetchError('redirect location header missing at: ' + options.url, 'invalid-redirect'));
					return;
				}

				// per fetch spec, for POST request with 301/302 response, or any request with 303 response, use GET when following redirect
				if (res.statusCode === 303
					|| ((res.statusCode === 301 || res.statusCode === 302) && options.method === 'POST'))
				{
					options.method = 'GET';
					delete options.body;
					delete options.headers['content-length'];
				}

				options.counter++;

				resolve(Fetch(resolve_url(options.url, res.headers.location), options));
				return;
			}

			// normalize location header for manual redirect mode
			var headers = new Headers(res.headers);
			if (options.redirect === 'manual' && headers.has('location')) {
				headers.set('location', resolve_url(options.url, headers.get('location')));
			}

			// prepare response
			var body = res.pipe(new stream.PassThrough());
			var response_options = {
				url: options.url
				, status: res.statusCode
				, statusText: res.statusMessage
				, headers: headers
				, size: options.size
				, timeout: options.timeout
			};

			// response object
			var output;

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no content-encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!options.compress || options.method === 'HEAD' || !headers.has('content-encoding') || res.statusCode === 204 || res.statusCode === 304) {
				output = new Response(body, response_options);
				resolve(output);
				return;
			}

			// otherwise, check for gzip or deflate
			var name = headers.get('content-encoding');

			// for gzip
			if (name == 'gzip' || name == 'x-gzip') {
				body = body.pipe(zlib.createGunzip());
				output = new Response(body, response_options);
				resolve(output);
				return;

			// for deflate
			} else if (name == 'deflate' || name == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				var raw = res.pipe(new stream.PassThrough());
				raw.once('data', function(chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					output = new Response(body, response_options);
					resolve(output);
				});
				return;
			}

			// otherwise, use response as-is
			output = new Response(body, response_options);
			resolve(output);
			return;
		});

		// accept string, buffer or readable stream as body
		// per spec we will call tostring on non-stream objects
		if (typeof options.body === 'string') {
			req.write(options.body);
			req.end();
		} else if (options.body instanceof Buffer) {
			req.write(options.body);
			req.end();
		} else if (typeof options.body === 'object' && options.body.pipe) {
			options.body.pipe(req);
		} else if (typeof options.body === 'object') {
			req.write(options.body.toString());
			req.end();
		} else {
			req.end();
		}
	});

};

/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
Fetch.prototype.isRedirect = function(code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
}

// expose Promise
Fetch.Promise = global.Promise;
Fetch.Response = Response;
Fetch.Headers = Headers;
Fetch.Request = Request;


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iconvLite = __webpack_require__(52);
// Load Iconv from an external file to be able to disable Iconv for webpack
// Add /\/iconv-loader$/ to webpack.IgnorePlugin to ignore it
var Iconv = __webpack_require__(208);

// Expose to the world
module.exports.convert = convert;

/**
 * Convert encoding of an UTF-8 string or a buffer
 *
 * @param {String|Buffer} str String to be converted
 * @param {String} to Encoding to be converted to
 * @param {String} [from='UTF-8'] Encoding to be converted from
 * @param {Boolean} useLite If set to ture, force to use iconvLite
 * @return {Buffer} Encoded string
 */
function convert(str, to, from, useLite) {
    from = checkEncoding(from || 'UTF-8');
    to = checkEncoding(to || 'UTF-8');
    str = str || '';

    var result;

    if (from !== 'UTF-8' && typeof str === 'string') {
        str = new Buffer(str, 'binary');
    }

    if (from === to) {
        if (typeof str === 'string') {
            result = new Buffer(str);
        } else {
            result = str;
        }
    } else if (Iconv && !useLite) {
        try {
            result = convertIconv(str, to, from);
        } catch (E) {
            console.error(E);
            try {
                result = convertIconvLite(str, to, from);
            } catch (E) {
                console.error(E);
                result = str;
            }
        }
    } else {
        try {
            result = convertIconvLite(str, to, from);
        } catch (E) {
            console.error(E);
            result = str;
        }
    }


    if (typeof result === 'string') {
        result = new Buffer(result, 'utf-8');
    }

    return result;
}

/**
 * Convert encoding of a string with node-iconv (if available)
 *
 * @param {String|Buffer} str String to be converted
 * @param {String} to Encoding to be converted to
 * @param {String} [from='UTF-8'] Encoding to be converted from
 * @return {Buffer} Encoded string
 */
function convertIconv(str, to, from) {
    var response, iconv;
    iconv = new Iconv(from, to + '//TRANSLIT//IGNORE');
    response = iconv.convert(str);
    return response.slice(0, response.length);
}

/**
 * Convert encoding of astring with iconv-lite
 *
 * @param {String|Buffer} str String to be converted
 * @param {String} to Encoding to be converted to
 * @param {String} [from='UTF-8'] Encoding to be converted from
 * @return {Buffer} Encoded string
 */
function convertIconvLite(str, to, from) {
    if (to === 'UTF-8') {
        return iconvLite.decode(str, from);
    } else if (from === 'UTF-8') {
        return iconvLite.encode(str, to);
    } else {
        return iconvLite.encode(iconvLite.decode(str, from), to);
    }
}

/**
 * Converts charset name if needed
 *
 * @param {String} name Character set
 * @return {String} Character set name
 */
function checkEncoding(name) {
    return (name || '').toString().trim().
    replace(/^latin[\-_]?(\d+)$/i, 'ISO-8859-$1').
    replace(/^win(?:dows)?[\-_]?(\d+)$/i, 'WINDOWS-$1').
    replace(/^utf[\-_]?(\d+)$/i, 'UTF-$1').
    replace(/^ks_c_5601\-1987$/i, 'CP949').
    replace(/^us[\-_]?ascii$/i, 'ASCII').
    toUpperCase();
}


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iconv_package;
var Iconv;

try {
    // this is to fool browserify so it doesn't try (in vain) to install iconv.
    iconv_package = 'iconv';
    Iconv = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Iconv;
} catch (E) {
    // node-iconv not present
}

module.exports = Iconv;


/***/ }),

/***/ 209:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 209;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isStream = module.exports = function (stream) {
	return stream !== null && typeof stream === 'object' && typeof stream.pipe === 'function';
};

isStream.writable = function (stream) {
	return isStream(stream) && stream.writable !== false && typeof stream._write === 'function' && typeof stream._writableState === 'object';
};

isStream.readable = function (stream) {
	return isStream(stream) && stream.readable !== false && typeof stream._read === 'function' && typeof stream._readableState === 'object';
};

isStream.duplex = function (stream) {
	return isStream.writable(stream) && isStream.readable(stream);
};

isStream.transform = function (stream) {
	return isStream.duplex(stream) && typeof stream._transform === 'function' && typeof stream._transformState === 'object';
};


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {


/**
 * response.js
 *
 * Response class provides content decoding
 */

var http = __webpack_require__(20);
var Headers = __webpack_require__(203);
var Body = __webpack_require__(202);

module.exports = Response;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Response(body, opts) {

	opts = opts || {};

	this.url = opts.url;
	this.status = opts.status || 200;
	this.statusText = opts.statusText || http.STATUS_CODES[this.status];
	this.headers = new Headers(opts.headers);
	this.ok = this.status >= 200 && this.status < 300;

	Body.call(this, body, opts);

}

Response.prototype = Object.create(Body.prototype);

/**
 * Clone this response
 *
 * @return  Response
 */
Response.prototype.clone = function() {
	return new Response(this._clone(this), {
		url: this.url
		, status: this.status
		, statusText: this.statusText
		, headers: this.headers
		, ok: this.ok
	});
};


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {


/**
 * request.js
 *
 * Request class contains server only options
 */

var parse_url = __webpack_require__(51).parse;
var Headers = __webpack_require__(203);
var Body = __webpack_require__(202);

module.exports = Request;

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
function Request(input, init) {
	var url, url_parsed;

	// normalize input
	if (!(input instanceof Request)) {
		url = input;
		url_parsed = parse_url(url);
		input = {};
	} else {
		url = input.url;
		url_parsed = parse_url(url);
	}

	// normalize init
	init = init || {};

	// fetch spec options
	this.method = init.method || input.method || 'GET';
	this.redirect = init.redirect || input.redirect || 'follow';
	this.headers = new Headers(init.headers || input.headers || {});
	this.url = url;

	// server only options
	this.follow = init.follow !== undefined ?
		init.follow : input.follow !== undefined ?
		input.follow : 20;
	this.compress = init.compress !== undefined ?
		init.compress : input.compress !== undefined ?
		input.compress : true;
	this.counter = init.counter || input.counter || 0;
	this.agent = init.agent || input.agent;

	Body.call(this, init.body || this._clone(input), {
		timeout: init.timeout || input.timeout || 0,
		size: init.size || input.size || 0
	});

	// server request options
	this.protocol = url_parsed.protocol;
	this.hostname = url_parsed.hostname;
	this.port = url_parsed.port;
	this.path = url_parsed.path;
	this.auth = url_parsed.auth;
}

Request.prototype = Object.create(Body.prototype);

/**
 * Clone this request
 *
 * @return  Request
 */
Request.prototype.clone = function() {
	return new Request(this);
};


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = "/Users/eliazerbraun/codeLab/react-labBU/src/shared/components/FeaturedBrands.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FeaturedBrands(props) {
  var _this = this;

  var brands = props.brands;
  return _react2.default.createElement(
    "div",
    { className: "aside-brands", __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    },
    _react2.default.createElement(
      "h5",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      },
      "Featured Brands:"
    ),
    _react2.default.createElement(
      "div",
      { className: "color-block", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      },
      props.brands.map(function (brandItem) {
        return _react2.default.createElement(
          "a",
          { key: brandItem.brand, href: brandItem.link, className: "brand-tagged trackEvent", "data-trackdata": "listing page, featured brands, {brandItem.brand}", __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            },
            __self: _this
          },
          _react2.default.createElement("img", { alt: "brandItem.brand", src: brandItem.image, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: _this
          }),
          _react2.default.createElement(
            "span",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: _this
            },
            _react2.default.createElement(
              "strong",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: _this
              },
              brandItem.brand
            ),
            _react2.default.createElement(
              "em",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: _this
              },
              brandItem.moto
            )
          )
        );
      })
    )
  );
};

exports.default = FeaturedBrands;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = "/Users/eliazerbraun/codeLab/react-labBU/src/shared/components/CategoryFaqs.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CatFaq(props) {
  var _this = this;

  console.log(props);
  return _react2.default.createElement(
    "ul",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    },
    props.questions.map(function (faq, i) {
      return _react2.default.createElement(
        "li",
        { key: i, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: _this
        },
        _react2.default.createElement(
          "a",
          { href: "href", __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            },
            __self: _this
          },
          faq.text
        )
      );
    })
  );
};

function CategoryFaqs(props) {
  var _this2 = this;

  console.log(props);
  var faqs = props.faqCollection;
  console.log(faqs);

  return _react2.default.createElement(
    "aside",
    { className: "explore-more color-block cf clear", __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    },
    faqs.map(function (faq, i) {
      return _react2.default.createElement(
        "div",
        { key: i, className: "filter-description", __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: _this2
        },
        _react2.default.createElement(
          "h5",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: _this2
          },
          faq.title
        ),
        _react2.default.createElement(
          "ul",
          { className: "linkset", __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: _this2
          },
          _react2.default.createElement(CatFaq, { questions: faq.questions, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: _this2
          })
        )
      );
    })
  );
};

exports.default = CategoryFaqs;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = "/Users/eliazerbraun/codeLab/react-labBU/src/shared/components/Breadcrumbs.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Breadcrumbs(props) {
  var _this = this;

  return _react2.default.createElement(
    "div",
    { className: "breadcrumbs", __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    },
    props.breadcrumbs.map(function (crumb, i) {
      return _react2.default.createElement(
        "div",
        { key: i, className: "crumb", __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          },
          __self: _this
        },
        crumb.name
      );
    })
  );
};

exports.default = Breadcrumbs;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// isMobile
function DeviceType(type) {
	if (window.innerWidth < 500) return "mobile";
	return "desktop";
}

exports.default = DeviceType;

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = "/Users/eliazerbraun/codeLab/react-labBU/src/shared/pages/CategoryPage.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FeaturedBrands = __webpack_require__(213);

var _FeaturedBrands2 = _interopRequireDefault(_FeaturedBrands);

var _CategoryFaqs = __webpack_require__(235);

var _CategoryFaqs2 = _interopRequireDefault(_CategoryFaqs);

var _Breadcrumbs = __webpack_require__(236);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _DeviceType = __webpack_require__(237);

var _DeviceType2 = _interopRequireDefault(_DeviceType);

var _reactRouterDom = __webpack_require__(53);

__webpack_require__(205);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Stateless componants
var CatChildren = function CatChildren(props) {
  return props.collection.map(function (childSub, j) {
    return _react2.default.createElement(
      "li",
      { key: j * 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: undefined
      },
      _react2.default.createElement(
        "a",
        { href: "/", title: "", __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: undefined
        },
        childSub.title
      )
    );
  });
};

var CategoryPage = function (_Component) {
  _inherits(CategoryPage, _Component);

  function CategoryPage(props) {
    _classCallCheck(this, CategoryPage);

    var _this = _possibleConstructorReturn(this, (CategoryPage.__proto__ || Object.getPrototypeOf(CategoryPage)).call(this, props));

    _this.state = {
      deviceType: (0, _DeviceType2.default)()
    };
    return _this;
  }

  _createClass(CategoryPage, [{
    key: "getOriginalState",
    value: function getOriginalState() {
      return fetch("../api/catagorypage.json").then(function (resp) {
        return resp.json();
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.getOriginalState().then(function (data) {
        _this2.setState(data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.state.page) {
        return _react2.default.createElement(
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          },
          _react2.default.createElement("img", { src: "http://adardesign.com/codelab/react-router/images/catSkeleton.jpg", __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          })
        );
      }
      return _react2.default.createElement(
        "div",
        { className: "Catagory", __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        },
        _react2.default.createElement(_Breadcrumbs2.default, { breadcrumbs: this.state.page.breadcrumbs, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }),
        _react2.default.createElement(
          "div",
          { className: "category-title", __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          },
          _react2.default.createElement(
            "h1",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            },
            this.state.currentCatagory.title
          ),
          this.state.deviceType === "desktop" && _react2.default.createElement("img", { className: "cat-hero", src: this.state.currentCatagory.image, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "category-container layout-80-20 layout-reverse clear", __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          },
          _react2.default.createElement(
            "div",
            { className: "col1", __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: this
            },
            _react2.default.createElement(
              "div",
              { className: "filter-description", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                },
                __self: this
              },
              this.state.currentCatagory.description
            ),
            _react2.default.createElement(
              "section",
              { className: "category-index", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                },
                __self: this
              },
              this.state.subCatagories.map(function (sub, i) {
                return _react2.default.createElement(
                  "div",
                  { key: i * 2, className: "cat-item", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59
                    },
                    __self: _this3
                  },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: "/l/" + i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                      },
                      __self: _this3
                    },
                    _react2.default.createElement("img", { src: sub.image, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                      },
                      __self: _this3
                    }),
                    _react2.default.createElement(
                      "h2",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 62
                        },
                        __self: _this3
                      },
                      sub.title
                    )
                  ),
                  _react2.default.createElement(
                    "ul",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                      },
                      __self: _this3
                    },
                    _react2.default.createElement(CatChildren, { collection: sub.children, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                      },
                      __self: _this3
                    })
                  )
                );
              })
            ),
            this.state.deviceType === "desktop" && _react2.default.createElement(_CategoryFaqs2.default, { faqCollection: this.state.currentCatagory.categoryFaqs, __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "col2", __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              },
              __self: this
            },
            _react2.default.createElement(
              "div",
              { className: "category-aside-nav", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74
                },
                __self: this
              },
              this.state.subCatagories.map(function (sub, i) {
                return _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: "/l/" + i, key: i * 2, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 76
                    },
                    __self: _this3
                  },
                  sub.title
                );
              })
            ),
            _react2.default.createElement(_FeaturedBrands2.default, { brands: this.state.currentCatagory.featuredBrands, __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return CategoryPage;
}(_react.Component);

exports.default = CategoryPage;

/***/ })

};;