# Hồ sơ mô hình · Model profiles

Sinh từ mục `mo_hinh` của `manifest.json` (lượt `2026.11.19-b5a44783`,
khuôn `1.3.0`). Tệp đối chiếu nằm trong kho mã của
site; sha256 cho phép ai tải cùng nguồn kiểm lại đúng tệp đã dùng.

*Generated from the `mo_hinh` section of `manifest.json`. The reference
files live in the site's source repository; their sha256 lets anyone who
downloads the same source verify the exact file used.*

## `lich-am-ho-ngoc-duc-utc7-v1`

Lịch âm Việt Nam · *Vietnamese lunisolar calendar* · 越南农历

Động cơ · engine **v1.2.0**. Bộ dùng · used by: `le-hoi-quy-doi-ngay-duong`, `lich-am-duong-1900-2100`, `ngay-ky-dan-gian-2026-2035`

| Trường · Field | Giá trị · Value |
|---|---|
| `ma` | lich-am-ho-ngoc-duc-utc7-v1 |
| `phien_ban` | 1.2.0 |
| `loai` | lich-am |
| `mui_gio` | Asia/Ho_Chi_Minh |
| `utc_offset_gio` | 7 |
| `diem_soc` | ho-ngoc-duc-newmoon: chuỗi rút gọn của Meeus trong thuật toán Hồ Ngọc Đức, kèm hiệu chỉnh ΔT đa thức riêng của thuật toán |
| `trung_khi` | ho-ngoc-duc-sunlongitude: kinh độ hình học của Mặt Trời (phương trình tâm ba số hạng), xét lúc 0 giờ ngày sóc theo giờ địa phương, chia 30 độ |
| `mung_mot` | ngay-chua-diem-soc-theo-gio-dia-phuong |
| `thang_muoi_mot` | thang-chua-dong-chi |
| `quy_tac_thang_nhuan` | thang-dau-tien-khong-chua-trung-khi-sau-thang-11-khi-giua-hai-thang-11-co-13-thang |
| `chinh_sach_mui_gio` | co-dinh-utc7 |
| `dung_lai_mui_gio_lich_su` | false |
| `kiem_dinh` | ma: diem-soc-nasa, loai: doi-chieu-so, trang_thai: dat, tham_chieu: NASA, co_mau: 2474, don_vi: phut, dung_sai: 5, mae: 1.1, rmse: 1.3, trung_vi: 0.9, p95: 2.5, p99: 3.1, max: 3.9, lech: 0.9, so_ngoai_le: 0, test: TestKiemCheoDiemSocNASA, mo_ta: Điểm sóc của lõi tính trừ điểm sóc NASA trên 2.474 lần sóc 1901 tới 2100, tính bằng phút; âm là lõi tính sớm., mo_ta_en: The engine's new moon minus NASA's over 2,474 new moons from 1901 to 2100, in minutes; negative means the engine is early., mo_ta_zh: 1901 至 2100 年 2,474 次朔，引擎朔时减 NASA 朔时，单位为分钟；负值表示引擎偏早。; ma: thang-am-dung-lai, loai: doi-chieu-ngay, trang_thai: dat-co-ngoai-le, tham_chieu: NASA;IMCCE, co_mau: 2461, don_vi: ngay, dung_sai: 0, so_ngoai_le: 2, test: TestKiemCheoLichAmDungLai, mo_ta: Lịch âm UTC+7 dựng lại chỉ từ điểm sóc NASA và trung khí IMCCE theo quy tắc lịch (mùng 1 là ngày chứa sóc, tháng 11 chứa Đông chí, tháng nhuận là tháng đầu không chứa trung khí), 2.461 tháng từ 12/1901 tới 11/2100; so mùng 1, số tháng và cờ nhuận của lõi tính. 2 tháng khác, đều do điểm sóc rơi sát nửa đêm, kê ở ngoai-le-doi-chieu.csv., mo_ta_en: A UTC+7 lunar calendar rebuilt only from NASA new moons and IMCCE principal terms by the calendar rules (day 1 holds the new moon, month 11 holds the winter solstice, the leap month is the first without a principal term), 2,461 months from 12/1901 to 11/2100; the engine's first days, month numbers and leap flags are compared. 2 months differ, each because the new moon falls close to midnight, listed in ngoai-le-doi-chieu.csv., mo_ta_zh: 仅以 NASA 朔与 IMCCE 中气，按历法规则（含朔之日为初一，含冬至之月为十一月，闰月为其后首个无中气之月）重建 UTC+7 农历，自 1901 年 12 月至 2100 年 11 月共 2,461 个月；逐月比较引擎的初一、月序与闰月标记。2 个月不同，皆因朔接近午夜，列于 ngoai-le-doi-chieu.csv。 |

