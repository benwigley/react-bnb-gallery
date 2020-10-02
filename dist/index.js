'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var FocusTrap = _interopDefault(require('focus-trap-react'));
var reactPortal = require('react-portal');
var omit = _interopDefault(require('lodash/omit'));
var classnames = _interopDefault(require('classnames'));
var airbnbPropTypes = require('airbnb-prop-types');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

var DIRECTION_PREV = 'prev';
var DIRECTION_NEXT = 'next';
var FORWARDS = 'forwards';
var BACKWARDS = 'backwards';
var ARROW_LEFT_KEYCODE = 37;
var ARROW_RIGHT_KEYCODE = 39;
var ESC_KEYCODE = 27;
var THUMBNAIL_WIDTH = 58;
var THUMBNAIL_HEIGHT = 50;
var THUMBNAIL_OFFSET = 8;
var DEFAULT_OPACITY = 1;
var DEFAULT_COLOR = 'rgba(0,0,0,1)';
var NORMAL_COLOR = 'rgba(255,255,255,1)';
var INVERSE_COLOR = 'rgba(1,1,1,1)';
var DEFAULT_Z_INDEX = 2000;
var defaultPhotoProps = {
  photo: undefined,
  number: undefined,
  caption: undefined,
  subcaption: undefined,
  thumbnail: undefined
};

var SlideDirectionShape = PropTypes.oneOf([FORWARDS, BACKWARDS]);

var PhotoShape = PropTypes.shape({
  photo: PropTypes.string.isRequired,
  number: PropTypes.number,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subcaption: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  thumbnail: PropTypes.string
});

var PhotosShape = PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.arrayOf(PropTypes.string.isRequired), PropTypes.arrayOf(PhotoShape)]);

var noPhotosProvided = 'No photos to show';
var showPhotoList = 'Show photo list';
var hidePhotoList = 'Hide photo list';
var defaultPhrases = {
  noPhotosProvided: noPhotosProvided,
  showPhotoList: showPhotoList,
  hidePhotoList: hidePhotoList
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function defaultPhrases$1() {
  return Object.keys(defaultPhrases$1).reduce(function (phrases, key) {
    return _objectSpread(_objectSpread({}, phrases), {}, defineProperty({}, key, PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.node])));
  }, {});
}

var galleryPropTypes = airbnbPropTypes.forbidExtraProps({
  activePhotoIndex: airbnbPropTypes.nonNegativeInteger,
  activePhotoPressed: PropTypes.func,
  direction: SlideDirectionShape,
  nextButtonPressed: PropTypes.func,
  prevButtonPressed: PropTypes.func,
  showThumbnails: PropTypes.bool,
  photos: PhotosShape,
  preloadSize: airbnbPropTypes.nonNegativeInteger,
  wrap: PropTypes.bool,
  phrases: PropTypes.shape(defaultPhrases$1()),
  light: PropTypes.bool,
  backgroundColor: PropTypes.string
});

var noop = (function () {});

var galleryDefaultProps = {
  activePhotoIndex: 0,
  activePhotoPressed: noop,
  direction: FORWARDS,
  nextButtonPressed: noop,
  prevButtonPressed: noop,
  showThumbnails: true,
  photos: [],
  preloadSize: 5,
  wrap: false,
  phrases: defaultPhrases,
  light: false,
  backgroundColor: DEFAULT_COLOR
};

var imagePropTypes = airbnbPropTypes.forbidExtraProps({
  onLoad: PropTypes.func,
  onError: PropTypes.func
});

