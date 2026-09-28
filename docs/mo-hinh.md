# Hồ sơ mô hình · Model profiles

Sinh từ mục `mo_hinh` của `manifest.json` (lượt `2026.09.28-ce2df2b1`,
khuôn `1.1.0`). Tệp đối chiếu nằm trong kho mã của
site; sha256 cho phép ai tải cùng nguồn kiểm lại đúng tệp đã dùng.

*Generated from the `mo_hinh` section of `manifest.json`. The reference
files live in the site's source repository; their sha256 lets anyone who
downloads the same source verify the exact file used.*

## `lich-am-ho-ngoc-duc-utc7-v1`

Lịch âm Việt Nam · *Vietnamese lunisolar calendar* · 越南农历

Động cơ · engine **v1.0.0**. Bộ dùng · used by: `le-hoi-quy-doi-ngay-duong`, `lich-am-duong-1900-2100`, `ngay-ky-dan-gian-2026-2035`

| Trường · Field | Giá trị · Value |
|---|---|
| `ma` | lich-am-ho-ngoc-duc-utc7-v1 |
| `phien_ban` | 1.0.0 |
| `loai` | lich-am |
| `mui_gio` | Asia/Ho_Chi_Minh |
| `utc_offset_gio` | 7 |
| `diem_soc` | ho-ngoc-duc-newmoon: chuỗi rút gọn của Meeus trong thuật toán Hồ Ngọc Đức, kèm hiệu chỉnh ΔT đa thức riêng của thuật toán |
| `trung_khi` | ho-ngoc-duc-sunlongitude: kinh độ hình học của Mặt Trời (phương trình tâm ba số hạng), xét lúc 0 giờ ngày sóc theo giờ địa phương, chia 30 độ |
| `mung_mot` | ngay-chua-diem-soc-theo-gio-dia-phuong |
| `thang_muoi_mot` | thang-chua-dong-chi |
| `quy_tac_thang_nhuan` | thang-dau-tien-khong-chua-trung-khi-sau-thang-11-khi-giua-hai-thang-11-co-13-thang |

| Nguồn đối chiếu · Reference | Tệp · File | sha256 | Truy cập · Accessed | Mốc · Points | Dung sai (phút) · Tolerance (min) | Test |
|---|---|---|---|---|---|---|
| NASA GSFC, Fred Espenak, Six Millennium Catalog of Phases of the Moon | `services/api/internal/coreengine/testdata/lichphap/nasa_soc_1901_2100.tsv` | `9d934604558f1528b01c849d52ef2fac409fe6960f74590cdfc8e8a9d5e9fb12` | 2026-09-27 | 2474 | 5 | `TestKiemCheoDiemSocNASA` |
| IMCCE (Đài Thiên văn Paris), dịch vụ Miriade ephemcc, lý thuyết hành tinh INPOP | `services/api/internal/coreengine/testdata/lichphap/imcce_tiet_khi_1900_2100.tsv` | `3f6fad729304ae8631ed2ef495f4867c56f5d1195de56c2eb3b2c45243c2b1da` | 2026-09-27 | 4824 | 15 | `TestKiemCheoGioTietKhi` |

Thuật toán Hồ Ngọc Đức, múi giờ UTC+7 cho mọi năm, kể cả những năm lịch in ở Việt Nam còn theo UTC+8. Đối chiếu 27/09/2026: điểm sóc lệch NASA trung bình 0,9 phút, nhiều nhất 3,9 phút trên 2.474 lần sóc; 2.459 trên 2.461 tháng âm 1901 tới 2100 dựng lại từ sóc NASA và trung khí IMCCE khớp, hai tháng lệch có sóc sát nửa đêm.

*Hồ Ngọc Đức's algorithm, UTC+7 for every year, including years when Vietnamese almanacs still printed UTC+8. Checked on 27 September 2026: new moons differ from NASA by 0.9 minutes on average and 3.9 at most over 2,474 new moons; 2,459 of 2,461 lunar months from 1901 to 2100 rebuilt from NASA new moons and IMCCE principal terms match, the two that differ having a new moon close to midnight.*

## `quai-khi-manh-hy-6-ngay-7-phan-v1`

Quẻ trị ngày theo phép Quái khí · *Daily hexagram by the Gua Qi method* · 卦气值日卦

Động cơ · engine **v1.0.0**. Bộ dùng · used by: `que-ngay-quai-khi-1900-2100`, `thu-tu-60-que-quai-khi`

| Trường · Field | Giá trị · Value |
|---|---|
| `ma` | quai-khi-manh-hy-6-ngay-7-phan-v1 |
| `phien_ban` | 1.0.0 |
| `loai` | quai-khi |
| `mui_gio` | Asia/Ho_Chi_Minh |
| `utc_offset_gio` | 7 |
| `phu_thuoc` | tiet-khi-meeus-c25-bieu-kien-v2 |
| `truyen_thong` | manh-hy |
| `nguon_truyen_thong` | Tân Đường thư, quyển 28 thượng (Lịch chí 4 thượng), phát liễm thuật của lịch Đại Diễn; Tân Đường thư, quyển 27 thượng (Lịch chí 3 thượng), Quái nghị của Nhất Hạnh; Khổng Dĩnh Đạt, Chu Dịch chính nghĩa, lời sớ quẻ Phục (dẫn Dịch vĩ Kê Lãm Đồ) |
| `neo` | dong-chi-thuc-moi-nam |
| `thoi_diem_dai_dien` | 12:00 |
| `do_dai_que_phut` | 8766 |
| `cach_lam_tron` | floor |
| `phan_du` | hao-thuong |
| `dat_lai_chu_ky` | cat-que-60-tai-dong-chi |
| `que_tu_chinh` | so: 29; 51; 30; 58, cach_xu_ly: khong-tri-ngay-moi-hao-mot-tiet-khi, khoi: hao-so-que-kham-tai-dong-chi |
| `nguong_sat_giao_que_phut` | 15 |