| Nguồn đối chiếu · Reference | Tệp · File | sha256 | Truy cập · Accessed | Mốc · Points | Dung sai (phút) · Tolerance (min) | Test |
|---|---|---|---|---|---|---|
| NASA GSFC, Fred Espenak, Six Millennium Catalog of Phases of the Moon | `services/api/internal/coreengine/testdata/lichphap/nasa_soc_1901_2100.tsv` | `9d934604558f1528b01c849d52ef2fac409fe6960f74590cdfc8e8a9d5e9fb12` | 2026-09-27 | 2474 | 5 | `TestKiemCheoDiemSocNASA` |
| IMCCE (Đài Thiên văn Paris), dịch vụ Miriade ephemcc, lý thuyết hành tinh INPOP | `services/api/internal/coreengine/testdata/lichphap/imcce_tiet_khi_1900_2100.tsv` | `3f6fad729304ae8631ed2ef495f4867c56f5d1195de56c2eb3b2c45243c2b1da` | 2026-09-27 | 4824 | 1 | `TestKiemCheoGioTietKhi` |

Thuật toán Hồ Ngọc Đức, múi giờ UTC+7 cho mọi năm, kể cả những năm lịch in ở Việt Nam còn theo UTC+8. Đối chiếu 27/09/2026: điểm sóc lệch NASA trung bình 0,9 phút, nhiều nhất 3,9 phút trên 2.474 lần sóc; 2.459 trên 2.461 tháng âm 1901 tới 2100 dựng lại từ sóc NASA và trung khí IMCCE khớp, hai tháng lệch có sóc sát nửa đêm.

*Hồ Ngọc Đức's algorithm, UTC+7 for every year, including years when Vietnamese almanacs still printed UTC+8. Checked on 27 September 2026: new moons differ from NASA by 0.9 minutes on average and 3.9 at most over 2,474 new moons; 2,459 of 2,461 lunar months from 1901 to 2100 rebuilt from NASA new moons and IMCCE principal terms match, the two that differ having a new moon close to midnight.*

**Múi giờ · Time zone** (`chinh_sach_mui_gio: co-dinh-utc7`, `dung_lai_mui_gio_lich_su: false`): UTC+7 là quy ước tính của site, áp như nhau cho mọi năm. Đây không phải tái dựng múi giờ lịch sử: lịch Việt Nam từng in theo UTC+8 ở một số năm, và ở những năm ấy ngày mùng một hay ngày giao tiết theo lịch in có thể lệch một ngày so với kết quả của mô hình này.

*UTC+7 is the site's computing convention, applied the same way to every year. It is not a reconstruction of historical time zones: Vietnamese calendars were printed on UTC+8 in some years, and in those years the first day of a month or the day of a solar term in the printed calendar can differ by one day from this model's result.*

UTC+7 是本站的推算约定，所有年份一律适用。这不是对历史时区的复原：越南历书在部分年份曾按 UTC+8 印行，在这些年份，印本历书的初一或交节日期可能与本模型的结果相差一天。

## `quai-khi-manh-hy-6-ngay-7-phan-v1`

Quẻ trị ngày theo phép Quái khí · *Daily hexagram by the Gua Qi method* · 卦气值日卦

Động cơ · engine **v1.3.0**. Bộ dùng · used by: `que-ngay-quai-khi-1900-2100`, `thu-tu-60-que-quai-khi`

