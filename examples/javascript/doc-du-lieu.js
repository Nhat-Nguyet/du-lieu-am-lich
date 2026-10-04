#!/usr/bin/env node
// Doc va tra cuu bo du lieu 12 Dia Chi bang JavaScript thuan.
//
// Chay:  node doc-du-lieu.js
// Khong can thu vien ngoai.

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const GOC = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "data");

// Bo doc CSV toi thieu nhung dung RFC 4180: o duoc boc trong dau nhay kep
// co the chua dau phay, va hai dau nhay lien nhau la mot dau nhay that.
function docCSV(vanBan) {
  const dong = [];
  let o = [], cur = "", trongNhay = false;
  for (let i = 0; i < vanBan.length; i++) {
    const c = vanBan[i];
    if (trongNhay) {
      if (c === '"' && vanBan[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') trongNhay = false;
      else cur += c;
    } else if (c === '"') trongNhay = true;
    else if (c === ",") { o.push(cur); cur = ""; }
    else if (c === "\n") { o.push(cur); dong.push(o); o = []; cur = ""; }
    else if (c !== "\r") cur += c;
  }
  if (cur || o.length) { o.push(cur); dong.push(o); }
  const [ten, ...than] = dong.filter((d) => d.some((x) => x !== ""));
  return than.map((d) => Object.fromEntries(ten.map((t, i) => [t, d[i] ?? ""])));
}

const chi = docCSV(readFileSync(join(GOC, "12-dia-chi.csv"), "utf8"));
console.log(`Nap ${chi.length} dong tu 12-dia-chi.csv`);

for (const c of chi) {
  console.log(`  ${c.chi.padEnd(5)} ${c.con_giap.padEnd(6)} ${c.ngu_hanh.padEnd(5)} ${c.khung_gio}`);
}

// Cot ghi_chu la noi ghi diem cac truong phai bat dong.
const coGhiChu = chi.filter((c) => c.ghi_chu.trim());
console.log(`\nDong co ghi chu bat dong: ${coGhiChu.length}`);
for (const c of coGhiChu) console.log(`  ${c.chi}: ${c.ghi_chu}`);
