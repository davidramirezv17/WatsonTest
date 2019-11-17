
const PORT = '3312';
const LOCAL = true;
/** Función de lanzamiento del servidor
 * @returns {undefined}
*/
function launchServer() {
	if (LOCAL) {
		console.log(`🚀 Server starting on http://localhost:${PORT}`);
	}
}

(async () => {
	try {
		const app = require('./app');
		app.listen(PORT, launchServer);
	} catch (error) {
		console.log('Error levantando aplicacion', error.message);
	}
})();