| Trường · Field | Giá trị · Value |
|---|---|
| `ma` | quai-khi-manh-hy-6-ngay-7-phan-v1 |
| `phien_ban` | 1.3.0 |
| `loai` | quai-khi |
| `mui_gio` | Asia/Ho_Chi_Minh |
| `utc_offset_gio` | 7 |
| `phu_thuoc` | tiet-khi-vsop87d-bieu-kien-v3 |
| `truyen_thong` | manh-hy |
| `nguon_truyen_thong` | Tân Đường thư, quyển 28 thượng (Lịch chí 4 thượng), phát liễm thuật của lịch Đại Diễn; Tân Đường thư, quyển 27 thượng (Lịch chí 3 thượng), Quái nghị của Nhất Hạnh; Khổng Dĩnh Đạt, Chu Dịch chính nghĩa, lời sớ quẻ Phục (dẫn Dịch vĩ Kê Lãm Đồ) |
| `neo` | dong-chi-thuc-moi-nam |
| `thoi_diem_dai_dien` | 12:00 |
| `do_dai_que_phut` | 8766 |
| `cach_lam_tron` | floor |
| `phan_du` | hao-thuong |
| `dat_lai_chu_ky` | cat-que-60-tai-dong-chi |
| `que_tu_chinh` | so: 29; 51; 30; 58, cach_xu_ly: khong-tri-ngay-moi-hao-mot-tiet-khi, khoi: hao-so-que-kham-tai-dong-chi |
| `nguong_sat_giao_que_phut` | 2 |
| `chu_ky_danh_nghia_phut` | 525960 |
| `chu_ky_thuc_phut` | nho_nhat: 525938, lon_nhat: 525961, trung_binh: 525949.54, tu_nam: 1900, den_nam: 2100 |
| `cat_que_60_phut` | nho_nhat: -1, lon_nhat: 22, trung_binh: 10.46, tu_nam: 1900, den_nam: 2100 |
| `kiem_dinh` | ma: dong-chi-imcce, loai: doi-chieu-so, trang_thai: dat, tham_chieu: IMCCE, co_mau: 201, don_vi: phut, dung_sai: 1, mae: 0.3, rmse: 0.3, trung_vi: 0.3, p95: 0.6, p99: 0.7, max: 0.7, lech: 0, so_ngoai_le: 0, test: TestKiemDinhQuaiKhiIMCCE, mo_ta: Đông chí là neo của phép Quái khí: giờ Đông chí của lõi tính trừ giờ IMCCE trên 201 năm 1900 tới 2100, tính bằng phút., mo_ta_en: The winter solstice anchors the Gua Qi method: the engine's solstice moment minus IMCCE's over 201 years from 1900 to 2100, in minutes., mo_ta_zh: 冬至是卦气法的起点：1900 至 2100 年共 201 年，引擎冬至时刻减 IMCCE 冬至时刻，单位为分钟。; ma: que-ngay-dung-lai-imcce, loai: doi-chieu-ngay, trang_thai: dat-co-ngoai-le, tham_chieu: IMCCE, co_mau: 73058, don_vi: ngay, dung_sai: 0, so_ngoai_le: 2, test: TestKiemDinhQuaiKhiIMCCE, mo_ta: Quẻ của từng ngày từ 23/12/1900 tới 31/12/2100 dựng lại theo cùng phép Quái khí nhưng neo vào Đông chí IMCCE, 73.058 ngày; so thứ tự quẻ của lõi tính. 2 ngày khác quẻ, đều là ngày có chỗ giao quẻ cách 12 giờ trưa vài phút, kê ở ngoai-le-doi-chieu.csv kèm số ngày kéo theo mà ngày trong quẻ lệch một., mo_ta_en: The hexagram of every day from 23/12/1900 to 31/12/2100 rebuilt by the same Gua Qi method but anchored on the IMCCE winter solstice, 73,058 days; the engine's hexagram position is compared. 2 days differ, each a day whose hexagram change falls a few minutes from 12:00 noon, listed in ngoai-le-doi-chieu.csv with the following days whose day-within-hexagram is off by one., mo_ta_zh: 自 1900 年 12 月 23 日至 2100 年 12 月 31 日，每日之卦按同一卦气法重建，但以 IMCCE 冬至为起点，共 73,058 日；逐日比较引擎的卦序。2 日卦不同，皆为换卦时刻距正午 12 时仅数分钟之日，列于 ngoai-le-doi-chieu.csv，并注明其后卦内日序差一的日数。 |

