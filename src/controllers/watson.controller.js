const { watsonAssistant } = require('../libs');

async function sendMessage(req, res) {
	try {
		const { message } = req.query;
		const result = await watsonAssistant.sendMessage(message);
		return res.json({ response: result.output.text[0] });
	} catch (error) {
		throw error;
	}
}

module.exports = {
	sendMessage,
};
