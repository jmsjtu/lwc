import { registerTemplate } from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const { d: api_dynamic, t: api_text } = $api;
  return [api_text(api_dynamic($cmp.text))];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
