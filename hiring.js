{
function base64decode(base64) {
  const bin = atob(base64);
  const len = bin.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i += 1) {
    bytes[i] = bin.charCodeAt(i);
  }
  const decoder = new TextDecoder();
  return decoder.decode(bytes);
}

async function check() {
  const res = await fetch('https://restapi.amap.com/v3/ip?key=c61cc4f99b68bf1418c41d8b448d840e');
  const d = await res.json();
  if (!['北京市', '杭州市', '上海市', '深圳市'].includes(d?.city)) return;
  return d;
}

async function start() {
  const geo = await check();
  if (!geo) return;
  return base64decode('6JqC6JqB6ZuG5ZuiIENsb3VkSURFIOWboumYn+etieS9oOadpeWKoOWFpQo+PiA8YSBocmVmPSJodHRwczovL3d3dy55dXF1ZS5jb20vZG9jcy9zaGFyZS81MjZiM2ZhZS1iZmFkLTRiYjQtYTA2Zi1hNWI2ZWM0NDIwYjAiIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vZm9sbG93IG5vb3BlbmVyIiBkYXRhLWdhLWxhYmVsPSJkZXRhaWwiPuS6huino+abtOWkmjwvYT4KfCA8YSBocmVmPSJtYWlsdG86Z2VyYTJsZEAxNjMuY29tP3N1YmplY3Q9SGklMjBDbG91ZElERSIgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9mb2xsb3cgbm9vcGVuZXIiIGRhdGEtZ2EtbGFiZWw9ImNvbnRhY3QiPuaDs+WKoOWFpTwvYT4gfCA8YSBocmVmPSJtYWlsdG86Z2VyYTJsZEAxNjMuY29tP3N1YmplY3Q9SGklMjBDbG91ZElEReWunuS5oCIgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9mb2xsb3cgbm9vcGVuZXIiIGRhdGEtZ2EtbGFiZWw9ImNvbnRhY3QtaW50ZXJuIiB0aXRsZT0iMjAyMuW5tOavleS4miI+5oOz5a6e5LmgPC9hPiB8IDxhIGhyZWY9Im1haWx0bzpnZXJhMmxkQDE2My5jb20/c3ViamVjdD1IaSUyMEdlcmFsZCIgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9mb2xsb3cgbm9vcGVuZXIiIGRhdGEtZ2EtbGFiZWw9ImNvbnRhY3QtdGFsayI+6ZqP5L6/6IGK6IGKPC9hPg==');
}

// window.initializeBanner = start;
}