| Nguồn đối chiếu · Reference | Tệp · File | sha256 | Truy cập · Accessed | Mốc · Points | Dung sai (phút) · Tolerance (min) | Test |
|---|---|---|---|---|---|---|
| IMCCE (Đài Thiên văn Paris), dịch vụ Miriade ephemcc, lý thuyết hành tinh INPOP | `services/api/internal/coreengine/testdata/lichphap/imcce_tiet_khi_1900_2100.tsv` | `3f6fad729304ae8631ed2ef495f4867c56f5d1195de56c2eb3b2c45243c2b1da` | 2026-09-27 | 4824 | 1 | `TestKiemCheoGioTietKhi` |

Sáu mươi quẻ mỗi quẻ 6 ngày 7 phần (8.766 phút), đếm đều từ Đông chí thật mỗi năm, quẻ của ngày là quẻ đang trị lúc 12 giờ trưa giờ Việt Nam. Vị trí quẻ là phần nguyên của số phút từ Đông chí chia 8.766. Đông chí năm sau thường tới trước khi quẻ 60 hết phần nên quẻ 60 bị cắt (198 trên 201 năm 1900 tới 2100, nhiều nhất 22 phút); hai năm Đông chí tới muộn một phút và quẻ 60 được kéo dài một phút. Phần dư 7/80 ngày sau sáu hào tính vào hào thượng; nguồn không nói, đây là lựa chọn của site.

*Sixty hexagrams of 6 days 7 parts each (8,766 minutes), counted evenly from the true winter solstice every year; the day's hexagram is the one in force at 12:00 noon Vietnam time. The position is the integer part of the minutes since the solstice divided by 8,766. The next solstice usually arrives before hexagram 60 runs its full share, so hexagram 60 is cut short (198 of 201 years from 1900 to 2100, by up to 22 minutes); in two years the solstice comes one minute late and hexagram 60 is extended by one minute. The 7/80-day remainder after six lines goes to the top line; the sources are silent, this is the site's choice.*

**Chu kỳ · Cycle** (`chu_ky_danh_nghia_phut: 525960`): 525.960 phút (60 quẻ nhân 8.766 phút, tức 365,25 ngày) là tổng DANH NGHĨA của 60 đoạn, không phải độ dài một năm của mô hình. Chu kỳ thực đặt lại ở Đông chí thật mỗi năm: đo 1900 tới 2100, từ Đông chí tới Đông chí dài 525.938 tới 525.961 phút, trung bình 525.949,54 phút (khoảng 365,2427 ngày), nên quẻ 60 bị cắt -1 tới 22 phút, trung bình 10,46 phút.

*525,960 minutes (60 hexagrams times 8,766 minutes, i.e. 365.25 days) is the NOMINAL total of the 60 segments, not the length of the model's year. The actual cycle resets at the true winter solstice every year: measured 1900 to 2100, solstice to solstice runs 525,938 to 525,961 minutes, 525,949.54 on average (about 365.2427 days), so hexagram 60 is cut by -1 to 22 minutes, 10.46 on average.*

525,960 分钟（60 卦乘 8,766 分钟，即 365.25 日）是 60 段的名义总长，并非模型一年的长度。实际周期每年在真实冬至重新起算：1900 至 2100 年实测，冬至到冬至为 525,938 至 525,961 分钟，平均 525,949.54 分钟（约 365.2427 日），因此第 60 卦被截去 -1 至 22 分钟，平均 10.46 分钟。

## `tiet-khi-vsop87d-bieu-kien-v3`

Giờ giao 24 tiết khí · *Solar term moments* · 二十四节气交节时刻

Động cơ · engine **v3.0.0**. Bộ dùng · used by: `24-tiet-khi`, `bien-cung-hoang-dao-1950-2050`, `lich-am-duong-1900-2100`, `moc-tiet-khi-1900-2100`, `que-ngay-quai-khi-1900-2100`

