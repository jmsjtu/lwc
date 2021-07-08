import { registerTemplate } from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    k: api_key,
    d: api_dynamic,
    t: api_text,
    h: api_element,
    i: api_iterator,
  } = $api;
  return [
    api_element(
      "section",
      {
        key: 0,
      },
      api_iterator($cmp.items, function (item) {
        return [
          api_element(
            "p",
            {
              key: api_key(1, item.keyOne),
            },
            [api_text("1" + api_dynamic(item))]
          ),
          api_element(
            "p",
            {
              key: api_key(2, item.keyTwo),
            },
            [api_text("2" + api_dynamic(item))]
          ),
        ];
      })
    ),
  ];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
