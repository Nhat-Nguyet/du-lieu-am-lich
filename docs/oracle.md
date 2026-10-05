# Bộ kiểm đối chiếu · Oracle test set

`data/oracle.csv` (sha256 `6b505d7b774ba34100860020e85b8a1395175c0a180f198a07c01d111f1d9968`, 6,799,807 byte, bản phát hành
`2026.10.06-d7437bc3`) là mẫu ngày mà test của site dùng để giữ lời hứa "mỗi dòng dữ liệu là đúng thứ
tiện ích trả cho ngày ấy": khoảng 400 ngày rải đều 1900 tới 2100, cộng những ngày dễ lệch nhất (giờ giao tiết sát nửa
đêm hay sát 12 giờ trưa, mọi ngày giao tiết và mùng một của vài năm mốc, ngày quẻ sát chỗ giao quẻ, ngày thứ bảy
của quẻ). Mỗi dòng là một cặp (ngày, trường).

| Cột | Ý nghĩa |
|---|---|
| `ngay` | Ngày dương lịch, `YYYY-MM-DD`, cũng là `id` của dòng trong bộ dữ liệu |
| `bo` | Slug bộ dữ liệu chứa giá trị |
| `truong` | Tên cột trong bộ ấy |
| `gia_tri_mong_doi` | Giá trị mong đợi, ghi đúng như trong CSV của bộ |
| `cong_cu` | Tiện ích trả cùng giá trị; thay `{dd}`, `{mm}`, `{yyyy}` bằng ngày, tháng, năm của cột `ngay` (ngày và tháng không cần số 0 đầu) |
| `truong_cong_cu` | Đường tới trường trong JSON tiện ích trả về, ngăn bằng dấu chấm |
| `mo_hinh` | Mã mô hình tính của bộ, ngăn bằng dấu chấm phẩy (xem [`mo-hinh.md`](mo-hinh.md)) |
| `dung_sai` | `0`: phải khớp đúng từng ký tự |

Đổi kiểu khi so với JSON: `co`/`khong` là `true`/`false`; cột `hao` là chuỗi 0/1 từ hào sơ lên hào thượng, tiện ích
trả mảng boolean cùng thứ tự; số so theo giá trị.

Dùng để: kiểm lại API công khai (`https://api.nhatnguyet.org` cộng đường `cong_cu`), hay làm bộ kiểm cho một bản
cài đặt riêng của cùng phép tính. Lệch ở dòng nào thì báo lỗi theo [CONTRIBUTING.md](../CONTRIBUTING.md), kèm dòng ấy.

*`data/oracle.csv` is the sample of dates the site's own tests use to keep the promise that every data row equals what
the tool returns for that day: about 400 evenly spread days from 1900 to 2100 plus the days most likely to drift
(solar term boundaries near midnight or noon, every term boundary and new moon of a few anchor years, days near a
hexagram boundary, the seventh day of a hexagram). One row per (date, field). Substitute `{dd}`, `{mm}`, `{yyyy}`
in `cong_cu` from `ngay`, read the value at `truong_cong_cu` (dot path) and compare it with `gia_tri_mong_doi`
(CSV form: `co`/`khong` are true/false, `hao` is a 0/1 string from the bottom line up; `dung_sai` 0 means exact).
Use it to check the public API or as a test set for your own implementation of the same computation.*

*`data/oracle.csv` 是本站测试所用的日期样本：1900 至 2100 年均匀分布的约 400 天，加上最易出错的日子。每行一个（日期，字段）。
以 `ngay` 替换 `cong_cu` 中的 `{dd}`、`{mm}`、`{yyyy}`，读取 `truong_cong_cu` 所指字段，与 `gia_tri_mong_doi` 比较；
`dung_sai` 为 0 表示须逐字一致。*
