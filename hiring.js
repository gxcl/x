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
  return base64decode('CuiaguiagembhuWboiBDbG91ZElERSDlm6LpmJ/nrYnkvaDmnaXliqDlhaUKPj4gPGEgaHJlZj0iaHR0cHM6Ly93d3cueXVxdWUuY29tL2RvY3Mvc2hhcmUvNTI2YjNmYWUtYmZhZC00YmI0LWEwNmYtYTViNmVjNDQyMGIwIiB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub2ZvbGxvdyBub29wZW5lciIgZGF0YS1nYS1sYWJlbD0iYmFubmVyIj7ngrnlh7vkuobop6Pmm7TlpJo8L2E+CnwgPGEgaHJlZj0ibWFpbHRvOmdlcmEybGRAMTYzLmNvbT9zdWJqZWN0PUhpJTIwQ2xvdWRJREUiIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vZm9sbG93IG5vb3BlbmVyIiBkYXRhLWdhLWxhYmVsPSJjb250YWN0IiB0aXRsZT0i6IGK5ZWl6YO95Y+v5Lul77yM5Lqk5Liq5pyL5Y+L5Lmf5LiN6ZSZfiI+5Yu+5pCt5LiA5LiLPC9hPgoK');
}

window.initializeBanner = start;
}
