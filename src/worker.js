import createApp from "../build/app.mjs";
import wasm from "../build/app.wasm";

const app = await createApp({
  instantiateWasm: (imports, done) => (WebAssembly.instantiate(wasm, imports).then(done), {}),
});

export default {
  fetch: () => new Response(app.hello("World")),
};