var imageDefaultProps = {
  onLoad: noop,
  onError: noop
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

var _this = undefined,
    _jsxFileName = "/Users/benwigley/Sites/react-bnb-gallery/src/components/LoadingSpinner/LoadingSpinner.js";
var propTypes = airbnbPropTypes.forbidExtraProps({
  show: PropTypes.bool
});
var defaultProps = {
  show: true
};

var LoadingSpinner = function LoadingSpinner(_ref) {
  var show = _ref.show;
  return show && /*#__PURE__*/React__default.createElement("div", {
    className: "loading-spinner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  });
};

LoadingSpinner.propTypes = propTypes;
LoadingSpinner.defaultProps = defaultProps;

var _jsxFileName$1 = "/Users/benwigley/Sites/react-bnb-gallery/src/components/Image/Image.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var propTypes$1 = airbnbPropTypes.forbidExtraProps(_objectSpread$1(_objectSpread$1({}, imagePropTypes), {}, {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}));

var defaultProps$1 = _objectSpread$1(_objectSpread$1({}, imageDefaultProps), {}, {
  style: null,
  className: null,
  alt: ''
});

var defaultState = {
  loading: true,
  withError: false
};

var Image = /*#__PURE__*/function (_Component) {
  inherits(Image, _Component);

  var _super = _createSuper(Image);

  function Image(props) {
    var _this;

    classCallCheck(this, Image);

    _this = _super.call(this, props);
    var src = props.src;
    _this.state = _objectSpread$1({
      currentSrc: src
    }, defaultState);
    _this.onLoad = _this.onLoad.bind(assertThisInitialized(_this));
    _this.onError = _this.onError.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Image, [{
    key: "onLoad",
    value: function onLoad() {
      var onLoad = this.props.onLoad;
      onLoad();
      this.setState({
        loading: false,
        withError: false
      });
    }
  }, {
    key: "onError",
    value: function onError() {
      var onError = this.props.onError;
      onError();
      this.setState({
        loading: false,
        withError: true
      });
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      var _this$props = this.props,
          alt = _this$props.alt,
          src = _this$props.src,
          style = _this$props.style,
          className = _this$props.className;
      var _this$state = this.state,
          loading = _this$state.loading,
          withError = _this$state.withError;
      var classNames = [className, 'media-image'];
      var components = []; // the loading spinner
      // TODO: make this 'LoadingSpinner' component customizable

      if (loading) {
        components.push( /*#__PURE__*/React__default.createElement(LoadingSpinner, {
          key: ".pictureLoadingSpinner",
          __self: this,
          __source: {
            fileName: _jsxFileName$1,
            lineNumber: 108,
            columnNumber: 23
          }
        }));
      } // if no loading, then return the
      // picture only if no error ocurred


      if (!withError) {
        components.push( /*#__PURE__*/React__default.createElement("img", {
          alt: alt,
          key: ".pictureComponent",
          className: classnames(classNames),
          onLoad: this.onLoad,
          onError: this.onError,
          src: src,
          style: style,
          __self: this,
          __source: {
            fileName: _jsxFileName$1,
            lineNumber: 114,
            columnNumber: 23
          }
        }));
      } // TODO: show a custom message indicating the
      // error ocurred while loading the picture


      return components;
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      var wrapperClassNames = ['picture', loading && 'loading']; // render the picture element

      var picture = this.renderImage();
      return /*#__PURE__*/React__default.createElement("div", {
        className: classnames(wrapperClassNames),
        __self: this,
        __source: {
          fileName: _jsxFileName$1,
          lineNumber: 145,
          columnNumber: 7
        }
      }, picture);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var src = nextProps.src;
      var currentSrc = prevState.currentSrc;

      if (src !== currentSrc) {
        return _objectSpread$1({
          currentSrc: src
        }, defaultState);
      }

      return null;
    }
  }]);

  return Image;
}(React.Component);

Image.propTypes = propTypes$1;
Image.defaultProps = defaultProps$1;

var _jsxFileName$2 = "/Users/benwigley/Sites/react-bnb-gallery/src/components/Photo/Photo.js";

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var propTypes$2 = airbnbPropTypes.forbidExtraProps(_objectSpread$2(_objectSpread$2({}, imagePropTypes), {}, {
  photo: PhotoShape,
  onPress: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchEnd: PropTypes.func
}));

var defaultProps$2 = _objectSpread$2(_objectSpread$2({}, imageDefaultProps), {}, {
  photo: null,
  onPress: noop,
  onTouchStart: noop,
  onTouchMove: noop,
  onTouchEnd: noop
});

var Photo = /*#__PURE__*/function (_PureComponent) {
  inherits(Photo, _PureComponent);

  var _super = _createSuper$1(Photo);

  function Photo(props) {
    var _this;

    classCallCheck(this, Photo);

    _this = _super.call(this, props);
    _this.onPress = _this.onPress.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Photo, [{
    key: "onPress",
    value: function onPress() {
      var onPress = this.props.onPress;
      onPress();
    }
  }, {
    key: "renderPhoto",
    value: function renderPhoto() {
      var _this$props = this.props,
          photo = _this$props.photo,
          onTouchStart = _this$props.onTouchStart,
          onTouchMove = _this$props.onTouchMove,
          onTouchEnd = _this$props.onTouchEnd,
          rest = objectWithoutProperties(_this$props, ["photo", "onTouchStart", "onTouchMove", "onTouchEnd"]);

      if (!photo) {
        return null;
      }

      var _omit = omit(rest, ['onPress']),
          onLoad = _omit.onLoad,
          onError = _omit.onError,
          style = _omit.style;

      return /*#__PURE__*/React__default.createElement("button", {
        type: "button",
        onClick: this.onPress,
        className: "photo-button",
        onTouchStart: onTouchStart,
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd,
        __self: this,
        __source: {
          fileName: _jsxFileName$2,
          lineNumber: 68,
          columnNumber: 7
        }
      }, /*#__PURE__*/React__default.createElement(Image, {
        alt: photo.caption || '',
        className: "photo",
        src: photo.photo,
        onLoad: onLoad,
        onError: onError,
        style: style,
        __self: this,
        __source: {
          fileName: _jsxFileName$2,
          lineNumber: 76,
          columnNumber: 9
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var className = classnames('gallery-media-photo', 'gallery-media-photo--block', 'gallery-media-cover');
      var photoRendered = this.renderPhoto();
      return /*#__PURE__*/React__default.createElement("ul", {
        className: "gallery-images--ul",
        __self: this,
        __source: {
          fileName: _jsxFileName$2,
          lineNumber: 98,
          columnNumber: 7
        }
      }, /*#__PURE__*/React__default.createElement("li", {
        className: className,
        __self: this,
        __source: {
          fileName: _jsxFileName$2,
          lineNumber: 99,
          columnNumber: 9
        }
      }, photoRendered));
    }
  }]);

  return Photo;
}(React.PureComponent);

Photo.propTypes = propTypes$2;
Photo.defaultProps = defaultProps$2;

var _jsxFileName$3 = "/Users/benwigley/Sites/react-bnb-gallery/src/components/Thumbnail/Thumbnail.js";

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var thumbnailStyle = {
  width: THUMBNAIL_WIDTH,
  height: THUMBNAIL_HEIGHT
};
var propTypes$3 = airbnbPropTypes.forbidExtraProps({
  active: PropTypes.bool,
  photo: PhotoShape,
  onPress: PropTypes.func,
  number: airbnbPropTypes.nonNegativeInteger
});
var defaultProps$3 = {
  active: false,
  photo: null,
  onPress: noop,
  number: 0
};

var Thumbnail = /*#__PURE__*/function (_PureComponent) {
  inherits(Thumbnail, _PureComponent);

  var _super = _createSuper$2(Thumbnail);

  function Thumbnail() {
    classCallCheck(this, Thumbnail);

    return _super.apply(this, arguments);
  }

  createClass(Thumbnail, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          photo = _this$props.photo,
          onPress = _this$props.onPress,
          number = _this$props.number;
      var className = classnames('thumbnail-button', active && 'active');
      return /*#__PURE__*/React__default.createElement("button", {
        type: "button",
        "aria-label": photo.caption,
        className: className,
        "data-photo-index": number,
        onClick: onPress,
        disabled: false,
        __self: this,
        __source: {
          fileName: _jsxFileName$3,
          lineNumber: 54,
          columnNumber: 7
        }
      }, /*#__PURE__*/React__default.createElement(Image, {
        alt: photo.caption,
        src: photo.thumbnail || photo.photo,
        className: "thumbnail",
        style: thumbnailStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName$3,
          lineNumber: 62,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Thumbnail;
}(React.PureComponent);

Thumbnail.propTypes = propTypes$3;
Thumbnail.defaultProps = defaultProps$3;

var _jsxFileName$4 = "/Users/benwigley/Sites/react-bnb-gallery/src/components/TogglePhotoList/TogglePhotoList.js";

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var propTypes$4 = airbnbPropTypes.forbidExtraProps({
  isOpened: PropTypes.bool,
  onPress: PropTypes.func,
  phrases: PropTypes.shape(defaultPhrases$1())
});
var defaultProps$4 = {
  isOpened: true,
  onPress: noop,
  phrases: defaultPhrases
};

var TogglePhotoList = /*#__PURE__*/function (_PureComponent) {
  inherits(TogglePhotoList, _PureComponent);

  var _super = _createSuper$3(TogglePhotoList);

  function TogglePhotoList() {
    classCallCheck(this, TogglePhotoList);

    return _super.apply(this, arguments);
  }

  createClass(TogglePhotoList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOpened = _this$props.isOpened,
          onPress = _this$props.onPress,
          _this$props$phrases = _this$props.phrases,
          showLabel = _this$props$phrases.showPhotoList,
          hideLabel = _this$props$phrases.hidePhotoList;
      var label = isOpened ? hideLabel : showLabel;
      var className = classnames('gallery-thumbnails--toggle', isOpened ? 'hide' : 'open');
      return /*#__PURE__*/React__default.createElement("button", {
        type: "button",
        className: className,
        onClick: onPress,
        __self: this,
        __source: {
          fileName: _jsxFileName$4,
          lineNumber: 43,
          columnNumber: 7
        }
      }, label);
    }
  }]);

  return TogglePhotoList;
}(React.PureComponent);

TogglePhotoList.propTypes = propTypes$4;
TogglePhotoList.defaultProps = defaultProps$4;

function calculateThumbnailsContainerDimension(total) {
  return THUMBNAIL_WIDTH * total + (THUMBNAIL_OFFSET * total - THUMBNAIL_OFFSET);
}

function calculateThumbnailsLeftScroll(current, total, bounding) {
  var half = bounding.width / 2 - THUMBNAIL_WIDTH / 2;
  var thumbnailsOffset = current * THUMBNAIL_WIDTH + current * THUMBNAIL_OFFSET - half;
  var calculatedScrollLeft = 0;

  if (thumbnailsOffset < 0) {
    return calculatedScrollLeft;
  }

  var thumbnailsPerRow = bounding.width / (THUMBNAIL_WIDTH + THUMBNAIL_OFFSET);
  var thumbnailsHalf = Math.round(thumbnailsPerRow / 2);
  var thumbnailsLeft = total - (current + 1);

  if (thumbnailsLeft < thumbnailsHalf) {
    calculatedScrollLeft = calculateThumbnailsContainerDimension(total) - bounding.width;
  } else {
    calculatedScrollLeft = thumbnailsOffset;
  }

  return -Math.abs(calculatedScrollLeft);
}

var _jsxFileName$5 = "/Users/benwigley/Sites/react-bnb-gallery/src/components/Caption/Caption.js";

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var propTypes$5 = airbnbPropTypes.forbidExtraProps({
  showThumbnails: PropTypes.bool,
  current: airbnbPropTypes.nonNegativeInteger,
  photos: PhotosShape,
  onPress: PropTypes.func,
  phrases: PropTypes.shape(defaultPhrases$1())
});
var defaultProps$5 = {
  showThumbnails: true,
  current: 0,
  photos: [],
  onPress: noop,
  phrases: defaultPhrases
};

var Caption = /*#__PURE__*/function (_PureComponent) {
  inherits(Caption, _PureComponent);

  var _super = _createSuper$4(Caption);

  function Caption(props) {
    var _this;

    classCallCheck(this, Caption);

    _this = _super.call(this, props);
    var _this$props = _this.props,
        showThumbnails = _this$props.showThumbnails,
        photos = _this$props.photos;
    _this.state = {
      showThumbnails: showThumbnails
    };
    _this.thumbnailsWrapperRef = null;
    _this.thumbnailsListRef = null;
    _this.hasMoreThanOnePhoto = photos.length > 1;
    _this.onThumbnailPress = _this.onThumbnailPress.bind(assertThisInitialized(_this));
    _this.setGalleryFigcaptionRef = _this.setGalleryFigcaptionRef.bind(assertThisInitialized(_this));
    _this.setGalleryThubmanilsRef = _this.setGalleryThubmanilsRef.bind(assertThisInitialized(_this));
    _this.toggleThumbnails = _this.toggleThumbnails.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Caption, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var current = this.props.current;

      if (current !== prevProps.current) {
        this.setThumbnailsWrapperScrollLeft(current);
      }
    }
  }, {
    key: "onThumbnailPress",
    value: function onThumbnailPress(event) {
      var _this$props2 = this.props,
          onPress = _this$props2.onPress,
          photos = _this$props2.photos;
      var index = parseInt(event.currentTarget.dataset.photoIndex, 10);

      if (index >= 0 && index <= photos.length - 1) {
        onPress(index);
      }
    }
  }, {
    key: "setThumbnailsWrapperScrollLeft",
    value: function setThumbnailsWrapperScrollLeft(current) {
      var photos = this.props.photos;
      var bounding = this.thumbnailsWrapperRef.getBoundingClientRect();
      var scrollLeft = calculateThumbnailsLeftScroll(current, photos.length, bounding);
      this.thumbnailsListRef.style.marginLeft = "".concat(scrollLeft, "px");
    }
  }, {
    key: "getPhotoByIndex",
    value: function getPhotoByIndex(index) {
      var photos = this.props.photos;
      return photos[index];
    }
  }, {
    key: "setGalleryFigcaptionRef",
    value: function setGalleryFigcaptionRef(element) {
      this.thumbnailsWrapperRef = element;
    }
  }, {
    key: "setGalleryThubmanilsRef",
    value: function setGalleryThubmanilsRef(element) {
      this.thumbnailsListRef = element;
    }
  }, {
    key: "toggleThumbnails",
    value: function toggleThumbnails() {
      this.setState(function (prevState) {
        return {
          showThumbnails: !prevState.showThumbnails
        };
      });
    }
  }, {
    key: "renderThumbnail",
    value: function renderThumbnail(photo, index, onPress) {
      var current = this.props.current;
      return /*#__PURE__*/React__default.createElement(Thumbnail, {
        active: index === current,
        photo: photo,
        onPress: onPress,
        number: index,
        __self: this,
        __source: {
          fileName: _jsxFileName$5,
          lineNumber: 108,
          columnNumber: 7
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          current = _this$props3.current,
          photos = _this$props3.photos,
          phrases = _this$props3.phrases;
      var showThumbnails = this.state.showThumbnails;
      var className = classnames('gallery-figcaption', !showThumbnails && 'hide');
      var currentPhoto = this.getPhotoByIndex(current);
      var captionThumbnailsWrapperWidth = calculateThumbnailsContainerDimension(photos.length);
      return /*#__PURE__*/React__default.createElement("figcaption", {
        className: className,
        __self: this,
        __source: {
          fileName: _jsxFileName$5,
          lineNumber: 137,
          columnNumber: 7
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-figcaption--content",
        __self: this,
        __source: {
          fileName: _jsxFileName$5,
          lineNumber: 138,
          columnNumber: 9
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-figcaption--inner",
        __self: this,
        __source: {
          fileName: _jsxFileName$5,
          lineNumber: 139,
          columnNumber: 11
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-figcaption--info",
        __self: this,
        __source: {
          fileName: _jsxFileName$5,
          lineNumber: 140,
          columnNumber: 13
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "caption-left",
        __self: this,
        __source: {
          fileName: _jsxFileName$5,
          lineNumber: 141,
          columnNumber: 15
        }
      }, currentPhoto.caption && /*#__PURE__*/React__default.createElement("h3", {
        className: "photo-caption",
        __self: this,
        __source: {
          fileName: _jsxFileName$5,
          lineNumber: 143,
          columnNumber: 19
        }
      }, currentPhoto.caption), currentPhoto.subcaption && /*#__PURE__*/React__default.createElement("p", {
        className: "photo-subcaption",
        __self: this,
        __source: {
          fileName: _jsxFileName$5,
          lineNumber: 148,
          columnNumber: 19
        }
      }, currentPhoto.subcaption)), this.hasMoreThanOnePhoto && /*#__PURE__*/React__default.createElement("div", {
        className: "caption-right",
        __self: this,
        __source: {
          fileName: _jsxFileName$5,
          lineNumber: 154,
          columnNumber: 17
        }
      }, /*#__PURE__*/React__default.createElement(TogglePhotoList, {
        phrases: phrases,
        isOpened: showThumbnails,
        onPress: this.toggleThumbnails,
        __self: this,
        __source: {
          fileName: _jsxFileName$5,
          lineNumber: 155,
          columnNumber: 19
        }
      }))), this.hasMoreThanOnePhoto && /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-figcaption--thumbnails",
        "aria-hidden": false,
        ref: this.setGalleryFigcaptionRef,
        __self: this,
        __source: {
          fileName: _jsxFileName$5,
          lineNumber: 164,
          columnNumber: 15
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "caption-thumbnails",
        style: {
          width: captionThumbnailsWrapperWidth
        },
        __self: this,
        __source: {
          fileName: _jsxFileName$5,
          lineNumber: 169,
          columnNumber: 17
        }
      }, /*#__PURE__*/React__default.createElement("ul", {
        className: "thumbnails-list",
        ref: this.setGalleryThubmanilsRef,
        __self: this,
        __source: {
          fileName: _jsxFileName$5,
          lineNumber: 175,
          columnNumber: 19
        }
      }, photos.map(function (photo, index) {
        return /*#__PURE__*/React__default.createElement("li", {
          key: photo.photo,
          __self: _this2,
          __source: {
            fileName: _jsxFileName$5,
            lineNumber: 180,
            columnNumber: 23
          }
        }, _this2.renderThumbnail(photo, index, _this2.onThumbnailPress));
      })))))));
    }
  }]);

  return Caption;
}(React.PureComponent);

Caption.propTypes = propTypes$5;
Caption.defaultProps = defaultProps$5;

var _jsxFileName$6 = "/Users/benwigley/Sites/react-bnb-gallery/src/components/Control/Control.js";

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var controlStyle = {
  height: '2.8em',
  width: '2.8em',
  fill: NORMAL_COLOR
};
var controlStyleLight = {
  fill: INVERSE_COLOR
};
var propTypes$6 = airbnbPropTypes.forbidExtraProps({
  arrow: PropTypes.string,
  onPress: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  light: PropTypes.bool
});
var defaultProps$6 = {
  arrow: null,
  onPress: noop,
  label: '',
  className: null,
  disabled: false,
  light: false
};

var Control = /*#__PURE__*/function (_React$PureComponent) {
  inherits(Control, _React$PureComponent);

  var _super = _createSuper$5(Control);

  function Control(props) {
    var _this;

    classCallCheck(this, Control);

    _this = _super.call(this, props);
    _this.onButtonPress = _this.onButtonPress.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Control, [{
    key: "onButtonPress",
    value: function onButtonPress() {
      var onPress = this.props.onPress;
      onPress();
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          arrow = _this$props.arrow,
          label = _this$props.label,
          className = _this$props.className,
          disabled = _this$props.disabled,
          light = _this$props.light;
      return /*#__PURE__*/React__default.createElement("button", {
        type: "button",
        className: classnames('gallery-control', className),
        onClick: this.onButtonPress,
        disabled: disabled,
        "aria-label": label,
        __self: this,
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 64,
          columnNumber: 7
        }
      }, /*#__PURE__*/React__default.createElement("svg", {
        viewBox: "0 0 18 18",
        role: "presentation",
        focusable: "false",
        "aria-hidden": "true",
        style: _objectSpread$3(_objectSpread$3({}, controlStyle), light && controlStyleLight),
        __self: this,
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 71,
          columnNumber: 9
        }
      }, /*#__PURE__*/React__default.createElement("path", {
        d: arrow,
        fillRule: "evenodd",
        __self: this,
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 81,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Control;
}(React__default.PureComponent);

Control.propTypes = propTypes$6;
Control.defaultProps = defaultProps$6;

var _jsxFileName$7 = "/Users/benwigley/Sites/react-bnb-gallery/src/components/PrevButton/PrevButton.js";

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var PREV_ARROW = 'm13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z';
var propTypes$7 = airbnbPropTypes.forbidExtraProps({
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  light: PropTypes.bool
});
var defaultProps$7 = {
  onPress: noop,
  disabled: false,
  light: false
};

var PrevButton = /*#__PURE__*/function (_PureComponent) {
  inherits(PrevButton, _PureComponent);

  var _super = _createSuper$6(PrevButton);

  function PrevButton() {
    classCallCheck(this, PrevButton);

    return _super.apply(this, arguments);
  }

  createClass(PrevButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onPress = _this$props.onPress,
          disabled = _this$props.disabled,
          light = _this$props.light;
      return /*#__PURE__*/React__default.createElement(Control, {
        className: "gallery-control--prev",
        onPress: onPress,
        arrow: PREV_ARROW,
        disabled: disabled,
        light: light,
        __self: this,
        __source: {
          fileName: _jsxFileName$7,
          lineNumber: 32,
          columnNumber: 7
        }
      });
    }
  }]);

  return PrevButton;
}(React.PureComponent);

PrevButton.propTypes = propTypes$7;
PrevButton.defaultProps = defaultProps$7;

var _jsxFileName$8 = "/Users/benwigley/Sites/react-bnb-gallery/src/components/NextButton/NextButton.js";

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var NEXT_ARROW = 'm4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z';
var propTypes$8 = airbnbPropTypes.forbidExtraProps({
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  light: PropTypes.bool
});
var defaultProps$8 = {
  onPress: noop,
  disabled: false,
  light: false
};

var NextButton = /*#__PURE__*/function (_PureComponent) {
  inherits(NextButton, _PureComponent);

  var _super = _createSuper$7(NextButton);

  function NextButton() {
    classCallCheck(this, NextButton);

    return _super.apply(this, arguments);
  }

  createClass(NextButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onPress = _this$props.onPress,
          disabled = _this$props.disabled,
          light = _this$props.light;
      return /*#__PURE__*/React__default.createElement(Control, {
        className: "gallery-control--next",
        onPress: onPress,
        arrow: NEXT_ARROW,
        disabled: disabled,
        light: light,
        __self: this,
        __source: {
          fileName: _jsxFileName$8,
          lineNumber: 32,
          columnNumber: 7
        }
      });
    }
  }]);

  return NextButton;
}(React.PureComponent);

NextButton.propTypes = propTypes$8;
NextButton.defaultProps = defaultProps$8;

var _jsxFileName$9 = "/Users/benwigley/Sites/react-bnb-gallery/src/components/Gallery/Gallery.js";

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes$9 = _objectSpread$4({}, galleryPropTypes);

var defaultProps$9 = _objectSpread$4({}, galleryDefaultProps);

var Gallery = /*#__PURE__*/function (_PureComponent) {
  inherits(Gallery, _PureComponent);

  var _super = _createSuper$8(Gallery);

  function Gallery(props) {
    var _this;

    classCallCheck(this, Gallery);

    _this = _super.call(this, props);
    var _this$props = _this.props,
        activePhotoIndex = _this$props.activePhotoIndex,
        photos = _this$props.photos,
        wrap = _this$props.wrap;
    _this.state = {
      activePhotoIndex: activePhotoIndex,
      hidePrevButton: wrap && activePhotoIndex === 0,
      hideNextButton: wrap && activePhotoIndex === photos.length - 1,
      controlsDisabled: true,
      touchStartInfo: null,
      touchEndInfo: null,
      touchMoved: false
    };
    _this.lastPreloadIndex = 0;
    _this.preloadedPhotos = [];
    _this.hasPhotos = photos.length > 0;
    _this.hasMoreThanOnePhoto = photos.length > 1;
    _this.move = _this.move.bind(assertThisInitialized(_this));
    _this.prev = _this.prev.bind(assertThisInitialized(_this));
    _this.next = _this.next.bind(assertThisInitialized(_this));
    _this.onPhotoLoad = _this.onPhotoLoad.bind(assertThisInitialized(_this));
    _this.onPhotoError = _this.onPhotoError.bind(assertThisInitialized(_this));
    _this.onPhotoPress = _this.onPhotoPress.bind(assertThisInitialized(_this));
    _this.onTouchStart = _this.onTouchStart.bind(assertThisInitialized(_this));
    _this.onTouchMove = _this.onTouchMove.bind(assertThisInitialized(_this));
    _this.onTouchEnd = _this.onTouchEnd.bind(assertThisInitialized(_this));
    _this.onThumbnailPress = _this.onThumbnailPress.bind(assertThisInitialized(_this));
    _this.onPrevButtonPress = _this.onPrevButtonPress.bind(assertThisInitialized(_this));
    _this.onNextButtonPress = _this.onNextButtonPress.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Gallery, [{
    key: "onNextButtonPress",
    value: function onNextButtonPress() {
      var nextButtonPressed = this.props.nextButtonPressed;
      this.next();
      nextButtonPressed();
    }
  }, {
    key: "onPrevButtonPress",
    value: function onPrevButtonPress() {
      var prevButtonPressed = this.props.prevButtonPressed;
      this.prev();
      prevButtonPressed();
    }
  }, {
    key: "onPhotoLoad",
    value: function onPhotoLoad() {
      return this.setState({
        controlsDisabled: false
      });
    }
  }, {
    key: "onPhotoError",
    value: function onPhotoError() {
      return this.setState({
        controlsDisabled: false
      });
    }
  }, {
    key: "onPhotoPress",
    value: function onPhotoPress() {
      var activePhotoPressed = this.props.activePhotoPressed;
      this.move(DIRECTION_NEXT);
      activePhotoPressed();
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(event) {
      this.setState({
        touchStartInfo: event.targetTouches[0]
      });
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(event) {
      this.setState({
        touchMoved: true,
        touchEndInfo: event.targetTouches[0]
      });
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd() {
      var _this$state = this.state,
          touchStartInfo = _this$state.touchStartInfo,
          touchEndInfo = _this$state.touchEndInfo,
          touchMoved = _this$state.touchMoved;

      if (touchMoved) {
        if (touchStartInfo.screenX < touchEndInfo.screenX) {
          this.onPrevButtonPress();
        } else if (touchStartInfo.screenX > touchEndInfo.screenX) {
          this.onNextButtonPress();
        }
      }

      this.setState({
        touchMoved: false
      });
    }
  }, {
    key: "onThumbnailPress",
    value: function onThumbnailPress(index) {
      this.to(index);
    }
  }, {
    key: "getPhotoByIndex",
    value: function getPhotoByIndex(index) {
      var photos = this.props.photos;
      return photos[index];
    }
  }, {
    key: "getItemByDirection",
    value: function getItemByDirection(direction, activeIndex) {
      var _this$props2 = this.props,
          photos = _this$props2.photos,
          wrap = _this$props2.wrap;
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;
      var lastItemIndex = photos.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && wrap) {
        return activeIndex;
      }

      var delta = isPrevDirection ? -1 : 1;
      var itemIndex = (activeIndex + delta) % photos.length;
      return itemIndex === -1 ? photos.length - 1 : itemIndex;
    }
  }, {
    key: "getStyles",
    value: function getStyles() {
      var backgroundColor = this.props.backgroundColor;
      return {
        backgroundColor: backgroundColor
      };
    }
  }, {
    key: "prev",
    value: function prev() {
      return this.move(DIRECTION_PREV);
    }
  }, {
    key: "next",
    value: function next() {
      return this.move(DIRECTION_NEXT);
    }
  }, {
    key: "move",
    value: function move(direction) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var activePhotoIndex = this.state.activePhotoIndex;
      var nextElementIndex = index !== false ? index : this.getItemByDirection(direction, activePhotoIndex);
      this.wrapCheck(direction, nextElementIndex);
      this.setState({
        activePhotoIndex: nextElementIndex
      });
    }
  }, {
    key: "to",
    value: function to(index) {
      var photos = this.props.photos;
      var activePhotoIndex = this.state.activePhotoIndex;

      if (index > photos.length - 1 || index < 0 || activePhotoIndex === index) {
        return; // nothing to do
      }

      var direction = index > activePhotoIndex ? DIRECTION_NEXT : DIRECTION_PREV;
      this.move(direction, index);
    }
  }, {
    key: "wrapCheck",
    value: function wrapCheck(direction, nextElementIndex) {
      var _this$props3 = this.props,
          photos = _this$props3.photos,
          wrap = _this$props3.wrap;

      if (wrap) {
        this.setState({
          hideNextButton: nextElementIndex === photos.length - 1,
          hidePrevButton: nextElementIndex === 0
        });
      }
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      var light = this.props.light;
      var _this$state2 = this.state,
          hidePrevButton = _this$state2.hidePrevButton,
          hideNextButton = _this$state2.hideNextButton,
          controlsDisabled = _this$state2.controlsDisabled;
      var controls = [];

      if (this.hasMoreThanOnePhoto) {
        // previous control
        if (!hidePrevButton) {
          controls.push( /*#__PURE__*/React__default.createElement(PrevButton, {
            key: ".prevControl",
            disabled: controlsDisabled,
            onPress: this.onPrevButtonPress,
            light: light,
            __self: this,
            __source: {
              fileName: _jsxFileName$9,
              lineNumber: 216,
              columnNumber: 11
            }
          }));
        } // next control


        if (!hideNextButton) {
          controls.push( /*#__PURE__*/React__default.createElement(NextButton, {
            key: ".nextControl",
            disabled: controlsDisabled,
            onPress: this.onNextButtonPress,
            light: light,
            __self: this,
            __source: {
              fileName: _jsxFileName$9,
              lineNumber: 228,
              columnNumber: 11
            }
          }));
        }
      }

      return controls;
    }
  }, {
    key: "renderPreloadPhotos",
    value: function renderPreloadPhotos(current) {
      var _this$props4 = this.props,
          photos = _this$props4.photos,
          preloadSize = _this$props4.preloadSize;
      var counter = 1;
      var index = current;
      var photo = null;
      var preloadPhotos = [];

      while (index < photos.length && counter <= preloadSize) {
        photo = photos[index];
        preloadPhotos.push( /*#__PURE__*/React__default.createElement("img", {
          key: photo.photo,
          alt: photo.photo,
          src: photo.photo,
          __self: this,
          __source: {
            fileName: _jsxFileName$9,
            lineNumber: 251,
            columnNumber: 9
          }
        }));
        index += 1;
        counter += 1;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          photos = _this$props5.photos,
          showThumbnails = _this$props5.showThumbnails,
          phrases = _this$props5.phrases;
      var emptyMessage = phrases.noPhotosProvided;
      var activePhotoIndex = this.state.activePhotoIndex; // preload photos

      var galleryModalPreloadPhotos = this.renderPreloadPhotos(activePhotoIndex);
      var controls = this.renderControls();
      var current = this.getPhotoByIndex(activePhotoIndex);
      var galleryStyles = this.getStyles();
      return /*#__PURE__*/React__default.createElement("div", {
        className: "gallery",
        style: galleryStyles,
        __self: this,
        __source: {
          fileName: _jsxFileName$9,
          lineNumber: 287,
          columnNumber: 7
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-modal--preload",
        __self: this,
        __source: {
          fileName: _jsxFileName$9,
          lineNumber: 288,
          columnNumber: 9
        }
      }, galleryModalPreloadPhotos), /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-main",
        __self: this,
        __source: {
          fileName: _jsxFileName$9,
          lineNumber: 291,
          columnNumber: 9
        }
      }, controls, /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-photos",
        __self: this,
        __source: {
          fileName: _jsxFileName$9,
          lineNumber: 293,
          columnNumber: 11
        }
      }, this.hasPhotos ? /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-photo",
        __self: this,
        __source: {
          fileName: _jsxFileName$9,
          lineNumber: 295,
          columnNumber: 15
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-photo--current",
        __self: this,
        __source: {
          fileName: _jsxFileName$9,
          lineNumber: 296,
          columnNumber: 17
        }
      }, /*#__PURE__*/React__default.createElement(Photo, {
        photo: current,
        onLoad: this.onPhotoLoad,
        onError: this.onPhotoError,
        onPress: this.onPhotoPress,
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd,
        __self: this,
        __source: {
          fileName: _jsxFileName$9,
          lineNumber: 297,
          columnNumber: 19
        }
      }))) : /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-empty",
        __self: this,
        __source: {
          fileName: _jsxFileName$9,
          lineNumber: 309,
          columnNumber: 15
        }
      }, emptyMessage))), showThumbnails && current && /*#__PURE__*/React__default.createElement(Caption, {
        phrases: phrases,
        current: activePhotoIndex,
        photos: photos,
        onPress: this.onThumbnailPress,
        __self: this,
        __source: {
          fileName: _jsxFileName$9,
          lineNumber: 316,
          columnNumber: 11
        }
      }));
    }
  }]);

  return Gallery;
}(React.PureComponent);

