#!/usr/bin/env python3
"""Doc va tra cuu bo du lieu 60 Hoa Giap.

Chay:  python3 doc-du-lieu.py
Khong can thu vien ngoai.
"""
import csv
import pathlib

GOC = pathlib.Path(__file__).resolve().parents[2] / "data"


def nap(slug):
    with open(GOC / f"{slug}.csv", encoding="utf-8", newline="") as f:
        return list(csv.DictReader(f))


def main():
    hoa_giap = nap("60-hoa-giap")
    print(f"Nap {len(hoa_giap)} dong tu 60-hoa-giap.csv")

    # Tra can chi cua mot nam: cot cac_nam liet ke cac nam ngan bang dau cham phay.
    nam = "1984"
    for h in hoa_giap:
        if nam in [x.strip() for x in h["cac_nam"].split(";")]:
            print(f"Nam {nam}: {h['can_chi']}, nap am {h['ten_nap_am']} ({h['ngu_hanh_nap_am']})")
            break

    # Dem theo ngu hanh nap am.
    dem = {}
    for h in hoa_giap:
        dem[h["ngu_hanh_nap_am"]] = dem.get(h["ngu_hanh_nap_am"], 0) + 1
    print("So cap theo ngu hanh nap am:")
    for hanh, n in sorted(dem.items(), key=lambda x: -x[1]):
        print(f"  {hanh}: {n}")

    # Cot ghi_chu la noi ghi diem cac truong phai bat dong.
    co_ghi_chu = [h for h in hoa_giap if h["ghi_chu"].strip()]
    print(f"So dong co ghi chu bat dong: {len(co_ghi_chu)}")


if __name__ == "__main__":
    main()