| Trường · Field | Giá trị · Value |
|---|---|
| `ma` | tiet-khi-vsop87d-bieu-kien-v3 |
| `phien_ban` | 3.0.0 |
| `loai` | tiet-khi |
| `mui_gio` | Asia/Ho_Chi_Minh |
| `utc_offset_gio` | 7 |
| `lich_thien_van` | vsop87d-rut-gon: VSOP87D của Trái Đất (Bretagnon và Francou 1988, IMCCE), giữ số hạng bậc τ^p có biên độ nhân 0,1^p từ 1e-7 radian (L 101 số hạng, R 7 số hạng), đổi sang địa tâm và hệ FK5 (-0,09033 giây cung) theo Meeus, Astronomical Algorithms chương 25 và 32 |
| `quang_sai_do` | -0.005691611111111111 |
| `chuong_dong` | iau1980-meeus-bang-22a: Δψ theo IAU 1980, 63 số hạng (Meeus, Astronomical Algorithms chương 22, bảng 22.A), T tính bằng thế kỷ Julius từ J2000 theo giờ TT |
| `delta_t` | espenak-meeus-2006: đa thức ΔT = TT - UT theo từng khoảng năm của Espenak và Meeus (NASA, 2006), lấy ở năm thập phân của chính thời điểm |
| `cach_giai` | newton-toc-do-trung-binh |
| `nguong_dung_giai_phut` | 0.001 |
| `dung_sai_phut` | 1 |
| `kiem_dinh` | ma: gio-giao-tiet-imcce, loai: doi-chieu-so, trang_thai: dat, tham_chieu: IMCCE, co_mau: 4824, don_vi: phut, dung_sai: 1, mae: 0.3, rmse: 0.3, trung_vi: 0.3, p95: 0.6, p99: 0.7, max: 0.9, lech: 0, so_ngoai_le: 0, test: TestKiemCheoGioTietKhi, mo_ta: Giờ giao tiết của lõi tính trừ giờ IMCCE trên 4.824 mốc 1900 tới 2100, tính bằng phút; âm là lõi tính sớm., mo_ta_en: The engine's solar term moment minus the IMCCE moment over 4,824 moments from 1900 to 2100, in minutes; negative means the engine is early., mo_ta_zh: 1900 至 2100 年 4,824 个时刻，引擎交节时刻减 IMCCE 时刻，单位为分钟；负值表示引擎偏早。; ma: gio-giao-tiet-usno, loai: doi-chieu-so, trang_thai: dat, tham_chieu: USNO, co_mau: 804, don_vi: phut, dung_sai: 2, mae: 0.2, rmse: 0.5, trung_vi: 0, p95: 1, p99: 2, max: 2, lech: -0.1, so_ngoai_le: 0, test: TestKiemCheoGioTietKhi, mo_ta: Giờ giao tiết của lõi tính trừ giờ USNO trên 804 mốc 1900 tới 2100, tính bằng phút; âm là lõi tính sớm., mo_ta_en: The engine's solar term moment minus the USNO moment over 804 moments from 1900 to 2100, in minutes; negative means the engine is early., mo_ta_zh: 1900 至 2100 年 804 个时刻，引擎交节时刻减 USNO 时刻，单位为分钟；负值表示引擎偏早。; ma: ngay-giao-tiet-imcce, loai: doi-chieu-ngay, trang_thai: dat, tham_chieu: IMCCE, co_mau: 4824, don_vi: ngay, dung_sai: 0, so_ngoai_le: 0, test: TestKiemCheoNgayTietKhiIMCCE, mo_ta: Ngày giao tiết theo giờ Việt Nam của lõi tính so với ngày chứa mốc IMCCE, 4.824 mốc; 0 mốc khác ngày, mọi mốc ấy cách nửa đêm không quá 1 phút và được kê ở ngoai-le-doi-chieu.csv., mo_ta_en: The engine's solar term date in Vietnam time against the date containing the IMCCE moment, 4,824 moments; 0 fall on a different date, all within 1 minutes of midnight, and each is listed in ngoai-le-doi-chieu.csv., mo_ta_zh: 按越南时间比较引擎的交节日期与 IMCCE 时刻所在日期，共 4,824 个时刻；0 个日期不同，均距午夜不超过 1 分钟，逐一列于 ngoai-le-doi-chieu.csv。; ma: ngay-giao-tiet-usno, loai: doi-chieu-ngay, trang_thai: dat-co-ngoai-le, tham_chieu: USNO, co_mau: 804, don_vi: ngay, dung_sai: 0, so_ngoai_le: 1, test: TestKiemDinhNgayGiaoTietUSNO, mo_ta: Ngày giao tiết theo giờ Việt Nam của lõi tính so với ngày chứa mốc USNO, 804 mốc; 1 mốc khác ngày, mọi mốc ấy cách nửa đêm không quá 2 phút và được kê ở ngoai-le-doi-chieu.csv., mo_ta_en: The engine's solar term date in Vietnam time against the date containing the USNO moment, 804 moments; 1 fall on a different date, all within 2 minutes of midnight, and each is listed in ngoai-le-doi-chieu.csv., mo_ta_zh: 按越南时间比较引擎的交节日期与 USNO 时刻所在日期，共 804 个时刻；1 个日期不同，均距午夜不超过 2 分钟，逐一列于 ngoai-le-doi-chieu.csv。 |