Gallery.propTypes = propTypes$9;
Gallery.defaultProps = defaultProps$9;

var _this$1 = undefined,
    _jsxFileName$a = "/Users/benwigley/Sites/react-bnb-gallery/src/components/CloseButton/CloseButton.js";

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var CLOSE_PATH = 'm23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22';
var buttonStyle = {
  height: '2em',
  width: '2em',
  display: 'block',
  fill: NORMAL_COLOR
};
var buttonStyleLight = {
  fill: INVERSE_COLOR
};
var propTypes$a = airbnbPropTypes.forbidExtraProps({
  onPress: PropTypes.func,
  light: PropTypes.bool
});
var defaultProps$a = {
  onPress: noop,
  light: false
};

var CloseButton = function CloseButton(_ref) {
  var onPress = _ref.onPress,
      light = _ref.light;
  return /*#__PURE__*/React__default.createElement("button", {
    onClick: onPress,
    className: "gallery-close",
    type: "button",
    "aria-busy": false,
    __self: _this$1,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 39,
      columnNumber: 3
    }
  }, /*#__PURE__*/React__default.createElement("svg", {
    viewBox: "0 0 24 24",
    role: "img",
    focusable: "false",
    style: _objectSpread$5(_objectSpread$5({}, buttonStyle), light && buttonStyleLight),
    __self: _this$1,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 45,
      columnNumber: 5
    }
  }, /*#__PURE__*/React__default.createElement("path", {
    d: CLOSE_PATH,
    fillRule: "evenodd",
    __self: _this$1,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 54,
      columnNumber: 7
    }
  })));
};

