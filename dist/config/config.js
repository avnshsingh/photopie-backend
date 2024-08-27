"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperTokensConfig = exports.getWebsiteDomain = exports.getApiDomain = void 0;
var thirdparty_1 = __importDefault(require("supertokens-node/recipe/thirdparty"));
var passwordless_1 = __importDefault(require("supertokens-node/recipe/passwordless"));
var session_1 = __importDefault(require("supertokens-node/recipe/session"));
var dashboard_1 = __importDefault(require("supertokens-node/recipe/dashboard"));
var userroles_1 = __importDefault(require("supertokens-node/recipe/userroles"));
function getApiDomain() {
    var apiPort = process.env.REACT_APP_API_PORT || 3001;
    var apiUrl = process.env.REACT_APP_API_URL || "http://localhost:".concat(apiPort);
    return apiUrl;
}
exports.getApiDomain = getApiDomain;
function getWebsiteDomain() {
    var websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
    var websiteUrl = process.env.REACT_APP_WEBSITE_URL || "http://localhost:".concat(websitePort);
    return websiteUrl;
}
exports.getWebsiteDomain = getWebsiteDomain;
exports.SuperTokensConfig = {
    supertokens: {
        // this is the location of the SuperTokens core.
        connectionURI: "https://try.supertokens.com",
    },
    appInfo: {
        appName: "Photo Pie App",
        apiDomain: getApiDomain(),
        websiteDomain: getWebsiteDomain(),
    },
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [
        thirdparty_1.default.init({
            signInAndUpFeature: {
                providers: [
                    // We have provided you with development keys which you can use for testing.
                    // IMPORTANT: Please replace them with your own OAuth keys for production use.
                    {
                        config: {
                            thirdPartyId: "google",
                            clients: [
                                {
                                    clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                                    clientSecret: "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",
                                },
                            ],
                        },
                    },
                    {
                        config: {
                            thirdPartyId: "github",
                            clients: [
                                {
                                    clientId: "467101b197249757c71f",
                                    clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd",
                                },
                            ],
                        },
                    },
                    {
                        config: {
                            thirdPartyId: "apple",
                            clients: [
                                {
                                    clientId: "4398792-io.supertokens.example.service",
                                    additionalConfig: {
                                        keyId: "7M48Y4RYDL",
                                        privateKey: "-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----",
                                        teamId: "YWQCXGJRJL",
                                    },
                                },
                            ],
                        },
                    },
                    {
                        config: {
                            thirdPartyId: "twitter",
                            clients: [
                                {
                                    clientId: "4398792-WXpqVXRiazdRMGNJdEZIa3RVQXc6MTpjaQ",
                                    clientSecret: "BivMbtwmcygbRLNQ0zk45yxvW246tnYnTFFq-LH39NwZMxFpdC",
                                },
                            ],
                        },
                    },
                ],
            },
        }),
        passwordless_1.default.init({
            contactMethod: "EMAIL_OR_PHONE",
            flowType: "USER_INPUT_CODE_AND_MAGIC_LINK",
        }),
        session_1.default.init(),
        dashboard_1.default.init(),
        userroles_1.default.init(),
    ],
};