Sáu mươi quẻ mỗi quẻ 6 ngày 7 phần (8.766 phút), đếm đều từ Đông chí thật mỗi năm, quẻ của ngày là quẻ đang trị lúc 12 giờ trưa giờ Việt Nam. Vị trí quẻ là phần nguyên của số phút từ Đông chí chia 8.766. Đông chí năm sau tới trước khi quẻ 60 hết phần nên quẻ 60 bị cắt (7 tới 13 phút mỗi năm, 1900 tới 2100). Phần dư 7/80 ngày sau sáu hào tính vào hào thượng; nguồn không nói, đây là lựa chọn của site.

*Sixty hexagrams of 6 days 7 parts each (8,766 minutes), counted evenly from the true winter solstice every year; the day's hexagram is the one in force at 12:00 noon Vietnam time. The position is the integer part of the minutes since the solstice divided by 8,766. The next solstice arrives before hexagram 60 runs its full share, so hexagram 60 is cut short (7 to 13 minutes a year, 1900 to 2100). The 7/80-day remainder after six lines goes to the top line; the sources are silent, this is the site's choice.*

## `tiet-khi-meeus-c25-bieu-kien-v2`

Giờ giao 24 tiết khí · *Solar term moments* · 二十四节气交节时刻

Động cơ · engine **v2.0.0**. Bộ dùng · used by: `24-tiet-khi`, `bien-cung-hoang-dao-1950-2050`, `lich-am-duong-1900-2100`, `moc-tiet-khi-1900-2100`, `que-ngay-quai-khi-1900-2100`

| Trường · Field | Giá trị · Value |
|---|---|
| `ma` | tiet-khi-meeus-c25-bieu-kien-v2 |
| `phien_ban` | 2.0.0 |
| `loai` | tiet-khi |
| `mui_gio` | Asia/Ho_Chi_Minh |
| `utc_offset_gio` | 7 |
| `lich_thien_van` | meeus-c25-rut-gon: Meeus, Astronomical Algorithms chương 25, kinh độ Mặt Trời theo phương trình tâm ba số hạng (chuỗi rút gọn, độ chính xác chừng 0,01 độ), không phải VSOP87 đầy đủ |
| `quang_sai_do` | -0.00569 |
| `chuong_dong` | chuong_dong_do = -0.00478 * sin(Ω), Ω = 125.04 - 1934.136 T (độ), T tính bằng thế kỷ Julius từ J2000 theo giờ TT |
| `delta_t` | espenak-meeus-2006: đa thức ΔT = TT - UT theo từng khoảng năm của Espenak và Meeus (NASA, 2006), lấy ở giữa năm dương lịch |
| `cach_giai` | chia-doi |
| `nguong_dung_giai_phut` | 1 |
| `dung_sai_phut` | 15 |

| Nguồn đối chiếu · Reference | Tệp · File | sha256 | Truy cập · Accessed | Mốc · Points | Dung sai (phút) · Tolerance (min) | Test |
|---|---|---|---|---|---|---|
| IMCCE (Đài Thiên văn Paris), dịch vụ Miriade ephemcc, lý thuyết hành tinh INPOP | `services/api/internal/coreengine/testdata/lichphap/imcce_tiet_khi_1900_2100.tsv` | `3f6fad729304ae8631ed2ef495f4867c56f5d1195de56c2eb3b2c45243c2b1da` | 2026-09-27 | 4824 | 15 | `TestKiemCheoGioTietKhi` |
| U.S. Naval Observatory, Astronomical Applications API (seasons) | `services/api/internal/coreengine/testdata/lichphap/usno_phan_chi_1900_2100.tsv` | `ef70a6694d2764f13f8409b2dade5fb87ade9161d0fdccc683b6993f472d8419` | 2026-09-27 | 804 | 15 | `TestKiemCheoGioTietKhi` |

Mốc là lúc kinh độ biểu kiến của Mặt Trời chạm đúng bội số của 15 độ, tìm bằng phép chia đôi, làm tròn tới phút theo giờ Việt Nam. Đo 27/09/2026 trên 4.824 mốc: sớm trung bình 3,2 phút, sớm nhất 14 phút, muộn nhất 9 phút so với IMCCE.

*A moment is when the Sun's apparent longitude reaches an exact multiple of 15 degrees, found by bisection and rounded to the minute in Vietnam time. Measured on 27 September 2026 over 4,824 moments: 3.2 minutes early on average, at most 14 minutes early and 9 minutes late relative to IMCCE.*
