const AssistantV1 = require('ibm-watson/assistant/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const { url, apikey, version, workspaceID } = require('../../config/watson.json');
var context={};
const assistant = new AssistantV1({
    authenticator: new IamAuthenticator({ apikey }),
    url,
    version,
});

async function sendMessage(message) {
    try {
        const params = {
            workspaceId: workspaceID,
            input: { text: message },
            context
        };
        const res = await assistant.message(params);
        context = res.result.context;
        return res.result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    sendMessage,
};
