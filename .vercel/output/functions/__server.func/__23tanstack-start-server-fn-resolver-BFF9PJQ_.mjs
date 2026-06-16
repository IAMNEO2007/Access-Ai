//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-BFF9PJQ_.js
var manifest = {
	"0d6a1dcd893fffea5f5244675f6a7f8bf9f83d0aa9d54c15b2fc2fe9b770f1b4": {
		functionName: "loadMemoryServer_createServerFn_handler",
		importer: () => import("./_ssr/memory.functions-D8MYIVIU.mjs")
	},
	"164e695760391dc2c9686b628c5423c1b08ad598f4cd889635053052b83e9b70": {
		functionName: "clearConversation_createServerFn_handler",
		importer: () => import("./_ssr/conversation.functions-lFyGEUdX.mjs")
	},
	"1d28171b5a190074c0fa046cd1d4b24c860cdc784c51376a190f853153002862": {
		functionName: "saveMessage_createServerFn_handler",
		importer: () => import("./_ssr/conversation.functions-lFyGEUdX.mjs")
	},
	"c811691c284183eaf8703393dfd3f2f7c07c3210a6aef1c1f967ba48090fa1f6": {
		functionName: "loadConversation_createServerFn_handler",
		importer: () => import("./_ssr/conversation.functions-lFyGEUdX.mjs")
	},
	"cc6d3230ba42ae1315f160596950dfa134787d11abdebb50f47e8f802056bb77": {
		functionName: "applyMemoryServerOp_createServerFn_handler",
		importer: () => import("./_ssr/memory.functions-D8MYIVIU.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