CloseButton.propTypes = propTypes$a;
CloseButton.defaultProps = defaultProps$a;

var MIN = 0;
var MAX = 1; // eslint-disable-next-line consistent-return

function opacityValidation(props, propName) {
  if (props[propName] < MIN || props[propName] > MAX) {
    return new Error('Invalid value for opacity');
  }
}

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function processPhoto(photo, index) {
  var props = typeof photo === 'string' ? {
    number: index + 1,
    photo: photo
  } : _objectSpread$6(_objectSpread$6({}, photo), {}, {
    number: index + 1
  });
  return _objectSpread$6(_objectSpread$6({}, defaultPhotoProps), props);
}
function getPhotos(photos) {
  var photosToProcess = Object.prototype.toString.call(photos) === '[object Array]' ? photos : [photos];
  return photosToProcess.map(processPhoto);
}

var _jsxFileName$b = "/Users/benwigley/Sites/react-bnb-gallery/src/ReactBnbGallery.js";

function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var propTypes$b = airbnbPropTypes.forbidExtraProps(_objectSpread$7(_objectSpread$7({}, galleryPropTypes), {}, {
  leftKeyPressed: PropTypes.func,
  onClose: PropTypes.func,
  rightKeyPressed: PropTypes.func,
  show: PropTypes.bool,
  keyboard: PropTypes.bool,
  opacity: opacityValidation,
  zIndex: airbnbPropTypes.nonNegativeInteger
}));

