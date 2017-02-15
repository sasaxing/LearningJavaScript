const html =
`<a class="foo" href="/foo" id="foo">Foo</a>\n` +
`<A href='/foo' Class="foo">Foo</a>\n` +
`<a href="/foo">Foo</a>\n` +
`<a onclick="javascript:alert('foo!')" href="/foo">Foo</a>`;

//console.log(html);
//console.log(html.match(/<a .*?>(.*?)<\/a>/ig));

function sanitizeATag(aTag){
    const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);
    const attributes = parts[1].split(/\s+/);
    return '<a ' + attributes.filter(attr => /^(?:class|id|href)[\s=]/i.test(attr)).join(' ') + '>' + parts[2] + '</a>';
}
console.log('==> replace(reg,f):');

html.replace(/<a (.*?)>(.*?)<\/a>/ig, function(m, g1,g2, offset) {
  // (m, g1,g2, offset) is the whole returned array of html.match(regExp)
  // m = the whole matched string
  // g1 = first (.*?)
  // g2 = second (.*?)
  // here can be more.
  // offset = index.
  // last parameter(rarely used) = the original string
  console.log(`<a> tag found at ${offset}. contents: ${g2}`);
});

console.log('==> use the function:');

html.replace(/<a (.*?)>(.*?)<\/a>/ig, function(m){
  console.log(sanitizeATag(m));
});

console.log('==> replace the function:');
res = html.replace(/<a.*?<\/a>/ig, sanitizeATag);
console.log(res);
