import { i as __toESM, t as __commonJSMin } from "../../_runtime.mjs";
import { $ as lazy, A as isUrlSupported, B as safeValidateTypes, C as generateId, D as isAbortError, E as getRuntimeEnvironmentUserAgent, G as zodSchema, H as validateTypes, J as _null, K as _enum, L as readResponseWithSizeLimit, N as normalizeHeaders, O as isNonNullable, P as parseJsonEventStream, Q as discriminatedUnion, R as resolve, S as fetchWithValidatedRedirects, U as withUserAgentSuffix, X as boolean, Y as array$1, Z as custom, at as strictObject, b as delay, c as DownloadError, ct as unknown, d as convertBase64ToUint8Array, dt as InvalidPromptError, et as literal, h as createIdGenerator, ht as getErrorMessage, it as record, j as lazySchema, l as asSchema, lt as AISDKError, mt as UnsupportedFunctionalityError, n as GatewayError, nt as number, o as DEFAULT_MAX_DOWNLOAD_SIZE, ot as string, p as convertUint8ArrayToBase64, pt as TypeValidationError, q as _instanceof, r as gateway, rt as object$1, s as DelayedPromise, st as union, t as GatewayAuthenticationError, tt as never, ut as APICallError, w as getErrorMessage$1, x as executeTool, z as safeParseJSON } from "./gateway+[...].mjs";
//#region node_modules/react/cjs/react.production.js
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, assign = Object.assign, emptyObject = {};
	function Component(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function(partialState, callback) {
		if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function(callback) {
		this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray;
	function noop() {}
	var ReactSharedInternals = {
		H: null,
		A: null,
		T: null,
		S: null
	}, hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, props) {
		var refProp = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== refProp ? refProp : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result;
			ctor = ctor();
			ctor.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
			});
			-1 === payload._status && (payload._status = 0, payload._result = ctor);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	}, Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
			return children;
		}
	};
	exports.Activity = REACT_ACTIVITY_TYPE;
	exports.Children = Children;
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(size) {
			return ReactSharedInternals.H.useMemoCache(size);
		}
	};
	exports.cache = function(fn) {
		return function() {
			return fn.apply(null, arguments);
		};
	};
	exports.cacheSignal = function() {
		return null;
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
		var props = assign({}, element.props), key = element.key;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, props);
	};
	exports.createContext = function(defaultValue) {
		defaultValue = {
			$$typeof: REACT_CONTEXT_TYPE,
			_currentValue: defaultValue,
			_currentValue2: defaultValue,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		};
		defaultValue.Provider = defaultValue;
		defaultValue.Consumer = {
			$$typeof: REACT_CONSUMER_TYPE,
			_context: defaultValue
		};
		return defaultValue;
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.startTransition = function(scope) {
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		ReactSharedInternals.T = currentTransition;
		try {
			var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
		} catch (error) {
			reportGlobalError(error);
		} finally {
			null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
		}
	};
	exports.unstable_useCacheRefresh = function() {
		return ReactSharedInternals.H.useCacheRefresh();
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useActionState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useContext = function(Context) {
		return ReactSharedInternals.H.useContext(Context);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(value, initialValue) {
		return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	exports.useEffect = function(create, deps) {
		return ReactSharedInternals.H.useEffect(create, deps);
	};
	exports.useEffectEvent = function(callback) {
		return ReactSharedInternals.H.useEffectEvent(callback);
	};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useImperativeHandle = function(ref, create, deps) {
		return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	exports.useInsertionEffect = function(create, deps) {
		return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	exports.useLayoutEffect = function(create, deps) {
		return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.useOptimistic = function(passthrough, reducer) {
		return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	exports.useReducer = function(reducer, initialArg, init) {
		return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	exports.useRef = function(initialValue) {
		return ReactSharedInternals.H.useRef(initialValue);
	};
	exports.useState = function(initialState) {
		return ReactSharedInternals.H.useState(initialState);
	};
	exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
		return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	};
	exports.useTransition = function() {
		return ReactSharedInternals.H.useTransition();
	};
	exports.version = "19.2.7";
}));
//#endregion
//#region node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/version.js
var require_version = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.VERSION = void 0;
	exports.VERSION = "1.9.1";
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/internal/semver.js
var require_semver = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isCompatible = exports._makeCompatibilityCheck = void 0;
	var version_1 = require_version();
	var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
	/**
	* Create a function to test an API version to see if it is compatible with the provided ownVersion.
	*
	* The returned function has the following semantics:
	* - Exact match is always compatible
	* - Major versions must match exactly
	*    - 1.x package cannot use global 2.x package
	*    - 2.x package cannot use global 1.x package
	* - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
	*    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
	*    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
	* - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
	* - Patch and build tag differences are not considered at this time
	*
	* @param ownVersion version which should be checked against
	*/
	function _makeCompatibilityCheck(ownVersion) {
		const acceptedVersions = new Set([ownVersion]);
		const rejectedVersions = /* @__PURE__ */ new Set();
		const myVersionMatch = ownVersion.match(re);
		if (!myVersionMatch) return () => false;
		const ownVersionParsed = {
			major: +myVersionMatch[1],
			minor: +myVersionMatch[2],
			patch: +myVersionMatch[3],
			prerelease: myVersionMatch[4]
		};
		if (ownVersionParsed.prerelease != null) return function isExactmatch(globalVersion) {
			return globalVersion === ownVersion;
		};
		function _reject(v) {
			rejectedVersions.add(v);
			return false;
		}
		function _accept(v) {
			acceptedVersions.add(v);
			return true;
		}
		return function isCompatible(globalVersion) {
			if (acceptedVersions.has(globalVersion)) return true;
			if (rejectedVersions.has(globalVersion)) return false;
			const globalVersionMatch = globalVersion.match(re);
			if (!globalVersionMatch) return _reject(globalVersion);
			const globalVersionParsed = {
				major: +globalVersionMatch[1],
				minor: +globalVersionMatch[2],
				patch: +globalVersionMatch[3],
				prerelease: globalVersionMatch[4]
			};
			if (globalVersionParsed.prerelease != null) return _reject(globalVersion);
			if (ownVersionParsed.major !== globalVersionParsed.major) return _reject(globalVersion);
			if (ownVersionParsed.major === 0) {
				if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) return _accept(globalVersion);
				return _reject(globalVersion);
			}
			if (ownVersionParsed.minor <= globalVersionParsed.minor) return _accept(globalVersion);
			return _reject(globalVersion);
		};
	}
	exports._makeCompatibilityCheck = _makeCompatibilityCheck;
	/**
	* Test an API version to see if it is compatible with this API.
	*
	* - Exact match is always compatible
	* - Major versions must match exactly
	*    - 1.x package cannot use global 2.x package
	*    - 2.x package cannot use global 1.x package
	* - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
	*    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
	*    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
	* - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
	* - Patch and build tag differences are not considered at this time
	*
	* @param version version of the API requesting an instance of the global API
	*/
	exports.isCompatible = _makeCompatibilityCheck(version_1.VERSION);
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/internal/global-utils.js
var require_global_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.unregisterGlobal = exports.getGlobal = exports.registerGlobal = void 0;
	var version_1 = require_version();
	var semver_1 = require_semver();
	var major = version_1.VERSION.split(".")[0];
	var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for(`opentelemetry.js.api.${major}`);
	var _global = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof global === "object" ? global : {};
	function registerGlobal(type, instance, diag, allowOverride = false) {
		var _a;
		const api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : { version: version_1.VERSION };
		if (!allowOverride && api[type]) {
			const err = /* @__PURE__ */ new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${type}`);
			diag.error(err.stack || err.message);
			return false;
		}
		if (api.version !== version_1.VERSION) {
			const err = /* @__PURE__ */ new Error(`@opentelemetry/api: Registration of version v${api.version} for ${type} does not match previously registered API v${version_1.VERSION}`);
			diag.error(err.stack || err.message);
			return false;
		}
		api[type] = instance;
		diag.debug(`@opentelemetry/api: Registered a global for ${type} v${version_1.VERSION}.`);
		return true;
	}
	exports.registerGlobal = registerGlobal;
	function getGlobal(type) {
		var _a, _b;
		const globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
		if (!globalVersion || !(0, semver_1.isCompatible)(globalVersion)) return;
		return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
	}
	exports.getGlobal = getGlobal;
	function unregisterGlobal(type, diag) {
		diag.debug(`@opentelemetry/api: Unregistering a global for ${type} v${version_1.VERSION}.`);
		const api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
		if (api) delete api[type];
	}
	exports.unregisterGlobal = unregisterGlobal;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/diag/ComponentLogger.js
var require_ComponentLogger = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DiagComponentLogger = void 0;
	var global_utils_1 = require_global_utils();
	/**
	* Component Logger which is meant to be used as part of any component which
	* will add automatically additional namespace in front of the log message.
	* It will then forward all message to global diag logger
	* @example
	* const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
	* cLogger.debug('test');
	* // @opentelemetry/instrumentation-http test
	*/
	var DiagComponentLogger = class {
		constructor(props) {
			this._namespace = props.namespace || "DiagComponentLogger";
		}
		debug(...args) {
			return logProxy("debug", this._namespace, args);
		}
		error(...args) {
			return logProxy("error", this._namespace, args);
		}
		info(...args) {
			return logProxy("info", this._namespace, args);
		}
		warn(...args) {
			return logProxy("warn", this._namespace, args);
		}
		verbose(...args) {
			return logProxy("verbose", this._namespace, args);
		}
	};
	exports.DiagComponentLogger = DiagComponentLogger;
	function logProxy(funcName, namespace, args) {
		const logger = (0, global_utils_1.getGlobal)("diag");
		if (!logger) return;
		return logger[funcName](namespace, ...args);
	}
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/diag/types.js
var require_types = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DiagLogLevel = void 0;
	(function(DiagLogLevel) {
		/** Diagnostic Logging level setting to disable all logging (except and forced logs) */
		DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
		/** Identifies an error scenario */
		DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
		/** Identifies a warning scenario */
		DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
		/** General informational log message */
		DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
		/** General debug log message */
		DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
		/**
		* Detailed trace level logging should only be used for development, should only be set
		* in a development environment.
		*/
		DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
		/** Used to set the logging level to include all logging */
		DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
	})(exports.DiagLogLevel || (exports.DiagLogLevel = {}));
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/diag/internal/logLevelLogger.js
var require_logLevelLogger = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createLogLevelDiagLogger = void 0;
	var types_1 = require_types();
	function createLogLevelDiagLogger(maxLevel, logger) {
		if (maxLevel < types_1.DiagLogLevel.NONE) maxLevel = types_1.DiagLogLevel.NONE;
		else if (maxLevel > types_1.DiagLogLevel.ALL) maxLevel = types_1.DiagLogLevel.ALL;
		logger = logger || {};
		function _filterFunc(funcName, theLevel) {
			const theFunc = logger[funcName];
			if (typeof theFunc === "function" && maxLevel >= theLevel) return theFunc.bind(logger);
			return function() {};
		}
		return {
			error: _filterFunc("error", types_1.DiagLogLevel.ERROR),
			warn: _filterFunc("warn", types_1.DiagLogLevel.WARN),
			info: _filterFunc("info", types_1.DiagLogLevel.INFO),
			debug: _filterFunc("debug", types_1.DiagLogLevel.DEBUG),
			verbose: _filterFunc("verbose", types_1.DiagLogLevel.VERBOSE)
		};
	}
	exports.createLogLevelDiagLogger = createLogLevelDiagLogger;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/api/diag.js
var require_diag = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DiagAPI = void 0;
	var ComponentLogger_1 = require_ComponentLogger();
	var logLevelLogger_1 = require_logLevelLogger();
	var types_1 = require_types();
	var global_utils_1 = require_global_utils();
	var API_NAME = "diag";
	exports.DiagAPI = class DiagAPI {
		/** Get the singleton instance of the DiagAPI API */
		static instance() {
			if (!this._instance) this._instance = new DiagAPI();
			return this._instance;
		}
		/**
		* Private internal constructor
		* @private
		*/
		constructor() {
			function _logProxy(funcName) {
				return function(...args) {
					const logger = (0, global_utils_1.getGlobal)("diag");
					if (!logger) return;
					return logger[funcName](...args);
				};
			}
			const self = this;
			const setLogger = (logger, optionsOrLogLevel = { logLevel: types_1.DiagLogLevel.INFO }) => {
				var _a, _b, _c;
				if (logger === self) {
					const err = /* @__PURE__ */ new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
					self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
					return false;
				}
				if (typeof optionsOrLogLevel === "number") optionsOrLogLevel = { logLevel: optionsOrLogLevel };
				const oldLogger = (0, global_utils_1.getGlobal)("diag");
				const newLogger = (0, logLevelLogger_1.createLogLevelDiagLogger)((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : types_1.DiagLogLevel.INFO, logger);
				if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
					const stack = (_c = (/* @__PURE__ */ new Error()).stack) !== null && _c !== void 0 ? _c : "<failed to generate stacktrace>";
					oldLogger.warn(`Current logger will be overwritten from ${stack}`);
					newLogger.warn(`Current logger will overwrite one already registered from ${stack}`);
				}
				return (0, global_utils_1.registerGlobal)("diag", newLogger, self, true);
			};
			self.setLogger = setLogger;
			self.disable = () => {
				(0, global_utils_1.unregisterGlobal)(API_NAME, self);
			};
			self.createComponentLogger = (options) => {
				return new ComponentLogger_1.DiagComponentLogger(options);
			};
			self.verbose = _logProxy("verbose");
			self.debug = _logProxy("debug");
			self.info = _logProxy("info");
			self.warn = _logProxy("warn");
			self.error = _logProxy("error");
		}
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/baggage/internal/baggage-impl.js
var require_baggage_impl = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BaggageImpl = void 0;
	exports.BaggageImpl = class BaggageImpl {
		constructor(entries) {
			this._entries = entries ? new Map(entries) : /* @__PURE__ */ new Map();
		}
		getEntry(key) {
			const entry = this._entries.get(key);
			if (!entry) return;
			return Object.assign({}, entry);
		}
		getAllEntries() {
			return Array.from(this._entries.entries());
		}
		setEntry(key, entry) {
			const newBaggage = new BaggageImpl(this._entries);
			newBaggage._entries.set(key, entry);
			return newBaggage;
		}
		removeEntry(key) {
			const newBaggage = new BaggageImpl(this._entries);
			newBaggage._entries.delete(key);
			return newBaggage;
		}
		removeEntries(...keys) {
			const newBaggage = new BaggageImpl(this._entries);
			for (const key of keys) newBaggage._entries.delete(key);
			return newBaggage;
		}
		clear() {
			return new BaggageImpl();
		}
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/baggage/internal/symbol.js
var require_symbol = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.baggageEntryMetadataSymbol = void 0;
	/**
	* Symbol used to make BaggageEntryMetadata an opaque type
	*/
	exports.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/baggage/utils.js
var require_utils$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.baggageEntryMetadataFromString = exports.createBaggage = void 0;
	var diag_1 = require_diag();
	var baggage_impl_1 = require_baggage_impl();
	var symbol_1 = require_symbol();
	var diag = diag_1.DiagAPI.instance();
	/**
	* Create a new Baggage with optional entries
	*
	* @param entries An array of baggage entries the new baggage should contain
	*/
	function createBaggage(entries = {}) {
		return new baggage_impl_1.BaggageImpl(new Map(Object.entries(entries)));
	}
	exports.createBaggage = createBaggage;
	/**
	* Create a serializable BaggageEntryMetadata object from a string.
	*
	* @param str string metadata. Format is currently not defined by the spec and has no special meaning.
	*
	* @since 1.0.0
	*/
	function baggageEntryMetadataFromString(str) {
		if (typeof str !== "string") {
			diag.error(`Cannot create baggage metadata from unknown type: ${typeof str}`);
			str = "";
		}
		return {
			__TYPE__: symbol_1.baggageEntryMetadataSymbol,
			toString() {
				return str;
			}
		};
	}
	exports.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/context/context.js
var require_context$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ROOT_CONTEXT = exports.createContextKey = void 0;
	/**
	* Get a key to uniquely identify a context value
	*
	* @since 1.0.0
	*/
	function createContextKey(description) {
		return Symbol.for(description);
	}
	exports.createContextKey = createContextKey;
	/**
	* The root context is used as the default parent context when there is no active context
	*
	* @since 1.0.0
	*/
	exports.ROOT_CONTEXT = new class BaseContext {
		/**
		* Construct a new context which inherits values from an optional parent context.
		*
		* @param parentContext a context from which to inherit values
		*/
		constructor(parentContext) {
			const self = this;
			self._currentContext = parentContext ? new Map(parentContext) : /* @__PURE__ */ new Map();
			self.getValue = (key) => self._currentContext.get(key);
			self.setValue = (key, value) => {
				const context = new BaseContext(self._currentContext);
				context._currentContext.set(key, value);
				return context;
			};
			self.deleteValue = (key) => {
				const context = new BaseContext(self._currentContext);
				context._currentContext.delete(key);
				return context;
			};
		}
	}();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/diag/consoleLogger.js
var require_consoleLogger = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DiagConsoleLogger = exports._originalConsoleMethods = void 0;
	var consoleMap = [
		{
			n: "error",
			c: "error"
		},
		{
			n: "warn",
			c: "warn"
		},
		{
			n: "info",
			c: "info"
		},
		{
			n: "debug",
			c: "debug"
		},
		{
			n: "verbose",
			c: "trace"
		}
	];
	exports._originalConsoleMethods = {};
	if (typeof console !== "undefined") {
		for (const key of [
			"error",
			"warn",
			"info",
			"debug",
			"trace",
			"log"
		]) if (typeof console[key] === "function") exports._originalConsoleMethods[key] = console[key];
	}
	/**
	* A simple Immutable Console based diagnostic logger which will output any messages to the Console.
	* If you want to limit the amount of logging to a specific level or lower use the
	* {@link createLogLevelDiagLogger}
	*
	* @since 1.0.0
	*/
	var DiagConsoleLogger = class {
		constructor() {
			function _consoleFunc(funcName) {
				return function(...args) {
					let theFunc = exports._originalConsoleMethods[funcName];
					if (typeof theFunc !== "function") theFunc = exports._originalConsoleMethods["log"];
					if (typeof theFunc !== "function" && console) {
						theFunc = console[funcName];
						if (typeof theFunc !== "function") theFunc = console.log;
					}
					if (typeof theFunc === "function") return theFunc.apply(console, args);
				};
			}
			for (let i = 0; i < consoleMap.length; i++) this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
		}
	};
	exports.DiagConsoleLogger = DiagConsoleLogger;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/metrics/NoopMeter.js
var require_NoopMeter = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createNoopMeter = exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = exports.NOOP_OBSERVABLE_GAUGE_METRIC = exports.NOOP_OBSERVABLE_COUNTER_METRIC = exports.NOOP_UP_DOWN_COUNTER_METRIC = exports.NOOP_HISTOGRAM_METRIC = exports.NOOP_GAUGE_METRIC = exports.NOOP_COUNTER_METRIC = exports.NOOP_METER = exports.NoopObservableUpDownCounterMetric = exports.NoopObservableGaugeMetric = exports.NoopObservableCounterMetric = exports.NoopObservableMetric = exports.NoopHistogramMetric = exports.NoopGaugeMetric = exports.NoopUpDownCounterMetric = exports.NoopCounterMetric = exports.NoopMetric = exports.NoopMeter = void 0;
	/**
	* NoopMeter is a noop implementation of the {@link Meter} interface. It reuses
	* constant NoopMetrics for all of its methods.
	*/
	var NoopMeter = class {
		constructor() {}
		/**
		* @see {@link Meter.createGauge}
		*/
		createGauge(_name, _options) {
			return exports.NOOP_GAUGE_METRIC;
		}
		/**
		* @see {@link Meter.createHistogram}
		*/
		createHistogram(_name, _options) {
			return exports.NOOP_HISTOGRAM_METRIC;
		}
		/**
		* @see {@link Meter.createCounter}
		*/
		createCounter(_name, _options) {
			return exports.NOOP_COUNTER_METRIC;
		}
		/**
		* @see {@link Meter.createUpDownCounter}
		*/
		createUpDownCounter(_name, _options) {
			return exports.NOOP_UP_DOWN_COUNTER_METRIC;
		}
		/**
		* @see {@link Meter.createObservableGauge}
		*/
		createObservableGauge(_name, _options) {
			return exports.NOOP_OBSERVABLE_GAUGE_METRIC;
		}
		/**
		* @see {@link Meter.createObservableCounter}
		*/
		createObservableCounter(_name, _options) {
			return exports.NOOP_OBSERVABLE_COUNTER_METRIC;
		}
		/**
		* @see {@link Meter.createObservableUpDownCounter}
		*/
		createObservableUpDownCounter(_name, _options) {
			return exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
		}
		/**
		* @see {@link Meter.addBatchObservableCallback}
		*/
		addBatchObservableCallback(_callback, _observables) {}
		/**
		* @see {@link Meter.removeBatchObservableCallback}
		*/
		removeBatchObservableCallback(_callback) {}
	};
	exports.NoopMeter = NoopMeter;
	var NoopMetric = class {};
	exports.NoopMetric = NoopMetric;
	var NoopCounterMetric = class extends NoopMetric {
		add(_value, _attributes) {}
	};
	exports.NoopCounterMetric = NoopCounterMetric;
	var NoopUpDownCounterMetric = class extends NoopMetric {
		add(_value, _attributes) {}
	};
	exports.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
	var NoopGaugeMetric = class extends NoopMetric {
		record(_value, _attributes) {}
	};
	exports.NoopGaugeMetric = NoopGaugeMetric;
	var NoopHistogramMetric = class extends NoopMetric {
		record(_value, _attributes) {}
	};
	exports.NoopHistogramMetric = NoopHistogramMetric;
	var NoopObservableMetric = class {
		addCallback(_callback) {}
		removeCallback(_callback) {}
	};
	exports.NoopObservableMetric = NoopObservableMetric;
	var NoopObservableCounterMetric = class extends NoopObservableMetric {};
	exports.NoopObservableCounterMetric = NoopObservableCounterMetric;
	var NoopObservableGaugeMetric = class extends NoopObservableMetric {};
	exports.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
	var NoopObservableUpDownCounterMetric = class extends NoopObservableMetric {};
	exports.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
	exports.NOOP_METER = new NoopMeter();
	exports.NOOP_COUNTER_METRIC = new NoopCounterMetric();
	exports.NOOP_GAUGE_METRIC = new NoopGaugeMetric();
	exports.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
	exports.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
	exports.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
	exports.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
	exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
	/**
	* Create a no-op Meter
	*
	* @since 1.3.0
	*/
	function createNoopMeter() {
		return exports.NOOP_METER;
	}
	exports.createNoopMeter = createNoopMeter;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/metrics/Metric.js
var require_Metric = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ValueType = void 0;
	(function(ValueType) {
		ValueType[ValueType["INT"] = 0] = "INT";
		ValueType[ValueType["DOUBLE"] = 1] = "DOUBLE";
	})(exports.ValueType || (exports.ValueType = {}));
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/propagation/TextMapPropagator.js
var require_TextMapPropagator = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.defaultTextMapSetter = exports.defaultTextMapGetter = void 0;
	/**
	* @since 1.0.0
	*/
	exports.defaultTextMapGetter = {
		get(carrier, key) {
			if (carrier == null) return;
			return carrier[key];
		},
		keys(carrier) {
			if (carrier == null) return [];
			return Object.keys(carrier);
		}
	};
	/**
	* @since 1.0.0
	*/
	exports.defaultTextMapSetter = { set(carrier, key, value) {
		if (carrier == null) return;
		carrier[key] = value;
	} };
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js
var require_NoopContextManager = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NoopContextManager = void 0;
	var context_1 = require_context$1();
	var NoopContextManager = class {
		active() {
			return context_1.ROOT_CONTEXT;
		}
		with(_context, fn, thisArg, ...args) {
			return fn.call(thisArg, ...args);
		}
		bind(_context, target) {
			return target;
		}
		enable() {
			return this;
		}
		disable() {
			return this;
		}
	};
	exports.NoopContextManager = NoopContextManager;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/api/context.js
var require_context = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ContextAPI = void 0;
	var NoopContextManager_1 = require_NoopContextManager();
	var global_utils_1 = require_global_utils();
	var diag_1 = require_diag();
	var API_NAME = "context";
	var NOOP_CONTEXT_MANAGER = new NoopContextManager_1.NoopContextManager();
	exports.ContextAPI = class ContextAPI {
		/** Empty private constructor prevents end users from constructing a new instance of the API */
		constructor() {}
		/** Get the singleton instance of the Context API */
		static getInstance() {
			if (!this._instance) this._instance = new ContextAPI();
			return this._instance;
		}
		/**
		* Set the current context manager.
		*
		* @returns true if the context manager was successfully registered, else false
		*/
		setGlobalContextManager(contextManager) {
			return (0, global_utils_1.registerGlobal)(API_NAME, contextManager, diag_1.DiagAPI.instance());
		}
		/**
		* Get the currently active context
		*/
		active() {
			return this._getContextManager().active();
		}
		/**
		* Execute a function with an active context
		*
		* @param context context to be active during function execution
		* @param fn function to execute in a context
		* @param thisArg optional receiver to be used for calling fn
		* @param args optional arguments forwarded to fn
		*/
		with(context, fn, thisArg, ...args) {
			return this._getContextManager().with(context, fn, thisArg, ...args);
		}
		/**
		* Bind a context to a target function or event emitter
		*
		* @param context context to bind to the event emitter or function. Defaults to the currently active context
		* @param target function or event emitter to bind
		*/
		bind(context, target) {
			return this._getContextManager().bind(context, target);
		}
		_getContextManager() {
			return (0, global_utils_1.getGlobal)(API_NAME) || NOOP_CONTEXT_MANAGER;
		}
		/** Disable and remove the global context manager */
		disable() {
			this._getContextManager().disable();
			(0, global_utils_1.unregisterGlobal)(API_NAME, diag_1.DiagAPI.instance());
		}
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/trace_flags.js
var require_trace_flags = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TraceFlags = void 0;
	(function(TraceFlags) {
		/** Represents no flag set. */
		TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
		/** Bit to represent whether trace is sampled in trace flags. */
		TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
	})(exports.TraceFlags || (exports.TraceFlags = {}));
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/invalid-span-constants.js
var require_invalid_span_constants = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.INVALID_SPAN_CONTEXT = exports.INVALID_TRACEID = exports.INVALID_SPANID = void 0;
	var trace_flags_1 = require_trace_flags();
	/**
	* @since 1.0.0
	*/
	exports.INVALID_SPANID = "0000000000000000";
	/**
	* @since 1.0.0
	*/
	exports.INVALID_TRACEID = "00000000000000000000000000000000";
	/**
	* @since 1.0.0
	*/
	exports.INVALID_SPAN_CONTEXT = {
		traceId: exports.INVALID_TRACEID,
		spanId: exports.INVALID_SPANID,
		traceFlags: trace_flags_1.TraceFlags.NONE
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/NonRecordingSpan.js
var require_NonRecordingSpan = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NonRecordingSpan = void 0;
	var invalid_span_constants_1 = require_invalid_span_constants();
	/**
	* The NonRecordingSpan is the default {@link Span} that is used when no Span
	* implementation is available. All operations are no-op including context
	* propagation.
	*/
	var NonRecordingSpan = class {
		constructor(spanContext = invalid_span_constants_1.INVALID_SPAN_CONTEXT) {
			this._spanContext = spanContext;
		}
		spanContext() {
			return this._spanContext;
		}
		setAttribute(_key, _value) {
			return this;
		}
		setAttributes(_attributes) {
			return this;
		}
		addEvent(_name, _attributes) {
			return this;
		}
		addLink(_link) {
			return this;
		}
		addLinks(_links) {
			return this;
		}
		setStatus(_status) {
			return this;
		}
		updateName(_name) {
			return this;
		}
		end(_endTime) {}
		isRecording() {
			return false;
		}
		recordException(_exception, _time) {}
	};
	exports.NonRecordingSpan = NonRecordingSpan;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/context-utils.js
var require_context_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getSpanContext = exports.setSpanContext = exports.deleteSpan = exports.setSpan = exports.getActiveSpan = exports.getSpan = void 0;
	var context_1 = require_context$1();
	var NonRecordingSpan_1 = require_NonRecordingSpan();
	var context_2 = require_context();
	/**
	* span key
	*/
	var SPAN_KEY = (0, context_1.createContextKey)("OpenTelemetry Context Key SPAN");
	/**
	* Return the span if one exists
	*
	* @param context context to get span from
	*/
	function getSpan(context) {
		return context.getValue(SPAN_KEY) || void 0;
	}
	exports.getSpan = getSpan;
	/**
	* Gets the span from the current context, if one exists.
	*/
	function getActiveSpan() {
		return getSpan(context_2.ContextAPI.getInstance().active());
	}
	exports.getActiveSpan = getActiveSpan;
	/**
	* Set the span on a context
	*
	* @param context context to use as parent
	* @param span span to set active
	*/
	function setSpan(context, span) {
		return context.setValue(SPAN_KEY, span);
	}
	exports.setSpan = setSpan;
	/**
	* Remove current span stored in the context
	*
	* @param context context to delete span from
	*/
	function deleteSpan(context) {
		return context.deleteValue(SPAN_KEY);
	}
	exports.deleteSpan = deleteSpan;
	/**
	* Wrap span context in a NoopSpan and set as span in a new
	* context
	*
	* @param context context to set active span on
	* @param spanContext span context to be wrapped
	*/
	function setSpanContext(context, spanContext) {
		return setSpan(context, new NonRecordingSpan_1.NonRecordingSpan(spanContext));
	}
	exports.setSpanContext = setSpanContext;
	/**
	* Get the span context of the span if it exists.
	*
	* @param context context to get values from
	*/
	function getSpanContext(context) {
		var _a;
		return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
	}
	exports.getSpanContext = getSpanContext;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/spancontext-utils.js
var require_spancontext_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.wrapSpanContext = exports.isSpanContextValid = exports.isValidSpanId = exports.isValidTraceId = void 0;
	var invalid_span_constants_1 = require_invalid_span_constants();
	var NonRecordingSpan_1 = require_NonRecordingSpan();
	var isHex = new Uint8Array([
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1
	]);
	function isValidHex(id, length) {
		if (typeof id !== "string" || id.length !== length) return false;
		let r = 0;
		for (let i = 0; i < id.length; i += 4) r += (isHex[id.charCodeAt(i)] | 0) + (isHex[id.charCodeAt(i + 1)] | 0) + (isHex[id.charCodeAt(i + 2)] | 0) + (isHex[id.charCodeAt(i + 3)] | 0);
		return r === length;
	}
	/**
	* @since 1.0.0
	*/
	function isValidTraceId(traceId) {
		return isValidHex(traceId, 32) && traceId !== invalid_span_constants_1.INVALID_TRACEID;
	}
	exports.isValidTraceId = isValidTraceId;
	/**
	* @since 1.0.0
	*/
	function isValidSpanId(spanId) {
		return isValidHex(spanId, 16) && spanId !== invalid_span_constants_1.INVALID_SPANID;
	}
	exports.isValidSpanId = isValidSpanId;
	/**
	* Returns true if this {@link SpanContext} is valid.
	* @return true if this {@link SpanContext} is valid.
	*
	* @since 1.0.0
	*/
	function isSpanContextValid(spanContext) {
		return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
	}
	exports.isSpanContextValid = isSpanContextValid;
	/**
	* Wrap the given {@link SpanContext} in a new non-recording {@link Span}
	*
	* @param spanContext span context to be wrapped
	* @returns a new non-recording {@link Span} with the provided context
	*/
	function wrapSpanContext(spanContext) {
		return new NonRecordingSpan_1.NonRecordingSpan(spanContext);
	}
	exports.wrapSpanContext = wrapSpanContext;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js
var require_NoopTracer = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NoopTracer = void 0;
	var context_1 = require_context();
	var context_utils_1 = require_context_utils();
	var NonRecordingSpan_1 = require_NonRecordingSpan();
	var spancontext_utils_1 = require_spancontext_utils();
	var contextApi = context_1.ContextAPI.getInstance();
	/**
	* No-op implementations of {@link Tracer}.
	*/
	var NoopTracer = class {
		startSpan(name, options, context = contextApi.active()) {
			if (Boolean(options === null || options === void 0 ? void 0 : options.root)) return new NonRecordingSpan_1.NonRecordingSpan();
			const parentFromContext = context && (0, context_utils_1.getSpanContext)(context);
			if (isSpanContext(parentFromContext) && (0, spancontext_utils_1.isSpanContextValid)(parentFromContext)) return new NonRecordingSpan_1.NonRecordingSpan(parentFromContext);
			else return new NonRecordingSpan_1.NonRecordingSpan();
		}
		startActiveSpan(name, arg2, arg3, arg4) {
			let opts;
			let ctx;
			let fn;
			if (arguments.length < 2) return;
			else if (arguments.length === 2) fn = arg2;
			else if (arguments.length === 3) {
				opts = arg2;
				fn = arg3;
			} else {
				opts = arg2;
				ctx = arg3;
				fn = arg4;
			}
			const parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
			const span = this.startSpan(name, opts, parentContext);
			const contextWithSpanSet = (0, context_utils_1.setSpan)(parentContext, span);
			return contextApi.with(contextWithSpanSet, fn, void 0, span);
		}
	};
	exports.NoopTracer = NoopTracer;
	function isSpanContext(spanContext) {
		return spanContext !== null && typeof spanContext === "object" && "spanId" in spanContext && typeof spanContext["spanId"] === "string" && "traceId" in spanContext && typeof spanContext["traceId"] === "string" && "traceFlags" in spanContext && typeof spanContext["traceFlags"] === "number";
	}
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js
var require_ProxyTracer = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ProxyTracer = void 0;
	var NOOP_TRACER = new (require_NoopTracer()).NoopTracer();
	/**
	* Proxy tracer provided by the proxy tracer provider
	*
	* @since 1.0.0
	*/
	var ProxyTracer = class {
		constructor(provider, name, version, options) {
			this._provider = provider;
			this.name = name;
			this.version = version;
			this.options = options;
		}
		startSpan(name, options, context) {
			return this._getTracer().startSpan(name, options, context);
		}
		startActiveSpan(_name, _options, _context, _fn) {
			const tracer = this._getTracer();
			return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
		}
		/**
		* Try to get a tracer from the proxy tracer provider.
		* If the proxy tracer provider has no delegate, return a noop tracer.
		*/
		_getTracer() {
			if (this._delegate) return this._delegate;
			const tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
			if (!tracer) return NOOP_TRACER;
			this._delegate = tracer;
			return this._delegate;
		}
	};
	exports.ProxyTracer = ProxyTracer;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/NoopTracerProvider.js
var require_NoopTracerProvider = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NoopTracerProvider = void 0;
	var NoopTracer_1 = require_NoopTracer();
	/**
	* An implementation of the {@link TracerProvider} which returns an impotent
	* Tracer for all calls to `getTracer`.
	*
	* All operations are no-op.
	*/
	var NoopTracerProvider = class {
		getTracer(_name, _version, _options) {
			return new NoopTracer_1.NoopTracer();
		}
	};
	exports.NoopTracerProvider = NoopTracerProvider;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/ProxyTracerProvider.js
var require_ProxyTracerProvider = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ProxyTracerProvider = void 0;
	var ProxyTracer_1 = require_ProxyTracer();
	var NOOP_TRACER_PROVIDER = new (require_NoopTracerProvider()).NoopTracerProvider();
	/**
	* Tracer provider which provides {@link ProxyTracer}s.
	*
	* Before a delegate is set, tracers provided are NoOp.
	*   When a delegate is set, traces are provided from the delegate.
	*   When a delegate is set after tracers have already been provided,
	*   all tracers already provided will use the provided delegate implementation.
	*
	* @deprecated This will be removed in the next major version.
	* @since 1.0.0
	*/
	var ProxyTracerProvider = class {
		/**
		* Get a {@link ProxyTracer}
		*/
		getTracer(name, version, options) {
			var _a;
			return (_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new ProxyTracer_1.ProxyTracer(this, name, version, options);
		}
		getDelegate() {
			var _a;
			return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
		}
		/**
		* Set the delegate tracer provider
		*/
		setDelegate(delegate) {
			this._delegate = delegate;
		}
		getDelegateTracer(name, version, options) {
			var _a;
			return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
		}
	};
	exports.ProxyTracerProvider = ProxyTracerProvider;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/SamplingResult.js
var require_SamplingResult = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SamplingDecision = void 0;
	(function(SamplingDecision) {
		/**
		* `Span.isRecording() === false`, span will not be recorded and all events
		* and attributes will be dropped.
		*/
		SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
		/**
		* `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
		* MUST NOT be set.
		*/
		SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
		/**
		* `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
		* MUST be set.
		*/
		SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
	})(exports.SamplingDecision || (exports.SamplingDecision = {}));
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/span_kind.js
var require_span_kind = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SpanKind = void 0;
	(function(SpanKind) {
		/** Default value. Indicates that the span is used internally. */
		SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
		/**
		* Indicates that the span covers server-side handling of an RPC or other
		* remote request.
		*/
		SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
		/**
		* Indicates that the span covers the client-side wrapper around an RPC or
		* other remote request.
		*/
		SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
		/**
		* Indicates that the span describes producer sending a message to a
		* broker. Unlike client and server, there is no direct critical path latency
		* relationship between producer and consumer spans.
		*/
		SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
		/**
		* Indicates that the span describes consumer receiving a message from a
		* broker. Unlike client and server, there is no direct critical path latency
		* relationship between producer and consumer spans.
		*/
		SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
	})(exports.SpanKind || (exports.SpanKind = {}));
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/status.js
var require_status = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SpanStatusCode = void 0;
	(function(SpanStatusCode) {
		/**
		* The default status.
		*/
		SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
		/**
		* The operation has been validated by an Application developer or
		* Operator to have completed successfully.
		*/
		SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
		/**
		* The operation contains an error.
		*/
		SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
	})(exports.SpanStatusCode || (exports.SpanStatusCode = {}));
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/internal/tracestate-validators.js
var require_tracestate_validators = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.validateValue = exports.validateKey = void 0;
	var VALID_KEY_CHAR_RANGE = "[_0-9a-z-*/]";
	var VALID_KEY_REGEX = new RegExp(`^(?:${`[a-z]${VALID_KEY_CHAR_RANGE}{0,255}`}|${`[a-z0-9]${VALID_KEY_CHAR_RANGE}{0,240}@[a-z]${VALID_KEY_CHAR_RANGE}{0,13}`})$`);
	var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
	var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
	/**
	* Key is opaque string up to 256 characters printable. It MUST begin with a
	* lowercase letter, and can only contain lowercase letters a-z, digits 0-9,
	* underscores _, dashes -, asterisks *, and forward slashes /.
	* For multi-tenant vendor scenarios, an at sign (@) can be used to prefix the
	* vendor name. Vendors SHOULD set the tenant ID at the beginning of the key.
	* see https://www.w3.org/TR/trace-context/#key
	*/
	function validateKey(key) {
		return VALID_KEY_REGEX.test(key);
	}
	exports.validateKey = validateKey;
	/**
	* Value is opaque string up to 256 characters printable ASCII RFC0020
	* characters (i.e., the range 0x20 to 0x7E) except comma , and =.
	*/
	function validateValue(value) {
		return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
	}
	exports.validateValue = validateValue;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/internal/tracestate-impl.js
var require_tracestate_impl = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TraceStateImpl = void 0;
	var tracestate_validators_1 = require_tracestate_validators();
	var MAX_TRACE_STATE_ITEMS = 32;
	var MAX_TRACE_STATE_LEN = 512;
	var LIST_MEMBERS_SEPARATOR = ",";
	var LIST_MEMBER_KEY_VALUE_SPLITTER = "=";
	exports.TraceStateImpl = class TraceStateImpl {
		constructor(rawTraceState) {
			this._internalState = /* @__PURE__ */ new Map();
			if (rawTraceState) this._parse(rawTraceState);
		}
		set(key, value) {
			const traceState = this._clone();
			if (traceState._internalState.has(key)) traceState._internalState.delete(key);
			traceState._internalState.set(key, value);
			return traceState;
		}
		unset(key) {
			const traceState = this._clone();
			traceState._internalState.delete(key);
			return traceState;
		}
		get(key) {
			return this._internalState.get(key);
		}
		serialize() {
			return Array.from(this._internalState.keys()).reduceRight((agg, key) => {
				agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + this.get(key));
				return agg;
			}, []).join(LIST_MEMBERS_SEPARATOR);
		}
		_parse(rawTraceState) {
			if (rawTraceState.length > MAX_TRACE_STATE_LEN) return;
			this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reduceRight((agg, part) => {
				const listMember = part.trim();
				const i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
				if (i !== -1) {
					const key = listMember.slice(0, i);
					const value = listMember.slice(i + 1, part.length);
					if ((0, tracestate_validators_1.validateKey)(key) && (0, tracestate_validators_1.validateValue)(value)) agg.set(key, value);
				}
				return agg;
			}, /* @__PURE__ */ new Map());
			if (this._internalState.size > MAX_TRACE_STATE_ITEMS) this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, MAX_TRACE_STATE_ITEMS));
		}
		_keys() {
			return Array.from(this._internalState.keys()).reverse();
		}
		_clone() {
			const traceState = new TraceStateImpl();
			traceState._internalState = new Map(this._internalState);
			return traceState;
		}
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace/internal/utils.js
var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createTraceState = void 0;
	var tracestate_impl_1 = require_tracestate_impl();
	/**
	* @since 1.1.0
	*/
	function createTraceState(rawTraceState) {
		return new tracestate_impl_1.TraceStateImpl(rawTraceState);
	}
	exports.createTraceState = createTraceState;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/context-api.js
var require_context_api = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.context = void 0;
	/**
	* Entrypoint for context API
	* @since 1.0.0
	*/
	exports.context = require_context().ContextAPI.getInstance();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/diag-api.js
var require_diag_api = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.diag = void 0;
	/**
	* Entrypoint for Diag API.
	* Defines Diagnostic handler used for internal diagnostic logging operations.
	* The default provides a Noop DiagLogger implementation which may be changed via the
	* diag.setLogger(logger: DiagLogger) function.
	*
	* @since 1.0.0
	*/
	exports.diag = require_diag().DiagAPI.instance();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/metrics/NoopMeterProvider.js
var require_NoopMeterProvider = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NOOP_METER_PROVIDER = exports.NoopMeterProvider = void 0;
	var NoopMeter_1 = require_NoopMeter();
	/**
	* An implementation of the {@link MeterProvider} which returns an impotent Meter
	* for all calls to `getMeter`
	*/
	var NoopMeterProvider = class {
		getMeter(_name, _version, _options) {
			return NoopMeter_1.NOOP_METER;
		}
	};
	exports.NoopMeterProvider = NoopMeterProvider;
	exports.NOOP_METER_PROVIDER = new NoopMeterProvider();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/api/metrics.js
var require_metrics = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MetricsAPI = void 0;
	var NoopMeterProvider_1 = require_NoopMeterProvider();
	var global_utils_1 = require_global_utils();
	var diag_1 = require_diag();
	var API_NAME = "metrics";
	exports.MetricsAPI = class MetricsAPI {
		/** Empty private constructor prevents end users from constructing a new instance of the API */
		constructor() {}
		/** Get the singleton instance of the Metrics API */
		static getInstance() {
			if (!this._instance) this._instance = new MetricsAPI();
			return this._instance;
		}
		/**
		* Set the current global meter provider.
		* Returns true if the meter provider was successfully registered, else false.
		*/
		setGlobalMeterProvider(provider) {
			return (0, global_utils_1.registerGlobal)(API_NAME, provider, diag_1.DiagAPI.instance());
		}
		/**
		* Returns the global meter provider.
		*/
		getMeterProvider() {
			return (0, global_utils_1.getGlobal)(API_NAME) || NoopMeterProvider_1.NOOP_METER_PROVIDER;
		}
		/**
		* Returns a meter from the global meter provider.
		*/
		getMeter(name, version, options) {
			return this.getMeterProvider().getMeter(name, version, options);
		}
		/** Remove the global meter provider */
		disable() {
			(0, global_utils_1.unregisterGlobal)(API_NAME, diag_1.DiagAPI.instance());
		}
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/metrics-api.js
var require_metrics_api = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.metrics = void 0;
	/**
	* Entrypoint for metrics API
	*
	* @since 1.3.0
	*/
	exports.metrics = require_metrics().MetricsAPI.getInstance();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/propagation/NoopTextMapPropagator.js
var require_NoopTextMapPropagator = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NoopTextMapPropagator = void 0;
	/**
	* No-op implementations of {@link TextMapPropagator}.
	*/
	var NoopTextMapPropagator = class {
		/** Noop inject function does nothing */
		inject(_context, _carrier) {}
		/** Noop extract function does nothing and returns the input context */
		extract(context, _carrier) {
			return context;
		}
		fields() {
			return [];
		}
	};
	exports.NoopTextMapPropagator = NoopTextMapPropagator;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/baggage/context-helpers.js
var require_context_helpers = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.deleteBaggage = exports.setBaggage = exports.getActiveBaggage = exports.getBaggage = void 0;
	var context_1 = require_context();
	/**
	* Baggage key
	*/
	var BAGGAGE_KEY = (0, require_context$1().createContextKey)("OpenTelemetry Baggage Key");
	/**
	* Retrieve the current baggage from the given context
	*
	* @param {Context} Context that manage all context values
	* @returns {Baggage} Extracted baggage from the context
	*/
	function getBaggage(context) {
		return context.getValue(BAGGAGE_KEY) || void 0;
	}
	exports.getBaggage = getBaggage;
	/**
	* Retrieve the current baggage from the active/current context
	*
	* @returns {Baggage} Extracted baggage from the context
	*/
	function getActiveBaggage() {
		return getBaggage(context_1.ContextAPI.getInstance().active());
	}
	exports.getActiveBaggage = getActiveBaggage;
	/**
	* Store a baggage in the given context
	*
	* @param {Context} Context that manage all context values
	* @param {Baggage} baggage that will be set in the actual context
	*/
	function setBaggage(context, baggage) {
		return context.setValue(BAGGAGE_KEY, baggage);
	}
	exports.setBaggage = setBaggage;
	/**
	* Delete the baggage stored in the given context
	*
	* @param {Context} Context that manage all context values
	*/
	function deleteBaggage(context) {
		return context.deleteValue(BAGGAGE_KEY);
	}
	exports.deleteBaggage = deleteBaggage;
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/api/propagation.js
var require_propagation = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PropagationAPI = void 0;
	var global_utils_1 = require_global_utils();
	var NoopTextMapPropagator_1 = require_NoopTextMapPropagator();
	var TextMapPropagator_1 = require_TextMapPropagator();
	var context_helpers_1 = require_context_helpers();
	var utils_1 = require_utils$1();
	var diag_1 = require_diag();
	var API_NAME = "propagation";
	var NOOP_TEXT_MAP_PROPAGATOR = new NoopTextMapPropagator_1.NoopTextMapPropagator();
	exports.PropagationAPI = class PropagationAPI {
		/** Empty private constructor prevents end users from constructing a new instance of the API */
		constructor() {
			this.createBaggage = utils_1.createBaggage;
			this.getBaggage = context_helpers_1.getBaggage;
			this.getActiveBaggage = context_helpers_1.getActiveBaggage;
			this.setBaggage = context_helpers_1.setBaggage;
			this.deleteBaggage = context_helpers_1.deleteBaggage;
		}
		/** Get the singleton instance of the Propagator API */
		static getInstance() {
			if (!this._instance) this._instance = new PropagationAPI();
			return this._instance;
		}
		/**
		* Set the current propagator.
		*
		* @returns true if the propagator was successfully registered, else false
		*/
		setGlobalPropagator(propagator) {
			return (0, global_utils_1.registerGlobal)(API_NAME, propagator, diag_1.DiagAPI.instance());
		}
		/**
		* Inject context into a carrier to be propagated inter-process
		*
		* @param context Context carrying tracing data to inject
		* @param carrier carrier to inject context into
		* @param setter Function used to set values on the carrier
		*/
		inject(context, carrier, setter = TextMapPropagator_1.defaultTextMapSetter) {
			return this._getGlobalPropagator().inject(context, carrier, setter);
		}
		/**
		* Extract context from a carrier
		*
		* @param context Context which the newly created context will inherit from
		* @param carrier Carrier to extract context from
		* @param getter Function used to extract keys from a carrier
		*/
		extract(context, carrier, getter = TextMapPropagator_1.defaultTextMapGetter) {
			return this._getGlobalPropagator().extract(context, carrier, getter);
		}
		/**
		* Return a list of all fields which may be used by the propagator.
		*/
		fields() {
			return this._getGlobalPropagator().fields();
		}
		/** Remove the global propagator */
		disable() {
			(0, global_utils_1.unregisterGlobal)(API_NAME, diag_1.DiagAPI.instance());
		}
		_getGlobalPropagator() {
			return (0, global_utils_1.getGlobal)(API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
		}
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/propagation-api.js
var require_propagation_api = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.propagation = void 0;
	/**
	* Entrypoint for propagation API
	*
	* @since 1.0.0
	*/
	exports.propagation = require_propagation().PropagationAPI.getInstance();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/api/trace.js
var require_trace = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TraceAPI = void 0;
	var global_utils_1 = require_global_utils();
	var ProxyTracerProvider_1 = require_ProxyTracerProvider();
	var spancontext_utils_1 = require_spancontext_utils();
	var context_utils_1 = require_context_utils();
	var diag_1 = require_diag();
	var API_NAME = "trace";
	exports.TraceAPI = class TraceAPI {
		/** Empty private constructor prevents end users from constructing a new instance of the API */
		constructor() {
			this._proxyTracerProvider = new ProxyTracerProvider_1.ProxyTracerProvider();
			this.wrapSpanContext = spancontext_utils_1.wrapSpanContext;
			this.isSpanContextValid = spancontext_utils_1.isSpanContextValid;
			this.deleteSpan = context_utils_1.deleteSpan;
			this.getSpan = context_utils_1.getSpan;
			this.getActiveSpan = context_utils_1.getActiveSpan;
			this.getSpanContext = context_utils_1.getSpanContext;
			this.setSpan = context_utils_1.setSpan;
			this.setSpanContext = context_utils_1.setSpanContext;
		}
		/** Get the singleton instance of the Trace API */
		static getInstance() {
			if (!this._instance) this._instance = new TraceAPI();
			return this._instance;
		}
		/**
		* Set the current global tracer.
		*
		* @returns true if the tracer provider was successfully registered, else false
		*/
		setGlobalTracerProvider(provider) {
			const success = (0, global_utils_1.registerGlobal)(API_NAME, this._proxyTracerProvider, diag_1.DiagAPI.instance());
			if (success) this._proxyTracerProvider.setDelegate(provider);
			return success;
		}
		/**
		* Returns the global tracer provider.
		*/
		getTracerProvider() {
			return (0, global_utils_1.getGlobal)(API_NAME) || this._proxyTracerProvider;
		}
		/**
		* Returns a tracer from the global tracer provider.
		*/
		getTracer(name, version) {
			return this.getTracerProvider().getTracer(name, version);
		}
		/** Remove the global tracer provider */
		disable() {
			(0, global_utils_1.unregisterGlobal)(API_NAME, diag_1.DiagAPI.instance());
			this._proxyTracerProvider = new ProxyTracerProvider_1.ProxyTracerProvider();
		}
	};
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/trace-api.js
var require_trace_api = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.trace = void 0;
	/**
	* Entrypoint for trace API
	*
	* @since 1.0.0
	*/
	exports.trace = require_trace().TraceAPI.getInstance();
}));
//#endregion
//#region node_modules/@opentelemetry/api/build/src/index.js
var require_src = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.trace = exports.propagation = exports.metrics = exports.diag = exports.context = exports.INVALID_SPAN_CONTEXT = exports.INVALID_TRACEID = exports.INVALID_SPANID = exports.isValidSpanId = exports.isValidTraceId = exports.isSpanContextValid = exports.createTraceState = exports.TraceFlags = exports.SpanStatusCode = exports.SpanKind = exports.SamplingDecision = exports.ProxyTracerProvider = exports.ProxyTracer = exports.defaultTextMapSetter = exports.defaultTextMapGetter = exports.ValueType = exports.createNoopMeter = exports.DiagLogLevel = exports.DiagConsoleLogger = exports.ROOT_CONTEXT = exports.createContextKey = exports.baggageEntryMetadataFromString = void 0;
	var utils_1 = require_utils$1();
	Object.defineProperty(exports, "baggageEntryMetadataFromString", {
		enumerable: true,
		get: function() {
			return utils_1.baggageEntryMetadataFromString;
		}
	});
	var context_1 = require_context$1();
	Object.defineProperty(exports, "createContextKey", {
		enumerable: true,
		get: function() {
			return context_1.createContextKey;
		}
	});
	Object.defineProperty(exports, "ROOT_CONTEXT", {
		enumerable: true,
		get: function() {
			return context_1.ROOT_CONTEXT;
		}
	});
	var consoleLogger_1 = require_consoleLogger();
	Object.defineProperty(exports, "DiagConsoleLogger", {
		enumerable: true,
		get: function() {
			return consoleLogger_1.DiagConsoleLogger;
		}
	});
	var types_1 = require_types();
	Object.defineProperty(exports, "DiagLogLevel", {
		enumerable: true,
		get: function() {
			return types_1.DiagLogLevel;
		}
	});
	var NoopMeter_1 = require_NoopMeter();
	Object.defineProperty(exports, "createNoopMeter", {
		enumerable: true,
		get: function() {
			return NoopMeter_1.createNoopMeter;
		}
	});
	var Metric_1 = require_Metric();
	Object.defineProperty(exports, "ValueType", {
		enumerable: true,
		get: function() {
			return Metric_1.ValueType;
		}
	});
	var TextMapPropagator_1 = require_TextMapPropagator();
	Object.defineProperty(exports, "defaultTextMapGetter", {
		enumerable: true,
		get: function() {
			return TextMapPropagator_1.defaultTextMapGetter;
		}
	});
	Object.defineProperty(exports, "defaultTextMapSetter", {
		enumerable: true,
		get: function() {
			return TextMapPropagator_1.defaultTextMapSetter;
		}
	});
	var ProxyTracer_1 = require_ProxyTracer();
	Object.defineProperty(exports, "ProxyTracer", {
		enumerable: true,
		get: function() {
			return ProxyTracer_1.ProxyTracer;
		}
	});
	var ProxyTracerProvider_1 = require_ProxyTracerProvider();
	Object.defineProperty(exports, "ProxyTracerProvider", {
		enumerable: true,
		get: function() {
			return ProxyTracerProvider_1.ProxyTracerProvider;
		}
	});
	var SamplingResult_1 = require_SamplingResult();
	Object.defineProperty(exports, "SamplingDecision", {
		enumerable: true,
		get: function() {
			return SamplingResult_1.SamplingDecision;
		}
	});
	var span_kind_1 = require_span_kind();
	Object.defineProperty(exports, "SpanKind", {
		enumerable: true,
		get: function() {
			return span_kind_1.SpanKind;
		}
	});
	var status_1 = require_status();
	Object.defineProperty(exports, "SpanStatusCode", {
		enumerable: true,
		get: function() {
			return status_1.SpanStatusCode;
		}
	});
	var trace_flags_1 = require_trace_flags();
	Object.defineProperty(exports, "TraceFlags", {
		enumerable: true,
		get: function() {
			return trace_flags_1.TraceFlags;
		}
	});
	var utils_2 = require_utils();
	Object.defineProperty(exports, "createTraceState", {
		enumerable: true,
		get: function() {
			return utils_2.createTraceState;
		}
	});
	var spancontext_utils_1 = require_spancontext_utils();
	Object.defineProperty(exports, "isSpanContextValid", {
		enumerable: true,
		get: function() {
			return spancontext_utils_1.isSpanContextValid;
		}
	});
	Object.defineProperty(exports, "isValidTraceId", {
		enumerable: true,
		get: function() {
			return spancontext_utils_1.isValidTraceId;
		}
	});
	Object.defineProperty(exports, "isValidSpanId", {
		enumerable: true,
		get: function() {
			return spancontext_utils_1.isValidSpanId;
		}
	});
	var invalid_span_constants_1 = require_invalid_span_constants();
	Object.defineProperty(exports, "INVALID_SPANID", {
		enumerable: true,
		get: function() {
			return invalid_span_constants_1.INVALID_SPANID;
		}
	});
	Object.defineProperty(exports, "INVALID_TRACEID", {
		enumerable: true,
		get: function() {
			return invalid_span_constants_1.INVALID_TRACEID;
		}
	});
	Object.defineProperty(exports, "INVALID_SPAN_CONTEXT", {
		enumerable: true,
		get: function() {
			return invalid_span_constants_1.INVALID_SPAN_CONTEXT;
		}
	});
	var context_api_1 = require_context_api();
	Object.defineProperty(exports, "context", {
		enumerable: true,
		get: function() {
			return context_api_1.context;
		}
	});
	var diag_api_1 = require_diag_api();
	Object.defineProperty(exports, "diag", {
		enumerable: true,
		get: function() {
			return diag_api_1.diag;
		}
	});
	var metrics_api_1 = require_metrics_api();
	Object.defineProperty(exports, "metrics", {
		enumerable: true,
		get: function() {
			return metrics_api_1.metrics;
		}
	});
	var propagation_api_1 = require_propagation_api();
	Object.defineProperty(exports, "propagation", {
		enumerable: true,
		get: function() {
			return propagation_api_1.propagation;
		}
	});
	var trace_api_1 = require_trace_api();
	Object.defineProperty(exports, "trace", {
		enumerable: true,
		get: function() {
			return trace_api_1.trace;
		}
	});
	exports.default = {
		context: context_api_1.context,
		diag: diag_api_1.diag,
		metrics: metrics_api_1.metrics,
		propagation: propagation_api_1.propagation,
		trace: trace_api_1.trace
	};
}));
//#endregion
//#region node_modules/ai/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_src = require_src();
var __defProp = Object.defineProperty;
var __export = (target, all) => {
	for (var name22 in all) __defProp(target, name22, {
		get: all[name22],
		enumerable: true
	});
};
var name = "AI_InvalidArgumentError";
var marker = `vercel.ai.error.${name}`;
var symbol = Symbol.for(marker);
var _a;
var InvalidArgumentError = class extends AISDKError {
	constructor({ parameter, value, message }) {
		super({
			name,
			message: `Invalid argument for parameter ${parameter}: ${message}`
		});
		this[_a] = true;
		this.parameter = parameter;
		this.value = value;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker);
	}
};
_a = symbol;
var name3 = "AI_InvalidToolApprovalError";
var marker3 = `vercel.ai.error.${name3}`;
var symbol3 = Symbol.for(marker3);
var _a3;
var InvalidToolApprovalError = class extends AISDKError {
	constructor({ approvalId }) {
		super({
			name: name3,
			message: `Tool approval response references unknown approvalId: "${approvalId}". No matching tool-approval-request found in message history.`
		});
		this[_a3] = true;
		this.approvalId = approvalId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker3);
	}
};
_a3 = symbol3;
var name4 = "AI_InvalidToolApprovalSignatureError";
var marker4 = `vercel.ai.error.${name4}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var InvalidToolApprovalSignatureError = class extends AISDKError {
	constructor({ approvalId, toolCallId, reason }) {
		super({
			name: name4,
			message: `Tool approval signature verification failed for approval "${approvalId}" (tool call "${toolCallId}"): ${reason}`
		});
		this[_a4] = true;
		this.approvalId = approvalId;
		this.toolCallId = toolCallId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker4);
	}
};
_a4 = symbol4;
var name5 = "AI_InvalidToolInputError";
var marker5 = `vercel.ai.error.${name5}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var InvalidToolInputError = class extends AISDKError {
	constructor({ toolInput, toolName, cause, message = `Invalid input for tool ${toolName}: ${getErrorMessage(cause)}` }) {
		super({
			name: name5,
			message,
			cause
		});
		this[_a5] = true;
		this.toolInput = toolInput;
		this.toolName = toolName;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker5);
	}
};
_a5 = symbol5;
var name6 = "AI_ToolCallNotFoundForApprovalError";
var marker6 = `vercel.ai.error.${name6}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var ToolCallNotFoundForApprovalError = class extends AISDKError {
	constructor({ toolCallId, approvalId }) {
		super({
			name: name6,
			message: `Tool call "${toolCallId}" not found for approval request "${approvalId}".`
		});
		this[_a6] = true;
		this.toolCallId = toolCallId;
		this.approvalId = approvalId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker6);
	}
};
_a6 = symbol6;
var name7 = "AI_MissingToolResultsError";
var marker7 = `vercel.ai.error.${name7}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var MissingToolResultsError = class extends AISDKError {
	constructor({ toolCallIds }) {
		super({
			name: name7,
			message: `Tool result${toolCallIds.length > 1 ? "s are" : " is"} missing for tool call${toolCallIds.length > 1 ? "s" : ""} ${toolCallIds.join(", ")}.`
		});
		this[_a7] = true;
		this.toolCallIds = toolCallIds;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker7);
	}
};
_a7 = symbol7;
var name9 = "AI_NoObjectGeneratedError";
var marker9 = `vercel.ai.error.${name9}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var NoObjectGeneratedError = class extends AISDKError {
	constructor({ message = "No object generated.", cause, text: text2, response, usage, finishReason }) {
		super({
			name: name9,
			message,
			cause
		});
		this[_a9] = true;
		this.text = text2;
		this.response = response;
		this.usage = usage;
		this.finishReason = finishReason;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker9);
	}
};
_a9 = symbol9;
var name10 = "AI_NoOutputGeneratedError";
var marker10 = `vercel.ai.error.${name10}`;
var symbol10 = Symbol.for(marker10);
var _a10;
var NoOutputGeneratedError = class extends AISDKError {
	constructor({ message = "No output generated.", cause } = {}) {
		super({
			name: name10,
			message,
			cause
		});
		this[_a10] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker10);
	}
};
_a10 = symbol10;
var name14 = "AI_NoSuchToolError";
var marker14 = `vercel.ai.error.${name14}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var NoSuchToolError = class extends AISDKError {
	constructor({ toolName, availableTools = void 0, message = `Model tried to call unavailable tool '${toolName}'. ${availableTools === void 0 ? "No tools are available." : `Available tools: ${availableTools.join(", ")}.`}` }) {
		super({
			name: name14,
			message
		});
		this[_a14] = true;
		this.toolName = toolName;
		this.availableTools = availableTools;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker14);
	}
};
_a14 = symbol14;
var name15 = "AI_ToolCallRepairError";
var marker15 = `vercel.ai.error.${name15}`;
var symbol15 = Symbol.for(marker15);
var _a15;
var ToolCallRepairError = class extends AISDKError {
	constructor({ cause, originalError, message = `Error repairing tool call: ${getErrorMessage(cause)}` }) {
		super({
			name: name15,
			message,
			cause
		});
		this[_a15] = true;
		this.originalError = originalError;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker15);
	}
};
_a15 = symbol15;
var UnsupportedModelVersionError = class extends AISDKError {
	constructor(options) {
		super({
			name: "AI_UnsupportedModelVersionError",
			message: `Unsupported model version ${options.version} for provider "${options.provider}" and model "${options.modelId}". AI SDK 5 only supports models that implement specification version "v2".`
		});
		this.version = options.version;
		this.provider = options.provider;
		this.modelId = options.modelId;
	}
};
var name16 = "AI_UIMessageStreamError";
var marker16 = `vercel.ai.error.${name16}`;
var symbol16 = Symbol.for(marker16);
var _a16;
var UIMessageStreamError = class extends AISDKError {
	constructor({ chunkType, chunkId, message }) {
		super({
			name: name16,
			message
		});
		this[_a16] = true;
		this.chunkType = chunkType;
		this.chunkId = chunkId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker16);
	}
};
_a16 = symbol16;
var name18 = "AI_InvalidMessageRoleError";
var marker18 = `vercel.ai.error.${name18}`;
var symbol18 = Symbol.for(marker18);
var _a18;
var InvalidMessageRoleError = class extends AISDKError {
	constructor({ role, message = `Invalid message role: '${role}'. Must be one of: "system", "user", "assistant", "tool".` }) {
		super({
			name: name18,
			message
		});
		this[_a18] = true;
		this.role = role;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker18);
	}
};
_a18 = symbol18;
var name19 = "AI_MessageConversionError";
var marker19 = `vercel.ai.error.${name19}`;
var symbol19 = Symbol.for(marker19);
var _a19;
var MessageConversionError = class extends AISDKError {
	constructor({ originalMessage, message }) {
		super({
			name: name19,
			message
		});
		this[_a19] = true;
		this.originalMessage = originalMessage;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker19);
	}
};
_a19 = symbol19;
var name20 = "AI_RetryError";
var marker20 = `vercel.ai.error.${name20}`;
var symbol20 = Symbol.for(marker20);
var _a20;
var RetryError = class extends AISDKError {
	constructor({ message, reason, errors }) {
		super({
			name: name20,
			message
		});
		this[_a20] = true;
		this.reason = reason;
		this.errors = errors;
		this.lastError = errors[errors.length - 1];
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker20);
	}
};
_a20 = symbol20;
function asArray(value) {
	return value === void 0 ? [] : Array.isArray(value) ? value : [value];
}
async function notify(options) {
	for (const callback of asArray(options.callbacks)) {
		if (callback == null) continue;
		try {
			await callback(options.event);
		} catch (_ignored) {}
	}
}
function formatWarning({ warning, provider, model }) {
	const prefix = `AI SDK Warning (${provider} / ${model}):`;
	switch (warning.type) {
		case "unsupported": {
			let message = `${prefix} The feature "${warning.feature}" is not supported.`;
			if (warning.details) message += ` ${warning.details}`;
			return message;
		}
		case "compatibility": {
			let message = `${prefix} The feature "${warning.feature}" is used in a compatibility mode.`;
			if (warning.details) message += ` ${warning.details}`;
			return message;
		}
		case "other": return `${prefix} ${warning.message}`;
		default: return `${prefix} ${JSON.stringify(warning, null, 2)}`;
	}
}
var FIRST_WARNING_INFO_MESSAGE = "AI SDK Warning System: To turn off warning logging, set the AI_SDK_LOG_WARNINGS global to false.";
var hasLoggedBefore = false;
var logWarnings = (options) => {
	if (options.warnings.length === 0) return;
	const logger = globalThis.AI_SDK_LOG_WARNINGS;
	if (logger === false) return;
	if (typeof logger === "function") {
		logger(options);
		return;
	}
	if (!hasLoggedBefore) {
		hasLoggedBefore = true;
		console.info(FIRST_WARNING_INFO_MESSAGE);
	}
	for (const warning of options.warnings) console.warn(formatWarning({
		warning,
		provider: options.provider,
		model: options.model
	}));
};
function logV2CompatibilityWarning({ provider, modelId }) {
	logWarnings({
		warnings: [{
			type: "compatibility",
			feature: "specificationVersion",
			details: `Using v2 specification compatibility mode. Some features may not be available.`
		}],
		provider,
		model: modelId
	});
}
function asLanguageModelV3(model) {
	if (model.specificationVersion === "v3") return model;
	logV2CompatibilityWarning({
		provider: model.provider,
		modelId: model.modelId
	});
	return new Proxy(model, { get(target, prop) {
		switch (prop) {
			case "specificationVersion": return "v3";
			case "doGenerate": return async (...args) => {
				const result = await target.doGenerate(...args);
				return {
					...result,
					finishReason: convertV2FinishReasonToV3(result.finishReason),
					usage: convertV2UsageToV3(result.usage)
				};
			};
			case "doStream": return async (...args) => {
				const result = await target.doStream(...args);
				return {
					...result,
					stream: convertV2StreamToV3(result.stream)
				};
			};
			default: return target[prop];
		}
	} });
}
function convertV2StreamToV3(stream) {
	return stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
		switch (chunk.type) {
			case "finish":
				controller.enqueue({
					...chunk,
					finishReason: convertV2FinishReasonToV3(chunk.finishReason),
					usage: convertV2UsageToV3(chunk.usage)
				});
				break;
			default:
				controller.enqueue(chunk);
				break;
		}
	} }));
}
function convertV2FinishReasonToV3(finishReason) {
	return {
		unified: finishReason === "unknown" ? "other" : finishReason,
		raw: void 0
	};
}
function convertV2UsageToV3(usage) {
	return {
		inputTokens: {
			total: usage.inputTokens,
			noCache: void 0,
			cacheRead: usage.cachedInputTokens,
			cacheWrite: void 0
		},
		outputTokens: {
			total: usage.outputTokens,
			text: void 0,
			reasoning: usage.reasoningTokens
		}
	};
}
function resolveLanguageModel(model) {
	if (typeof model !== "string") {
		if (model.specificationVersion !== "v3" && model.specificationVersion !== "v2") {
			const unsupportedModel = model;
			throw new UnsupportedModelVersionError({
				version: unsupportedModel.specificationVersion,
				provider: unsupportedModel.provider,
				modelId: unsupportedModel.modelId
			});
		}
		return asLanguageModelV3(model);
	}
	return getGlobalProvider().languageModel(model);
}
function getGlobalProvider() {
	var _a22;
	return (_a22 = globalThis.AI_SDK_DEFAULT_PROVIDER) != null ? _a22 : gateway;
}
function getTotalTimeoutMs(timeout) {
	if (timeout == null) return;
	if (typeof timeout === "number") return timeout;
	return timeout.totalMs;
}
function getStepTimeoutMs(timeout) {
	if (timeout == null || typeof timeout === "number") return;
	return timeout.stepMs;
}
function getChunkTimeoutMs(timeout) {
	if (timeout == null || typeof timeout === "number") return;
	return timeout.chunkMs;
}
var imageMediaTypeSignatures = [
	{
		mediaType: "image/gif",
		bytesPrefix: [
			71,
			73,
			70
		]
	},
	{
		mediaType: "image/png",
		bytesPrefix: [
			137,
			80,
			78,
			71
		]
	},
	{
		mediaType: "image/jpeg",
		bytesPrefix: [255, 216]
	},
	{
		mediaType: "image/webp",
		bytesPrefix: [
			82,
			73,
			70,
			70,
			null,
			null,
			null,
			null,
			87,
			69,
			66,
			80
		]
	},
	{
		mediaType: "image/bmp",
		bytesPrefix: [66, 77]
	},
	{
		mediaType: "image/tiff",
		bytesPrefix: [
			73,
			73,
			42,
			0
		]
	},
	{
		mediaType: "image/tiff",
		bytesPrefix: [
			77,
			77,
			0,
			42
		]
	},
	{
		mediaType: "image/avif",
		bytesPrefix: [
			0,
			0,
			0,
			32,
			102,
			116,
			121,
			112,
			97,
			118,
			105,
			102
		]
	},
	{
		mediaType: "image/heic",
		bytesPrefix: [
			0,
			0,
			0,
			32,
			102,
			116,
			121,
			112,
			104,
			101,
			105,
			99
		]
	}
];
var stripID3 = (data) => {
	const bytes = typeof data === "string" ? convertBase64ToUint8Array(data) : data;
	const id3Size = (bytes[6] & 127) << 21 | (bytes[7] & 127) << 14 | (bytes[8] & 127) << 7 | bytes[9] & 127;
	return bytes.slice(id3Size + 10);
};
function stripID3TagsIfPresent(data) {
	return typeof data === "string" && data.startsWith("SUQz") || typeof data !== "string" && data.length > 10 && data[0] === 73 && data[1] === 68 && data[2] === 51 ? stripID3(data) : data;
}
function detectMediaType({ data, signatures }) {
	const processedData = stripID3TagsIfPresent(data);
	const bytes = typeof processedData === "string" ? convertBase64ToUint8Array(processedData.substring(0, Math.min(processedData.length, 24))) : processedData;
	for (const signature of signatures) if (bytes.length >= signature.bytesPrefix.length && signature.bytesPrefix.every((byte, index) => byte === null || bytes[index] === byte)) return signature.mediaType;
}
var VERSION = "6.0.204";
var download = async ({ url, maxBytes, abortSignal }) => {
	var _a22;
	const urlText = url.toString();
	try {
		const response = await fetchWithValidatedRedirects({
			url: urlText,
			headers: withUserAgentSuffix({}, `ai-sdk/${VERSION}`, getRuntimeEnvironmentUserAgent()),
			abortSignal
		});
		if (!response.ok) throw new DownloadError({
			url: urlText,
			statusCode: response.status,
			statusText: response.statusText
		});
		return {
			data: await readResponseWithSizeLimit({
				response,
				url: urlText,
				maxBytes: maxBytes != null ? maxBytes : DEFAULT_MAX_DOWNLOAD_SIZE
			}),
			mediaType: (_a22 = response.headers.get("content-type")) != null ? _a22 : void 0
		};
	} catch (error) {
		if (DownloadError.isInstance(error)) throw error;
		throw new DownloadError({
			url: urlText,
			cause: error
		});
	}
};
var createDefaultDownloadFunction = (download2 = download) => (requestedDownloads) => Promise.all(requestedDownloads.map(async (requestedDownload) => requestedDownload.isUrlSupportedByModel ? null : download2(requestedDownload)));
function splitDataUrl(dataUrl) {
	try {
		const [header, base64Content] = dataUrl.split(",");
		return {
			mediaType: header.split(";")[0].split(":")[1],
			base64Content
		};
	} catch (error) {
		return {
			mediaType: void 0,
			base64Content: void 0
		};
	}
}
var dataContentSchema = union([
	string(),
	_instanceof(Uint8Array),
	_instanceof(ArrayBuffer),
	custom((value) => {
		var _a22, _b;
		return (_b = (_a22 = globalThis.Buffer) == null ? void 0 : _a22.isBuffer(value)) != null ? _b : false;
	}, { message: "Must be a Buffer" })
]);
function convertToLanguageModelV3DataContent(content) {
	if (content instanceof Uint8Array) return {
		data: content,
		mediaType: void 0
	};
	if (content instanceof ArrayBuffer) return {
		data: new Uint8Array(content),
		mediaType: void 0
	};
	if (typeof content === "string") try {
		content = new URL(content);
	} catch (error) {}
	if (content instanceof URL && content.protocol === "data:") {
		const { mediaType: dataUrlMediaType, base64Content } = splitDataUrl(content.toString());
		if (dataUrlMediaType == null || base64Content == null) throw new AISDKError({
			name: "InvalidDataContentError",
			message: `Invalid data URL format in content ${content.toString()}`
		});
		return {
			data: base64Content,
			mediaType: dataUrlMediaType
		};
	}
	return {
		data: content,
		mediaType: void 0
	};
}
function convertDataContentToBase64String(content) {
	if (typeof content === "string") return content;
	if (content instanceof ArrayBuffer) return convertUint8ArrayToBase64(new Uint8Array(content));
	return convertUint8ArrayToBase64(content);
}
async function convertToLanguageModelPrompt({ prompt, supportedUrls, download: download2 = createDefaultDownloadFunction() }) {
	const downloadedAssets = await downloadAssets(prompt.messages, download2, supportedUrls);
	const approvalIdToToolCallId = /* @__PURE__ */ new Map();
	for (const message of prompt.messages) if (message.role === "assistant" && Array.isArray(message.content)) {
		for (const part of message.content) if (part.type === "tool-approval-request" && "approvalId" in part && "toolCallId" in part) approvalIdToToolCallId.set(part.approvalId, part.toolCallId);
	}
	const approvedToolCallIds = /* @__PURE__ */ new Set();
	for (const message of prompt.messages) if (message.role === "tool") {
		for (const part of message.content) if (part.type === "tool-approval-response") {
			const toolCallId = approvalIdToToolCallId.get(part.approvalId);
			if (toolCallId) approvedToolCallIds.add(toolCallId);
		}
	}
	const messages = [...prompt.system != null ? typeof prompt.system === "string" ? [{
		role: "system",
		content: prompt.system
	}] : asArray(prompt.system).map((message) => ({
		role: "system",
		content: message.content,
		providerOptions: message.providerOptions
	})) : [], ...prompt.messages.map((message) => convertToLanguageModelMessage({
		message,
		downloadedAssets
	}))];
	const combinedMessages = [];
	for (const message of messages) {
		if (message.role !== "tool") {
			combinedMessages.push(message);
			continue;
		}
		const lastCombinedMessage = combinedMessages.at(-1);
		if ((lastCombinedMessage == null ? void 0 : lastCombinedMessage.role) === "tool") lastCombinedMessage.content.push(...message.content);
		else combinedMessages.push(message);
	}
	const toolCallIds = /* @__PURE__ */ new Set();
	for (const message of combinedMessages) switch (message.role) {
		case "assistant":
			for (const content of message.content) if (content.type === "tool-call" && !content.providerExecuted) toolCallIds.add(content.toolCallId);
			break;
		case "tool":
			for (const content of message.content) if (content.type === "tool-result") toolCallIds.delete(content.toolCallId);
			break;
		case "user":
		case "system":
			for (const id of approvedToolCallIds) toolCallIds.delete(id);
			if (toolCallIds.size > 0) throw new MissingToolResultsError({ toolCallIds: Array.from(toolCallIds) });
			break;
	}
	for (const id of approvedToolCallIds) toolCallIds.delete(id);
	if (toolCallIds.size > 0) throw new MissingToolResultsError({ toolCallIds: Array.from(toolCallIds) });
	return combinedMessages.filter((message) => message.role !== "tool" || message.content.length > 0);
}
function convertToLanguageModelMessage({ message, downloadedAssets }) {
	const role = message.role;
	switch (role) {
		case "system": return {
			role: "system",
			content: message.content,
			providerOptions: message.providerOptions
		};
		case "user":
			if (typeof message.content === "string") return {
				role: "user",
				content: [{
					type: "text",
					text: message.content
				}],
				providerOptions: message.providerOptions
			};
			return {
				role: "user",
				content: message.content.map((part) => convertPartToLanguageModelPart(part, downloadedAssets)).filter((part) => part.type !== "text" || part.text !== ""),
				providerOptions: message.providerOptions
			};
		case "assistant":
			if (typeof message.content === "string") return {
				role: "assistant",
				content: [{
					type: "text",
					text: message.content
				}],
				providerOptions: message.providerOptions
			};
			return {
				role: "assistant",
				content: message.content.filter((part) => part.type !== "text" || part.text !== "" || part.providerOptions != null).filter((part) => part.type !== "tool-approval-request").map((part) => {
					const providerOptions = part.providerOptions;
					switch (part.type) {
						case "file": {
							const { data, mediaType } = convertToLanguageModelV3DataContent(part.data);
							return {
								type: "file",
								data,
								filename: part.filename,
								mediaType: mediaType != null ? mediaType : part.mediaType,
								providerOptions
							};
						}
						case "reasoning": return {
							type: "reasoning",
							text: part.text,
							providerOptions
						};
						case "text": return {
							type: "text",
							text: part.text,
							providerOptions
						};
						case "tool-call": return {
							type: "tool-call",
							toolCallId: part.toolCallId,
							toolName: part.toolName,
							input: part.input,
							providerExecuted: part.providerExecuted,
							providerOptions
						};
						case "tool-result": return {
							type: "tool-result",
							toolCallId: part.toolCallId,
							toolName: part.toolName,
							output: mapToolResultOutput({
								output: part.output,
								downloadedAssets
							}),
							providerOptions
						};
					}
				}),
				providerOptions: message.providerOptions
			};
		case "tool": return {
			role: "tool",
			content: message.content.filter((part) => part.type !== "tool-approval-response" || part.providerExecuted).map((part) => {
				switch (part.type) {
					case "tool-result": return {
						type: "tool-result",
						toolCallId: part.toolCallId,
						toolName: part.toolName,
						output: mapToolResultOutput({
							output: part.output,
							downloadedAssets
						}),
						providerOptions: part.providerOptions
					};
					case "tool-approval-response": return {
						type: "tool-approval-response",
						approvalId: part.approvalId,
						approved: part.approved,
						reason: part.reason
					};
				}
			}),
			providerOptions: message.providerOptions
		};
		default: throw new InvalidMessageRoleError({ role });
	}
}
async function downloadAssets(messages, download2, supportedUrls) {
	var _a22;
	const downloadableFiles = [];
	for (const message of messages) {
		if (message.role === "user" && Array.isArray(message.content)) {
			for (const part of message.content) if (part.type === "image" || part.type === "file") downloadableFiles.push({
				data: part.type === "image" ? part.image : part.data,
				mediaType: (_a22 = part.mediaType) != null ? _a22 : part.type === "image" ? "image/*" : void 0
			});
		}
		if (message.role === "tool" || message.role === "assistant") {
			if (!Array.isArray(message.content)) continue;
			for (const part of message.content) {
				if (part.type !== "tool-result") continue;
				if (part.output.type !== "content") continue;
				for (const contentPart of part.output.value) if (contentPart.type === "image-url" || contentPart.type === "file-url") downloadableFiles.push({
					data: new URL(contentPart.url),
					mediaType: contentPart.type === "image-url" ? "image/*" : void 0
				});
			}
		}
	}
	const plannedDownloads = downloadableFiles.map((part) => {
		const mediaType = part.mediaType;
		const { data } = convertToLanguageModelV3DataContent(part.data);
		return {
			mediaType,
			data
		};
	}).filter((part) => part.data instanceof URL).map((part) => ({
		url: part.data,
		isUrlSupportedByModel: part.mediaType != null && isUrlSupported({
			url: part.data.toString(),
			mediaType: part.mediaType,
			supportedUrls
		})
	}));
	const downloadedFiles = await download2(plannedDownloads);
	return Object.fromEntries(downloadedFiles.map((file, index) => file == null ? null : [plannedDownloads[index].url.toString(), {
		data: file.data,
		mediaType: file.mediaType
	}]).filter((file) => file != null));
}
function convertPartToLanguageModelPart(part, downloadedAssets) {
	var _a22;
	if (part.type === "text") return {
		type: "text",
		text: part.text,
		providerOptions: part.providerOptions
	};
	let originalData;
	const type = part.type;
	switch (type) {
		case "image":
			originalData = part.image;
			break;
		case "file":
			originalData = part.data;
			break;
		default: throw new Error(`Unsupported part type: ${type}`);
	}
	const { data: convertedData, mediaType: convertedMediaType } = convertToLanguageModelV3DataContent(originalData);
	let mediaType = convertedMediaType != null ? convertedMediaType : part.mediaType;
	let data = convertedData;
	if (data instanceof URL) {
		const downloadedFile = downloadedAssets[data.toString()];
		if (downloadedFile) {
			data = downloadedFile.data;
			mediaType ??= downloadedFile.mediaType;
		}
	}
	switch (type) {
		case "image":
			if (data instanceof Uint8Array || typeof data === "string") mediaType = (_a22 = detectMediaType({
				data,
				signatures: imageMediaTypeSignatures
			})) != null ? _a22 : mediaType;
			return {
				type: "file",
				mediaType: mediaType != null ? mediaType : "image/*",
				filename: void 0,
				data,
				providerOptions: part.providerOptions
			};
		case "file":
			if (mediaType == null) throw new Error(`Media type is missing for file part`);
			return {
				type: "file",
				mediaType,
				filename: part.filename,
				data,
				providerOptions: part.providerOptions
			};
	}
}
function mapToolResultOutput({ output, downloadedAssets }) {
	if (output.type !== "content") return output;
	return {
		type: "content",
		value: output.value.map((item) => {
			var _a22, _b;
			if (item.type === "image-url") {
				const downloadedFile = downloadedAssets[new URL(item.url).toString()];
				if (downloadedFile) return {
					type: "image-data",
					data: convertDataContentToBase64String(downloadedFile.data),
					mediaType: (_a22 = downloadedFile.mediaType) != null ? _a22 : "image/*",
					providerOptions: item.providerOptions
				};
				return item;
			}
			if (item.type === "file-url") {
				const downloadedFile = downloadedAssets[new URL(item.url).toString()];
				if (downloadedFile) return {
					type: "file-data",
					data: convertDataContentToBase64String(downloadedFile.data),
					mediaType: (_b = downloadedFile.mediaType) != null ? _b : "application/octet-stream",
					providerOptions: item.providerOptions
				};
				return item;
			}
			if (item.type !== "media") return item;
			if (item.mediaType.startsWith("image/")) return {
				type: "image-data",
				data: item.data,
				mediaType: item.mediaType
			};
			return {
				type: "file-data",
				data: item.data,
				mediaType: item.mediaType
			};
		})
	};
}
async function createToolModelOutput({ toolCallId, input, output, tool: tool2, errorMode }) {
	if (errorMode === "text") return {
		type: "error-text",
		value: getErrorMessage(output)
	};
	else if (errorMode === "json") return {
		type: "error-json",
		value: toJSONValue(output)
	};
	if (tool2 == null ? void 0 : tool2.toModelOutput) return await tool2.toModelOutput({
		toolCallId,
		input,
		output
	});
	return typeof output === "string" ? {
		type: "text",
		value: output
	} : {
		type: "json",
		value: toJSONValue(output)
	};
}
function toJSONValue(value) {
	return value === void 0 ? null : value;
}
function prepareCallSettings({ maxOutputTokens, temperature, topP, topK, presencePenalty, frequencyPenalty, seed, stopSequences }) {
	if (maxOutputTokens != null) {
		if (!Number.isInteger(maxOutputTokens)) throw new InvalidArgumentError({
			parameter: "maxOutputTokens",
			value: maxOutputTokens,
			message: "maxOutputTokens must be an integer"
		});
		if (maxOutputTokens < 1) throw new InvalidArgumentError({
			parameter: "maxOutputTokens",
			value: maxOutputTokens,
			message: "maxOutputTokens must be >= 1"
		});
	}
	if (temperature != null) {
		if (typeof temperature !== "number") throw new InvalidArgumentError({
			parameter: "temperature",
			value: temperature,
			message: "temperature must be a number"
		});
	}
	if (topP != null) {
		if (typeof topP !== "number") throw new InvalidArgumentError({
			parameter: "topP",
			value: topP,
			message: "topP must be a number"
		});
	}
	if (topK != null) {
		if (typeof topK !== "number") throw new InvalidArgumentError({
			parameter: "topK",
			value: topK,
			message: "topK must be a number"
		});
	}
	if (presencePenalty != null) {
		if (typeof presencePenalty !== "number") throw new InvalidArgumentError({
			parameter: "presencePenalty",
			value: presencePenalty,
			message: "presencePenalty must be a number"
		});
	}
	if (frequencyPenalty != null) {
		if (typeof frequencyPenalty !== "number") throw new InvalidArgumentError({
			parameter: "frequencyPenalty",
			value: frequencyPenalty,
			message: "frequencyPenalty must be a number"
		});
	}
	if (seed != null) {
		if (!Number.isInteger(seed)) throw new InvalidArgumentError({
			parameter: "seed",
			value: seed,
			message: "seed must be an integer"
		});
	}
	return {
		maxOutputTokens,
		temperature,
		topP,
		topK,
		presencePenalty,
		frequencyPenalty,
		stopSequences,
		seed
	};
}
function isNonEmptyObject(object2) {
	return object2 != null && Object.keys(object2).length > 0;
}
async function prepareToolsAndToolChoice({ tools, toolChoice, activeTools }) {
	if (!isNonEmptyObject(tools)) return {
		tools: void 0,
		toolChoice: void 0
	};
	const filteredTools = activeTools != null ? Object.entries(tools).filter(([name22]) => activeTools.includes(name22)) : Object.entries(tools);
	const languageModelTools = [];
	for (const [name22, tool2] of filteredTools) {
		const toolType = tool2.type;
		switch (toolType) {
			case void 0:
			case "dynamic":
			case "function":
				languageModelTools.push({
					type: "function",
					name: name22,
					description: tool2.description,
					inputSchema: await asSchema(tool2.inputSchema).jsonSchema,
					...tool2.inputExamples != null ? { inputExamples: tool2.inputExamples } : {},
					providerOptions: tool2.providerOptions,
					...tool2.strict != null ? { strict: tool2.strict } : {}
				});
				break;
			case "provider":
				languageModelTools.push({
					type: "provider",
					name: name22,
					id: tool2.id,
					args: tool2.args
				});
				break;
			default: throw new Error(`Unsupported tool type: ${toolType}`);
		}
	}
	return {
		tools: languageModelTools,
		toolChoice: toolChoice == null ? { type: "auto" } : typeof toolChoice === "string" ? { type: toolChoice } : {
			type: "tool",
			toolName: toolChoice.toolName
		}
	};
}
var jsonValueSchema = lazy(() => union([
	_null(),
	string(),
	number(),
	boolean(),
	record(string(), jsonValueSchema.optional()),
	array$1(jsonValueSchema)
]));
var providerMetadataSchema = record(string(), record(string(), jsonValueSchema.optional()));
var textPartSchema = object$1({
	type: literal("text"),
	text: string(),
	providerOptions: providerMetadataSchema.optional()
});
var imagePartSchema = object$1({
	type: literal("image"),
	image: union([dataContentSchema, _instanceof(URL)]),
	mediaType: string().optional(),
	providerOptions: providerMetadataSchema.optional()
});
var filePartSchema = object$1({
	type: literal("file"),
	data: union([dataContentSchema, _instanceof(URL)]),
	filename: string().optional(),
	mediaType: string(),
	providerOptions: providerMetadataSchema.optional()
});
var reasoningPartSchema = object$1({
	type: literal("reasoning"),
	text: string(),
	providerOptions: providerMetadataSchema.optional()
});
var toolCallPartSchema = object$1({
	type: literal("tool-call"),
	toolCallId: string(),
	toolName: string(),
	input: unknown(),
	providerOptions: providerMetadataSchema.optional(),
	providerExecuted: boolean().optional()
});
var outputSchema = discriminatedUnion("type", [
	object$1({
		type: literal("text"),
		value: string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("json"),
		value: jsonValueSchema,
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("execution-denied"),
		reason: string().optional(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("error-text"),
		value: string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("error-json"),
		value: jsonValueSchema,
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("content"),
		value: array$1(union([
			object$1({
				type: literal("text"),
				text: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("media"),
				data: string(),
				mediaType: string()
			}),
			object$1({
				type: literal("file-data"),
				data: string(),
				mediaType: string(),
				filename: string().optional(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("file-url"),
				url: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("file-id"),
				fileId: union([string(), record(string(), string())]),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("image-data"),
				data: string(),
				mediaType: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("image-url"),
				url: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("image-file-id"),
				fileId: union([string(), record(string(), string())]),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("custom"),
				providerOptions: providerMetadataSchema.optional()
			})
		]))
	})
]);
var toolResultPartSchema = object$1({
	type: literal("tool-result"),
	toolCallId: string(),
	toolName: string(),
	output: outputSchema,
	providerOptions: providerMetadataSchema.optional()
});
var toolApprovalRequestSchema = object$1({
	type: literal("tool-approval-request"),
	approvalId: string(),
	toolCallId: string()
});
var toolApprovalResponseSchema = object$1({
	type: literal("tool-approval-response"),
	approvalId: string(),
	approved: boolean(),
	reason: string().optional()
});
var modelMessageSchema = union([
	object$1({
		role: literal("system"),
		content: string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		role: literal("user"),
		content: union([string(), array$1(union([
			textPartSchema,
			imagePartSchema,
			filePartSchema
		]))]),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		role: literal("assistant"),
		content: union([string(), array$1(union([
			textPartSchema,
			filePartSchema,
			reasoningPartSchema,
			toolCallPartSchema,
			toolResultPartSchema,
			toolApprovalRequestSchema
		]))]),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		role: literal("tool"),
		content: array$1(union([toolResultPartSchema, toolApprovalResponseSchema])),
		providerOptions: providerMetadataSchema.optional()
	})
]);
async function standardizePrompt({ allowSystemInMessages, system, prompt, messages }) {
	if (prompt == null && messages == null) throw new InvalidPromptError({
		prompt,
		message: "prompt or messages must be defined"
	});
	if (prompt != null && messages != null) throw new InvalidPromptError({
		prompt,
		message: "prompt and messages cannot be defined at the same time"
	});
	if (typeof system !== "string" && !asArray(system).every((message) => message.role === "system")) throw new InvalidPromptError({
		prompt,
		message: "system must be a string, SystemModelMessage, or array of SystemModelMessage"
	});
	if (prompt != null && typeof prompt === "string") messages = [{
		role: "user",
		content: prompt
	}];
	else if (prompt != null && Array.isArray(prompt)) messages = prompt;
	else if (messages == null) throw new InvalidPromptError({
		prompt,
		message: "prompt or messages must be defined"
	});
	if (messages.length === 0) throw new InvalidPromptError({
		prompt,
		message: "messages must not be empty"
	});
	if (messages.some((message) => message.role === "system")) {
		if (allowSystemInMessages === false) throw new InvalidPromptError({
			prompt,
			message: "System messages are not allowed in the prompt or messages fields. Use the system option instead."
		});
		if (allowSystemInMessages === void 0) console.warn("AI SDK Warning: System messages in the prompt or messages fields can be a security risk because they may enable prompt injection attacks. Use the system option instead when possible. Set allowSystemInMessages to true to suppress this warning, or false to throw an error.");
	}
	const validationResult = await safeValidateTypes({
		value: messages,
		schema: array$1(modelMessageSchema)
	});
	if (!validationResult.success) throw new InvalidPromptError({
		prompt,
		message: "The messages do not match the ModelMessage[] schema.",
		cause: validationResult.error
	});
	return {
		messages,
		system
	};
}
function wrapGatewayError(error) {
	if (!GatewayAuthenticationError.isInstance(error)) return error;
	const isProductionEnv = (process == null ? void 0 : "production") === "production";
	const moreInfoURL = "https://ai-sdk.dev/unauthenticated-ai-gateway";
	if (isProductionEnv) return new AISDKError({
		name: "GatewayError",
		message: `Unauthenticated. Configure AI_GATEWAY_API_KEY or use a provider module. Learn more: ${moreInfoURL}`
	});
	return Object.assign(/* @__PURE__ */ new Error(`\x1B[1m\x1B[31mUnauthenticated request to AI Gateway.\x1B[0m

To authenticate, set the \x1B[33mAI_GATEWAY_API_KEY\x1B[0m environment variable with your API key.

Alternatively, you can use a provider module instead of the AI Gateway.

Learn more: \x1B[34m${moreInfoURL}\x1B[0m

`), { name: "GatewayAuthenticationError" });
}
function assembleOperationName({ operationId, telemetry }) {
	return {
		"operation.name": `${operationId}${(telemetry == null ? void 0 : telemetry.functionId) != null ? ` ${telemetry.functionId}` : ""}`,
		"resource.name": telemetry == null ? void 0 : telemetry.functionId,
		"ai.operationId": operationId,
		"ai.telemetry.functionId": telemetry == null ? void 0 : telemetry.functionId
	};
}
function getBaseTelemetryAttributes({ model, settings, telemetry, headers }) {
	var _a22;
	return {
		"ai.model.provider": model.provider,
		"ai.model.id": model.modelId,
		...Object.entries(settings).reduce((attributes, [key, value]) => {
			if (key === "timeout") {
				const totalTimeoutMs = getTotalTimeoutMs(value);
				if (totalTimeoutMs != null) attributes[`ai.settings.${key}`] = totalTimeoutMs;
			} else attributes[`ai.settings.${key}`] = value;
			return attributes;
		}, {}),
		...Object.entries((_a22 = telemetry == null ? void 0 : telemetry.metadata) != null ? _a22 : {}).reduce((attributes, [key, value]) => {
			attributes[`ai.telemetry.metadata.${key}`] = value;
			return attributes;
		}, {}),
		...Object.entries(headers != null ? headers : {}).reduce((attributes, [key, value]) => {
			if (value !== void 0) attributes[`ai.request.headers.${key}`] = value;
			return attributes;
		}, {})
	};
}
var noopTracer = {
	startSpan() {
		return noopSpan;
	},
	startActiveSpan(name22, arg1, arg2, arg3) {
		if (typeof arg1 === "function") return arg1(noopSpan);
		if (typeof arg2 === "function") return arg2(noopSpan);
		if (typeof arg3 === "function") return arg3(noopSpan);
	}
};
var noopSpan = {
	spanContext() {
		return noopSpanContext;
	},
	setAttribute() {
		return this;
	},
	setAttributes() {
		return this;
	},
	addEvent() {
		return this;
	},
	addLink() {
		return this;
	},
	addLinks() {
		return this;
	},
	setStatus() {
		return this;
	},
	updateName() {
		return this;
	},
	end() {
		return this;
	},
	isRecording() {
		return false;
	},
	recordException() {
		return this;
	}
};
var noopSpanContext = {
	traceId: "",
	spanId: "",
	traceFlags: 0
};
function getTracer({ isEnabled = false, tracer } = {}) {
	if (!isEnabled) return noopTracer;
	if (tracer) return tracer;
	return import_src.trace.getTracer("ai");
}
async function recordSpan({ name: name22, tracer, attributes, fn, endWhenDone = true }) {
	return tracer.startActiveSpan(name22, { attributes: await attributes }, async (span) => {
		const ctx = import_src.context.active();
		try {
			const result = await import_src.context.with(ctx, () => fn(span));
			if (endWhenDone) span.end();
			return result;
		} catch (error) {
			try {
				recordErrorOnSpan(span, error);
			} finally {
				span.end();
			}
			throw error;
		}
	});
}
function recordErrorOnSpan(span, error) {
	if (error instanceof Error) {
		span.recordException({
			name: error.name,
			message: error.message,
			stack: error.stack
		});
		span.setStatus({
			code: import_src.SpanStatusCode.ERROR,
			message: error.message
		});
	} else span.setStatus({ code: import_src.SpanStatusCode.ERROR });
}
async function selectTelemetryAttributes({ telemetry, attributes }) {
	if ((telemetry == null ? void 0 : telemetry.isEnabled) !== true) return {};
	const resultAttributes = {};
	for (const [key, value] of Object.entries(attributes)) {
		if (value == null) continue;
		if (typeof value === "object" && "input" in value && typeof value.input === "function") {
			if ((telemetry == null ? void 0 : telemetry.recordInputs) === false) continue;
			const result = await value.input();
			if (result != null) resultAttributes[key] = result;
			continue;
		}
		if (typeof value === "object" && "output" in value && typeof value.output === "function") {
			if ((telemetry == null ? void 0 : telemetry.recordOutputs) === false) continue;
			const result = await value.output();
			if (result != null) resultAttributes[key] = result;
			continue;
		}
		resultAttributes[key] = value;
	}
	return resultAttributes;
}
function stringifyForTelemetry(prompt) {
	return JSON.stringify(prompt.map((message) => ({
		...message,
		content: typeof message.content === "string" ? message.content : message.content.map((part) => part.type === "file" ? {
			...part,
			data: part.data instanceof Uint8Array ? convertDataContentToBase64String(part.data) : part.data
		} : part)
	})));
}
function getGlobalTelemetryIntegrations() {
	var _a22;
	return (_a22 = globalThis.AI_SDK_TELEMETRY_INTEGRATIONS) != null ? _a22 : [];
}
function getGlobalTelemetryIntegration() {
	const globalIntegrations = getGlobalTelemetryIntegrations();
	return (integrations) => {
		const localIntegrations = asArray(integrations);
		const allIntegrations = [...globalIntegrations, ...localIntegrations];
		function createTelemetryComposite(getListenerFromIntegration) {
			const listeners = allIntegrations.map(getListenerFromIntegration).filter(Boolean);
			return async (event) => {
				for (const listener of listeners) try {
					await listener(event);
				} catch (_ignored) {}
			};
		}
		return {
			onStart: createTelemetryComposite((integration) => integration.onStart),
			onStepStart: createTelemetryComposite((integration) => integration.onStepStart),
			onToolCallStart: createTelemetryComposite((integration) => integration.onToolCallStart),
			onToolCallFinish: createTelemetryComposite((integration) => integration.onToolCallFinish),
			onStepFinish: createTelemetryComposite((integration) => integration.onStepFinish),
			onFinish: createTelemetryComposite((integration) => integration.onFinish)
		};
	};
}
function asLanguageModelUsage(usage) {
	return {
		inputTokens: usage.inputTokens.total,
		inputTokenDetails: {
			noCacheTokens: usage.inputTokens.noCache,
			cacheReadTokens: usage.inputTokens.cacheRead,
			cacheWriteTokens: usage.inputTokens.cacheWrite
		},
		outputTokens: usage.outputTokens.total,
		outputTokenDetails: {
			textTokens: usage.outputTokens.text,
			reasoningTokens: usage.outputTokens.reasoning
		},
		totalTokens: addTokenCounts(usage.inputTokens.total, usage.outputTokens.total),
		raw: usage.raw,
		reasoningTokens: usage.outputTokens.reasoning,
		cachedInputTokens: usage.inputTokens.cacheRead
	};
}
function createNullLanguageModelUsage() {
	return {
		inputTokens: void 0,
		inputTokenDetails: {
			noCacheTokens: void 0,
			cacheReadTokens: void 0,
			cacheWriteTokens: void 0
		},
		outputTokens: void 0,
		outputTokenDetails: {
			textTokens: void 0,
			reasoningTokens: void 0
		},
		totalTokens: void 0,
		raw: void 0
	};
}
function addLanguageModelUsage(usage1, usage2) {
	var _a22, _b, _c, _d, _e, _f, _g, _h, _i, _j;
	return {
		inputTokens: addTokenCounts(usage1.inputTokens, usage2.inputTokens),
		inputTokenDetails: {
			noCacheTokens: addTokenCounts((_a22 = usage1.inputTokenDetails) == null ? void 0 : _a22.noCacheTokens, (_b = usage2.inputTokenDetails) == null ? void 0 : _b.noCacheTokens),
			cacheReadTokens: addTokenCounts((_c = usage1.inputTokenDetails) == null ? void 0 : _c.cacheReadTokens, (_d = usage2.inputTokenDetails) == null ? void 0 : _d.cacheReadTokens),
			cacheWriteTokens: addTokenCounts((_e = usage1.inputTokenDetails) == null ? void 0 : _e.cacheWriteTokens, (_f = usage2.inputTokenDetails) == null ? void 0 : _f.cacheWriteTokens)
		},
		outputTokens: addTokenCounts(usage1.outputTokens, usage2.outputTokens),
		outputTokenDetails: {
			textTokens: addTokenCounts((_g = usage1.outputTokenDetails) == null ? void 0 : _g.textTokens, (_h = usage2.outputTokenDetails) == null ? void 0 : _h.textTokens),
			reasoningTokens: addTokenCounts((_i = usage1.outputTokenDetails) == null ? void 0 : _i.reasoningTokens, (_j = usage2.outputTokenDetails) == null ? void 0 : _j.reasoningTokens)
		},
		totalTokens: addTokenCounts(usage1.totalTokens, usage2.totalTokens),
		reasoningTokens: addTokenCounts(usage1.reasoningTokens, usage2.reasoningTokens),
		cachedInputTokens: addTokenCounts(usage1.cachedInputTokens, usage2.cachedInputTokens)
	};
}
function addTokenCounts(tokenCount1, tokenCount2) {
	return tokenCount1 == null && tokenCount2 == null ? void 0 : (tokenCount1 != null ? tokenCount1 : 0) + (tokenCount2 != null ? tokenCount2 : 0);
}
function mergeObjects(base, overrides) {
	if (base === void 0 && overrides === void 0) return;
	if (base === void 0) return overrides;
	if (overrides === void 0) return base;
	const result = { ...base };
	for (const key in overrides) {
		if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
		if (Object.prototype.hasOwnProperty.call(overrides, key)) {
			const overridesValue = overrides[key];
			if (overridesValue === void 0) continue;
			const baseValue = key in base ? base[key] : void 0;
			const isSourceObject = overridesValue !== null && typeof overridesValue === "object" && !Array.isArray(overridesValue) && !(overridesValue instanceof Date) && !(overridesValue instanceof RegExp);
			const isTargetObject = baseValue !== null && baseValue !== void 0 && typeof baseValue === "object" && !Array.isArray(baseValue) && !(baseValue instanceof Date) && !(baseValue instanceof RegExp);
			if (isSourceObject && isTargetObject) result[key] = mergeObjects(baseValue, overridesValue);
			else result[key] = overridesValue;
		}
	}
	return result;
}
function getRetryDelayInMs({ error, exponentialBackoffDelay }) {
	const headers = APICallError.isInstance(error) ? error.responseHeaders : APICallError.isInstance(error.cause) ? error.cause.responseHeaders : void 0;
	if (!headers) return exponentialBackoffDelay;
	let ms;
	const retryAfterMs = headers["retry-after-ms"];
	if (retryAfterMs) {
		const timeoutMs = parseFloat(retryAfterMs);
		if (!Number.isNaN(timeoutMs)) ms = timeoutMs;
	}
	const retryAfter = headers["retry-after"];
	if (retryAfter && ms === void 0) {
		const timeoutSeconds = parseFloat(retryAfter);
		if (!Number.isNaN(timeoutSeconds)) ms = timeoutSeconds * 1e3;
		else ms = Date.parse(retryAfter) - Date.now();
	}
	if (ms != null && !Number.isNaN(ms) && 0 <= ms && (ms < 60 * 1e3 || ms < exponentialBackoffDelay)) return ms;
	return exponentialBackoffDelay;
}
var retryWithExponentialBackoffRespectingRetryHeaders = ({ maxRetries = 2, initialDelayInMs = 2e3, backoffFactor = 2, abortSignal } = {}) => async (f) => _retryWithExponentialBackoff(f, {
	maxRetries,
	delayInMs: initialDelayInMs,
	backoffFactor,
	abortSignal
});
async function _retryWithExponentialBackoff(f, { maxRetries, delayInMs, backoffFactor, abortSignal }, errors = []) {
	try {
		return await f();
	} catch (error) {
		if (isAbortError(error)) throw error;
		if (maxRetries === 0) throw error;
		const errorMessage = getErrorMessage$1(error);
		const newErrors = [...errors, error];
		const tryNumber = newErrors.length;
		if (tryNumber > maxRetries) throw new RetryError({
			message: `Failed after ${tryNumber} attempts. Last error: ${errorMessage}`,
			reason: "maxRetriesExceeded",
			errors: newErrors
		});
		if (error instanceof Error && (APICallError.isInstance(error) && error.isRetryable === true || GatewayError.isInstance(error) && error.isRetryable === true) && tryNumber <= maxRetries) {
			await delay(getRetryDelayInMs({
				error,
				exponentialBackoffDelay: delayInMs
			}), { abortSignal });
			return _retryWithExponentialBackoff(f, {
				maxRetries,
				delayInMs: backoffFactor * delayInMs,
				backoffFactor,
				abortSignal
			}, newErrors);
		}
		if (tryNumber === 1) throw error;
		throw new RetryError({
			message: `Failed after ${tryNumber} attempts with non-retryable error: '${errorMessage}'`,
			reason: "errorNotRetryable",
			errors: newErrors
		});
	}
}
function prepareRetries({ maxRetries, abortSignal }) {
	if (maxRetries != null) {
		if (!Number.isInteger(maxRetries)) throw new InvalidArgumentError({
			parameter: "maxRetries",
			value: maxRetries,
			message: "maxRetries must be an integer"
		});
		if (maxRetries < 0) throw new InvalidArgumentError({
			parameter: "maxRetries",
			value: maxRetries,
			message: "maxRetries must be >= 0"
		});
	}
	const maxRetriesResult = maxRetries != null ? maxRetries : 2;
	return {
		maxRetries: maxRetriesResult,
		retry: retryWithExponentialBackoffRespectingRetryHeaders({
			maxRetries: maxRetriesResult,
			abortSignal
		})
	};
}
function collectToolApprovals({ messages }) {
	const lastMessage = messages.at(-1);
	if ((lastMessage == null ? void 0 : lastMessage.role) != "tool") return {
		approvedToolApprovals: [],
		deniedToolApprovals: []
	};
	const toolCallsByToolCallId = {};
	for (const message of messages) if (message.role === "assistant" && typeof message.content !== "string") {
		const content = message.content;
		for (const part of content) if (part.type === "tool-call") toolCallsByToolCallId[part.toolCallId] = part;
	}
	const toolApprovalRequestsByApprovalId = {};
	for (const message of messages) if (message.role === "assistant" && typeof message.content !== "string") {
		const content = message.content;
		for (const part of content) if (part.type === "tool-approval-request") toolApprovalRequestsByApprovalId[part.approvalId] = part;
	}
	const toolResults = {};
	for (const part of lastMessage.content) if (part.type === "tool-result") toolResults[part.toolCallId] = part;
	const approvedToolApprovals = [];
	const deniedToolApprovals = [];
	const approvalResponses = lastMessage.content.filter((part) => part.type === "tool-approval-response");
	for (const approvalResponse of approvalResponses) {
		const approvalRequest = toolApprovalRequestsByApprovalId[approvalResponse.approvalId];
		if (approvalRequest == null) throw new InvalidToolApprovalError({ approvalId: approvalResponse.approvalId });
		if (toolResults[approvalRequest.toolCallId] != null) continue;
		const toolCall = toolCallsByToolCallId[approvalRequest.toolCallId];
		if (toolCall == null) throw new ToolCallNotFoundForApprovalError({
			toolCallId: approvalRequest.toolCallId,
			approvalId: approvalRequest.approvalId
		});
		const approval = {
			approvalRequest,
			approvalResponse,
			toolCall
		};
		if (approvalResponse.approved) approvedToolApprovals.push(approval);
		else deniedToolApprovals.push(approval);
	}
	return {
		approvedToolApprovals,
		deniedToolApprovals
	};
}
function now() {
	var _a22, _b;
	return (_b = (_a22 = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : _a22.now()) != null ? _b : Date.now();
}
async function executeToolCall({ toolCall, tools, tracer, telemetry, messages, abortSignal, experimental_context, stepNumber, model, onPreliminaryToolResult, onToolCallStart, onToolCallFinish }) {
	const { toolName, toolCallId, input } = toolCall;
	const tool2 = tools == null ? void 0 : tools[toolName];
	if ((tool2 == null ? void 0 : tool2.execute) == null) return;
	const baseCallbackEvent = {
		stepNumber,
		model,
		toolCall,
		messages,
		abortSignal,
		functionId: telemetry == null ? void 0 : telemetry.functionId,
		metadata: telemetry == null ? void 0 : telemetry.metadata,
		experimental_context
	};
	return recordSpan({
		name: "ai.toolCall",
		attributes: selectTelemetryAttributes({
			telemetry,
			attributes: {
				...assembleOperationName({
					operationId: "ai.toolCall",
					telemetry
				}),
				"ai.toolCall.name": toolName,
				"ai.toolCall.id": toolCallId,
				"ai.toolCall.args": { output: () => JSON.stringify(input) }
			}
		}),
		tracer,
		fn: async (span) => {
			let output;
			await notify({
				event: baseCallbackEvent,
				callbacks: onToolCallStart
			});
			const startTime = now();
			try {
				const stream = executeTool({
					execute: tool2.execute.bind(tool2),
					input,
					options: {
						toolCallId,
						messages,
						abortSignal,
						experimental_context
					}
				});
				for await (const part of stream) if (part.type === "preliminary") onPreliminaryToolResult?.({
					...toolCall,
					type: "tool-result",
					output: part.output,
					preliminary: true
				});
				else output = part.output;
			} catch (error) {
				const durationMs2 = now() - startTime;
				await notify({
					event: {
						...baseCallbackEvent,
						success: false,
						error,
						durationMs: durationMs2
					},
					callbacks: onToolCallFinish
				});
				recordErrorOnSpan(span, error);
				return {
					type: "tool-error",
					toolCallId,
					toolName,
					input,
					error,
					dynamic: tool2.type === "dynamic",
					...toolCall.providerMetadata != null ? { providerMetadata: toolCall.providerMetadata } : {},
					...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
				};
			}
			const durationMs = now() - startTime;
			await notify({
				event: {
					...baseCallbackEvent,
					success: true,
					output,
					durationMs
				},
				callbacks: onToolCallFinish
			});
			try {
				span.setAttributes(await selectTelemetryAttributes({
					telemetry,
					attributes: { "ai.toolCall.result": { output: () => JSON.stringify(output) } }
				}));
			} catch (ignored) {}
			return {
				type: "tool-result",
				toolCallId,
				toolName,
				input,
				output,
				dynamic: tool2.type === "dynamic",
				...toolCall.providerMetadata != null ? { providerMetadata: toolCall.providerMetadata } : {},
				...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
			};
		}
	});
}
function extractReasoningContent(content) {
	const parts = content.filter((content2) => content2.type === "reasoning");
	return parts.length === 0 ? void 0 : parts.map((content2) => content2.text).join("\n");
}
function extractTextContent(content) {
	const parts = content.filter((content2) => content2.type === "text");
	if (parts.length === 0) return;
	return parts.map((content2) => content2.text).join("");
}
var DefaultGeneratedFile = class {
	constructor({ data, mediaType }) {
		const isUint8Array = data instanceof Uint8Array;
		this.base64Data = isUint8Array ? void 0 : data;
		this.uint8ArrayData = isUint8Array ? data : void 0;
		this.mediaType = mediaType;
	}
	get base64() {
		if (this.base64Data == null) this.base64Data = convertUint8ArrayToBase64(this.uint8ArrayData);
		return this.base64Data;
	}
	get uint8Array() {
		if (this.uint8ArrayData == null) this.uint8ArrayData = convertBase64ToUint8Array(this.base64Data);
		return this.uint8ArrayData;
	}
};
var DefaultGeneratedFileWithType = class extends DefaultGeneratedFile {
	constructor(options) {
		super(options);
		this.type = "file";
	}
};
async function isApprovalNeeded({ tool: tool2, toolCall, messages, experimental_context }) {
	if (tool2.needsApproval == null) return false;
	if (typeof tool2.needsApproval === "boolean") return tool2.needsApproval;
	return await tool2.needsApproval(toolCall.input, {
		toolCallId: toolCall.toolCallId,
		messages,
		experimental_context
	});
}
var encoder = new TextEncoder();
function canonicalJSON(value) {
	if (value === null || value === void 0) return JSON.stringify(value);
	if (typeof value !== "object") return JSON.stringify(value);
	if (Array.isArray(value)) return `[${value.map(canonicalJSON).join(",")}]`;
	return `{${Object.keys(value).sort().map((k) => `${JSON.stringify(k)}:${canonicalJSON(value[k])}`).join(",")}}`;
}
function toBase64url(bytes) {
	return convertUint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function fromBase64url(str) {
	return convertBase64ToUint8Array(str);
}
async function importKey(secret) {
	const keyData = typeof secret === "string" ? encoder.encode(secret) : secret;
	return crypto.subtle.importKey("raw", keyData, {
		name: "HMAC",
		hash: "SHA-256"
	}, false, ["sign", "verify"]);
}
async function hashInput(input) {
	const canonical = canonicalJSON(input);
	const digest = await crypto.subtle.digest("SHA-256", encoder.encode(canonical));
	return toBase64url(new Uint8Array(digest));
}
function buildPayload(approvalId, toolCallId, toolName, inputDigest) {
	return encoder.encode(`${approvalId}
${toolCallId}
${toolName}
${inputDigest}`);
}
async function signToolApproval({ secret, approvalId, toolCallId, toolName, input }) {
	const key = await importKey(secret);
	const payload = buildPayload(approvalId, toolCallId, toolName, await hashInput(input));
	const sig = await crypto.subtle.sign("HMAC", key, payload);
	return toBase64url(new Uint8Array(sig));
}
async function verifyToolApprovalSignature({ secret, signature, approvalId, toolCallId, toolName, input }) {
	const key = await importKey(secret);
	const payload = buildPayload(approvalId, toolCallId, toolName, await hashInput(input));
	const sigBytes = fromBase64url(signature);
	return crypto.subtle.verify("HMAC", key, sigBytes, payload);
}
async function maybeSignApproval({ secret, approvalId, toolCallId, toolName, input }) {
	if (secret == null) return void 0;
	return signToolApproval({
		secret,
		approvalId,
		toolCallId,
		toolName,
		input
	});
}
async function validateApprovedToolApprovals({ approvedToolApprovals, tools, messages, experimental_context, toolApprovalSecret }) {
	var _a22;
	const approved = [];
	const denied = [];
	for (const approval of approvedToolApprovals) {
		const { toolCall, approvalRequest } = approval;
		const tool2 = tools == null ? void 0 : tools[toolCall.toolName];
		if (toolApprovalSecret != null) {
			if (approvalRequest.signature == null) throw new InvalidToolApprovalSignatureError({
				approvalId: approvalRequest.approvalId,
				toolCallId: toolCall.toolCallId,
				reason: "missing signature"
			});
			if (!await verifyToolApprovalSignature({
				secret: toolApprovalSecret,
				signature: approvalRequest.signature,
				approvalId: approvalRequest.approvalId,
				toolCallId: toolCall.toolCallId,
				toolName: toolCall.toolName,
				input: toolCall.input
			})) throw new InvalidToolApprovalSignatureError({
				approvalId: approvalRequest.approvalId,
				toolCallId: toolCall.toolCallId,
				reason: "invalid signature"
			});
		}
		if (tool2 != null && typeof tool2.execute === "function" && tool2.inputSchema != null) {
			const validation = await safeValidateTypes({
				value: toolCall.input,
				schema: asSchema(tool2.inputSchema)
			});
			if (!validation.success) throw new InvalidToolInputError({
				toolName: toolCall.toolName,
				toolInput: JSON.stringify(toolCall.input),
				cause: validation.error
			});
		}
		if (tool2 != null && await isApprovalNeeded({
			tool: tool2,
			toolCall,
			messages,
			experimental_context
		})) approved.push(approval);
		else denied.push({
			...approval,
			approvalResponse: {
				...approval.approvalResponse,
				approved: false,
				reason: (_a22 = approval.approvalResponse.reason) != null ? _a22 : `Tool "${toolCall.toolName}" does not require approval`
			}
		});
	}
	return {
		approvedToolApprovals: approved,
		deniedToolApprovals: denied
	};
}
__export({}, {
	array: () => array,
	choice: () => choice,
	json: () => json,
	object: () => object,
	text: () => text
});
function fixJson(input) {
	const stack = ["ROOT"];
	let lastValidIndex = -1;
	let literalStart = null;
	function processValueStart(char, i, swapState) {
		switch (char) {
			case "\"":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_STRING");
				break;
			case "f":
			case "t":
			case "n":
				lastValidIndex = i;
				literalStart = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_LITERAL");
				break;
			case "-":
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "{":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_OBJECT_START");
				break;
			case "[":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_ARRAY_START");
				break;
		}
	}
	function processAfterObjectValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_OBJECT_AFTER_COMMA");
				break;
			case "}":
				lastValidIndex = i;
				stack.pop();
				break;
		}
	}
	function processAfterArrayValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_ARRAY_AFTER_COMMA");
				break;
			case "]":
				lastValidIndex = i;
				stack.pop();
				break;
		}
	}
	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		switch (stack[stack.length - 1]) {
			case "ROOT":
				processValueStart(char, i, "FINISH");
				break;
			case "INSIDE_OBJECT_START":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
						break;
					case "}":
						lastValidIndex = i;
						stack.pop();
						break;
				}
				break;
			case "INSIDE_OBJECT_AFTER_COMMA":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
						break;
				}
				break;
			case "INSIDE_OBJECT_KEY":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_AFTER_KEY");
						break;
				}
				break;
			case "INSIDE_OBJECT_AFTER_KEY":
				switch (char) {
					case ":":
						stack.pop();
						stack.push("INSIDE_OBJECT_BEFORE_VALUE");
						break;
				}
				break;
			case "INSIDE_OBJECT_BEFORE_VALUE":
				processValueStart(char, i, "INSIDE_OBJECT_AFTER_VALUE");
				break;
			case "INSIDE_OBJECT_AFTER_VALUE":
				processAfterObjectValue(char, i);
				break;
			case "INSIDE_STRING":
				switch (char) {
					case "\"":
						stack.pop();
						lastValidIndex = i;
						break;
					case "\\":
						stack.push("INSIDE_STRING_ESCAPE");
						break;
					default: lastValidIndex = i;
				}
				break;
			case "INSIDE_ARRAY_START":
				switch (char) {
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default:
						lastValidIndex = i;
						processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
						break;
				}
				break;
			case "INSIDE_ARRAY_AFTER_VALUE":
				switch (char) {
					case ",":
						stack.pop();
						stack.push("INSIDE_ARRAY_AFTER_COMMA");
						break;
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default:
						lastValidIndex = i;
						break;
				}
				break;
			case "INSIDE_ARRAY_AFTER_COMMA":
				processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
				break;
			case "INSIDE_STRING_ESCAPE":
				stack.pop();
				lastValidIndex = i;
				break;
			case "INSIDE_NUMBER":
				switch (char) {
					case "0":
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
						lastValidIndex = i;
						break;
					case "e":
					case "E":
					case "-":
					case ".": break;
					case ",":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "}":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "]":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						break;
					default:
						stack.pop();
						break;
				}
				break;
			case "INSIDE_LITERAL": {
				const partialLiteral = input.substring(literalStart, i + 1);
				if (!"false".startsWith(partialLiteral) && !"true".startsWith(partialLiteral) && !"null".startsWith(partialLiteral)) {
					stack.pop();
					if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
					else if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
				} else lastValidIndex = i;
				break;
			}
		}
	}
	let result = input.slice(0, lastValidIndex + 1);
	for (let i = stack.length - 1; i >= 0; i--) switch (stack[i]) {
		case "INSIDE_STRING":
			result += "\"";
			break;
		case "INSIDE_OBJECT_KEY":
		case "INSIDE_OBJECT_AFTER_KEY":
		case "INSIDE_OBJECT_AFTER_COMMA":
		case "INSIDE_OBJECT_START":
		case "INSIDE_OBJECT_BEFORE_VALUE":
		case "INSIDE_OBJECT_AFTER_VALUE":
			result += "}";
			break;
		case "INSIDE_ARRAY_START":
		case "INSIDE_ARRAY_AFTER_COMMA":
		case "INSIDE_ARRAY_AFTER_VALUE":
			result += "]";
			break;
		case "INSIDE_LITERAL": {
			const partialLiteral = input.substring(literalStart, input.length);
			if ("true".startsWith(partialLiteral)) result += "true".slice(partialLiteral.length);
			else if ("false".startsWith(partialLiteral)) result += "false".slice(partialLiteral.length);
			else if ("null".startsWith(partialLiteral)) result += "null".slice(partialLiteral.length);
		}
	}
	return result;
}
async function parsePartialJson(jsonText) {
	if (jsonText === void 0) return {
		value: void 0,
		state: "undefined-input"
	};
	let result = await safeParseJSON({ text: jsonText });
	if (result.success) return {
		value: result.value,
		state: "successful-parse"
	};
	result = await safeParseJSON({ text: fixJson(jsonText) });
	if (result.success) return {
		value: result.value,
		state: "repaired-parse"
	};
	return {
		value: void 0,
		state: "failed-parse"
	};
}
var text = () => ({
	name: "text",
	responseFormat: Promise.resolve({ type: "text" }),
	async parseCompleteOutput({ text: text2 }) {
		return text2;
	},
	async parsePartialOutput({ text: text2 }) {
		return { partial: text2 };
	},
	createElementStreamTransform() {}
});
var object = ({ schema: inputSchema, name: name22, description }) => {
	const schema = asSchema(inputSchema);
	return {
		name: "object",
		responseFormat: resolve(schema.jsonSchema).then((jsonSchema2) => ({
			type: "json",
			schema: jsonSchema2,
			...name22 != null && { name: name22 },
			...description != null && { description }
		})),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			const validationResult = await safeValidateTypes({
				value: parseResult.value,
				schema
			});
			if (!validationResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: validationResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			return validationResult.value;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": return { partial: result.value };
			}
		},
		createElementStreamTransform() {}
	};
};
var array = ({ element: inputElementSchema, name: name22, description }) => {
	const elementSchema = asSchema(inputElementSchema);
	return {
		name: "array",
		responseFormat: resolve(elementSchema.jsonSchema).then((jsonSchema2) => {
			const { $schema, ...itemSchema } = jsonSchema2;
			return {
				type: "json",
				schema: {
					$schema: "http://json-schema.org/draft-07/schema#",
					type: "object",
					properties: { elements: {
						type: "array",
						items: itemSchema
					} },
					required: ["elements"],
					additionalProperties: false
				},
				...name22 != null && { name: name22 },
				...description != null && { description }
			};
		}),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			const outerValue = parseResult.value;
			if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: new TypeValidationError({
					value: outerValue,
					cause: "response must be an object with an elements array"
				}),
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			for (const element of outerValue.elements) {
				const validationResult = await safeValidateTypes({
					value: element,
					schema: elementSchema
				});
				if (!validationResult.success) throw new NoObjectGeneratedError({
					message: "No object generated: response did not match schema.",
					cause: validationResult.error,
					text: text2,
					response: context2.response,
					usage: context2.usage,
					finishReason: context2.finishReason
				});
			}
			return outerValue.elements;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": {
					const outerValue = result.value;
					if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) return;
					const rawElements = result.state === "repaired-parse" && outerValue.elements.length > 0 ? outerValue.elements.slice(0, -1) : outerValue.elements;
					const parsedElements = [];
					for (const rawElement of rawElements) {
						const validationResult = await safeValidateTypes({
							value: rawElement,
							schema: elementSchema
						});
						if (validationResult.success) parsedElements.push(validationResult.value);
					}
					return { partial: parsedElements };
				}
			}
		},
		createElementStreamTransform() {
			let publishedElements = 0;
			return new TransformStream({ transform({ partialOutput }, controller) {
				if (partialOutput != null) for (; publishedElements < partialOutput.length; publishedElements++) controller.enqueue(partialOutput[publishedElements]);
			} });
		}
	};
};
var choice = ({ options: choiceOptions, name: name22, description }) => {
	return {
		name: "choice",
		responseFormat: Promise.resolve({
			type: "json",
			schema: {
				$schema: "http://json-schema.org/draft-07/schema#",
				type: "object",
				properties: { result: {
					type: "string",
					enum: choiceOptions
				} },
				required: ["result"],
				additionalProperties: false
			},
			...name22 != null && { name: name22 },
			...description != null && { description }
		}),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			const outerValue = parseResult.value;
			if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string" || !choiceOptions.includes(outerValue.result)) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: new TypeValidationError({
					value: outerValue,
					cause: "response must be an object that contains a choice value."
				}),
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			return outerValue.result;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": {
					const outerValue = result.value;
					if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string") return;
					const potentialMatches = choiceOptions.filter((choiceOption) => choiceOption.startsWith(outerValue.result));
					if (result.state === "successful-parse") return potentialMatches.includes(outerValue.result) ? { partial: outerValue.result } : void 0;
					else return potentialMatches.length === 1 ? { partial: potentialMatches[0] } : void 0;
				}
			}
		},
		createElementStreamTransform() {}
	};
};
var json = ({ name: name22, description } = {}) => {
	return {
		name: "json",
		responseFormat: Promise.resolve({
			type: "json",
			...name22 != null && { name: name22 },
			...description != null && { description }
		}),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			return parseResult.value;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": return result.value === void 0 ? void 0 : { partial: result.value };
			}
		},
		createElementStreamTransform() {}
	};
};
async function parseToolCall({ toolCall, tools, repairToolCall, system, messages }) {
	try {
		if (tools == null) {
			if (toolCall.providerExecuted && toolCall.dynamic) return await parseProviderExecutedDynamicToolCall(toolCall);
			throw new NoSuchToolError({ toolName: toolCall.toolName });
		}
		try {
			return await doParseToolCall({
				toolCall,
				tools
			});
		} catch (error) {
			if (repairToolCall == null || !(NoSuchToolError.isInstance(error) || InvalidToolInputError.isInstance(error))) throw error;
			let repairedToolCall = null;
			try {
				repairedToolCall = await repairToolCall({
					toolCall,
					tools,
					inputSchema: async ({ toolName }) => {
						const { inputSchema } = tools[toolName];
						return await asSchema(inputSchema).jsonSchema;
					},
					system,
					messages,
					error
				});
			} catch (repairError) {
				throw new ToolCallRepairError({
					cause: repairError,
					originalError: error
				});
			}
			if (repairedToolCall == null) throw error;
			return await doParseToolCall({
				toolCall: repairedToolCall,
				tools
			});
		}
	} catch (error) {
		const parsedInput = await safeParseJSON({ text: toolCall.input });
		const input = parsedInput.success ? parsedInput.value : toolCall.input;
		const tool2 = tools == null ? void 0 : tools[toolCall.toolName];
		return {
			type: "tool-call",
			toolCallId: toolCall.toolCallId,
			toolName: toolCall.toolName,
			input,
			dynamic: true,
			invalid: true,
			error,
			title: tool2 == null ? void 0 : tool2.title,
			providerExecuted: toolCall.providerExecuted,
			providerMetadata: toolCall.providerMetadata,
			...(tool2 == null ? void 0 : tool2.metadata) != null ? { toolMetadata: tool2.metadata } : {}
		};
	}
}
async function parseProviderExecutedDynamicToolCall(toolCall) {
	const parseResult = toolCall.input.trim() === "" ? {
		success: true,
		value: {}
	} : await safeParseJSON({ text: toolCall.input });
	if (parseResult.success === false) throw new InvalidToolInputError({
		toolName: toolCall.toolName,
		toolInput: toolCall.input,
		cause: parseResult.error
	});
	return {
		type: "tool-call",
		toolCallId: toolCall.toolCallId,
		toolName: toolCall.toolName,
		input: parseResult.value,
		providerExecuted: true,
		dynamic: true,
		providerMetadata: toolCall.providerMetadata
	};
}
async function doParseToolCall({ toolCall, tools }) {
	const toolName = toolCall.toolName;
	const tool2 = tools[toolName];
	if (tool2 == null) {
		if (toolCall.providerExecuted && toolCall.dynamic) return await parseProviderExecutedDynamicToolCall(toolCall);
		throw new NoSuchToolError({
			toolName: toolCall.toolName,
			availableTools: Object.keys(tools)
		});
	}
	const schema = asSchema(tool2.inputSchema);
	const parseResult = toolCall.input.trim() === "" ? await safeValidateTypes({
		value: {},
		schema
	}) : await safeParseJSON({
		text: toolCall.input,
		schema
	});
	if (parseResult.success === false) throw new InvalidToolInputError({
		toolName,
		toolInput: toolCall.input,
		cause: parseResult.error
	});
	return tool2.type === "dynamic" ? {
		type: "tool-call",
		toolCallId: toolCall.toolCallId,
		toolName: toolCall.toolName,
		input: parseResult.value,
		providerExecuted: toolCall.providerExecuted,
		providerMetadata: toolCall.providerMetadata,
		...tool2.metadata != null ? { toolMetadata: tool2.metadata } : {},
		dynamic: true,
		title: tool2.title
	} : {
		type: "tool-call",
		toolCallId: toolCall.toolCallId,
		toolName,
		input: parseResult.value,
		providerExecuted: toolCall.providerExecuted,
		providerMetadata: toolCall.providerMetadata,
		...tool2.metadata != null ? { toolMetadata: tool2.metadata } : {},
		title: tool2.title
	};
}
var DefaultStepResult = class {
	constructor({ stepNumber, model, functionId, metadata, experimental_context, content, finishReason, rawFinishReason, usage, warnings, request, response, providerMetadata }) {
		this.stepNumber = stepNumber;
		this.model = model;
		this.functionId = functionId;
		this.metadata = metadata;
		this.experimental_context = experimental_context;
		this.content = content;
		this.finishReason = finishReason;
		this.rawFinishReason = rawFinishReason;
		this.usage = usage;
		this.warnings = warnings;
		this.request = request;
		this.response = response;
		this.providerMetadata = providerMetadata;
	}
	get text() {
		return this.content.filter((part) => part.type === "text").map((part) => part.text).join("");
	}
	get reasoning() {
		return this.content.filter((part) => part.type === "reasoning");
	}
	get reasoningText() {
		return this.reasoning.length === 0 ? void 0 : this.reasoning.map((part) => part.text).join("");
	}
	get files() {
		return this.content.filter((part) => part.type === "file").map((part) => part.file);
	}
	get sources() {
		return this.content.filter((part) => part.type === "source");
	}
	get toolCalls() {
		return this.content.filter((part) => part.type === "tool-call");
	}
	get staticToolCalls() {
		return this.toolCalls.filter((toolCall) => toolCall.dynamic !== true);
	}
	get dynamicToolCalls() {
		return this.toolCalls.filter((toolCall) => toolCall.dynamic === true);
	}
	get toolResults() {
		return this.content.filter((part) => part.type === "tool-result");
	}
	get staticToolResults() {
		return this.toolResults.filter((toolResult) => toolResult.dynamic !== true);
	}
	get dynamicToolResults() {
		return this.toolResults.filter((toolResult) => toolResult.dynamic === true);
	}
};
function stepCountIs(stepCount) {
	return ({ steps }) => steps.length === stepCount;
}
async function isStopConditionMet({ stopConditions, steps }) {
	return (await Promise.all(stopConditions.map((condition) => condition({ steps })))).some((result) => result);
}
async function toResponseMessages({ content: inputContent, tools }) {
	const responseMessages = [];
	const content = [];
	for (const part of inputContent) {
		if (part.type === "source") continue;
		if ((part.type === "tool-result" || part.type === "tool-error") && !part.providerExecuted) continue;
		if (part.type === "text" && part.text.length === 0) continue;
		switch (part.type) {
			case "text":
				content.push({
					type: "text",
					text: part.text,
					providerOptions: part.providerMetadata
				});
				break;
			case "reasoning":
				content.push({
					type: "reasoning",
					text: part.text,
					providerOptions: part.providerMetadata
				});
				break;
			case "file":
				content.push({
					type: "file",
					data: part.file.base64,
					mediaType: part.file.mediaType,
					providerOptions: part.providerMetadata
				});
				break;
			case "tool-call":
				content.push({
					type: "tool-call",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					input: part.invalid && typeof part.input !== "object" ? {} : part.input,
					providerExecuted: part.providerExecuted,
					providerOptions: part.providerMetadata
				});
				break;
			case "tool-result": {
				const output = await createToolModelOutput({
					toolCallId: part.toolCallId,
					input: part.input,
					tool: tools == null ? void 0 : tools[part.toolName],
					output: part.output,
					errorMode: "none"
				});
				content.push({
					type: "tool-result",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					output,
					providerOptions: part.providerMetadata
				});
				break;
			}
			case "tool-error": {
				const output = await createToolModelOutput({
					toolCallId: part.toolCallId,
					input: part.input,
					tool: tools == null ? void 0 : tools[part.toolName],
					output: part.error,
					errorMode: "json"
				});
				content.push({
					type: "tool-result",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					output,
					providerOptions: part.providerMetadata
				});
				break;
			}
			case "tool-approval-request":
				content.push({
					type: "tool-approval-request",
					approvalId: part.approvalId,
					toolCallId: part.toolCall.toolCallId,
					...part.signature != null ? { signature: part.signature } : {}
				});
				break;
		}
	}
	if (content.length > 0) responseMessages.push({
		role: "assistant",
		content
	});
	const toolResultContent = [];
	for (const part of inputContent) {
		if (!(part.type === "tool-result" || part.type === "tool-error") || part.providerExecuted) continue;
		const output = await createToolModelOutput({
			toolCallId: part.toolCallId,
			input: part.input,
			tool: tools == null ? void 0 : tools[part.toolName],
			output: part.type === "tool-result" ? part.output : part.error,
			errorMode: part.type === "tool-error" ? "text" : "none"
		});
		toolResultContent.push({
			type: "tool-result",
			toolCallId: part.toolCallId,
			toolName: part.toolName,
			output,
			...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
		});
	}
	if (toolResultContent.length > 0) responseMessages.push({
		role: "tool",
		content: toolResultContent
	});
	return responseMessages;
}
function mergeAbortSignals(...signals) {
	const validSignals = signals.filter((signal) => signal != null);
	if (validSignals.length === 0) return;
	if (validSignals.length === 1) return validSignals[0];
	const controller = new AbortController();
	for (const signal of validSignals) {
		if (signal.aborted) {
			controller.abort(signal.reason);
			return controller.signal;
		}
		signal.addEventListener("abort", () => {
			controller.abort(signal.reason);
		}, { once: true });
	}
	return controller.signal;
}
var originalGenerateId = createIdGenerator({
	prefix: "aitxt",
	size: 24
});
async function generateText({ model: modelArg, tools, toolChoice, system, prompt, messages, allowSystemInMessages, maxRetries: maxRetriesArg, abortSignal, timeout, headers, stopWhen = stepCountIs(1), experimental_output, output = experimental_output, experimental_telemetry: telemetry, providerOptions, experimental_activeTools, activeTools = experimental_activeTools, experimental_prepareStep, prepareStep = experimental_prepareStep, experimental_repairToolCall: repairToolCall, experimental_download: download2, experimental_context, experimental_toolApprovalSecret, experimental_include: include, _internal: { generateId: generateId2 = originalGenerateId } = {}, experimental_onStart: onStart, experimental_onStepStart: onStepStart, experimental_onToolCallStart: onToolCallStart, experimental_onToolCallFinish: onToolCallFinish, onStepFinish, onFinish, ...settings }) {
	const model = resolveLanguageModel(modelArg);
	const createGlobalTelemetry = getGlobalTelemetryIntegration();
	const stopConditions = asArray(stopWhen);
	const totalTimeoutMs = getTotalTimeoutMs(timeout);
	const stepTimeoutMs = getStepTimeoutMs(timeout);
	const stepAbortController = stepTimeoutMs != null ? new AbortController() : void 0;
	const mergedAbortSignal = mergeAbortSignals(abortSignal, totalTimeoutMs != null ? AbortSignal.timeout(totalTimeoutMs) : void 0, stepAbortController == null ? void 0 : stepAbortController.signal);
	const { maxRetries, retry } = prepareRetries({
		maxRetries: maxRetriesArg,
		abortSignal: mergedAbortSignal
	});
	const callSettings = prepareCallSettings(settings);
	const headersWithUserAgent = withUserAgentSuffix(headers != null ? headers : {}, `ai/${VERSION}`);
	const baseTelemetryAttributes = getBaseTelemetryAttributes({
		model,
		telemetry,
		headers: headersWithUserAgent,
		settings: {
			...callSettings,
			maxRetries
		}
	});
	const modelInfo = {
		provider: model.provider,
		modelId: model.modelId
	};
	const initialPrompt = await standardizePrompt({
		system,
		prompt,
		messages,
		allowSystemInMessages
	});
	const globalTelemetry = createGlobalTelemetry(telemetry == null ? void 0 : telemetry.integrations);
	await notify({
		event: {
			model: modelInfo,
			system,
			prompt,
			messages,
			tools,
			toolChoice,
			activeTools,
			maxOutputTokens: callSettings.maxOutputTokens,
			temperature: callSettings.temperature,
			topP: callSettings.topP,
			topK: callSettings.topK,
			presencePenalty: callSettings.presencePenalty,
			frequencyPenalty: callSettings.frequencyPenalty,
			stopSequences: callSettings.stopSequences,
			seed: callSettings.seed,
			maxRetries,
			timeout,
			headers,
			providerOptions,
			stopWhen,
			output,
			abortSignal,
			include,
			functionId: telemetry == null ? void 0 : telemetry.functionId,
			metadata: telemetry == null ? void 0 : telemetry.metadata,
			experimental_context
		},
		callbacks: [onStart, globalTelemetry.onStart]
	});
	const tracer = getTracer(telemetry);
	try {
		return await recordSpan({
			name: "ai.generateText",
			attributes: selectTelemetryAttributes({
				telemetry,
				attributes: {
					...assembleOperationName({
						operationId: "ai.generateText",
						telemetry
					}),
					...baseTelemetryAttributes,
					"ai.model.provider": model.provider,
					"ai.model.id": model.modelId,
					"ai.prompt": { input: () => JSON.stringify({
						system,
						prompt,
						messages
					}) }
				}
			}),
			tracer,
			fn: async (span) => {
				var _a22, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
				const initialMessages = initialPrompt.messages;
				const responseMessages = [];
				const { approvedToolApprovals, deniedToolApprovals: collectedDeniedToolApprovals } = collectToolApprovals({ messages: initialMessages });
				const { approvedToolApprovals: localApprovedToolApprovals, deniedToolApprovals: revalidationDeniedToolApprovals } = await validateApprovedToolApprovals({
					approvedToolApprovals: approvedToolApprovals.filter((toolApproval) => !toolApproval.toolCall.providerExecuted),
					tools,
					messages: initialMessages,
					experimental_context,
					toolApprovalSecret: experimental_toolApprovalSecret
				});
				const deniedToolApprovals = [...collectedDeniedToolApprovals, ...revalidationDeniedToolApprovals];
				if (deniedToolApprovals.length > 0 || localApprovedToolApprovals.length > 0) {
					const toolOutputs = await executeTools({
						toolCalls: localApprovedToolApprovals.map((toolApproval) => toolApproval.toolCall),
						tools,
						tracer,
						telemetry,
						messages: initialMessages,
						abortSignal: mergedAbortSignal,
						experimental_context,
						stepNumber: 0,
						model: modelInfo,
						onToolCallStart: [onToolCallStart, globalTelemetry.onToolCallStart],
						onToolCallFinish: [onToolCallFinish, globalTelemetry.onToolCallFinish]
					});
					const toolContent = [];
					for (const output2 of toolOutputs) {
						const modelOutput = await createToolModelOutput({
							toolCallId: output2.toolCallId,
							input: output2.input,
							tool: tools == null ? void 0 : tools[output2.toolName],
							output: output2.type === "tool-result" ? output2.output : output2.error,
							errorMode: output2.type === "tool-error" ? "text" : "none"
						});
						toolContent.push({
							type: "tool-result",
							toolCallId: output2.toolCallId,
							toolName: output2.toolName,
							output: modelOutput
						});
					}
					for (const toolApproval of deniedToolApprovals) toolContent.push({
						type: "tool-result",
						toolCallId: toolApproval.toolCall.toolCallId,
						toolName: toolApproval.toolCall.toolName,
						output: {
							type: "execution-denied",
							reason: toolApproval.approvalResponse.reason,
							...toolApproval.toolCall.providerExecuted && { providerOptions: { openai: { approvalId: toolApproval.approvalResponse.approvalId } } }
						}
					});
					responseMessages.push({
						role: "tool",
						content: toolContent
					});
				}
				const callSettings2 = prepareCallSettings(settings);
				let currentModelResponse;
				let clientToolCalls = [];
				let clientToolOutputs = [];
				const steps = [];
				const pendingDeferredToolCalls = /* @__PURE__ */ new Map();
				do {
					const stepTimeoutId = stepTimeoutMs != null ? setTimeout(() => stepAbortController.abort(), stepTimeoutMs) : void 0;
					try {
						const stepInputMessages = [...initialMessages, ...responseMessages];
						const prepareStepResult = await (prepareStep == null ? void 0 : prepareStep({
							model,
							steps,
							stepNumber: steps.length,
							messages: stepInputMessages,
							experimental_context
						}));
						const stepModel = resolveLanguageModel((_a22 = prepareStepResult == null ? void 0 : prepareStepResult.model) != null ? _a22 : model);
						const stepModelInfo = {
							provider: stepModel.provider,
							modelId: stepModel.modelId
						};
						const promptMessages = await convertToLanguageModelPrompt({
							prompt: {
								system: (_b = prepareStepResult == null ? void 0 : prepareStepResult.system) != null ? _b : initialPrompt.system,
								messages: (_c = prepareStepResult == null ? void 0 : prepareStepResult.messages) != null ? _c : stepInputMessages
							},
							supportedUrls: await stepModel.supportedUrls,
							download: download2
						});
						experimental_context = (_d = prepareStepResult == null ? void 0 : prepareStepResult.experimental_context) != null ? _d : experimental_context;
						const stepActiveTools = (_e = prepareStepResult == null ? void 0 : prepareStepResult.activeTools) != null ? _e : activeTools;
						const { toolChoice: stepToolChoice, tools: stepTools } = await prepareToolsAndToolChoice({
							tools,
							toolChoice: (_f = prepareStepResult == null ? void 0 : prepareStepResult.toolChoice) != null ? _f : toolChoice,
							activeTools: stepActiveTools
						});
						const stepMessages = (_g = prepareStepResult == null ? void 0 : prepareStepResult.messages) != null ? _g : stepInputMessages;
						const stepSystem = (_h = prepareStepResult == null ? void 0 : prepareStepResult.system) != null ? _h : initialPrompt.system;
						const stepProviderOptions = mergeObjects(providerOptions, prepareStepResult == null ? void 0 : prepareStepResult.providerOptions);
						await notify({
							event: {
								stepNumber: steps.length,
								model: stepModelInfo,
								system: stepSystem,
								messages: stepMessages,
								tools,
								toolChoice: stepToolChoice,
								activeTools: stepActiveTools,
								steps: [...steps],
								providerOptions: stepProviderOptions,
								timeout,
								headers,
								stopWhen,
								output,
								abortSignal,
								include,
								functionId: telemetry == null ? void 0 : telemetry.functionId,
								metadata: telemetry == null ? void 0 : telemetry.metadata,
								experimental_context
							},
							callbacks: [onStepStart, globalTelemetry.onStepStart]
						});
						currentModelResponse = await retry(() => {
							var _a23;
							return recordSpan({
								name: "ai.generateText.doGenerate",
								attributes: selectTelemetryAttributes({
									telemetry,
									attributes: {
										...assembleOperationName({
											operationId: "ai.generateText.doGenerate",
											telemetry
										}),
										...baseTelemetryAttributes,
										"ai.model.provider": stepModel.provider,
										"ai.model.id": stepModel.modelId,
										"ai.prompt.messages": { input: () => stringifyForTelemetry(promptMessages) },
										"ai.prompt.tools": { input: () => stepTools == null ? void 0 : stepTools.map((tool2) => JSON.stringify(tool2)) },
										"ai.prompt.toolChoice": { input: () => stepToolChoice != null ? JSON.stringify(stepToolChoice) : void 0 },
										"gen_ai.system": stepModel.provider,
										"gen_ai.request.model": stepModel.modelId,
										"gen_ai.request.frequency_penalty": settings.frequencyPenalty,
										"gen_ai.request.max_tokens": settings.maxOutputTokens,
										"gen_ai.request.presence_penalty": settings.presencePenalty,
										"gen_ai.request.stop_sequences": settings.stopSequences,
										"gen_ai.request.temperature": (_a23 = settings.temperature) != null ? _a23 : void 0,
										"gen_ai.request.top_k": settings.topK,
										"gen_ai.request.top_p": settings.topP
									}
								}),
								tracer,
								fn: async (span2) => {
									var _a24, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
									const result = await stepModel.doGenerate({
										...callSettings2,
										tools: stepTools,
										toolChoice: stepToolChoice,
										responseFormat: await (output == null ? void 0 : output.responseFormat),
										prompt: promptMessages,
										providerOptions: stepProviderOptions,
										abortSignal: mergedAbortSignal,
										headers: headersWithUserAgent
									});
									const responseData = {
										id: (_b2 = (_a24 = result.response) == null ? void 0 : _a24.id) != null ? _b2 : generateId2(),
										timestamp: (_d2 = (_c2 = result.response) == null ? void 0 : _c2.timestamp) != null ? _d2 : /* @__PURE__ */ new Date(),
										modelId: (_f2 = (_e2 = result.response) == null ? void 0 : _e2.modelId) != null ? _f2 : stepModel.modelId,
										headers: (_g2 = result.response) == null ? void 0 : _g2.headers,
										body: (_h2 = result.response) == null ? void 0 : _h2.body
									};
									const usage = asLanguageModelUsage(result.usage);
									span2.setAttributes(await selectTelemetryAttributes({
										telemetry,
										attributes: {
											"ai.response.finishReason": result.finishReason.unified,
											"ai.response.text": { output: () => extractTextContent(result.content) },
											"ai.response.reasoning": { output: () => extractReasoningContent(result.content) },
											"ai.response.toolCalls": { output: () => {
												const toolCalls = asToolCalls(result.content);
												return toolCalls == null ? void 0 : JSON.stringify(toolCalls);
											} },
											"ai.response.id": responseData.id,
											"ai.response.model": responseData.modelId,
											"ai.response.timestamp": responseData.timestamp.toISOString(),
											"ai.response.providerMetadata": JSON.stringify(result.providerMetadata),
											"ai.usage.inputTokens": result.usage.inputTokens.total,
											"ai.usage.inputTokenDetails.noCacheTokens": result.usage.inputTokens.noCache,
											"ai.usage.inputTokenDetails.cacheReadTokens": result.usage.inputTokens.cacheRead,
											"ai.usage.inputTokenDetails.cacheWriteTokens": result.usage.inputTokens.cacheWrite,
											"ai.usage.outputTokens": result.usage.outputTokens.total,
											"ai.usage.outputTokenDetails.textTokens": result.usage.outputTokens.text,
											"ai.usage.outputTokenDetails.reasoningTokens": result.usage.outputTokens.reasoning,
											"ai.usage.totalTokens": usage.totalTokens,
											"ai.usage.reasoningTokens": result.usage.outputTokens.reasoning,
											"ai.usage.cachedInputTokens": result.usage.inputTokens.cacheRead,
											"gen_ai.response.finish_reasons": [result.finishReason.unified],
											"gen_ai.response.id": responseData.id,
											"gen_ai.response.model": responseData.modelId,
											"gen_ai.usage.input_tokens": result.usage.inputTokens.total,
											"gen_ai.usage.output_tokens": result.usage.outputTokens.total
										}
									}));
									return {
										...result,
										response: responseData
									};
								}
							});
						});
						const stepToolCalls = await Promise.all(currentModelResponse.content.filter((part) => part.type === "tool-call").map((toolCall) => parseToolCall({
							toolCall,
							tools,
							repairToolCall,
							system,
							messages: stepInputMessages
						})));
						const toolApprovalRequests = {};
						for (const toolCall of stepToolCalls) {
							if (toolCall.invalid) continue;
							const tool2 = tools == null ? void 0 : tools[toolCall.toolName];
							if (tool2 == null) continue;
							if ((tool2 == null ? void 0 : tool2.onInputAvailable) != null) await tool2.onInputAvailable({
								input: toolCall.input,
								toolCallId: toolCall.toolCallId,
								messages: stepInputMessages,
								abortSignal: mergedAbortSignal,
								experimental_context
							});
							if (await isApprovalNeeded({
								tool: tool2,
								toolCall,
								messages: stepInputMessages,
								experimental_context
							})) {
								const approvalId = generateId2();
								const signature = await maybeSignApproval({
									secret: experimental_toolApprovalSecret,
									approvalId,
									toolCallId: toolCall.toolCallId,
									toolName: toolCall.toolName,
									input: toolCall.input
								});
								toolApprovalRequests[toolCall.toolCallId] = {
									type: "tool-approval-request",
									approvalId,
									toolCall,
									...signature != null ? { signature } : {}
								};
							}
						}
						const invalidToolCalls = stepToolCalls.filter((toolCall) => toolCall.invalid && toolCall.dynamic);
						clientToolOutputs = [];
						for (const toolCall of invalidToolCalls) clientToolOutputs.push({
							type: "tool-error",
							toolCallId: toolCall.toolCallId,
							toolName: toolCall.toolName,
							input: toolCall.input,
							error: getErrorMessage$1(toolCall.error),
							dynamic: true
						});
						clientToolCalls = stepToolCalls.filter((toolCall) => !toolCall.providerExecuted);
						if (tools != null) clientToolOutputs.push(...await executeTools({
							toolCalls: clientToolCalls.filter((toolCall) => !toolCall.invalid && toolApprovalRequests[toolCall.toolCallId] == null),
							tools,
							tracer,
							telemetry,
							messages: stepInputMessages,
							abortSignal: mergedAbortSignal,
							experimental_context,
							stepNumber: steps.length,
							model: stepModelInfo,
							onToolCallStart: [onToolCallStart, globalTelemetry.onToolCallStart],
							onToolCallFinish: [onToolCallFinish, globalTelemetry.onToolCallFinish]
						}));
						for (const toolCall of stepToolCalls) {
							if (!toolCall.providerExecuted) continue;
							const tool2 = tools == null ? void 0 : tools[toolCall.toolName];
							if ((tool2 == null ? void 0 : tool2.type) === "provider" && tool2.supportsDeferredResults) {
								if (!currentModelResponse.content.some((part) => part.type === "tool-result" && part.toolCallId === toolCall.toolCallId)) pendingDeferredToolCalls.set(toolCall.toolCallId, { toolName: toolCall.toolName });
							}
						}
						for (const part of currentModelResponse.content) if (part.type === "tool-result") pendingDeferredToolCalls.delete(part.toolCallId);
						const stepContent = asContent({
							content: currentModelResponse.content,
							toolCalls: stepToolCalls,
							toolOutputs: clientToolOutputs,
							toolApprovalRequests: Object.values(toolApprovalRequests),
							tools
						});
						responseMessages.push(...await toResponseMessages({
							content: stepContent,
							tools
						}));
						const stepRequest = ((_i = include == null ? void 0 : include.requestBody) != null ? _i : true) ? (_j = currentModelResponse.request) != null ? _j : {} : {
							...currentModelResponse.request,
							body: void 0
						};
						const stepResponse = {
							...currentModelResponse.response,
							messages: structuredClone(responseMessages),
							body: ((_k = include == null ? void 0 : include.responseBody) != null ? _k : true) ? (_l = currentModelResponse.response) == null ? void 0 : _l.body : void 0
						};
						const stepNumber = steps.length;
						const currentStepResult = new DefaultStepResult({
							stepNumber,
							model: stepModelInfo,
							functionId: telemetry == null ? void 0 : telemetry.functionId,
							metadata: telemetry == null ? void 0 : telemetry.metadata,
							experimental_context,
							content: stepContent,
							finishReason: currentModelResponse.finishReason.unified,
							rawFinishReason: currentModelResponse.finishReason.raw,
							usage: asLanguageModelUsage(currentModelResponse.usage),
							warnings: currentModelResponse.warnings,
							providerMetadata: currentModelResponse.providerMetadata,
							request: stepRequest,
							response: stepResponse
						});
						logWarnings({
							warnings: (_m = currentModelResponse.warnings) != null ? _m : [],
							provider: stepModelInfo.provider,
							model: stepModelInfo.modelId
						});
						steps.push(currentStepResult);
						await notify({
							event: currentStepResult,
							callbacks: [onStepFinish, globalTelemetry.onStepFinish]
						});
					} finally {
						if (stepTimeoutId != null) clearTimeout(stepTimeoutId);
					}
				} while ((clientToolCalls.length > 0 && clientToolOutputs.length === clientToolCalls.length || pendingDeferredToolCalls.size > 0) && !await isStopConditionMet({
					stopConditions,
					steps
				}));
				span.setAttributes(await selectTelemetryAttributes({
					telemetry,
					attributes: {
						"ai.response.finishReason": currentModelResponse.finishReason.unified,
						"ai.response.text": { output: () => extractTextContent(currentModelResponse.content) },
						"ai.response.reasoning": { output: () => extractReasoningContent(currentModelResponse.content) },
						"ai.response.toolCalls": { output: () => {
							const toolCalls = asToolCalls(currentModelResponse.content);
							return toolCalls == null ? void 0 : JSON.stringify(toolCalls);
						} },
						"ai.response.providerMetadata": JSON.stringify(currentModelResponse.providerMetadata)
					}
				}));
				const lastStep = steps[steps.length - 1];
				const totalUsage = steps.reduce((totalUsage2, step) => {
					return addLanguageModelUsage(totalUsage2, step.usage);
				}, {
					inputTokens: void 0,
					outputTokens: void 0,
					totalTokens: void 0,
					reasoningTokens: void 0,
					cachedInputTokens: void 0
				});
				span.setAttributes(await selectTelemetryAttributes({
					telemetry,
					attributes: {
						"ai.usage.inputTokens": totalUsage.inputTokens,
						"ai.usage.inputTokenDetails.noCacheTokens": (_n = totalUsage.inputTokenDetails) == null ? void 0 : _n.noCacheTokens,
						"ai.usage.inputTokenDetails.cacheReadTokens": (_o = totalUsage.inputTokenDetails) == null ? void 0 : _o.cacheReadTokens,
						"ai.usage.inputTokenDetails.cacheWriteTokens": (_p = totalUsage.inputTokenDetails) == null ? void 0 : _p.cacheWriteTokens,
						"ai.usage.outputTokens": totalUsage.outputTokens,
						"ai.usage.outputTokenDetails.textTokens": (_q = totalUsage.outputTokenDetails) == null ? void 0 : _q.textTokens,
						"ai.usage.outputTokenDetails.reasoningTokens": (_r = totalUsage.outputTokenDetails) == null ? void 0 : _r.reasoningTokens,
						"ai.usage.totalTokens": totalUsage.totalTokens,
						"ai.usage.reasoningTokens": (_s = totalUsage.outputTokenDetails) == null ? void 0 : _s.reasoningTokens,
						"ai.usage.cachedInputTokens": (_t = totalUsage.inputTokenDetails) == null ? void 0 : _t.cacheReadTokens
					}
				}));
				await notify({
					event: {
						stepNumber: lastStep.stepNumber,
						model: lastStep.model,
						functionId: lastStep.functionId,
						metadata: lastStep.metadata,
						experimental_context: lastStep.experimental_context,
						finishReason: lastStep.finishReason,
						rawFinishReason: lastStep.rawFinishReason,
						usage: lastStep.usage,
						content: lastStep.content,
						text: lastStep.text,
						reasoningText: lastStep.reasoningText,
						reasoning: lastStep.reasoning,
						files: lastStep.files,
						sources: lastStep.sources,
						toolCalls: lastStep.toolCalls,
						staticToolCalls: lastStep.staticToolCalls,
						dynamicToolCalls: lastStep.dynamicToolCalls,
						toolResults: lastStep.toolResults,
						staticToolResults: lastStep.staticToolResults,
						dynamicToolResults: lastStep.dynamicToolResults,
						request: lastStep.request,
						response: lastStep.response,
						warnings: lastStep.warnings,
						providerMetadata: lastStep.providerMetadata,
						steps,
						totalUsage
					},
					callbacks: [onFinish, globalTelemetry.onFinish]
				});
				let resolvedOutput;
				if (lastStep.finishReason === "stop") resolvedOutput = await (output != null ? output : text()).parseCompleteOutput({ text: lastStep.text }, {
					response: lastStep.response,
					usage: lastStep.usage,
					finishReason: lastStep.finishReason
				});
				return new DefaultGenerateTextResult({
					steps,
					totalUsage,
					output: resolvedOutput
				});
			}
		});
	} catch (error) {
		throw wrapGatewayError(error);
	}
}
async function executeTools({ toolCalls, tools, tracer, telemetry, messages, abortSignal, experimental_context, stepNumber, model, onToolCallStart, onToolCallFinish }) {
	return (await Promise.all(toolCalls.map(async (toolCall) => executeToolCall({
		toolCall,
		tools,
		tracer,
		telemetry,
		messages,
		abortSignal,
		experimental_context,
		stepNumber,
		model,
		onToolCallStart,
		onToolCallFinish
	})))).filter((output) => output != null);
}
var DefaultGenerateTextResult = class {
	constructor(options) {
		this.steps = options.steps;
		this._output = options.output;
		this.totalUsage = options.totalUsage;
	}
	get finalStep() {
		return this.steps[this.steps.length - 1];
	}
	get content() {
		return this.finalStep.content;
	}
	get text() {
		return this.finalStep.text;
	}
	get files() {
		return this.finalStep.files;
	}
	get reasoningText() {
		return this.finalStep.reasoningText;
	}
	get reasoning() {
		return this.finalStep.reasoning;
	}
	get toolCalls() {
		return this.finalStep.toolCalls;
	}
	get staticToolCalls() {
		return this.finalStep.staticToolCalls;
	}
	get dynamicToolCalls() {
		return this.finalStep.dynamicToolCalls;
	}
	get toolResults() {
		return this.finalStep.toolResults;
	}
	get staticToolResults() {
		return this.finalStep.staticToolResults;
	}
	get dynamicToolResults() {
		return this.finalStep.dynamicToolResults;
	}
	get sources() {
		return this.finalStep.sources;
	}
	get finishReason() {
		return this.finalStep.finishReason;
	}
	get rawFinishReason() {
		return this.finalStep.rawFinishReason;
	}
	get warnings() {
		return this.finalStep.warnings;
	}
	get providerMetadata() {
		return this.finalStep.providerMetadata;
	}
	get response() {
		return this.finalStep.response;
	}
	get request() {
		return this.finalStep.request;
	}
	get usage() {
		return this.finalStep.usage;
	}
	get experimental_output() {
		return this.output;
	}
	get output() {
		if (this._output == null) throw new NoOutputGeneratedError();
		return this._output;
	}
};
function asToolCalls(content) {
	const parts = content.filter((part) => part.type === "tool-call");
	if (parts.length === 0) return;
	return parts.map((toolCall) => ({
		toolCallId: toolCall.toolCallId,
		toolName: toolCall.toolName,
		input: toolCall.input
	}));
}
function asContent({ content, toolCalls, toolOutputs, toolApprovalRequests, tools }) {
	const contentParts = [];
	for (const part of content) switch (part.type) {
		case "text":
		case "reasoning":
		case "source":
			contentParts.push(part);
			break;
		case "file":
			contentParts.push({
				type: "file",
				file: new DefaultGeneratedFile(part),
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
			});
			break;
		case "tool-call":
			contentParts.push(toolCalls.find((toolCall) => toolCall.toolCallId === part.toolCallId));
			break;
		case "tool-result": {
			const toolCall = toolCalls.find((toolCall2) => toolCall2.toolCallId === part.toolCallId);
			if (toolCall == null) {
				const tool2 = tools == null ? void 0 : tools[part.toolName];
				if (!((tool2 == null ? void 0 : tool2.type) === "provider" && tool2.supportsDeferredResults)) throw new Error(`Tool call ${part.toolCallId} not found.`);
				if (part.isError) contentParts.push({
					type: "tool-error",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					input: void 0,
					error: part.result,
					providerExecuted: true,
					dynamic: part.dynamic,
					...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
					...(tool2 == null ? void 0 : tool2.metadata) != null ? { toolMetadata: tool2.metadata } : {}
				});
				else contentParts.push({
					type: "tool-result",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					input: void 0,
					output: part.result,
					providerExecuted: true,
					dynamic: part.dynamic,
					...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
					...(tool2 == null ? void 0 : tool2.metadata) != null ? { toolMetadata: tool2.metadata } : {}
				});
				break;
			}
			if (part.isError) contentParts.push({
				type: "tool-error",
				toolCallId: part.toolCallId,
				toolName: part.toolName,
				input: toolCall.input,
				error: part.result,
				providerExecuted: true,
				dynamic: toolCall.dynamic,
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
				...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
			});
			else contentParts.push({
				type: "tool-result",
				toolCallId: part.toolCallId,
				toolName: part.toolName,
				input: toolCall.input,
				output: part.result,
				providerExecuted: true,
				dynamic: toolCall.dynamic,
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
				...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
			});
			break;
		}
		case "tool-approval-request": {
			const toolCall = toolCalls.find((toolCall2) => toolCall2.toolCallId === part.toolCallId);
			if (toolCall == null) throw new ToolCallNotFoundForApprovalError({
				toolCallId: part.toolCallId,
				approvalId: part.approvalId
			});
			contentParts.push({
				type: "tool-approval-request",
				approvalId: part.approvalId,
				toolCall
			});
			break;
		}
	}
	return [
		...contentParts,
		...toolOutputs,
		...toolApprovalRequests
	];
}
function prepareHeaders(headers, defaultHeaders) {
	const responseHeaders = new Headers(headers != null ? headers : {});
	for (const [key, value] of Object.entries(defaultHeaders)) if (!responseHeaders.has(key)) responseHeaders.set(key, value);
	return responseHeaders;
}
function createTextStreamResponse({ status, statusText, headers, textStream }) {
	return new Response(textStream.pipeThrough(new TextEncoderStream()), {
		status: status != null ? status : 200,
		statusText,
		headers: prepareHeaders(headers, { "content-type": "text/plain; charset=utf-8" })
	});
}
function writeToServerResponse({ response, status, statusText, headers, stream }) {
	const statusCode = status != null ? status : 200;
	if (statusText !== void 0) response.writeHead(statusCode, statusText, headers);
	else response.writeHead(statusCode, headers);
	const reader = stream.getReader();
	const read = async () => {
		try {
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				if (!response.write(value)) await new Promise((resolve3) => {
					response.once("drain", resolve3);
				});
			}
		} catch (error) {
			throw error;
		} finally {
			response.end();
		}
	};
	read();
}
function pipeTextStreamToResponse({ response, status, statusText, headers, textStream }) {
	writeToServerResponse({
		response,
		status,
		statusText,
		headers: Object.fromEntries(prepareHeaders(headers, { "content-type": "text/plain; charset=utf-8" }).entries()),
		stream: textStream.pipeThrough(new TextEncoderStream())
	});
}
var JsonToSseTransformStream = class extends TransformStream {
	constructor() {
		super({
			transform(part, controller) {
				controller.enqueue(`data: ${JSON.stringify(part)}

`);
			},
			flush(controller) {
				controller.enqueue("data: [DONE]\n\n");
			}
		});
	}
};
var UI_MESSAGE_STREAM_HEADERS = {
	"content-type": "text/event-stream",
	"cache-control": "no-cache",
	connection: "keep-alive",
	"x-vercel-ai-ui-message-stream": "v1",
	"x-accel-buffering": "no"
};
function createUIMessageStreamResponse({ status, statusText, headers, stream, consumeSseStream }) {
	let sseStream = stream.pipeThrough(new JsonToSseTransformStream());
	if (consumeSseStream) {
		const [stream1, stream2] = sseStream.tee();
		sseStream = stream1;
		consumeSseStream({ stream: stream2 });
	}
	return new Response(sseStream.pipeThrough(new TextEncoderStream()), {
		status,
		statusText,
		headers: prepareHeaders(headers, UI_MESSAGE_STREAM_HEADERS)
	});
}
function getResponseUIMessageId({ originalMessages, responseMessageId }) {
	if (originalMessages == null) return;
	const lastMessage = originalMessages[originalMessages.length - 1];
	return (lastMessage == null ? void 0 : lastMessage.role) === "assistant" ? lastMessage.id : typeof responseMessageId === "function" ? responseMessageId() : responseMessageId;
}
var toolMetadataSchema = record(string(), jsonValueSchema.optional());
var uiMessageChunkSchema = lazySchema(() => zodSchema(union([
	strictObject({
		type: literal("text-start"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("text-delta"),
		id: string(),
		delta: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("text-end"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("error"),
		errorText: string()
	}),
	strictObject({
		type: literal("tool-input-start"),
		toolCallId: string(),
		toolName: string(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		toolMetadata: toolMetadataSchema.optional(),
		dynamic: boolean().optional(),
		title: string().optional()
	}),
	strictObject({
		type: literal("tool-input-delta"),
		toolCallId: string(),
		inputTextDelta: string()
	}),
	strictObject({
		type: literal("tool-input-available"),
		toolCallId: string(),
		toolName: string(),
		input: unknown(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		toolMetadata: toolMetadataSchema.optional(),
		dynamic: boolean().optional(),
		title: string().optional()
	}),
	strictObject({
		type: literal("tool-input-error"),
		toolCallId: string(),
		toolName: string(),
		input: unknown(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		toolMetadata: toolMetadataSchema.optional(),
		dynamic: boolean().optional(),
		errorText: string(),
		title: string().optional()
	}),
	strictObject({
		type: literal("tool-approval-request"),
		approvalId: string(),
		toolCallId: string(),
		signature: string().optional()
	}),
	strictObject({
		type: literal("tool-output-available"),
		toolCallId: string(),
		output: unknown(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		toolMetadata: toolMetadataSchema.optional(),
		dynamic: boolean().optional(),
		preliminary: boolean().optional()
	}),
	strictObject({
		type: literal("tool-output-error"),
		toolCallId: string(),
		errorText: string(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		toolMetadata: toolMetadataSchema.optional(),
		dynamic: boolean().optional()
	}),
	strictObject({
		type: literal("tool-output-denied"),
		toolCallId: string()
	}),
	strictObject({
		type: literal("reasoning-start"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("reasoning-delta"),
		id: string(),
		delta: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("reasoning-end"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("source-url"),
		sourceId: string(),
		url: string(),
		title: string().optional(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("source-document"),
		sourceId: string(),
		mediaType: string(),
		title: string(),
		filename: string().optional(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("file"),
		url: string(),
		mediaType: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: custom((value) => typeof value === "string" && value.startsWith("data-"), { message: "Type must start with \"data-\"" }),
		id: string().optional(),
		data: unknown(),
		transient: boolean().optional()
	}),
	strictObject({ type: literal("start-step") }),
	strictObject({ type: literal("finish-step") }),
	strictObject({
		type: literal("start"),
		messageId: string().optional(),
		messageMetadata: unknown().optional()
	}),
	strictObject({
		type: literal("finish"),
		finishReason: _enum([
			"stop",
			"length",
			"content-filter",
			"tool-calls",
			"error",
			"other"
		]).optional(),
		messageMetadata: unknown().optional()
	}),
	strictObject({
		type: literal("abort"),
		reason: string().optional()
	}),
	strictObject({
		type: literal("message-metadata"),
		messageMetadata: unknown()
	})
])));
function isDataUIMessageChunk(chunk) {
	return chunk.type.startsWith("data-");
}
function createIdMap() {
	return /* @__PURE__ */ Object.create(null);
}
function isDataUIPart(part) {
	return part.type.startsWith("data-");
}
function isTextUIPart(part) {
	return part.type === "text";
}
function isFileUIPart(part) {
	return part.type === "file";
}
function isReasoningUIPart(part) {
	return part.type === "reasoning";
}
function isStaticToolUIPart(part) {
	return part.type.startsWith("tool-");
}
function isDynamicToolUIPart(part) {
	return part.type === "dynamic-tool";
}
function isToolUIPart(part) {
	return isStaticToolUIPart(part) || isDynamicToolUIPart(part);
}
function getStaticToolName(part) {
	return part.type.split("-").slice(1).join("-");
}
function getToolName(part) {
	return isDynamicToolUIPart(part) ? part.toolName : getStaticToolName(part);
}
function createStreamingUIMessageState({ lastMessage, messageId }) {
	return {
		message: (lastMessage == null ? void 0 : lastMessage.role) === "assistant" ? lastMessage : {
			id: messageId,
			metadata: void 0,
			role: "assistant",
			parts: []
		},
		activeTextParts: createIdMap(),
		activeReasoningParts: createIdMap(),
		partialToolCalls: createIdMap()
	};
}
function processUIMessageStream({ stream, messageMetadataSchema, dataPartSchemas, runUpdateMessageJob, onError, onToolCall, onData }) {
	return stream.pipeThrough(new TransformStream({ async transform(chunk, controller) {
		await runUpdateMessageJob(async ({ state, write }) => {
			var _a22, _b, _c, _d;
			function getToolInvocation(toolCallId) {
				const toolInvocation = state.message.parts.filter(isToolUIPart).find((invocation) => invocation.toolCallId === toolCallId);
				if (toolInvocation == null) throw new UIMessageStreamError({
					chunkType: "tool-invocation",
					chunkId: toolCallId,
					message: `No tool invocation found for tool call ID "${toolCallId}".`
				});
				return toolInvocation;
			}
			function updateToolPart(options) {
				var _a23;
				const part = state.message.parts.find((part2) => isStaticToolUIPart(part2) && part2.toolCallId === options.toolCallId);
				const anyOptions = options;
				const anyPart = part;
				if (part != null) {
					part.state = options.state;
					anyPart.input = anyOptions.input;
					anyPart.output = anyOptions.output;
					anyPart.errorText = anyOptions.errorText;
					anyPart.rawInput = anyOptions.rawInput;
					anyPart.preliminary = anyOptions.preliminary;
					if (options.title !== void 0) anyPart.title = options.title;
					if (options.toolMetadata !== void 0) anyPart.toolMetadata = options.toolMetadata;
					anyPart.providerExecuted = (_a23 = anyOptions.providerExecuted) != null ? _a23 : part.providerExecuted;
					const providerMetadata = anyOptions.providerMetadata;
					if (providerMetadata != null) if (options.state === "output-available" || options.state === "output-error") {
						const resultPart = part;
						resultPart.resultProviderMetadata = providerMetadata;
					} else part.callProviderMetadata = providerMetadata;
				} else state.message.parts.push({
					type: `tool-${options.toolName}`,
					toolCallId: options.toolCallId,
					state: options.state,
					title: options.title,
					...options.toolMetadata !== void 0 ? { toolMetadata: options.toolMetadata } : {},
					input: anyOptions.input,
					output: anyOptions.output,
					rawInput: anyOptions.rawInput,
					errorText: anyOptions.errorText,
					providerExecuted: anyOptions.providerExecuted,
					preliminary: anyOptions.preliminary,
					...anyOptions.providerMetadata != null && (options.state === "output-available" || options.state === "output-error") ? { resultProviderMetadata: anyOptions.providerMetadata } : {},
					...anyOptions.providerMetadata != null && !(options.state === "output-available" || options.state === "output-error") ? { callProviderMetadata: anyOptions.providerMetadata } : {}
				});
			}
			function updateDynamicToolPart(options) {
				var _a23, _b2;
				const part = state.message.parts.find((part2) => part2.type === "dynamic-tool" && part2.toolCallId === options.toolCallId);
				const anyOptions = options;
				const anyPart = part;
				if (part != null) {
					part.state = options.state;
					anyPart.toolName = options.toolName;
					anyPart.input = anyOptions.input;
					anyPart.output = anyOptions.output;
					anyPart.errorText = anyOptions.errorText;
					anyPart.rawInput = (_a23 = anyOptions.rawInput) != null ? _a23 : anyPart.rawInput;
					anyPart.preliminary = anyOptions.preliminary;
					if (options.title !== void 0) anyPart.title = options.title;
					if (options.toolMetadata !== void 0) anyPart.toolMetadata = options.toolMetadata;
					anyPart.providerExecuted = (_b2 = anyOptions.providerExecuted) != null ? _b2 : part.providerExecuted;
					const providerMetadata = anyOptions.providerMetadata;
					if (providerMetadata != null) if (options.state === "output-available" || options.state === "output-error") {
						const resultPart = part;
						resultPart.resultProviderMetadata = providerMetadata;
					} else part.callProviderMetadata = providerMetadata;
				} else state.message.parts.push({
					type: "dynamic-tool",
					toolName: options.toolName,
					toolCallId: options.toolCallId,
					state: options.state,
					input: anyOptions.input,
					output: anyOptions.output,
					errorText: anyOptions.errorText,
					preliminary: anyOptions.preliminary,
					providerExecuted: anyOptions.providerExecuted,
					title: options.title,
					...options.toolMetadata !== void 0 ? { toolMetadata: options.toolMetadata } : {},
					...anyOptions.providerMetadata != null && (options.state === "output-available" || options.state === "output-error") ? { resultProviderMetadata: anyOptions.providerMetadata } : {},
					...anyOptions.providerMetadata != null && !(options.state === "output-available" || options.state === "output-error") ? { callProviderMetadata: anyOptions.providerMetadata } : {}
				});
			}
			async function updateMessageMetadata(metadata) {
				if (metadata != null) {
					const mergedMetadata = state.message.metadata != null ? mergeObjects(state.message.metadata, metadata) : metadata;
					if (messageMetadataSchema != null) await validateTypes({
						value: mergedMetadata,
						schema: messageMetadataSchema,
						context: {
							field: "message.metadata",
							entityId: state.message.id
						}
					});
					state.message.metadata = mergedMetadata;
				}
			}
			switch (chunk.type) {
				case "text-start": {
					const textPart = {
						type: "text",
						text: "",
						providerMetadata: chunk.providerMetadata,
						state: "streaming"
					};
					state.activeTextParts[chunk.id] = textPart;
					state.message.parts.push(textPart);
					write();
					break;
				}
				case "text-delta": {
					const textPart = state.activeTextParts[chunk.id];
					if (textPart == null) throw new UIMessageStreamError({
						chunkType: "text-delta",
						chunkId: chunk.id,
						message: `Received text-delta for missing text part with ID "${chunk.id}". Ensure a "text-start" chunk is sent before any "text-delta" chunks.`
					});
					textPart.text += chunk.delta;
					textPart.providerMetadata = (_a22 = chunk.providerMetadata) != null ? _a22 : textPart.providerMetadata;
					write();
					break;
				}
				case "text-end": {
					const textPart = state.activeTextParts[chunk.id];
					if (textPart == null) throw new UIMessageStreamError({
						chunkType: "text-end",
						chunkId: chunk.id,
						message: `Received text-end for missing text part with ID "${chunk.id}". Ensure a "text-start" chunk is sent before any "text-end" chunks.`
					});
					textPart.state = "done";
					textPart.providerMetadata = (_b = chunk.providerMetadata) != null ? _b : textPart.providerMetadata;
					delete state.activeTextParts[chunk.id];
					write();
					break;
				}
				case "reasoning-start": {
					const reasoningPart = {
						type: "reasoning",
						text: "",
						providerMetadata: chunk.providerMetadata,
						state: "streaming"
					};
					state.activeReasoningParts[chunk.id] = reasoningPart;
					state.message.parts.push(reasoningPart);
					write();
					break;
				}
				case "reasoning-delta": {
					const reasoningPart = state.activeReasoningParts[chunk.id];
					if (reasoningPart == null) throw new UIMessageStreamError({
						chunkType: "reasoning-delta",
						chunkId: chunk.id,
						message: `Received reasoning-delta for missing reasoning part with ID "${chunk.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-delta" chunks.`
					});
					reasoningPart.text += chunk.delta;
					reasoningPart.providerMetadata = (_c = chunk.providerMetadata) != null ? _c : reasoningPart.providerMetadata;
					write();
					break;
				}
				case "reasoning-end": {
					const reasoningPart = state.activeReasoningParts[chunk.id];
					if (reasoningPart == null) throw new UIMessageStreamError({
						chunkType: "reasoning-end",
						chunkId: chunk.id,
						message: `Received reasoning-end for missing reasoning part with ID "${chunk.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-end" chunks.`
					});
					reasoningPart.providerMetadata = (_d = chunk.providerMetadata) != null ? _d : reasoningPart.providerMetadata;
					reasoningPart.state = "done";
					delete state.activeReasoningParts[chunk.id];
					write();
					break;
				}
				case "file":
					state.message.parts.push({
						type: "file",
						mediaType: chunk.mediaType,
						url: chunk.url,
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {}
					});
					write();
					break;
				case "source-url":
					state.message.parts.push({
						type: "source-url",
						sourceId: chunk.sourceId,
						url: chunk.url,
						title: chunk.title,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				case "source-document":
					state.message.parts.push({
						type: "source-document",
						sourceId: chunk.sourceId,
						mediaType: chunk.mediaType,
						title: chunk.title,
						filename: chunk.filename,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				case "tool-input-start": {
					const toolInvocations = state.message.parts.filter(isStaticToolUIPart);
					state.partialToolCalls[chunk.toolCallId] = {
						text: "",
						toolName: chunk.toolName,
						index: toolInvocations.length,
						dynamic: chunk.dynamic,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata
					};
					if (chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-streaming",
						input: void 0,
						providerExecuted: chunk.providerExecuted,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata,
						providerMetadata: chunk.providerMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-streaming",
						input: void 0,
						providerExecuted: chunk.providerExecuted,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				}
				case "tool-input-delta": {
					const partialToolCall = state.partialToolCalls[chunk.toolCallId];
					if (partialToolCall == null) throw new UIMessageStreamError({
						chunkType: "tool-input-delta",
						chunkId: chunk.toolCallId,
						message: `Received tool-input-delta for missing tool call with ID "${chunk.toolCallId}". Ensure a "tool-input-start" chunk is sent before any "tool-input-delta" chunks.`
					});
					partialToolCall.text += chunk.inputTextDelta;
					const { value: partialArgs } = await parsePartialJson(partialToolCall.text);
					if (partialToolCall.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: partialToolCall.toolName,
						state: "input-streaming",
						input: partialArgs,
						title: partialToolCall.title,
						toolMetadata: partialToolCall.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: partialToolCall.toolName,
						state: "input-streaming",
						input: partialArgs,
						title: partialToolCall.title,
						toolMetadata: partialToolCall.toolMetadata
					});
					write();
					break;
				}
				case "tool-input-available":
					if (chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-available",
						input: chunk.input,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-available",
						input: chunk.input,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata
					});
					write();
					if (onToolCall && !chunk.providerExecuted) await onToolCall({ toolCall: chunk });
					break;
				case "tool-input-error": {
					const existingPart = state.message.parts.filter(isToolUIPart).find((p) => p.toolCallId === chunk.toolCallId);
					if (existingPart != null ? existingPart.type === "dynamic-tool" : !!chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "output-error",
						input: chunk.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						toolMetadata: chunk.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "output-error",
						input: void 0,
						rawInput: chunk.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						toolMetadata: chunk.toolMetadata
					});
					write();
					break;
				}
				case "tool-approval-request": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					toolInvocation.state = "approval-requested";
					toolInvocation.approval = {
						id: chunk.approvalId,
						...chunk.signature != null ? { signature: chunk.signature } : {}
					};
					write();
					break;
				}
				case "tool-output-denied": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					toolInvocation.state = "output-denied";
					write();
					break;
				}
				case "tool-output-available": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					if (toolInvocation.type === "dynamic-tool") updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: toolInvocation.toolName,
						state: "output-available",
						input: toolInvocation.input,
						output: chunk.output,
						preliminary: chunk.preliminary,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: getStaticToolName(toolInvocation),
						state: "output-available",
						input: toolInvocation.input,
						output: chunk.output,
						providerExecuted: chunk.providerExecuted,
						preliminary: chunk.preliminary,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					});
					write();
					break;
				}
				case "tool-output-error": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					if (toolInvocation.type === "dynamic-tool") updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: toolInvocation.toolName,
						state: "output-error",
						input: toolInvocation.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: getStaticToolName(toolInvocation),
						state: "output-error",
						input: toolInvocation.input,
						rawInput: toolInvocation.rawInput,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					});
					write();
					break;
				}
				case "start-step":
					state.message.parts.push({ type: "step-start" });
					break;
				case "finish-step":
					state.activeTextParts = createIdMap();
					state.activeReasoningParts = createIdMap();
					break;
				case "start":
					if (chunk.messageId != null) state.message.id = chunk.messageId;
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageId != null || chunk.messageMetadata != null) write();
					break;
				case "finish":
					if (chunk.finishReason != null) state.finishReason = chunk.finishReason;
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageMetadata != null) write();
					break;
				case "message-metadata":
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageMetadata != null) write();
					break;
				case "error":
					onError?.(new Error(chunk.errorText));
					break;
				default: if (isDataUIMessageChunk(chunk)) {
					if ((dataPartSchemas == null ? void 0 : dataPartSchemas[chunk.type]) != null) {
						const partIdx = state.message.parts.findIndex((p) => "id" in p && "data" in p && p.id === chunk.id && p.type === chunk.type);
						const actualPartIdx = partIdx >= 0 ? partIdx : state.message.parts.length;
						await validateTypes({
							value: chunk.data,
							schema: dataPartSchemas[chunk.type],
							context: {
								field: `message.parts[${actualPartIdx}].data`,
								entityName: chunk.type,
								entityId: chunk.id
							}
						});
					}
					const dataChunk = chunk;
					if (dataChunk.transient) {
						onData?.(dataChunk);
						break;
					}
					const existingUIPart = dataChunk.id != null ? state.message.parts.find((chunkArg) => dataChunk.type === chunkArg.type && dataChunk.id === chunkArg.id) : void 0;
					if (existingUIPart != null) existingUIPart.data = dataChunk.data;
					else state.message.parts.push(dataChunk);
					onData?.(dataChunk);
					write();
				}
			}
			controller.enqueue(chunk);
		});
	} }));
}
function handleUIMessageStreamFinish({ messageId, originalMessages = [], onStepFinish, onFinish, onError, stream }) {
	let lastMessage = originalMessages == null ? void 0 : originalMessages[originalMessages.length - 1];
	if ((lastMessage == null ? void 0 : lastMessage.role) !== "assistant") lastMessage = void 0;
	else messageId = lastMessage.id;
	let isAborted = false;
	const idInjectedStream = stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
		if (chunk.type === "start") {
			const startChunk = chunk;
			if (startChunk.messageId == null && messageId != null) startChunk.messageId = messageId;
		}
		if (chunk.type === "abort") isAborted = true;
		controller.enqueue(chunk);
	} }));
	if (onFinish == null && onStepFinish == null) return idInjectedStream;
	const state = createStreamingUIMessageState({
		lastMessage: lastMessage ? structuredClone(lastMessage) : void 0,
		messageId: messageId != null ? messageId : ""
	});
	const runUpdateMessageJob = async (job) => {
		await job({
			state,
			write: () => {}
		});
	};
	let finishCalled = false;
	const callOnFinish = async () => {
		if (finishCalled || !onFinish) return;
		finishCalled = true;
		const isContinuation = state.message.id === (lastMessage == null ? void 0 : lastMessage.id);
		await onFinish({
			isAborted,
			isContinuation,
			responseMessage: state.message,
			messages: [...isContinuation ? originalMessages.slice(0, -1) : originalMessages, state.message],
			finishReason: state.finishReason
		});
	};
	const callOnStepFinish = async () => {
		if (!onStepFinish) return;
		const isContinuation = state.message.id === (lastMessage == null ? void 0 : lastMessage.id);
		try {
			await onStepFinish({
				isContinuation,
				responseMessage: structuredClone(state.message),
				messages: [...isContinuation ? originalMessages.slice(0, -1) : originalMessages, structuredClone(state.message)]
			});
		} catch (error) {
			onError(error);
		}
	};
	return processUIMessageStream({
		stream: idInjectedStream,
		runUpdateMessageJob,
		onError
	}).pipeThrough(new TransformStream({
		async transform(chunk, controller) {
			if (chunk.type === "finish-step") await callOnStepFinish();
			controller.enqueue(chunk);
		},
		async cancel() {
			await callOnFinish();
		},
		async flush() {
			await callOnFinish();
		}
	}));
}
function pipeUIMessageStreamToResponse({ response, status, statusText, headers, stream, consumeSseStream }) {
	let sseStream = stream.pipeThrough(new JsonToSseTransformStream());
	if (consumeSseStream) {
		const [stream1, stream2] = sseStream.tee();
		sseStream = stream1;
		consumeSseStream({ stream: stream2 });
	}
	writeToServerResponse({
		response,
		status,
		statusText,
		headers: Object.fromEntries(prepareHeaders(headers, UI_MESSAGE_STREAM_HEADERS).entries()),
		stream: sseStream.pipeThrough(new TextEncoderStream())
	});
}
function createAsyncIterableStream(source) {
	const stream = source.pipeThrough(new TransformStream());
	stream[Symbol.asyncIterator] = function() {
		const reader = this.getReader();
		let finished = false;
		async function cleanup(cancelStream) {
			var _a22;
			if (finished) return;
			finished = true;
			try {
				if (cancelStream) await ((_a22 = reader.cancel) == null ? void 0 : _a22.call(reader));
			} finally {
				try {
					reader.releaseLock();
				} catch (e) {}
			}
		}
		return {
			/**
			* Reads the next chunk from the stream.
			* @returns A promise resolving to the next IteratorResult.
			*/
			async next() {
				if (finished) return {
					done: true,
					value: void 0
				};
				const { done, value } = await reader.read();
				if (done) {
					await cleanup(true);
					return {
						done: true,
						value: void 0
					};
				}
				return {
					done: false,
					value
				};
			},
			/**
			* May be called on early exit (e.g., break from for-await) or after completion.
			* Ensures the stream is cancelled and resources are released.
			* @returns A promise resolving to a completed IteratorResult.
			*/
			async return() {
				await cleanup(true);
				return {
					done: true,
					value: void 0
				};
			},
			/**
			* Called on early exit with error.
			* Ensures the stream is cancelled and resources are released, then rethrows the error.
			* @param err The error to throw.
			* @returns A promise that rejects with the provided error.
			*/
			async throw(err) {
				await cleanup(true);
				throw err;
			}
		};
	};
	return stream;
}
async function consumeStream({ stream, onError }) {
	const reader = stream.getReader();
	try {
		while (true) {
			const { done } = await reader.read();
			if (done) break;
		}
	} catch (error) {
		onError?.(error);
	} finally {
		reader.releaseLock();
	}
}
function createResolvablePromise() {
	let resolve3;
	let reject;
	return {
		promise: new Promise((res, rej) => {
			resolve3 = res;
			reject = rej;
		}),
		resolve: resolve3,
		reject
	};
}
function createStitchableStream() {
	let innerStreamReaders = [];
	let controller = null;
	let isClosed = false;
	let waitForNewStream = createResolvablePromise();
	const terminate = () => {
		isClosed = true;
		waitForNewStream.resolve();
		innerStreamReaders.forEach((reader) => reader.cancel());
		innerStreamReaders = [];
		controller?.close();
	};
	const processPull = async () => {
		if (isClosed && innerStreamReaders.length === 0) {
			controller?.close();
			return;
		}
		if (innerStreamReaders.length === 0) {
			waitForNewStream = createResolvablePromise();
			await waitForNewStream.promise;
			return processPull();
		}
		try {
			const { value, done } = await innerStreamReaders[0].read();
			if (done) {
				innerStreamReaders.shift();
				if (innerStreamReaders.length === 0 && isClosed) controller?.close();
				else await processPull();
			} else controller?.enqueue(value);
		} catch (error) {
			controller?.error(error);
			innerStreamReaders.shift();
			terminate();
		}
	};
	return {
		stream: new ReadableStream({
			start(controllerParam) {
				controller = controllerParam;
			},
			pull: processPull,
			async cancel() {
				for (const reader of innerStreamReaders) await reader.cancel();
				innerStreamReaders = [];
				isClosed = true;
			}
		}),
		addStream: (innerStream) => {
			if (isClosed) throw new Error("Cannot add inner stream: outer stream is closed");
			innerStreamReaders.push(innerStream.getReader());
			waitForNewStream.resolve();
		},
		/**
		* Gracefully close the outer stream. This will let the inner streams
		* finish processing and then close the outer stream.
		*/
		close: () => {
			isClosed = true;
			waitForNewStream.resolve();
			if (innerStreamReaders.length === 0) controller?.close();
		},
		/**
		* Immediately close the outer stream. This will cancel all inner streams
		* and close the outer stream.
		*/
		terminate
	};
}
function runToolsTransformation({ tools, generatorStream, tracer, telemetry, system, messages, abortSignal, repairToolCall, experimental_context, toolApprovalSecret, generateId: generateId2, stepNumber, model, onToolCallStart, onToolCallFinish }) {
	let toolResultsStreamController = null;
	const toolResultsStream = new ReadableStream({ start(controller) {
		toolResultsStreamController = controller;
	} });
	const outstandingToolResults = /* @__PURE__ */ new Set();
	const toolInputs = /* @__PURE__ */ new Map();
	const toolCallsByToolCallId = /* @__PURE__ */ new Map();
	let canClose = false;
	let finishChunk = void 0;
	function attemptClose() {
		if (canClose && outstandingToolResults.size === 0) {
			if (finishChunk != null) toolResultsStreamController.enqueue(finishChunk);
			toolResultsStreamController.close();
		}
	}
	const forwardStream = new TransformStream({
		async transform(chunk, controller) {
			const chunkType = chunk.type;
			switch (chunkType) {
				case "stream-start":
				case "text-start":
				case "text-delta":
				case "text-end":
				case "reasoning-start":
				case "reasoning-delta":
				case "reasoning-end":
				case "tool-input-start":
				case "tool-input-delta":
				case "tool-input-end":
				case "source":
				case "response-metadata":
				case "error":
				case "raw":
					controller.enqueue(chunk);
					break;
				case "file":
					controller.enqueue({
						type: "file",
						file: new DefaultGeneratedFileWithType({
							data: chunk.data,
							mediaType: chunk.mediaType
						}),
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {}
					});
					break;
				case "finish":
					finishChunk = {
						type: "finish",
						finishReason: chunk.finishReason.unified,
						rawFinishReason: chunk.finishReason.raw,
						usage: asLanguageModelUsage(chunk.usage),
						providerMetadata: chunk.providerMetadata
					};
					break;
				case "tool-approval-request": {
					const toolCall = toolCallsByToolCallId.get(chunk.toolCallId);
					if (toolCall == null) {
						toolResultsStreamController.enqueue({
							type: "error",
							error: new ToolCallNotFoundForApprovalError({
								toolCallId: chunk.toolCallId,
								approvalId: chunk.approvalId
							})
						});
						break;
					}
					controller.enqueue({
						type: "tool-approval-request",
						approvalId: chunk.approvalId,
						toolCall
					});
					break;
				}
				case "tool-call":
					try {
						const toolCall = await parseToolCall({
							toolCall: chunk,
							tools,
							repairToolCall,
							system,
							messages
						});
						toolCallsByToolCallId.set(toolCall.toolCallId, toolCall);
						controller.enqueue(toolCall);
						if (toolCall.invalid) {
							toolResultsStreamController.enqueue({
								type: "tool-error",
								toolCallId: toolCall.toolCallId,
								toolName: toolCall.toolName,
								input: toolCall.input,
								error: getErrorMessage$1(toolCall.error),
								dynamic: true,
								title: toolCall.title,
								...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
							});
							break;
						}
						const tool2 = tools == null ? void 0 : tools[toolCall.toolName];
						if (tool2 == null) break;
						if (tool2.onInputAvailable != null) await tool2.onInputAvailable({
							input: toolCall.input,
							toolCallId: toolCall.toolCallId,
							messages,
							abortSignal,
							experimental_context
						});
						if (await isApprovalNeeded({
							tool: tool2,
							toolCall,
							messages,
							experimental_context
						})) {
							const approvalId = generateId2();
							const signature = await maybeSignApproval({
								secret: toolApprovalSecret,
								approvalId,
								toolCallId: toolCall.toolCallId,
								toolName: toolCall.toolName,
								input: toolCall.input
							});
							toolResultsStreamController.enqueue({
								type: "tool-approval-request",
								approvalId,
								toolCall,
								...signature != null ? { signature } : {}
							});
							break;
						}
						toolInputs.set(toolCall.toolCallId, toolCall.input);
						if (tool2.execute != null && toolCall.providerExecuted !== true) {
							const toolExecutionId = generateId2();
							outstandingToolResults.add(toolExecutionId);
							executeToolCall({
								toolCall,
								tools,
								tracer,
								telemetry,
								messages,
								abortSignal,
								experimental_context,
								stepNumber,
								model,
								onToolCallStart,
								onToolCallFinish,
								onPreliminaryToolResult: (result) => {
									toolResultsStreamController.enqueue(result);
								}
							}).then((result) => {
								toolResultsStreamController.enqueue(result);
							}).catch((error) => {
								toolResultsStreamController.enqueue({
									type: "error",
									error
								});
							}).finally(() => {
								outstandingToolResults.delete(toolExecutionId);
								attemptClose();
							});
						}
					} catch (error) {
						toolResultsStreamController.enqueue({
							type: "error",
							error
						});
					}
					break;
				case "tool-result": {
					const toolName = chunk.toolName;
					const toolCall = toolCallsByToolCallId.get(chunk.toolCallId);
					if (chunk.isError) toolResultsStreamController.enqueue({
						type: "tool-error",
						toolCallId: chunk.toolCallId,
						toolName,
						input: toolInputs.get(chunk.toolCallId),
						providerExecuted: true,
						error: chunk.result,
						dynamic: chunk.dynamic,
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {},
						...(toolCall == null ? void 0 : toolCall.toolMetadata) != null ? { toolMetadata: toolCall.toolMetadata } : {}
					});
					else controller.enqueue({
						type: "tool-result",
						toolCallId: chunk.toolCallId,
						toolName,
						input: toolInputs.get(chunk.toolCallId),
						output: chunk.result,
						providerExecuted: true,
						dynamic: chunk.dynamic,
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {},
						...(toolCall == null ? void 0 : toolCall.toolMetadata) != null ? { toolMetadata: toolCall.toolMetadata } : {}
					});
					break;
				}
				default: throw new Error(`Unhandled chunk type: ${chunkType}`);
			}
		},
		flush() {
			canClose = true;
			attemptClose();
		}
	});
	return new ReadableStream({ async start(controller) {
		return Promise.all([generatorStream.pipeThrough(forwardStream).pipeTo(new WritableStream({
			write(chunk) {
				controller.enqueue(chunk);
			},
			close() {}
		})), toolResultsStream.pipeTo(new WritableStream({
			write(chunk) {
				controller.enqueue(chunk);
			},
			close() {
				controller.close();
			}
		}))]);
	} });
}
var originalGenerateId2 = createIdGenerator({
	prefix: "aitxt",
	size: 24
});
var isOutputChunkType = {
	file: true,
	source: true,
	"text-start": true,
	"text-end": true,
	"text-delta": true,
	"reasoning-start": true,
	"reasoning-end": true,
	"reasoning-delta": true,
	"tool-input-start": true,
	"tool-input-end": true,
	"tool-input-delta": true,
	"tool-approval-request": true,
	"tool-call": true,
	"tool-result": true,
	"tool-error": true,
	"stream-start": false,
	"response-metadata": false,
	finish: false,
	error: false,
	raw: false
};
function streamText({ model, tools, toolChoice, system, prompt, messages, allowSystemInMessages, maxRetries, abortSignal, timeout, headers, stopWhen = stepCountIs(1), experimental_output, output = experimental_output, experimental_telemetry: telemetry, prepareStep, providerOptions, experimental_activeTools, activeTools = experimental_activeTools, experimental_repairToolCall: repairToolCall, experimental_transform: transform, experimental_download: download2, includeRawChunks = false, onChunk, onError = ({ error }) => {
	console.error(error);
}, onFinish, onAbort, onStepFinish, experimental_onStart: onStart, experimental_onStepStart: onStepStart, experimental_onToolCallStart: onToolCallStart, experimental_onToolCallFinish: onToolCallFinish, experimental_context, experimental_toolApprovalSecret, experimental_include: include, _internal: { now: now2 = now, generateId: generateId2 = originalGenerateId2 } = {}, ...settings }) {
	const totalTimeoutMs = getTotalTimeoutMs(timeout);
	const stepTimeoutMs = getStepTimeoutMs(timeout);
	const chunkTimeoutMs = getChunkTimeoutMs(timeout);
	const stepAbortController = stepTimeoutMs != null ? new AbortController() : void 0;
	const chunkAbortController = chunkTimeoutMs != null ? new AbortController() : void 0;
	return new DefaultStreamTextResult({
		model: resolveLanguageModel(model),
		telemetry,
		headers,
		settings,
		maxRetries,
		abortSignal: mergeAbortSignals(abortSignal, totalTimeoutMs != null ? AbortSignal.timeout(totalTimeoutMs) : void 0, stepAbortController == null ? void 0 : stepAbortController.signal, chunkAbortController == null ? void 0 : chunkAbortController.signal),
		stepTimeoutMs,
		stepAbortController,
		chunkTimeoutMs,
		chunkAbortController,
		system,
		prompt,
		messages,
		allowSystemInMessages,
		tools,
		toolChoice,
		transforms: asArray(transform),
		activeTools,
		repairToolCall,
		stopConditions: asArray(stopWhen),
		output,
		providerOptions,
		prepareStep,
		includeRawChunks,
		timeout,
		stopWhen,
		originalAbortSignal: abortSignal,
		onChunk,
		onError,
		onFinish,
		onAbort,
		onStepFinish,
		onStart,
		onStepStart,
		onToolCallStart,
		onToolCallFinish,
		now: now2,
		generateId: generateId2,
		experimental_context,
		experimental_toolApprovalSecret,
		download: download2,
		include
	});
}
function createOutputTransformStream(output) {
	let firstTextChunkId = void 0;
	let text2 = "";
	let textChunk = "";
	let textProviderMetadata = void 0;
	let lastPublishedValue = "";
	function publishTextChunk({ controller, partialOutput = void 0 }) {
		controller.enqueue({
			part: {
				type: "text-delta",
				id: firstTextChunkId,
				text: textChunk,
				providerMetadata: textProviderMetadata
			},
			partialOutput
		});
		textChunk = "";
	}
	return new TransformStream({ async transform(chunk, controller) {
		var _a22;
		if (chunk.type === "finish-step" && textChunk.length > 0) publishTextChunk({ controller });
		if (chunk.type !== "text-delta" && chunk.type !== "text-start" && chunk.type !== "text-end") {
			controller.enqueue({
				part: chunk,
				partialOutput: void 0
			});
			return;
		}
		if (firstTextChunkId == null) firstTextChunkId = chunk.id;
		else if (chunk.id !== firstTextChunkId) {
			controller.enqueue({
				part: chunk,
				partialOutput: void 0
			});
			return;
		}
		if (chunk.type === "text-start") {
			controller.enqueue({
				part: chunk,
				partialOutput: void 0
			});
			return;
		}
		if (chunk.type === "text-end") {
			if (textChunk.length > 0) publishTextChunk({ controller });
			controller.enqueue({
				part: chunk,
				partialOutput: void 0
			});
			return;
		}
		text2 += chunk.text;
		textChunk += chunk.text;
		textProviderMetadata = (_a22 = chunk.providerMetadata) != null ? _a22 : textProviderMetadata;
		const result = await output.parsePartialOutput({ text: text2 });
		if (result !== void 0) {
			const currentValue = typeof result.partial === "string" ? result.partial : JSON.stringify(result.partial);
			if (currentValue !== lastPublishedValue) {
				publishTextChunk({
					controller,
					partialOutput: result.partial
				});
				lastPublishedValue = currentValue;
			}
		}
	} });
}
var DefaultStreamTextResult = class {
	constructor({ model, telemetry, headers, settings, maxRetries: maxRetriesArg, abortSignal, stepTimeoutMs, stepAbortController, chunkTimeoutMs, chunkAbortController, system, prompt, messages, allowSystemInMessages, tools, toolChoice, transforms, activeTools, repairToolCall, stopConditions, output, providerOptions, prepareStep, includeRawChunks, now: now2, generateId: generateId2, timeout, stopWhen, originalAbortSignal, onChunk, onError, onFinish, onAbort, onStepFinish, onStart, onStepStart, onToolCallStart, onToolCallFinish, experimental_context, experimental_toolApprovalSecret, download: download2, include }) {
		this._totalUsage = new DelayedPromise();
		this._finishReason = new DelayedPromise();
		this._rawFinishReason = new DelayedPromise();
		this._steps = new DelayedPromise();
		this.outputSpecification = output;
		this.includeRawChunks = includeRawChunks;
		this.tools = tools;
		const globalTelemetry = getGlobalTelemetryIntegration()(telemetry == null ? void 0 : telemetry.integrations);
		let stepFinish;
		let recordedContent = [];
		const recordedResponseMessages = [];
		let recordedFinishReason = void 0;
		let recordedRawFinishReason = void 0;
		let recordedTotalUsage = void 0;
		let recordedRequest = {};
		let recordedWarnings = [];
		const recordedSteps = [];
		let recordedNoOutputError;
		const pendingDeferredToolCalls = /* @__PURE__ */ new Map();
		let rootSpan;
		let activeTextContent = createIdMap();
		let activeReasoningContent = createIdMap();
		const eventProcessor = new TransformStream({
			async transform(chunk, controller) {
				var _a22, _b, _c, _d;
				controller.enqueue(chunk);
				const { part } = chunk;
				if (part.type === "text-delta" || part.type === "reasoning-delta" || part.type === "source" || part.type === "tool-call" || part.type === "tool-result" || part.type === "tool-input-start" || part.type === "tool-input-delta" || part.type === "raw") await (onChunk == null ? void 0 : onChunk({ chunk: part }));
				if (part.type === "error") {
					const error = wrapGatewayError(part.error);
					if (NoOutputGeneratedError.isInstance(error)) recordedNoOutputError = error;
					await onError({ error });
				}
				if (part.type === "text-start") {
					activeTextContent[part.id] = {
						type: "text",
						text: "",
						providerMetadata: part.providerMetadata
					};
					recordedContent.push(activeTextContent[part.id]);
				}
				if (part.type === "text-delta") {
					const activeText = activeTextContent[part.id];
					if (activeText == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `text part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeText.text += part.text;
					activeText.providerMetadata = (_a22 = part.providerMetadata) != null ? _a22 : activeText.providerMetadata;
				}
				if (part.type === "text-end") {
					const activeText = activeTextContent[part.id];
					if (activeText == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `text part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeText.providerMetadata = (_b = part.providerMetadata) != null ? _b : activeText.providerMetadata;
					delete activeTextContent[part.id];
				}
				if (part.type === "reasoning-start") {
					activeReasoningContent[part.id] = {
						type: "reasoning",
						text: "",
						providerMetadata: part.providerMetadata
					};
					recordedContent.push(activeReasoningContent[part.id]);
				}
				if (part.type === "reasoning-delta") {
					const activeReasoning = activeReasoningContent[part.id];
					if (activeReasoning == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `reasoning part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeReasoning.text += part.text;
					activeReasoning.providerMetadata = (_c = part.providerMetadata) != null ? _c : activeReasoning.providerMetadata;
				}
				if (part.type === "reasoning-end") {
					const activeReasoning = activeReasoningContent[part.id];
					if (activeReasoning == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `reasoning part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeReasoning.providerMetadata = (_d = part.providerMetadata) != null ? _d : activeReasoning.providerMetadata;
					delete activeReasoningContent[part.id];
				}
				if (part.type === "file") recordedContent.push({
					type: "file",
					file: part.file,
					...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
				});
				if (part.type === "source") recordedContent.push(part);
				if (part.type === "tool-call") recordedContent.push(part);
				if (part.type === "tool-result" && !part.preliminary) recordedContent.push(part);
				if (part.type === "tool-approval-request") recordedContent.push(part);
				if (part.type === "tool-error") recordedContent.push(part);
				if (part.type === "start-step") {
					recordedContent = [];
					activeReasoningContent = createIdMap();
					activeTextContent = createIdMap();
					recordedRequest = part.request;
					recordedWarnings = part.warnings;
				}
				if (part.type === "finish-step") {
					const stepMessages = await toResponseMessages({
						content: recordedContent,
						tools
					});
					const currentStepResult = new DefaultStepResult({
						stepNumber: recordedSteps.length,
						model: modelInfo,
						...callbackTelemetryProps,
						experimental_context,
						content: recordedContent,
						finishReason: part.finishReason,
						rawFinishReason: part.rawFinishReason,
						usage: part.usage,
						warnings: recordedWarnings,
						request: recordedRequest,
						response: {
							...part.response,
							messages: [...recordedResponseMessages, ...stepMessages]
						},
						providerMetadata: part.providerMetadata
					});
					await notify({
						event: currentStepResult,
						callbacks: [onStepFinish, globalTelemetry.onStepFinish]
					});
					logWarnings({
						warnings: recordedWarnings,
						provider: modelInfo.provider,
						model: modelInfo.modelId
					});
					recordedSteps.push(currentStepResult);
					recordedResponseMessages.push(...stepMessages);
					stepFinish.resolve();
				}
				if (part.type === "finish") {
					recordedTotalUsage = part.totalUsage;
					recordedFinishReason = part.finishReason;
					recordedRawFinishReason = part.rawFinishReason;
				}
			},
			async flush(controller) {
				var _a22, _b, _c, _d, _e, _f, _g;
				try {
					if (recordedSteps.length === 0 || recordedNoOutputError != null) {
						const error = (abortSignal == null ? void 0 : abortSignal.aborted) ? abortSignal.reason : recordedNoOutputError != null ? recordedNoOutputError : new NoOutputGeneratedError({ message: "No output generated. Check the stream for errors." });
						self._finishReason.reject(error);
						self._rawFinishReason.reject(error);
						self._totalUsage.reject(error);
						self._steps.reject(error);
						return;
					}
					const finishReason = recordedFinishReason != null ? recordedFinishReason : "other";
					const totalUsage = recordedTotalUsage != null ? recordedTotalUsage : createNullLanguageModelUsage();
					self._finishReason.resolve(finishReason);
					self._rawFinishReason.resolve(recordedRawFinishReason);
					self._totalUsage.resolve(totalUsage);
					self._steps.resolve(recordedSteps);
					const finalStep = recordedSteps[recordedSteps.length - 1];
					await notify({
						event: {
							stepNumber: finalStep.stepNumber,
							model: finalStep.model,
							functionId: finalStep.functionId,
							metadata: finalStep.metadata,
							experimental_context: finalStep.experimental_context,
							finishReason: finalStep.finishReason,
							rawFinishReason: finalStep.rawFinishReason,
							totalUsage,
							usage: finalStep.usage,
							content: finalStep.content,
							text: finalStep.text,
							reasoningText: finalStep.reasoningText,
							reasoning: finalStep.reasoning,
							files: finalStep.files,
							sources: finalStep.sources,
							toolCalls: finalStep.toolCalls,
							staticToolCalls: finalStep.staticToolCalls,
							dynamicToolCalls: finalStep.dynamicToolCalls,
							toolResults: finalStep.toolResults,
							staticToolResults: finalStep.staticToolResults,
							dynamicToolResults: finalStep.dynamicToolResults,
							request: finalStep.request,
							response: finalStep.response,
							warnings: finalStep.warnings,
							providerMetadata: finalStep.providerMetadata,
							steps: recordedSteps
						},
						callbacks: [onFinish, globalTelemetry.onFinish]
					});
					rootSpan.setAttributes(await selectTelemetryAttributes({
						telemetry,
						attributes: {
							"ai.response.finishReason": finishReason,
							"ai.response.text": { output: () => finalStep.text },
							"ai.response.reasoning": { output: () => finalStep.reasoningText },
							"ai.response.toolCalls": { output: () => {
								var _a23;
								return ((_a23 = finalStep.toolCalls) == null ? void 0 : _a23.length) ? JSON.stringify(finalStep.toolCalls) : void 0;
							} },
							"ai.response.providerMetadata": JSON.stringify(finalStep.providerMetadata),
							"ai.usage.inputTokens": totalUsage.inputTokens,
							"ai.usage.inputTokenDetails.noCacheTokens": (_a22 = totalUsage.inputTokenDetails) == null ? void 0 : _a22.noCacheTokens,
							"ai.usage.inputTokenDetails.cacheReadTokens": (_b = totalUsage.inputTokenDetails) == null ? void 0 : _b.cacheReadTokens,
							"ai.usage.inputTokenDetails.cacheWriteTokens": (_c = totalUsage.inputTokenDetails) == null ? void 0 : _c.cacheWriteTokens,
							"ai.usage.outputTokens": totalUsage.outputTokens,
							"ai.usage.outputTokenDetails.textTokens": (_d = totalUsage.outputTokenDetails) == null ? void 0 : _d.textTokens,
							"ai.usage.outputTokenDetails.reasoningTokens": (_e = totalUsage.outputTokenDetails) == null ? void 0 : _e.reasoningTokens,
							"ai.usage.totalTokens": totalUsage.totalTokens,
							"ai.usage.reasoningTokens": (_f = totalUsage.outputTokenDetails) == null ? void 0 : _f.reasoningTokens,
							"ai.usage.cachedInputTokens": (_g = totalUsage.inputTokenDetails) == null ? void 0 : _g.cacheReadTokens
						}
					}));
				} catch (error) {
					controller.error(error);
				} finally {
					rootSpan.end();
				}
			}
		});
		const stitchableStream = createStitchableStream();
		this.addStream = stitchableStream.addStream;
		this.closeStream = stitchableStream.close;
		const reader = stitchableStream.stream.getReader();
		let stream = new ReadableStream({
			async start(controller) {
				controller.enqueue({ type: "start" });
			},
			async pull(controller) {
				function abort() {
					onAbort?.({ steps: recordedSteps });
					controller.enqueue({
						type: "abort",
						...(abortSignal == null ? void 0 : abortSignal.reason) !== void 0 ? { reason: getErrorMessage(abortSignal.reason) } : {}
					});
					controller.close();
				}
				try {
					const { done, value } = await reader.read();
					if (done) {
						controller.close();
						return;
					}
					if (abortSignal == null ? void 0 : abortSignal.aborted) {
						abort();
						return;
					}
					controller.enqueue(value);
				} catch (error) {
					if (isAbortError(error) && (abortSignal == null ? void 0 : abortSignal.aborted)) abort();
					else controller.error(error);
				}
			},
			cancel(reason) {
				return stitchableStream.stream.cancel(reason);
			}
		});
		for (const transform of transforms) stream = stream.pipeThrough(transform({
			tools,
			stopStream() {
				stitchableStream.terminate();
			}
		}));
		this.baseStream = stream.pipeThrough(createOutputTransformStream(output != null ? output : text())).pipeThrough(eventProcessor);
		const { maxRetries, retry } = prepareRetries({
			maxRetries: maxRetriesArg,
			abortSignal
		});
		const tracer = getTracer(telemetry);
		const callSettings = prepareCallSettings(settings);
		const baseTelemetryAttributes = getBaseTelemetryAttributes({
			model,
			telemetry,
			headers,
			settings: {
				...callSettings,
				maxRetries
			}
		});
		const self = this;
		const modelInfo = {
			provider: model.provider,
			modelId: model.modelId
		};
		const callbackTelemetryProps = {
			functionId: telemetry == null ? void 0 : telemetry.functionId,
			metadata: telemetry == null ? void 0 : telemetry.metadata
		};
		recordSpan({
			name: "ai.streamText",
			attributes: selectTelemetryAttributes({
				telemetry,
				attributes: {
					...assembleOperationName({
						operationId: "ai.streamText",
						telemetry
					}),
					...baseTelemetryAttributes,
					"ai.prompt": { input: () => JSON.stringify({
						system,
						prompt,
						messages
					}) }
				}
			}),
			tracer,
			endWhenDone: false,
			fn: async (rootSpanArg) => {
				rootSpan = rootSpanArg;
				const initialPrompt = await standardizePrompt({
					system,
					prompt,
					messages,
					allowSystemInMessages
				});
				await notify({
					event: {
						model: modelInfo,
						system,
						prompt,
						messages,
						tools,
						toolChoice,
						activeTools,
						maxOutputTokens: callSettings.maxOutputTokens,
						temperature: callSettings.temperature,
						topP: callSettings.topP,
						topK: callSettings.topK,
						presencePenalty: callSettings.presencePenalty,
						frequencyPenalty: callSettings.frequencyPenalty,
						stopSequences: callSettings.stopSequences,
						seed: callSettings.seed,
						maxRetries,
						timeout,
						headers,
						providerOptions,
						stopWhen,
						output,
						abortSignal: originalAbortSignal,
						include,
						...callbackTelemetryProps,
						experimental_context
					},
					callbacks: [onStart, globalTelemetry.onStart]
				});
				const initialMessages = initialPrompt.messages;
				const initialResponseMessages = [];
				const { approvedToolApprovals, deniedToolApprovals } = collectToolApprovals({ messages: initialMessages });
				if (deniedToolApprovals.length > 0 || approvedToolApprovals.length > 0) {
					const { approvedToolApprovals: localApprovedToolApprovals, deniedToolApprovals: revalidationDeniedToolApprovals } = await validateApprovedToolApprovals({
						approvedToolApprovals: approvedToolApprovals.filter((toolApproval) => !toolApproval.toolCall.providerExecuted),
						tools,
						messages: initialMessages,
						experimental_context,
						toolApprovalSecret: experimental_toolApprovalSecret
					});
					const localDeniedToolApprovals = [...deniedToolApprovals.filter((toolApproval) => !toolApproval.toolCall.providerExecuted), ...revalidationDeniedToolApprovals];
					const deniedProviderExecutedToolApprovals = deniedToolApprovals.filter((toolApproval) => toolApproval.toolCall.providerExecuted);
					let toolExecutionStepStreamController;
					const toolExecutionStepStream = new ReadableStream({ start(controller) {
						toolExecutionStepStreamController = controller;
					} });
					self.addStream(toolExecutionStepStream);
					try {
						for (const toolApproval of [...localDeniedToolApprovals, ...deniedProviderExecutedToolApprovals]) toolExecutionStepStreamController?.enqueue({
							type: "tool-output-denied",
							toolCallId: toolApproval.toolCall.toolCallId,
							toolName: toolApproval.toolCall.toolName
						});
						const toolOutputs = [];
						await Promise.all(localApprovedToolApprovals.map(async (toolApproval) => {
							const result = await executeToolCall({
								toolCall: toolApproval.toolCall,
								tools,
								tracer,
								telemetry,
								messages: initialMessages,
								abortSignal,
								experimental_context,
								stepNumber: recordedSteps.length,
								model: modelInfo,
								onToolCallStart: [onToolCallStart, globalTelemetry.onToolCallStart],
								onToolCallFinish: [onToolCallFinish, globalTelemetry.onToolCallFinish],
								onPreliminaryToolResult: (result2) => {
									toolExecutionStepStreamController?.enqueue(result2);
								}
							});
							if (result != null) {
								toolExecutionStepStreamController?.enqueue(result);
								toolOutputs.push(result);
							}
						}));
						if (toolOutputs.length > 0 || localDeniedToolApprovals.length > 0) {
							const localToolContent = [];
							for (const output2 of toolOutputs) localToolContent.push({
								type: "tool-result",
								toolCallId: output2.toolCallId,
								toolName: output2.toolName,
								output: await createToolModelOutput({
									toolCallId: output2.toolCallId,
									input: output2.input,
									tool: tools == null ? void 0 : tools[output2.toolName],
									output: output2.type === "tool-result" ? output2.output : output2.error,
									errorMode: output2.type === "tool-error" ? "text" : "none"
								})
							});
							for (const toolApproval of localDeniedToolApprovals) localToolContent.push({
								type: "tool-result",
								toolCallId: toolApproval.toolCall.toolCallId,
								toolName: toolApproval.toolCall.toolName,
								output: {
									type: "execution-denied",
									reason: toolApproval.approvalResponse.reason
								}
							});
							initialResponseMessages.push({
								role: "tool",
								content: localToolContent
							});
						}
					} finally {
						toolExecutionStepStreamController?.close();
					}
				}
				recordedResponseMessages.push(...initialResponseMessages);
				async function streamStep({ currentStep, responseMessages, usage }) {
					var _a22, _b, _c, _d, _e, _f, _g, _h, _i;
					const includeRawChunks2 = self.includeRawChunks;
					const stepTimeoutId = stepTimeoutMs != null ? setTimeout(() => stepAbortController.abort(), stepTimeoutMs) : void 0;
					let chunkTimeoutId = void 0;
					function resetChunkTimeout() {
						if (chunkTimeoutMs != null) {
							if (chunkTimeoutId != null) clearTimeout(chunkTimeoutId);
							chunkTimeoutId = setTimeout(() => chunkAbortController.abort(), chunkTimeoutMs);
						}
					}
					function clearChunkTimeout() {
						if (chunkTimeoutId != null) {
							clearTimeout(chunkTimeoutId);
							chunkTimeoutId = void 0;
						}
					}
					function clearStepTimeout() {
						if (stepTimeoutId != null) clearTimeout(stepTimeoutId);
					}
					try {
						stepFinish = new DelayedPromise();
						const stepInputMessages = [...initialMessages, ...responseMessages];
						const prepareStepResult = await (prepareStep == null ? void 0 : prepareStep({
							model,
							steps: recordedSteps,
							stepNumber: recordedSteps.length,
							messages: stepInputMessages,
							experimental_context
						}));
						const stepModel = resolveLanguageModel((_a22 = prepareStepResult == null ? void 0 : prepareStepResult.model) != null ? _a22 : model);
						const stepModelInfo = {
							provider: stepModel.provider,
							modelId: stepModel.modelId
						};
						const promptMessages = await convertToLanguageModelPrompt({
							prompt: {
								system: (_b = prepareStepResult == null ? void 0 : prepareStepResult.system) != null ? _b : initialPrompt.system,
								messages: (_c = prepareStepResult == null ? void 0 : prepareStepResult.messages) != null ? _c : stepInputMessages
							},
							supportedUrls: await stepModel.supportedUrls,
							download: download2
						});
						const stepActiveTools = (_d = prepareStepResult == null ? void 0 : prepareStepResult.activeTools) != null ? _d : activeTools;
						const { toolChoice: stepToolChoice, tools: stepTools } = await prepareToolsAndToolChoice({
							tools,
							toolChoice: (_e = prepareStepResult == null ? void 0 : prepareStepResult.toolChoice) != null ? _e : toolChoice,
							activeTools: stepActiveTools
						});
						experimental_context = (_f = prepareStepResult == null ? void 0 : prepareStepResult.experimental_context) != null ? _f : experimental_context;
						const stepMessages = (_g = prepareStepResult == null ? void 0 : prepareStepResult.messages) != null ? _g : stepInputMessages;
						const stepSystem = (_h = prepareStepResult == null ? void 0 : prepareStepResult.system) != null ? _h : initialPrompt.system;
						const stepProviderOptions = mergeObjects(providerOptions, prepareStepResult == null ? void 0 : prepareStepResult.providerOptions);
						await notify({
							event: {
								stepNumber: recordedSteps.length,
								model: stepModelInfo,
								system: stepSystem,
								messages: stepMessages,
								tools,
								toolChoice: stepToolChoice,
								activeTools: stepActiveTools,
								steps: [...recordedSteps],
								providerOptions: stepProviderOptions,
								timeout,
								headers,
								stopWhen,
								output,
								abortSignal: originalAbortSignal,
								include,
								...callbackTelemetryProps,
								experimental_context
							},
							callbacks: [onStepStart, globalTelemetry.onStepStart]
						});
						const { result: { stream: stream2, response, request }, doStreamSpan, startTimestampMs } = await retry(() => recordSpan({
							name: "ai.streamText.doStream",
							attributes: selectTelemetryAttributes({
								telemetry,
								attributes: {
									...assembleOperationName({
										operationId: "ai.streamText.doStream",
										telemetry
									}),
									...baseTelemetryAttributes,
									"ai.model.provider": stepModel.provider,
									"ai.model.id": stepModel.modelId,
									"ai.prompt.messages": { input: () => stringifyForTelemetry(promptMessages) },
									"ai.prompt.tools": { input: () => stepTools == null ? void 0 : stepTools.map((tool2) => JSON.stringify(tool2)) },
									"ai.prompt.toolChoice": { input: () => stepToolChoice != null ? JSON.stringify(stepToolChoice) : void 0 },
									"gen_ai.system": stepModel.provider,
									"gen_ai.request.model": stepModel.modelId,
									"gen_ai.request.frequency_penalty": callSettings.frequencyPenalty,
									"gen_ai.request.max_tokens": callSettings.maxOutputTokens,
									"gen_ai.request.presence_penalty": callSettings.presencePenalty,
									"gen_ai.request.stop_sequences": callSettings.stopSequences,
									"gen_ai.request.temperature": callSettings.temperature,
									"gen_ai.request.top_k": callSettings.topK,
									"gen_ai.request.top_p": callSettings.topP
								}
							}),
							tracer,
							endWhenDone: false,
							fn: async (doStreamSpan2) => ({
								startTimestampMs: now2(),
								doStreamSpan: doStreamSpan2,
								result: await stepModel.doStream({
									...callSettings,
									tools: stepTools,
									toolChoice: stepToolChoice,
									responseFormat: await (output == null ? void 0 : output.responseFormat),
									prompt: promptMessages,
									providerOptions: stepProviderOptions,
									abortSignal,
									headers,
									includeRawChunks: includeRawChunks2
								})
							})
						}));
						const streamWithToolResults = runToolsTransformation({
							tools,
							generatorStream: stream2,
							tracer,
							telemetry,
							system,
							messages: stepInputMessages,
							repairToolCall,
							abortSignal,
							experimental_context,
							toolApprovalSecret: experimental_toolApprovalSecret,
							generateId: generateId2,
							stepNumber: recordedSteps.length,
							model: stepModelInfo,
							onToolCallStart: [onToolCallStart, globalTelemetry.onToolCallStart],
							onToolCallFinish: [onToolCallFinish, globalTelemetry.onToolCallFinish]
						});
						const stepRequest = ((_i = include == null ? void 0 : include.requestBody) != null ? _i : true) ? request != null ? request : {} : {
							...request,
							body: void 0
						};
						const stepToolCalls = [];
						const stepToolOutputs = [];
						let warnings;
						const activeToolCallToolNames = {};
						let stepFinishReason = "other";
						let stepRawFinishReason = void 0;
						let hasReceivedTerminalChunk = false;
						let hasReceivedOutputChunk = false;
						let stepUsage = createNullLanguageModelUsage();
						let stepProviderMetadata;
						let stepFirstChunk = true;
						let stepResponse = {
							id: generateId2(),
							timestamp: /* @__PURE__ */ new Date(),
							modelId: modelInfo.modelId
						};
						let activeText = "";
						self.addStream(streamWithToolResults.pipeThrough(new TransformStream({
							async transform(chunk, controller) {
								var _a23, _b2, _c2, _d2, _e2;
								resetChunkTimeout();
								if (chunk.type === "stream-start") {
									warnings = chunk.warnings;
									return;
								}
								if (stepFirstChunk) {
									const msToFirstChunk = now2() - startTimestampMs;
									stepFirstChunk = false;
									doStreamSpan.addEvent("ai.stream.firstChunk", { "ai.response.msToFirstChunk": msToFirstChunk });
									doStreamSpan.setAttributes({ "ai.response.msToFirstChunk": msToFirstChunk });
									controller.enqueue({
										type: "start-step",
										request: stepRequest,
										warnings: warnings != null ? warnings : []
									});
								}
								const chunkType = chunk.type;
								if (isOutputChunkType[chunkType]) hasReceivedOutputChunk = true;
								switch (chunkType) {
									case "tool-approval-request":
									case "text-start":
									case "text-end":
										controller.enqueue(chunk);
										break;
									case "text-delta":
										if (chunk.delta.length > 0) {
											controller.enqueue({
												type: "text-delta",
												id: chunk.id,
												text: chunk.delta,
												providerMetadata: chunk.providerMetadata
											});
											activeText += chunk.delta;
										}
										break;
									case "reasoning-start":
									case "reasoning-end":
										controller.enqueue(chunk);
										break;
									case "reasoning-delta":
										controller.enqueue({
											type: "reasoning-delta",
											id: chunk.id,
											text: chunk.delta,
											providerMetadata: chunk.providerMetadata
										});
										break;
									case "tool-call":
										controller.enqueue(chunk);
										stepToolCalls.push(chunk);
										break;
									case "tool-result":
										controller.enqueue(chunk);
										if (!chunk.preliminary) stepToolOutputs.push(chunk);
										break;
									case "tool-error":
										controller.enqueue(chunk);
										stepToolOutputs.push(chunk);
										break;
									case "response-metadata":
										stepResponse = {
											id: (_a23 = chunk.id) != null ? _a23 : stepResponse.id,
											timestamp: (_b2 = chunk.timestamp) != null ? _b2 : stepResponse.timestamp,
											modelId: (_c2 = chunk.modelId) != null ? _c2 : stepResponse.modelId
										};
										break;
									case "finish": {
										hasReceivedTerminalChunk = true;
										stepUsage = chunk.usage;
										stepFinishReason = chunk.finishReason;
										stepRawFinishReason = chunk.rawFinishReason;
										stepProviderMetadata = chunk.providerMetadata;
										const msToFinish = now2() - startTimestampMs;
										doStreamSpan.addEvent("ai.stream.finish");
										doStreamSpan.setAttributes({
											"ai.response.msToFinish": msToFinish,
											"ai.response.avgOutputTokensPerSecond": 1e3 * ((_d2 = stepUsage.outputTokens) != null ? _d2 : 0) / msToFinish
										});
										break;
									}
									case "file":
										controller.enqueue(chunk);
										break;
									case "source":
										controller.enqueue(chunk);
										break;
									case "tool-input-start": {
										activeToolCallToolNames[chunk.id] = chunk.toolName;
										const tool2 = tools == null ? void 0 : tools[chunk.toolName];
										if ((tool2 == null ? void 0 : tool2.onInputStart) != null) await tool2.onInputStart({
											toolCallId: chunk.id,
											messages: stepInputMessages,
											abortSignal,
											experimental_context
										});
										controller.enqueue({
											...chunk,
											dynamic: (_e2 = chunk.dynamic) != null ? _e2 : (tool2 == null ? void 0 : tool2.type) === "dynamic",
											title: tool2 == null ? void 0 : tool2.title
										});
										break;
									}
									case "tool-input-end":
										delete activeToolCallToolNames[chunk.id];
										controller.enqueue(chunk);
										break;
									case "tool-input-delta": {
										const toolName = activeToolCallToolNames[chunk.id];
										const tool2 = tools == null ? void 0 : tools[toolName];
										if ((tool2 == null ? void 0 : tool2.onInputDelta) != null) await tool2.onInputDelta({
											inputTextDelta: chunk.delta,
											toolCallId: chunk.id,
											messages: stepInputMessages,
											abortSignal,
											experimental_context
										});
										controller.enqueue(chunk);
										break;
									}
									case "error":
										hasReceivedTerminalChunk = true;
										controller.enqueue(chunk);
										stepFinishReason = "error";
										break;
									case "raw":
										if (includeRawChunks2) controller.enqueue(chunk);
										break;
									default: throw new Error(`Unknown chunk type: ${chunkType}`);
								}
							},
							async flush(controller) {
								var _a23, _b2, _c2, _d2, _e2, _f2, _g2;
								if (!hasReceivedTerminalChunk && !hasReceivedOutputChunk) {
									controller.enqueue({
										type: "error",
										error: new NoOutputGeneratedError({ message: "No output generated. The model stream ended without a finish chunk." })
									});
									doStreamSpan.end();
									clearStepTimeout();
									clearChunkTimeout();
									self.closeStream();
									return;
								}
								const stepToolCallsJson = stepToolCalls.length > 0 ? JSON.stringify(stepToolCalls) : void 0;
								try {
									doStreamSpan.setAttributes(await selectTelemetryAttributes({
										telemetry,
										attributes: {
											"ai.response.finishReason": stepFinishReason,
											"ai.response.toolCalls": { output: () => stepToolCallsJson },
											"ai.response.id": stepResponse.id,
											"ai.response.model": stepResponse.modelId,
											"ai.response.timestamp": stepResponse.timestamp.toISOString(),
											"ai.usage.inputTokens": stepUsage.inputTokens,
											"ai.usage.inputTokenDetails.noCacheTokens": (_a23 = stepUsage.inputTokenDetails) == null ? void 0 : _a23.noCacheTokens,
											"ai.usage.inputTokenDetails.cacheReadTokens": (_b2 = stepUsage.inputTokenDetails) == null ? void 0 : _b2.cacheReadTokens,
											"ai.usage.inputTokenDetails.cacheWriteTokens": (_c2 = stepUsage.inputTokenDetails) == null ? void 0 : _c2.cacheWriteTokens,
											"ai.usage.outputTokens": stepUsage.outputTokens,
											"ai.usage.outputTokenDetails.textTokens": (_d2 = stepUsage.outputTokenDetails) == null ? void 0 : _d2.textTokens,
											"ai.usage.outputTokenDetails.reasoningTokens": (_e2 = stepUsage.outputTokenDetails) == null ? void 0 : _e2.reasoningTokens,
											"ai.usage.totalTokens": stepUsage.totalTokens,
											"ai.usage.reasoningTokens": (_f2 = stepUsage.outputTokenDetails) == null ? void 0 : _f2.reasoningTokens,
											"ai.usage.cachedInputTokens": (_g2 = stepUsage.inputTokenDetails) == null ? void 0 : _g2.cacheReadTokens,
											"gen_ai.response.finish_reasons": [stepFinishReason],
											"gen_ai.response.id": stepResponse.id,
											"gen_ai.response.model": stepResponse.modelId,
											"gen_ai.usage.input_tokens": stepUsage.inputTokens,
											"gen_ai.usage.output_tokens": stepUsage.outputTokens
										}
									}));
								} catch (error) {}
								controller.enqueue({
									type: "finish-step",
									finishReason: stepFinishReason,
									rawFinishReason: stepRawFinishReason,
									usage: stepUsage,
									providerMetadata: stepProviderMetadata,
									response: {
										...stepResponse,
										headers: response == null ? void 0 : response.headers
									}
								});
								const combinedUsage = addLanguageModelUsage(usage, stepUsage);
								await stepFinish.promise;
								const processedStep = recordedSteps[recordedSteps.length - 1];
								try {
									doStreamSpan.setAttributes(await selectTelemetryAttributes({
										telemetry,
										attributes: {
											"ai.response.text": { output: () => processedStep.text },
											"ai.response.reasoning": { output: () => processedStep.reasoningText },
											"ai.response.providerMetadata": JSON.stringify(processedStep.providerMetadata)
										}
									}));
								} catch (error) {} finally {
									doStreamSpan.end();
								}
								const clientToolCalls = stepToolCalls.filter((toolCall) => toolCall.providerExecuted !== true);
								const clientToolOutputs = stepToolOutputs.filter((toolOutput) => toolOutput.providerExecuted !== true);
								for (const toolCall of stepToolCalls) {
									if (toolCall.providerExecuted !== true) continue;
									const tool2 = tools == null ? void 0 : tools[toolCall.toolName];
									if ((tool2 == null ? void 0 : tool2.type) === "provider" && tool2.supportsDeferredResults) {
										if (!stepToolOutputs.some((output2) => (output2.type === "tool-result" || output2.type === "tool-error") && output2.toolCallId === toolCall.toolCallId)) pendingDeferredToolCalls.set(toolCall.toolCallId, { toolName: toolCall.toolName });
									}
								}
								for (const output2 of stepToolOutputs) if (output2.type === "tool-result" || output2.type === "tool-error") pendingDeferredToolCalls.delete(output2.toolCallId);
								clearStepTimeout();
								clearChunkTimeout();
								if ((clientToolCalls.length > 0 && clientToolOutputs.length === clientToolCalls.length || pendingDeferredToolCalls.size > 0) && !await isStopConditionMet({
									stopConditions,
									steps: recordedSteps
								})) {
									responseMessages.push(...await toResponseMessages({
										content: recordedSteps[recordedSteps.length - 1].content,
										tools
									}));
									try {
										await streamStep({
											currentStep: currentStep + 1,
											responseMessages,
											usage: combinedUsage
										});
									} catch (error) {
										controller.enqueue({
											type: "error",
											error
										});
										self.closeStream();
									}
								} else {
									controller.enqueue({
										type: "finish",
										finishReason: stepFinishReason,
										rawFinishReason: stepRawFinishReason,
										totalUsage: combinedUsage
									});
									self.closeStream();
								}
							}
						})));
					} finally {
						clearStepTimeout();
						clearChunkTimeout();
					}
				}
				await streamStep({
					currentStep: 0,
					responseMessages: initialResponseMessages,
					usage: createNullLanguageModelUsage()
				});
			}
		}).catch((error) => {
			self.addStream(new ReadableStream({ start(controller) {
				controller.enqueue({
					type: "error",
					error
				});
				controller.close();
			} }));
			self.closeStream();
		});
	}
	get steps() {
		this.consumeStream();
		return this._steps.promise;
	}
	get finalStep() {
		return this.steps.then((steps) => steps[steps.length - 1]);
	}
	get content() {
		return this.finalStep.then((step) => step.content);
	}
	get warnings() {
		return this.finalStep.then((step) => step.warnings);
	}
	get providerMetadata() {
		return this.finalStep.then((step) => step.providerMetadata);
	}
	get text() {
		return this.finalStep.then((step) => step.text);
	}
	get reasoningText() {
		return this.finalStep.then((step) => step.reasoningText);
	}
	get reasoning() {
		return this.finalStep.then((step) => step.reasoning);
	}
	get sources() {
		return this.finalStep.then((step) => step.sources);
	}
	get files() {
		return this.finalStep.then((step) => step.files);
	}
	get toolCalls() {
		return this.finalStep.then((step) => step.toolCalls);
	}
	get staticToolCalls() {
		return this.finalStep.then((step) => step.staticToolCalls);
	}
	get dynamicToolCalls() {
		return this.finalStep.then((step) => step.dynamicToolCalls);
	}
	get toolResults() {
		return this.finalStep.then((step) => step.toolResults);
	}
	get staticToolResults() {
		return this.finalStep.then((step) => step.staticToolResults);
	}
	get dynamicToolResults() {
		return this.finalStep.then((step) => step.dynamicToolResults);
	}
	get usage() {
		return this.finalStep.then((step) => step.usage);
	}
	get request() {
		return this.finalStep.then((step) => step.request);
	}
	get response() {
		return this.finalStep.then((step) => step.response);
	}
	get totalUsage() {
		this.consumeStream();
		return this._totalUsage.promise;
	}
	get finishReason() {
		this.consumeStream();
		return this._finishReason.promise;
	}
	get rawFinishReason() {
		this.consumeStream();
		return this._rawFinishReason.promise;
	}
	/**
	* Split out a new stream from the original stream.
	* The original stream is replaced to allow for further splitting,
	* since we do not know how many times the stream will be split.
	*
	* Note: this leads to buffering the stream content on the server.
	* However, the LLM results are expected to be small enough to not cause issues.
	*/
	teeStream() {
		const [stream1, stream2] = this.baseStream.tee();
		this.baseStream = stream2;
		return stream1;
	}
	get textStream() {
		return createAsyncIterableStream(this.teeStream().pipeThrough(new TransformStream({ transform({ part }, controller) {
			if (part.type === "text-delta") controller.enqueue(part.text);
		} })));
	}
	get fullStream() {
		return createAsyncIterableStream(this.teeStream().pipeThrough(new TransformStream({ transform({ part }, controller) {
			controller.enqueue(part);
		} })));
	}
	rejectResultPromises(error) {
		if (this._finishReason.isPending()) this._finishReason.reject(error);
		if (this._rawFinishReason.isPending()) this._rawFinishReason.reject(error);
		if (this._totalUsage.isPending()) this._totalUsage.reject(error);
		if (this._steps.isPending()) this._steps.reject(error);
	}
	async consumeStream(options) {
		var _a22;
		try {
			await consumeStream({
				stream: this.fullStream,
				onError: (error) => {
					var _a23;
					this.rejectResultPromises(error);
					(_a23 = options == null ? void 0 : options.onError) == null || _a23.call(options, error);
				}
			});
		} catch (error) {
			this.rejectResultPromises(error);
			(_a22 = options == null ? void 0 : options.onError) == null || _a22.call(options, error);
		}
	}
	get experimental_partialOutputStream() {
		return this.partialOutputStream;
	}
	get partialOutputStream() {
		return createAsyncIterableStream(this.teeStream().pipeThrough(new TransformStream({ transform({ partialOutput }, controller) {
			if (partialOutput != null) controller.enqueue(partialOutput);
		} })));
	}
	get elementStream() {
		var _a22, _b, _c;
		const transform = (_a22 = this.outputSpecification) == null ? void 0 : _a22.createElementStreamTransform();
		if (transform == null) throw new UnsupportedFunctionalityError({ functionality: `element streams in ${(_c = (_b = this.outputSpecification) == null ? void 0 : _b.name) != null ? _c : "text"} mode` });
		return createAsyncIterableStream(this.teeStream().pipeThrough(transform));
	}
	get output() {
		return this.finalStep.then((step) => {
			var _a22;
			return ((_a22 = this.outputSpecification) != null ? _a22 : text()).parseCompleteOutput({ text: step.text }, {
				response: step.response,
				usage: step.usage,
				finishReason: step.finishReason
			});
		});
	}
	toUIMessageStream({ originalMessages, generateMessageId, onFinish, messageMetadata, sendReasoning = true, sendSources = false, sendStart = true, sendFinish = true, onError = () => "An error occurred." } = {}) {
		const responseMessageId = generateMessageId != null ? getResponseUIMessageId({
			originalMessages,
			responseMessageId: generateMessageId
		}) : void 0;
		const isDynamic = (part) => {
			var _a22;
			const tool2 = (_a22 = this.tools) == null ? void 0 : _a22[part.toolName];
			if (tool2 == null) return part.dynamic;
			return (tool2 == null ? void 0 : tool2.type) === "dynamic" ? true : void 0;
		};
		return createAsyncIterableStream(handleUIMessageStreamFinish({
			stream: this.fullStream.pipeThrough(new TransformStream({ transform: async (part, controller) => {
				const messageMetadataValue = messageMetadata == null ? void 0 : messageMetadata({ part });
				const partType = part.type;
				switch (partType) {
					case "text-start":
						controller.enqueue({
							type: "text-start",
							id: part.id,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "text-delta":
						controller.enqueue({
							type: "text-delta",
							id: part.id,
							delta: part.text,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "text-end":
						controller.enqueue({
							type: "text-end",
							id: part.id,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "reasoning-start":
					case "reasoning-end":
						if (sendReasoning) controller.enqueue({
							type: partType,
							id: part.id,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "reasoning-delta":
						if (sendReasoning) controller.enqueue({
							type: "reasoning-delta",
							id: part.id,
							delta: part.text,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "file":
						controller.enqueue({
							type: "file",
							mediaType: part.file.mediaType,
							url: `data:${part.file.mediaType};base64,${part.file.base64}`,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "source":
						if (sendSources && part.sourceType === "url") controller.enqueue({
							type: "source-url",
							sourceId: part.id,
							url: part.url,
							title: part.title,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						if (sendSources && part.sourceType === "document") controller.enqueue({
							type: "source-document",
							sourceId: part.id,
							mediaType: part.mediaType,
							title: part.title,
							filename: part.filename,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "tool-input-start": {
						const dynamic = isDynamic(part);
						controller.enqueue({
							type: "tool-input-start",
							toolCallId: part.id,
							toolName: part.toolName,
							...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
							...part.toolMetadata != null ? { toolMetadata: part.toolMetadata } : {},
							...dynamic != null ? { dynamic } : {},
							...part.title != null ? { title: part.title } : {}
						});
						break;
					}
					case "tool-input-delta":
						controller.enqueue({
							type: "tool-input-delta",
							toolCallId: part.id,
							inputTextDelta: part.delta
						});
						break;
					case "tool-call": {
						const dynamic = isDynamic(part);
						if (part.invalid) controller.enqueue({
							type: "tool-input-error",
							toolCallId: part.toolCallId,
							toolName: part.toolName,
							input: part.input,
							...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
							...part.toolMetadata != null ? { toolMetadata: part.toolMetadata } : {},
							...dynamic != null ? { dynamic } : {},
							errorText: onError(part.error),
							...part.title != null ? { title: part.title } : {}
						});
						else controller.enqueue({
							type: "tool-input-available",
							toolCallId: part.toolCallId,
							toolName: part.toolName,
							input: part.input,
							...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
							...part.toolMetadata != null ? { toolMetadata: part.toolMetadata } : {},
							...dynamic != null ? { dynamic } : {},
							...part.title != null ? { title: part.title } : {}
						});
						break;
					}
					case "tool-approval-request":
						controller.enqueue({
							type: "tool-approval-request",
							approvalId: part.approvalId,
							toolCallId: part.toolCall.toolCallId,
							...part.signature != null ? { signature: part.signature } : {}
						});
						break;
					case "tool-result": {
						const dynamic = isDynamic(part);
						controller.enqueue({
							type: "tool-output-available",
							toolCallId: part.toolCallId,
							output: part.output,
							...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
							...part.toolMetadata != null ? { toolMetadata: part.toolMetadata } : {},
							...part.preliminary != null ? { preliminary: part.preliminary } : {},
							...dynamic != null ? { dynamic } : {}
						});
						break;
					}
					case "tool-error": {
						const dynamic = isDynamic(part);
						controller.enqueue({
							type: "tool-output-error",
							toolCallId: part.toolCallId,
							errorText: part.providerExecuted ? typeof part.error === "string" ? part.error : JSON.stringify(part.error) : onError(part.error),
							...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
							...part.toolMetadata != null ? { toolMetadata: part.toolMetadata } : {},
							...dynamic != null ? { dynamic } : {}
						});
						break;
					}
					case "tool-output-denied":
						controller.enqueue({
							type: "tool-output-denied",
							toolCallId: part.toolCallId
						});
						break;
					case "error":
						controller.enqueue({
							type: "error",
							errorText: onError(part.error)
						});
						break;
					case "start-step":
						controller.enqueue({ type: "start-step" });
						break;
					case "finish-step":
						controller.enqueue({ type: "finish-step" });
						break;
					case "start":
						if (sendStart) controller.enqueue({
							type: "start",
							...messageMetadataValue != null ? { messageMetadata: messageMetadataValue } : {},
							...responseMessageId != null ? { messageId: responseMessageId } : {}
						});
						break;
					case "finish":
						if (sendFinish) controller.enqueue({
							type: "finish",
							finishReason: part.finishReason,
							...messageMetadataValue != null ? { messageMetadata: messageMetadataValue } : {}
						});
						break;
					case "abort":
						controller.enqueue(part);
						break;
					case "tool-input-end": break;
					case "raw": break;
					default: throw new Error(`Unknown chunk type: ${partType}`);
				}
				if (messageMetadataValue != null && partType !== "start" && partType !== "finish") controller.enqueue({
					type: "message-metadata",
					messageMetadata: messageMetadataValue
				});
			} })),
			messageId: responseMessageId != null ? responseMessageId : generateMessageId == null ? void 0 : generateMessageId(),
			originalMessages,
			onFinish,
			onError
		}));
	}
	pipeUIMessageStreamToResponse(response, { originalMessages, generateMessageId, onFinish, messageMetadata, sendReasoning, sendSources, sendFinish, sendStart, onError, ...init } = {}) {
		pipeUIMessageStreamToResponse({
			response,
			stream: this.toUIMessageStream({
				originalMessages,
				generateMessageId,
				onFinish,
				messageMetadata,
				sendReasoning,
				sendSources,
				sendFinish,
				sendStart,
				onError
			}),
			...init
		});
	}
	pipeTextStreamToResponse(response, init) {
		pipeTextStreamToResponse({
			response,
			textStream: this.textStream,
			...init
		});
	}
	toUIMessageStreamResponse({ originalMessages, generateMessageId, onFinish, messageMetadata, sendReasoning, sendSources, sendFinish, sendStart, onError, ...init } = {}) {
		return createUIMessageStreamResponse({
			stream: this.toUIMessageStream({
				originalMessages,
				generateMessageId,
				onFinish,
				messageMetadata,
				sendReasoning,
				sendSources,
				sendFinish,
				sendStart,
				onError
			}),
			...init
		});
	}
	toTextStreamResponse(init) {
		return createTextStreamResponse({
			textStream: this.textStream,
			...init
		});
	}
};
async function convertToModelMessages(messages, options) {
	const modelMessages = [];
	if (options == null ? void 0 : options.ignoreIncompleteToolCalls) messages = messages.map((message) => ({
		...message,
		parts: message.parts.filter((part) => !isToolUIPart(part) || part.state !== "input-streaming" && part.state !== "input-available")
	}));
	for (const message of messages) switch (message.role) {
		case "system": {
			const textParts = message.parts.filter((part) => part.type === "text");
			const providerMetadata = textParts.reduce((acc, part) => {
				if (part.providerMetadata != null) return {
					...acc,
					...part.providerMetadata
				};
				return acc;
			}, {});
			modelMessages.push({
				role: "system",
				content: textParts.map((part) => part.text).join(""),
				...Object.keys(providerMetadata).length > 0 ? { providerOptions: providerMetadata } : {}
			});
			break;
		}
		case "user":
			modelMessages.push({
				role: "user",
				content: message.parts.map((part) => {
					var _a22;
					if (isTextUIPart(part)) return {
						type: "text",
						text: part.text,
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					};
					if (isFileUIPart(part)) return {
						type: "file",
						mediaType: part.mediaType,
						filename: part.filename,
						data: part.url,
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					};
					if (isDataUIPart(part)) return (_a22 = options == null ? void 0 : options.convertDataPart) == null ? void 0 : _a22.call(options, part);
				}).filter(isNonNullable)
			});
			break;
		case "assistant":
			if (message.parts != null) {
				let block = [];
				async function processBlock() {
					var _a22, _b, _c, _d, _e, _f, _g, _h;
					if (block.length === 0) return;
					const content = [];
					for (const part of block) if (isTextUIPart(part)) content.push({
						type: "text",
						text: part.text,
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					});
					else if (isFileUIPart(part)) content.push({
						type: "file",
						mediaType: part.mediaType,
						filename: part.filename,
						data: part.url,
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					});
					else if (isReasoningUIPart(part)) content.push({
						type: "reasoning",
						text: part.text,
						providerOptions: part.providerMetadata
					});
					else if (isToolUIPart(part)) {
						const toolName = getToolName(part);
						if (part.state !== "input-streaming") {
							content.push({
								type: "tool-call",
								toolCallId: part.toolCallId,
								toolName,
								input: part.state === "output-error" ? (_a22 = part.input) != null ? _a22 : "rawInput" in part ? part.rawInput : void 0 : part.input,
								providerExecuted: part.providerExecuted,
								...part.callProviderMetadata != null ? { providerOptions: part.callProviderMetadata } : {}
							});
							if (part.approval != null) content.push({
								type: "tool-approval-request",
								approvalId: part.approval.id,
								toolCallId: part.toolCallId,
								...part.approval.signature != null ? { signature: part.approval.signature } : {}
							});
							if (part.providerExecuted === true && part.state !== "approval-responded" && (part.state === "output-available" || part.state === "output-error")) {
								const resultProviderMetadata = (_b = part.resultProviderMetadata) != null ? _b : part.callProviderMetadata;
								content.push({
									type: "tool-result",
									toolCallId: part.toolCallId,
									toolName,
									output: await createToolModelOutput({
										toolCallId: part.toolCallId,
										input: part.input,
										output: part.state === "output-error" ? part.errorText : part.output,
										tool: (_c = options == null ? void 0 : options.tools) == null ? void 0 : _c[toolName],
										errorMode: part.state === "output-error" ? "json" : "none"
									}),
									...resultProviderMetadata != null ? { providerOptions: resultProviderMetadata } : {}
								});
							}
						}
					} else if (isDataUIPart(part)) {
						const dataPart = (_d = options == null ? void 0 : options.convertDataPart) == null ? void 0 : _d.call(options, part);
						if (dataPart != null) content.push(dataPart);
					} else throw new Error(`Unsupported part: ${part}`);
					modelMessages.push({
						role: "assistant",
						content
					});
					const toolParts = block.filter((part) => {
						var _a23;
						return isToolUIPart(part) && (part.providerExecuted !== true || ((_a23 = part.approval) == null ? void 0 : _a23.approved) != null);
					});
					if (toolParts.length > 0) {
						const content2 = [];
						for (const toolPart of toolParts) {
							if (((_e = toolPart.approval) == null ? void 0 : _e.approved) != null) content2.push({
								type: "tool-approval-response",
								approvalId: toolPart.approval.id,
								approved: toolPart.approval.approved,
								reason: toolPart.approval.reason,
								providerExecuted: toolPart.providerExecuted
							});
							if (toolPart.providerExecuted === true) continue;
							switch (toolPart.state) {
								case "output-denied":
									content2.push({
										type: "tool-result",
										toolCallId: toolPart.toolCallId,
										toolName: getToolName(toolPart),
										output: {
											type: "error-text",
											value: (_g = (_f = toolPart.approval) == null ? void 0 : _f.reason) != null ? _g : "Tool execution denied."
										},
										...toolPart.callProviderMetadata != null ? { providerOptions: toolPart.callProviderMetadata } : {}
									});
									break;
								case "output-error":
								case "output-available": {
									const toolName = getToolName(toolPart);
									content2.push({
										type: "tool-result",
										toolCallId: toolPart.toolCallId,
										toolName,
										output: await createToolModelOutput({
											toolCallId: toolPart.toolCallId,
											input: toolPart.input,
											output: toolPart.state === "output-error" ? toolPart.errorText : toolPart.output,
											tool: (_h = options == null ? void 0 : options.tools) == null ? void 0 : _h[toolName],
											errorMode: toolPart.state === "output-error" ? "text" : "none"
										}),
										...toolPart.callProviderMetadata != null ? { providerOptions: toolPart.callProviderMetadata } : {}
									});
									break;
								}
							}
						}
						if (content2.length > 0) modelMessages.push({
							role: "tool",
							content: content2
						});
					}
					block = [];
				}
				for (const part of message.parts) if (isTextUIPart(part) || isReasoningUIPart(part) || isFileUIPart(part) || isToolUIPart(part) || isDataUIPart(part)) block.push(part);
				else if (part.type === "step-start") await processBlock();
				await processBlock();
				break;
			}
			break;
		default: {
			const _exhaustiveCheck = message.role;
			throw new MessageConversionError({
				originalMessage: message,
				message: `Unsupported role: ${_exhaustiveCheck}`
			});
		}
	}
	return modelMessages;
}
var toolMetadataSchema2 = record(string(), jsonValueSchema.optional());
lazySchema(() => zodSchema(array$1(object$1({
	id: string(),
	role: _enum([
		"system",
		"user",
		"assistant"
	]),
	metadata: unknown().optional(),
	parts: array$1(union([
		object$1({
			type: literal("text"),
			text: string(),
			state: _enum(["streaming", "done"]).optional(),
			providerMetadata: providerMetadataSchema.optional()
		}),
		object$1({
			type: literal("reasoning"),
			text: string(),
			state: _enum(["streaming", "done"]).optional(),
			providerMetadata: providerMetadataSchema.optional()
		}),
		object$1({
			type: literal("source-url"),
			sourceId: string(),
			url: string(),
			title: string().optional(),
			providerMetadata: providerMetadataSchema.optional()
		}),
		object$1({
			type: literal("source-document"),
			sourceId: string(),
			mediaType: string(),
			title: string(),
			filename: string().optional(),
			providerMetadata: providerMetadataSchema.optional()
		}),
		object$1({
			type: literal("file"),
			mediaType: string(),
			filename: string().optional(),
			url: string(),
			providerMetadata: providerMetadataSchema.optional()
		}),
		object$1({ type: literal("step-start") }),
		object$1({
			type: string().startsWith("data-"),
			id: string().optional(),
			data: unknown()
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("input-streaming"),
			input: unknown().optional(),
			providerExecuted: boolean().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			output: never().optional(),
			errorText: never().optional(),
			approval: never().optional()
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("input-available"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: never().optional()
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("approval-requested"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: never().optional(),
				reason: never().optional(),
				signature: string().optional()
			})
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("approval-responded"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: boolean(),
				reason: string().optional(),
				signature: string().optional()
			})
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("output-available"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: unknown(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			resultProviderMetadata: providerMetadataSchema.optional(),
			preliminary: boolean().optional(),
			approval: object$1({
				id: string(),
				approved: literal(true),
				reason: string().optional(),
				signature: string().optional()
			}).optional()
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("output-error"),
			input: unknown().optional(),
			rawInput: unknown().optional(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: string(),
			callProviderMetadata: providerMetadataSchema.optional(),
			resultProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: literal(true),
				reason: string().optional(),
				signature: string().optional()
			}).optional()
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("output-denied"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: literal(false),
				reason: string().optional(),
				signature: string().optional()
			})
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("input-streaming"),
			providerExecuted: boolean().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			input: unknown().optional(),
			output: never().optional(),
			errorText: never().optional(),
			approval: never().optional()
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("input-available"),
			providerExecuted: boolean().optional(),
			input: unknown(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: never().optional()
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("approval-requested"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: never().optional(),
				reason: never().optional(),
				signature: string().optional()
			})
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("approval-responded"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: boolean(),
				reason: string().optional(),
				signature: string().optional()
			})
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("output-available"),
			providerExecuted: boolean().optional(),
			input: unknown(),
			output: unknown(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			resultProviderMetadata: providerMetadataSchema.optional(),
			preliminary: boolean().optional(),
			approval: object$1({
				id: string(),
				approved: literal(true),
				reason: string().optional(),
				signature: string().optional()
			}).optional()
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("output-error"),
			providerExecuted: boolean().optional(),
			input: unknown().optional(),
			rawInput: unknown().optional(),
			output: never().optional(),
			errorText: string(),
			callProviderMetadata: providerMetadataSchema.optional(),
			resultProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: literal(true),
				reason: string().optional(),
				signature: string().optional()
			}).optional()
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			toolMetadata: toolMetadataSchema2.optional(),
			state: literal("output-denied"),
			providerExecuted: boolean().optional(),
			input: unknown(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: literal(false),
				reason: string().optional(),
				signature: string().optional()
			})
		})
	])).nonempty("Message must contain at least one part")
})).nonempty("Messages array must not be empty")));
createIdGenerator({
	prefix: "aiobj",
	size: 24
});
var SerialJobExecutor = class {
	constructor() {
		this.queue = [];
		this.isProcessing = false;
	}
	async processQueue() {
		if (this.isProcessing) return;
		this.isProcessing = true;
		while (this.queue.length > 0) {
			await this.queue[0]();
			this.queue.shift();
		}
		this.isProcessing = false;
	}
	async run(job) {
		return new Promise((resolve3, reject) => {
			this.queue.push(async () => {
				try {
					await job();
					resolve3();
				} catch (error) {
					reject(error);
				}
			});
			this.processQueue();
		});
	}
};
createIdGenerator({
	prefix: "aiobj",
	size: 24
});
async function convertFileListToFileUIParts(files) {
	if (files == null) return [];
	if (!globalThis.FileList || !(files instanceof globalThis.FileList)) throw new Error("FileList is not supported in the current environment");
	return Promise.all(Array.from(files).map(async (file) => {
		const { name: name22, type } = file;
		return {
			type: "file",
			mediaType: type,
			filename: name22,
			url: await new Promise((resolve3, reject) => {
				const reader = new FileReader();
				reader.onload = (readerEvent) => {
					var _a22;
					resolve3((_a22 = readerEvent.target) == null ? void 0 : _a22.result);
				};
				reader.onerror = (error) => reject(error);
				reader.readAsDataURL(file);
			})
		};
	}));
}
var HttpChatTransport = class {
	constructor({ api = "/api/chat", credentials, headers, body, fetch: fetch2, prepareSendMessagesRequest, prepareReconnectToStreamRequest }) {
		this.api = api;
		this.credentials = credentials;
		this.headers = headers;
		this.body = body;
		this.fetch = fetch2;
		this.prepareSendMessagesRequest = prepareSendMessagesRequest;
		this.prepareReconnectToStreamRequest = prepareReconnectToStreamRequest;
	}
	async sendMessages({ abortSignal, ...options }) {
		var _a22, _b, _c, _d, _e;
		const resolvedBody = await resolve(this.body);
		const resolvedHeaders = await resolve(this.headers);
		const resolvedCredentials = await resolve(this.credentials);
		const baseHeaders = {
			...normalizeHeaders(resolvedHeaders),
			...normalizeHeaders(options.headers)
		};
		const preparedRequest = await ((_a22 = this.prepareSendMessagesRequest) == null ? void 0 : _a22.call(this, {
			api: this.api,
			id: options.chatId,
			messages: options.messages,
			body: {
				...resolvedBody,
				...options.body
			},
			headers: baseHeaders,
			credentials: resolvedCredentials,
			requestMetadata: options.metadata,
			trigger: options.trigger,
			messageId: options.messageId
		}));
		const api = (_b = preparedRequest == null ? void 0 : preparedRequest.api) != null ? _b : this.api;
		const headers = (preparedRequest == null ? void 0 : preparedRequest.headers) !== void 0 ? normalizeHeaders(preparedRequest.headers) : baseHeaders;
		const body = (preparedRequest == null ? void 0 : preparedRequest.body) !== void 0 ? preparedRequest.body : {
			...resolvedBody,
			...options.body,
			id: options.chatId,
			messages: options.messages,
			trigger: options.trigger,
			messageId: options.messageId
		};
		const credentials = (_c = preparedRequest == null ? void 0 : preparedRequest.credentials) != null ? _c : resolvedCredentials;
		const response = await ((_d = this.fetch) != null ? _d : globalThis.fetch)(api, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				...headers
			},
			body: JSON.stringify(body),
			credentials,
			signal: abortSignal
		});
		if (!response.ok) throw new Error((_e = await response.text()) != null ? _e : "Failed to fetch the chat response.");
		if (!response.body) throw new Error("The response body is empty.");
		return this.processResponseStream(response.body);
	}
	async reconnectToStream(options) {
		var _a22, _b, _c, _d, _e;
		const resolvedBody = await resolve(this.body);
		const resolvedHeaders = await resolve(this.headers);
		const resolvedCredentials = await resolve(this.credentials);
		const baseHeaders = {
			...normalizeHeaders(resolvedHeaders),
			...normalizeHeaders(options.headers)
		};
		const preparedRequest = await ((_a22 = this.prepareReconnectToStreamRequest) == null ? void 0 : _a22.call(this, {
			api: this.api,
			id: options.chatId,
			body: {
				...resolvedBody,
				...options.body
			},
			headers: baseHeaders,
			credentials: resolvedCredentials,
			requestMetadata: options.metadata
		}));
		const api = (_b = preparedRequest == null ? void 0 : preparedRequest.api) != null ? _b : `${this.api}/${options.chatId}/stream`;
		const headers = (preparedRequest == null ? void 0 : preparedRequest.headers) !== void 0 ? normalizeHeaders(preparedRequest.headers) : baseHeaders;
		const credentials = (_c = preparedRequest == null ? void 0 : preparedRequest.credentials) != null ? _c : resolvedCredentials;
		const response = await ((_d = this.fetch) != null ? _d : globalThis.fetch)(api, {
			method: "GET",
			headers,
			credentials
		});
		if (response.status === 204) return null;
		if (!response.ok) throw new Error((_e = await response.text()) != null ? _e : "Failed to fetch the chat response.");
		if (!response.body) throw new Error("The response body is empty.");
		return this.processResponseStream(response.body);
	}
};
var DefaultChatTransport = class extends HttpChatTransport {
	constructor(options = {}) {
		super(options);
	}
	processResponseStream(stream) {
		return parseJsonEventStream({
			stream,
			schema: uiMessageChunkSchema
		}).pipeThrough(new TransformStream({ async transform(chunk, controller) {
			if (!chunk.success) throw chunk.error;
			controller.enqueue(chunk.value);
		} }));
	}
};
var AbstractChat = class {
	constructor({ generateId: generateId2 = generateId, id = generateId2(), transport = new DefaultChatTransport(), messageMetadataSchema, dataPartSchemas, state, onError, onToolCall, onFinish, onData, sendAutomaticallyWhen }) {
		this.activeResponse = void 0;
		this.jobExecutor = new SerialJobExecutor();
		/**
		* Appends or replaces a user message to the chat list. This triggers the API call to fetch
		* the assistant's response.
		*
		* If a messageId is provided, the message will be replaced.
		*/
		this.sendMessage = async (message, options) => {
			var _a22, _b, _c, _d;
			if (message == null) {
				await this.makeRequest({
					trigger: "submit-message",
					messageId: (_a22 = this.lastMessage) == null ? void 0 : _a22.id,
					...options
				});
				return;
			}
			let uiMessage;
			if ("text" in message || "files" in message) uiMessage = { parts: [...Array.isArray(message.files) ? message.files : await convertFileListToFileUIParts(message.files), ..."text" in message && message.text != null ? [{
				type: "text",
				text: message.text
			}] : []] };
			else uiMessage = message;
			if (message.messageId != null) {
				const messageIndex = this.state.messages.findIndex((m) => m.id === message.messageId);
				if (messageIndex === -1) throw new Error(`message with id ${message.messageId} not found`);
				if (this.state.messages[messageIndex].role !== "user") throw new Error(`message with id ${message.messageId} is not a user message`);
				this.state.messages = this.state.messages.slice(0, messageIndex + 1);
				this.state.replaceMessage(messageIndex, {
					...uiMessage,
					id: message.messageId,
					role: (_b = uiMessage.role) != null ? _b : "user",
					metadata: message.metadata
				});
			} else this.state.pushMessage({
				...uiMessage,
				id: (_c = uiMessage.id) != null ? _c : this.generateId(),
				role: (_d = uiMessage.role) != null ? _d : "user",
				metadata: message.metadata
			});
			await this.makeRequest({
				trigger: "submit-message",
				messageId: message.messageId,
				...options
			});
		};
		/**
		* Regenerate the assistant message with the provided message id.
		* If no message id is provided, the last assistant message will be regenerated.
		*/
		this.regenerate = async ({ messageId, ...options } = {}) => {
			const messageIndex = messageId == null ? this.state.messages.length - 1 : this.state.messages.findIndex((message) => message.id === messageId);
			if (messageIndex === -1) throw new Error(`message ${messageId} not found`);
			this.state.messages = this.state.messages.slice(0, this.messages[messageIndex].role === "assistant" ? messageIndex : messageIndex + 1);
			await this.makeRequest({
				trigger: "regenerate-message",
				messageId,
				...options
			});
		};
		/**
		* Attempt to resume an ongoing streaming response.
		*/
		this.resumeStream = async (options = {}) => {
			await this.makeRequest({
				trigger: "resume-stream",
				...options
			});
		};
		/**
		* Clear the error state and set the status to ready if the chat is in an error state.
		*/
		this.clearError = () => {
			if (this.status === "error") {
				this.state.error = void 0;
				this.setStatus({ status: "ready" });
			}
		};
		this.addToolApprovalResponse = async ({ id, approved, reason, options }) => this.jobExecutor.run(async () => {
			const messages = this.state.messages;
			const lastMessage = messages[messages.length - 1];
			const updatePart = (part) => isToolUIPart(part) && part.state === "approval-requested" && part.approval.id === id ? {
				...part,
				state: "approval-responded",
				approval: {
					id,
					approved,
					reason
				}
			} : part;
			this.state.replaceMessage(messages.length - 1, {
				...lastMessage,
				parts: lastMessage.parts.map(updatePart)
			});
			if (this.activeResponse) this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(updatePart);
			if (this.status !== "streaming" && this.status !== "submitted" && this.sendAutomaticallyWhen) this.shouldSendAutomatically().then((shouldSend) => {
				var _a22;
				if (shouldSend) this.makeRequest({
					trigger: "submit-message",
					messageId: (_a22 = this.lastMessage) == null ? void 0 : _a22.id,
					...options
				});
			});
		});
		this.addToolOutput = async ({ state = "output-available", toolCallId, output, errorText, options }) => this.jobExecutor.run(async () => {
			const messages = this.state.messages;
			const lastMessage = messages[messages.length - 1];
			const updatePart = (part) => isToolUIPart(part) && part.toolCallId === toolCallId ? {
				...part,
				state,
				output,
				errorText
			} : part;
			this.state.replaceMessage(messages.length - 1, {
				...lastMessage,
				parts: lastMessage.parts.map(updatePart)
			});
			if (this.activeResponse) this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(updatePart);
			if (this.status !== "streaming" && this.status !== "submitted" && this.sendAutomaticallyWhen) this.shouldSendAutomatically().then((shouldSend) => {
				var _a22;
				if (shouldSend) this.makeRequest({
					trigger: "submit-message",
					messageId: (_a22 = this.lastMessage) == null ? void 0 : _a22.id,
					...options
				});
			});
		});
		/** @deprecated Use addToolOutput */
		this.addToolResult = this.addToolOutput;
		/**
		* Abort the current request immediately, keep the generated tokens if any.
		*/
		this.stop = async () => {
			var _a22;
			if (this.status !== "streaming" && this.status !== "submitted") return;
			if ((_a22 = this.activeResponse) == null ? void 0 : _a22.abortController) this.activeResponse.abortController.abort();
		};
		this.id = id;
		this.transport = transport;
		this.generateId = generateId2;
		this.messageMetadataSchema = messageMetadataSchema;
		this.dataPartSchemas = dataPartSchemas;
		this.state = state;
		this.onError = onError;
		this.onToolCall = onToolCall;
		this.onFinish = onFinish;
		this.onData = onData;
		this.sendAutomaticallyWhen = sendAutomaticallyWhen;
	}
	/**
	* Hook status:
	*
	* - `submitted`: The message has been sent to the API and we're awaiting the start of the response stream.
	* - `streaming`: The response is actively streaming in from the API, receiving chunks of data.
	* - `ready`: The full response has been received and processed; a new user message can be submitted.
	* - `error`: An error occurred during the API request, preventing successful completion.
	*/
	get status() {
		return this.state.status;
	}
	setStatus({ status, error }) {
		if (this.status === status) return;
		this.state.status = status;
		this.state.error = error;
	}
	get error() {
		return this.state.error;
	}
	get messages() {
		return this.state.messages;
	}
	get lastMessage() {
		return this.state.messages[this.state.messages.length - 1];
	}
	set messages(messages) {
		this.state.messages = messages;
	}
	async shouldSendAutomatically() {
		if (!this.sendAutomaticallyWhen) return false;
		const result = this.sendAutomaticallyWhen({ messages: this.state.messages });
		if (result && typeof result === "object" && "then" in result) return await result;
		return result;
	}
	async makeRequest({ trigger, metadata, headers, body, messageId }) {
		var _a22, _b, _c;
		let resumeStream;
		if (trigger === "resume-stream") try {
			const reconnect = await this.transport.reconnectToStream({
				chatId: this.id,
				metadata,
				headers,
				body
			});
			if (reconnect == null) return;
			resumeStream = reconnect;
		} catch (err) {
			if (this.onError && err instanceof Error) this.onError(err);
			this.setStatus({
				status: "error",
				error: err
			});
			return;
		}
		this.setStatus({
			status: "submitted",
			error: void 0
		});
		const lastMessage = this.lastMessage;
		let isAbort = false;
		let isDisconnect = false;
		let isError = false;
		try {
			const activeResponse = {
				state: createStreamingUIMessageState({
					lastMessage: this.state.snapshot(lastMessage),
					messageId: this.generateId()
				}),
				abortController: new AbortController()
			};
			activeResponse.abortController.signal.addEventListener("abort", () => {
				isAbort = true;
			});
			this.activeResponse = activeResponse;
			let stream;
			if (trigger === "resume-stream") stream = resumeStream;
			else stream = await this.transport.sendMessages({
				chatId: this.id,
				messages: this.state.messages,
				abortSignal: activeResponse.abortController.signal,
				metadata,
				headers,
				body,
				trigger,
				messageId
			});
			const runUpdateMessageJob = (job) => this.jobExecutor.run(() => job({
				state: activeResponse.state,
				write: () => {
					var _a23;
					this.setStatus({ status: "streaming" });
					if (activeResponse.state.message.id === ((_a23 = this.lastMessage) == null ? void 0 : _a23.id)) this.state.replaceMessage(this.state.messages.length - 1, activeResponse.state.message);
					else this.state.pushMessage(activeResponse.state.message);
				}
			}));
			await consumeStream({
				stream: processUIMessageStream({
					stream,
					onToolCall: this.onToolCall,
					onData: this.onData,
					messageMetadataSchema: this.messageMetadataSchema,
					dataPartSchemas: this.dataPartSchemas,
					runUpdateMessageJob,
					onError: (error) => {
						throw error;
					}
				}),
				onError: (error) => {
					throw error;
				}
			});
			this.setStatus({ status: "ready" });
		} catch (err) {
			if (isAbort || err.name === "AbortError") {
				isAbort = true;
				this.setStatus({ status: "ready" });
				return null;
			}
			isError = true;
			if (err instanceof TypeError && (err.message.toLowerCase().includes("fetch") || err.message.toLowerCase().includes("network"))) isDisconnect = true;
			if (this.onError && err instanceof Error) this.onError(err);
			this.setStatus({
				status: "error",
				error: err
			});
		} finally {
			try {
				(_b = this.onFinish) == null || _b.call(this, {
					message: this.activeResponse.state.message,
					messages: this.state.messages,
					isAbort,
					isDisconnect,
					isError,
					finishReason: (_a22 = this.activeResponse) == null ? void 0 : _a22.state.finishReason
				});
			} catch (err) {
				console.error(err);
			}
			this.activeResponse = void 0;
		}
		if (!isError && await this.shouldSendAutomatically()) await this.makeRequest({
			trigger: "submit-message",
			messageId: (_c = this.lastMessage) == null ? void 0 : _c.id,
			metadata,
			headers,
			body
		});
	}
};
//#endregion
//#region node_modules/@ai-sdk/react/dist/index.mjs
var import_throttleit = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	function throttle(function_, wait) {
		if (typeof function_ !== "function") throw new TypeError(`Expected the first argument to be a \`function\`, got \`${typeof function_}\`.`);
		let timeoutId;
		let lastCallTime = 0;
		return function throttled(...arguments_) {
			clearTimeout(timeoutId);
			const now = Date.now();
			const delayForNextCall = wait - (now - lastCallTime);
			if (delayForNextCall <= 0) {
				lastCallTime = now;
				function_.apply(this, arguments_);
			} else timeoutId = setTimeout(() => {
				lastCallTime = Date.now();
				function_.apply(this, arguments_);
			}, delayForNextCall);
		};
	}
	module.exports = throttle;
})))(), 1);
var __accessCheck = (obj, member, msg) => {
	if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
	__accessCheck(obj, member, "read from private field");
	return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
	if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
	member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
	__accessCheck(obj, member, "write to private field");
	setter ? setter.call(obj, value) : member.set(obj, value);
	return value;
};
function throttle(fn, waitMs) {
	return waitMs != null ? (0, import_throttleit.default)(fn, waitMs) : fn;
}
var _messages, _status, _error, _messagesCallbacks, _statusCallbacks, _errorCallbacks, _callMessagesCallbacks, _callStatusCallbacks, _callErrorCallbacks;
var ReactChatState = class {
	constructor(initialMessages = []) {
		__privateAdd(this, _messages, void 0);
		__privateAdd(this, _status, "ready");
		__privateAdd(this, _error, void 0);
		__privateAdd(this, _messagesCallbacks, /* @__PURE__ */ new Set());
		__privateAdd(this, _statusCallbacks, /* @__PURE__ */ new Set());
		__privateAdd(this, _errorCallbacks, /* @__PURE__ */ new Set());
		this.pushMessage = (message) => {
			__privateSet(this, _messages, __privateGet(this, _messages).concat(message));
			__privateGet(this, _callMessagesCallbacks).call(this);
		};
		this.popMessage = () => {
			__privateSet(this, _messages, __privateGet(this, _messages).slice(0, -1));
			__privateGet(this, _callMessagesCallbacks).call(this);
		};
		this.replaceMessage = (index, message) => {
			__privateSet(this, _messages, [
				...__privateGet(this, _messages).slice(0, index),
				this.snapshot(message),
				...__privateGet(this, _messages).slice(index + 1)
			]);
			__privateGet(this, _callMessagesCallbacks).call(this);
		};
		this.snapshot = (value) => structuredClone(value);
		this["~registerMessagesCallback"] = (onChange, throttleWaitMs) => {
			const callback = throttleWaitMs ? throttle(onChange, throttleWaitMs) : onChange;
			__privateGet(this, _messagesCallbacks).add(callback);
			return () => {
				__privateGet(this, _messagesCallbacks).delete(callback);
			};
		};
		this["~registerStatusCallback"] = (onChange) => {
			__privateGet(this, _statusCallbacks).add(onChange);
			return () => {
				__privateGet(this, _statusCallbacks).delete(onChange);
			};
		};
		this["~registerErrorCallback"] = (onChange) => {
			__privateGet(this, _errorCallbacks).add(onChange);
			return () => {
				__privateGet(this, _errorCallbacks).delete(onChange);
			};
		};
		__privateAdd(this, _callMessagesCallbacks, () => {
			__privateGet(this, _messagesCallbacks).forEach((callback) => callback());
		});
		__privateAdd(this, _callStatusCallbacks, () => {
			__privateGet(this, _statusCallbacks).forEach((callback) => callback());
		});
		__privateAdd(this, _callErrorCallbacks, () => {
			__privateGet(this, _errorCallbacks).forEach((callback) => callback());
		});
		__privateSet(this, _messages, initialMessages);
	}
	get status() {
		return __privateGet(this, _status);
	}
	set status(newStatus) {
		__privateSet(this, _status, newStatus);
		__privateGet(this, _callStatusCallbacks).call(this);
	}
	get error() {
		return __privateGet(this, _error);
	}
	set error(newError) {
		__privateSet(this, _error, newError);
		__privateGet(this, _callErrorCallbacks).call(this);
	}
	get messages() {
		return __privateGet(this, _messages);
	}
	set messages(newMessages) {
		__privateSet(this, _messages, [...newMessages]);
		__privateGet(this, _callMessagesCallbacks).call(this);
	}
};
_messages = /* @__PURE__ */ new WeakMap();
_status = /* @__PURE__ */ new WeakMap();
_error = /* @__PURE__ */ new WeakMap();
_messagesCallbacks = /* @__PURE__ */ new WeakMap();
_statusCallbacks = /* @__PURE__ */ new WeakMap();
_errorCallbacks = /* @__PURE__ */ new WeakMap();
_callMessagesCallbacks = /* @__PURE__ */ new WeakMap();
_callStatusCallbacks = /* @__PURE__ */ new WeakMap();
_callErrorCallbacks = /* @__PURE__ */ new WeakMap();
var _state;
var Chat = class extends AbstractChat {
	constructor({ messages, ...init }) {
		const state = new ReactChatState(messages);
		super({
			...init,
			state
		});
		__privateAdd(this, _state, void 0);
		this["~registerMessagesCallback"] = (onChange, throttleWaitMs) => __privateGet(this, _state)["~registerMessagesCallback"](onChange, throttleWaitMs);
		this["~registerStatusCallback"] = (onChange) => __privateGet(this, _state)["~registerStatusCallback"](onChange);
		this["~registerErrorCallback"] = (onChange) => __privateGet(this, _state)["~registerErrorCallback"](onChange);
		__privateSet(this, _state, state);
	}
};
_state = /* @__PURE__ */ new WeakMap();
function useChat({ experimental_throttle: throttleWaitMs, resume = false, ...options } = {}) {
	const callbacksRef = (0, import_react.useRef)(!("chat" in options) ? {
		onToolCall: options.onToolCall,
		onData: options.onData,
		onFinish: options.onFinish,
		onError: options.onError,
		sendAutomaticallyWhen: options.sendAutomaticallyWhen
	} : {});
	if (!("chat" in options)) callbacksRef.current = {
		onToolCall: options.onToolCall,
		onData: options.onData,
		onFinish: options.onFinish,
		onError: options.onError,
		sendAutomaticallyWhen: options.sendAutomaticallyWhen
	};
	const optionsWithCallbacks = {
		...options,
		onToolCall: (arg) => {
			var _a, _b;
			return (_b = (_a = callbacksRef.current).onToolCall) == null ? void 0 : _b.call(_a, arg);
		},
		onData: (arg) => {
			var _a, _b;
			return (_b = (_a = callbacksRef.current).onData) == null ? void 0 : _b.call(_a, arg);
		},
		onFinish: (arg) => {
			var _a, _b;
			return (_b = (_a = callbacksRef.current).onFinish) == null ? void 0 : _b.call(_a, arg);
		},
		onError: (arg) => {
			var _a, _b;
			return (_b = (_a = callbacksRef.current).onError) == null ? void 0 : _b.call(_a, arg);
		},
		sendAutomaticallyWhen: (arg) => {
			var _a, _b, _c;
			return (_c = (_b = (_a = callbacksRef.current).sendAutomaticallyWhen) == null ? void 0 : _b.call(_a, arg)) != null ? _c : false;
		}
	};
	const chatRef = (0, import_react.useRef)("chat" in options ? options.chat : new Chat(optionsWithCallbacks));
	if ("chat" in options && options.chat !== chatRef.current || "id" in options && chatRef.current.id !== options.id) chatRef.current = "chat" in options ? options.chat : new Chat(optionsWithCallbacks);
	const messages = (0, import_react.useSyncExternalStore)((0, import_react.useCallback)((update) => chatRef.current["~registerMessagesCallback"](update, throttleWaitMs), [throttleWaitMs, chatRef.current.id]), () => chatRef.current.messages, () => chatRef.current.messages);
	const status = (0, import_react.useSyncExternalStore)(chatRef.current["~registerStatusCallback"], () => chatRef.current.status, () => chatRef.current.status);
	const error = (0, import_react.useSyncExternalStore)(chatRef.current["~registerErrorCallback"], () => chatRef.current.error, () => chatRef.current.error);
	const setMessages = (0, import_react.useCallback)((messagesParam) => {
		if (typeof messagesParam === "function") messagesParam = messagesParam(chatRef.current.messages);
		chatRef.current.messages = messagesParam;
	}, [chatRef]);
	(0, import_react.useEffect)(() => {
		if (resume) chatRef.current.resumeStream();
	}, [resume, chatRef]);
	return {
		id: chatRef.current.id,
		messages,
		setMessages,
		sendMessage: chatRef.current.sendMessage,
		regenerate: chatRef.current.regenerate,
		clearError: chatRef.current.clearError,
		stop: chatRef.current.stop,
		error,
		resumeStream: chatRef.current.resumeStream,
		status,
		/**
		* @deprecated Use `addToolOutput` instead.
		*/
		addToolResult: chatRef.current.addToolOutput,
		addToolOutput: chatRef.current.addToolOutput,
		addToolApprovalResponse: chatRef.current.addToolApprovalResponse
	};
}
//#endregion
export { stepCountIs as a, generateText as i, DefaultChatTransport as n, streamText as o, convertToModelMessages as r, require_react as s, useChat as t };