| Nguồn đối chiếu · Reference | Tệp · File | sha256 | Truy cập · Accessed | Mốc · Points | Dung sai (phút) · Tolerance (min) | Test |
|---|---|---|---|---|---|---|
| IMCCE (Đài Thiên văn Paris), dịch vụ Miriade ephemcc, lý thuyết hành tinh INPOP | `services/api/internal/coreengine/testdata/lichphap/imcce_tiet_khi_1900_2100.tsv` | `3f6fad729304ae8631ed2ef495f4867c56f5d1195de56c2eb3b2c45243c2b1da` | 2026-09-27 | 4824 | 1 | `TestKiemCheoGioTietKhi` |
| U.S. Naval Observatory, Astronomical Applications API (seasons) | `services/api/internal/coreengine/testdata/lichphap/usno_phan_chi_1900_2100.tsv` | `ef70a6694d2764f13f8409b2dade5fb87ade9161d0fdccc683b6993f472d8419` | 2026-09-27 | 804 | 2 | `TestKiemCheoGioTietKhi` |

Mốc là lúc kinh độ biểu kiến của Mặt Trời chạm đúng bội số của 15 độ, giải bằng phép lặp Newton, làm tròn tới phút theo giờ Việt Nam (mốc trong nửa phút cuối của một ngày ghi 23:59 của ngày ấy). Đo 19/11/2026 trên 4.824 mốc 1900 tới 2100 so với IMCCE: lệch tuyệt đối trung bình 0,3 phút, sớm nhất 0,9 phút, muộn nhất 0,6 phút, mọi ngày giao tiết khớp. Bản trước (mô hình v2, tới 19/11/2026) sớm trung bình 3,2 phút, sớm nhất 14 phút.

*A moment is when the Sun's apparent longitude reaches an exact multiple of 15 degrees, solved by Newton iteration and rounded to the minute in Vietnam time (a moment in the last half minute of a day is written 23:59 of that day). Measured on 19 November 2026 over 4,824 moments from 1900 to 2100 against IMCCE: mean absolute deviation 0.3 minutes, at most 0.9 minutes early and 0.6 minutes late, every solar term date matching. The previous version (model v2, until 19 November 2026) was 3.2 minutes early on average and up to 14 minutes early.*

**Sai số so với nguồn đối chiếu · Error against the references** (phút · minutes; lệch = lõi tính trừ nguồn, âm là sớm · error = engine minus reference, negative is early)

| | IMCCE | USNO |
|---|---|---|
| Số mốc · Points | 4824 | 804 |
| MAE | 0.3 | 0.2 |
| RMSE | 0.3 | 0.5 |
| Trung vị trị tuyệt đối · Median absolute | 0.3 | 0 |
| P95 trị tuyệt đối · absolute | 0.6 | 1 |
| P99 trị tuyệt đối · absolute | 0.7 | 2 |
| Lệch trung bình · Mean bias | 0 | -0.1 |
| Nhỏ nhất · Min | -0.9 | -2 |
| Lớn nhất · Max | 0.6 | 1 |
| Số mốc sớm · Early | 2565 | 135 |

Phân bố theo khoảng hai phút · Distribution in two-minute bins:

**IMCCE**: [-1, 0) 2565; [0, 1) 2259

**USNO**: [-2, -1) 17; [-1, 0) 118; [0, 1) 634; [1, 2) 35
