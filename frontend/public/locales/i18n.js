"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i18next_1 = require("i18next");
var react_i18next_1 = require("react-i18next");
var i18next_browser_languagedetector_1 = require("i18next-browser-languagedetector");
var translation_json_1 = require("./en/translation.json");
var translation_json_2 = require("./ar/translation.json");
i18next_1.default
    .use(i18next_browser_languagedetector_1.default)
    .use(react_i18next_1.initReactI18next)
    .init({
    cn: cn,
    resources: {
        en: { translation: translation_json_1.default },
        ar: { translation: translation_json_2.default },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
        order: ['htmlTag', 'localStorage', 'navigator', 'path', 'subdomain', 'Cookie'],
        caches: ['localStorage', "Cookie"],
    },
    react: { useSuspense: false },
});
exports.default = i18next_1.default;
