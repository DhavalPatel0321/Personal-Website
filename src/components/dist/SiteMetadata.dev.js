"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _gatsby = require("gatsby");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      query SITE_METADATA_QUERY {\n        site {\n          siteMetadata {\n            title\n            description\n          }\n        }\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var useSiteMetadata = function useSiteMetadata() {
  var _useStaticQuery = (0, _gatsby.useStaticQuery)((0, _gatsby.graphql)(_templateObject())),
      site = _useStaticQuery.site;

  return site.siteMetadata;
};

var _default = useSiteMetadata;
exports["default"] = _default;