var defaultProps$b = _objectSpread$7(_objectSpread$7({}, galleryDefaultProps), {}, {
  leftKeyPressed: noop,
  onClose: noop,
  rightKeyPressed: noop,
  show: false,
  keyboard: true,
  opacity: DEFAULT_OPACITY,
  zIndex: DEFAULT_Z_INDEX
});

var ReactBnbGallery = /*#__PURE__*/function (_Component) {
  inherits(ReactBnbGallery, _Component);

  var _super = _createSuper$9(ReactBnbGallery);

  function ReactBnbGallery(props) {
    var _this;

    classCallCheck(this, ReactBnbGallery);

    _this = _super.call(this, props);
    _this.state = {
      photos: null
    };
    _this.gallery = /*#__PURE__*/React__default.createRef();
    _this.close = _this.close.bind(assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(ReactBnbGallery, [{
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ESC_KEYCODE:
          event.preventDefault();
          this.close();
          break;

        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.gallery.current.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.gallery.current.next();
          break;
      }
    }
  }, {
    key: "getModalOverlayStyles",
    value: function getModalOverlayStyles() {
      var _this$props = this.props,
          opacity = _this$props.opacity,
          backgroundColor = _this$props.backgroundColor;
      return {
        opacity: opacity,
        backgroundColor: backgroundColor
      };
    }
  }, {
    key: "close",
    value: function close() {
      var onClose = this.props.onClose;
      onClose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          show = _this$props2.show,
          phrases = _this$props2.phrases,
          keyboard = _this$props2.keyboard,
          light = _this$props2.light,
          zIndex = _this$props2.zIndex;
      var photos = this.state.photos;

      if (!show) {
        return null; // nothing to return
      }

      var _omit = omit(this.props, ['onClose', 'leftKeyPressed', 'rightKeyPressed', 'show', 'photos', 'opacity', 'backgroundColor', 'zIndex', 'keyboard']),
          wrap = _omit.wrap,
          activePhotoIndex = _omit.activePhotoIndex,
          activePhotoPressed = _omit.activePhotoPressed,
          direction = _omit.direction,
          nextButtonPressed = _omit.nextButtonPressed,
          prevButtonPressed = _omit.prevButtonPressed,
          showThumbnails = _omit.showThumbnails,
          preloadSize = _omit.preloadSize; // modal overlay customization styles


      var galleryModalOverlayStyles = this.getModalOverlayStyles();
      var modalStyle = {
        zIndex: zIndex
      };
      return /*#__PURE__*/React__default.createElement(reactPortal.Portal, {
        __self: this,
        __source: {
          fileName: _jsxFileName$b,
          lineNumber: 166,
          columnNumber: 7
        }
      }, /*#__PURE__*/React__default.createElement(FocusTrap, {
        __self: this,
        __source: {
          fileName: _jsxFileName$b,
          lineNumber: 167,
          columnNumber: 9
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: classnames(['gallery-modal', light && 'mode-light']),
        onKeyDown: keyboard && this.onKeyDown,
        tabIndex: "-1",
        role: "dialog",
        style: modalStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName$b,
          lineNumber: 168,
          columnNumber: 11
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        style: galleryModalOverlayStyles,
        className: "gallery-modal--overlay",
        __self: this,
        __source: {
          fileName: _jsxFileName$b,
          lineNumber: 178,
          columnNumber: 13
        }
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-modal--container",
        __self: this,
        __source: {
          fileName: _jsxFileName$b,
          lineNumber: 182,
          columnNumber: 13
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-modal--table",
        __self: this,
        __source: {
          fileName: _jsxFileName$b,
          lineNumber: 183,
          columnNumber: 15
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-modal--cell",
        __self: this,
        __source: {
          fileName: _jsxFileName$b,
          lineNumber: 184,
          columnNumber: 17
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-modal--content",
        __self: this,
        __source: {
          fileName: _jsxFileName$b,
          lineNumber: 185,
          columnNumber: 19
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-modal--close",
        __self: this,
        __source: {
          fileName: _jsxFileName$b,
          lineNumber: 186,
          columnNumber: 21
        }
      }, /*#__PURE__*/React__default.createElement(CloseButton, {
        onPress: this.close,
        light: light,
        __self: this,
        __source: {
          fileName: _jsxFileName$b,
          lineNumber: 187,
          columnNumber: 23
        }
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-content",
        __self: this,
        __source: {
          fileName: _jsxFileName$b,
          lineNumber: 192,
          columnNumber: 21
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-top",
        __self: this,
        __source: {
          fileName: _jsxFileName$b,
          lineNumber: 193,
          columnNumber: 23
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "gallery-top--inner",
        __self: this,
        __source: {
          fileName: _jsxFileName$b,
          lineNumber: 194,
          columnNumber: 25
        }
      })), /*#__PURE__*/React__default.createElement(Gallery, {
        phrases: phrases,
        ref: this.gallery,
        photos: photos,
        wrap: wrap,
        activePhotoIndex: activePhotoIndex,
        activePhotoPressed: activePhotoPressed,
        direction: direction,
        nextButtonPressed: nextButtonPressed,
        prevButtonPressed: prevButtonPressed,
        showThumbnails: showThumbnails,
        preloadSize: preloadSize,
        backgroundColor: null,
        light: light,
        __self: this,
        __source: {
          fileName: _jsxFileName$b,
          lineNumber: 196,
          columnNumber: 23
        }
      })))))))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.photos !== state.photos) {
        return {
          photos: getPhotos(props.photos)
        };
      }

      return null;
    }
  }]);

  return ReactBnbGallery;
}(React.Component);

ReactBnbGallery.propTypes = propTypes$b;
ReactBnbGallery.defaultProps = defaultProps$b;

exports.Gallery = Gallery;
exports.ReactBnbGallery = ReactBnbGallery;
exports.default = ReactBnbGallery;
