# Quy ước của bộ dữ liệu

*Conventions used across these datasets*

Tài liệu này sinh từ `manifest.json` và các tệp `.meta.json` của lượt phát
hành `2026.09.28-ce2df2b1` (27 bộ), không gõ tay.

*Generated from `manifest.json` and the `.meta.json` files of this release, not written by hand.*

## Định dạng CSV · CSV format

- Mã hoá **UTF-8 không BOM**. Bản tải trực tiếp từ https://nhatnguyet.org/du-lieu/ có BOM để
  Excel trên Windows không vỡ dấu tiếng Việt; bản trong kho này thì không,
  vì bộ đọc ở đây là parser chứ không phải bảng tính.
- Dấu phân cách: dấu phẩy `,`
- Kết dòng: `\n` (LF)
- Dòng đầu là header. **Tên cột không dấu, `snake_case`.**
- Giá trị tiếng Việt **giữ nguyên dấu**; chỉ tên cột mới bỏ dấu.
- Ô chứa dấu phẩy hoặc dấu nháy kép được bọc theo RFC 4180.
- Nhiều giá trị trong một ô ngăn bằng **dấu chấm phẩy**, không phải dấu
  phẩy: dấu phẩy là ký tự phân cột.
- **Ô khuyết là chuỗi rỗng.** Không dùng `NULL`, `N/A`, `-`. Ba giá trị ấy
  là dữ liệu giả trông như dữ liệu thật: bên tiêu thụ phải đoán xem dấu gạch
  nghĩa là không có, hay là một giá trị thật sự bằng dấu gạch.
- Không có dòng tổng kết, không có chú thích trong phần thân.

## Ba cột bắt buộc · Three required columns

Có ở mọi bộ, ở vị trí cố định: `id` đầu bảng, `nguon` và `ghi_chu` cuối bảng.

*Present in every dataset at fixed positions: `id` first, `nguon` and `ghi_chu` last.*

| Cột | Ý nghĩa |
|---|---|
| `id` | Định danh ổn định. **Không đổi giữa các phiên bản và không bao giờ dùng lại cho hàng khác.** |
| `nguon` | Thư tịch gốc, hoặc `tinh-toan` khi là giá trị engine tính ra, hoặc `bien-tap` khi là dữ liệu biên tập. |
| `ghi_chu` | Điểm các trường phái bất đồng ở riêng dòng ấy. Rỗng khi không có. |

Hai cột sau là lý do bộ dữ liệu này đáng dùng hơn một bảng chép tay: chúng
phân biệt **dữ kiện tính được** với **quan niệm dân gian**, và nói ra chỗ
các nguồn không thống nhất thay vì lặng lẽ chọn một bên.

*The last two columns are why these datasets are worth more than a table
copied off the web: they separate computed fact from folk convention, and
they name where sources disagree instead of quietly picking a side.*

## Cột nguồn gốc tuỳ chọn · Optional provenance columns

Chỉ có ở bộ cần; bộ nào có thì nghĩa của cột như dưới.

*Present only where needed; when present, they mean the following.*

| Cột | Ý nghĩa | Bộ có cột này |
|---|---|---|
| `nguyen_van_nguon` | Giá trị đúng như nguồn chép, kể cả chỗ chép sai. Khác cột giá trị của site thì xem `hieu_dinh`. | `thu-tu-60-que-quai-khi` |
| `hieu_dinh` | Mã hiệu đính khi site đọc khác nguồn, rỗng khi không hiệu đính. Mã thuộc danh mục dưới, cũng có ở `danh_muc_hieu_dinh` trong meta. | `thu-tu-60-que-quai-khi` |
| `mo_hinh` | Mã phiên bản của phép tính sinh ra dòng ấy; hồ sơ của mã nằm ở `ho_so_mo_hinh` trong meta và ở `mo_hinh` của `manifest.json`. | `que-ngay-quai-khi-1900-2100` |

### Danh mục mã hiệu đính · Emendation codes

| Mã · Code | Ý nghĩa | Meaning |
|---|---|---|
| `chon-quy-uoc` | Nguồn có nhiều dị bản hay nhiều cách đọc; site chọn một theo quy ước, lý do ghi ở ghi_chu hoặc ghi_chu_chung. | The sources have several variants or readings; the site picks one by convention, with the reason in ghi_chu or ghi_chu_chung. |
| `chuan-hoa` | Đổi cách viết mà không đổi nghĩa: dị thể chữ Hán, phồn thể và giản thể, chính tả tên riêng. | The spelling changes but not the meaning: variant Han characters, traditional and simplified forms, spelling of proper names. |
| `phuc-dung` | Nguồn khuyết hoặc mờ ở chỗ ấy; site dựng lại từ nguồn khác hay từ quy tắc của chính bảng, nguồn dựng lại ghi ở ghi_chu. | The source is missing or illegible at that point; the site reconstructs it from another source or from the table's own rule, named in ghi_chu. |
| `sua-loi-chep` | Nguồn chép nhầm chữ; site đọc theo chữ đúng, nguyên văn nguồn giữ ở nguyen_van_nguon, bằng chứng độc lập ghi ở ghi_chu. | The source has a copying error; the site reads the correct character, the source text is kept in nguyen_van_nguon and the independent evidence is in ghi_chu. |

## Nguồn gốc dữ liệu và hồ sơ mô hình · Provenance and model profiles

Mỗi `.meta.json` có `nguon_goc_du_lieu`: `tinh-toan`, `chep-tu-nguon`,
`suy-ra` hoặc `bien-tap`. Bộ `tinh-toan` **luôn** kèm `mo_hinh` (mã) và
`ho_so_mo_hinh` (hồ sơ máy đọc được: lịch thiên văn, hiệu chỉnh, cách giải,
múi giờ, làm tròn, nguồn đối chiếu kèm sha256 của tệp, phiên bản động cơ).
Bộ `suy-ra` qua phép tính lịch cũng mang hai trường ấy; bộ chỉ dùng số học
đồng dư (can chi, nạp âm) thì `mo_hinh` rỗng.

*Every `.meta.json` has `nguon_goc_du_lieu`. Datasets marked `tinh-toan`
**always** carry `mo_hinh` (codes) and `ho_so_mo_hinh` (a machine-readable
profile). Derived datasets that go through calendar computation carry them
too; those using only modular arithmetic have an empty `mo_hinh`.*

- Bộ `tinh-toan`: `24-tiet-khi`, `bien-cung-hoang-dao-1950-2050`, `lich-am-duong-1900-2100`, `moc-tiet-khi-1900-2100`
- Bộ có hồ sơ mô hình: `24-tiet-khi`, `bien-cung-hoang-dao-1950-2050`, `le-hoi-quy-doi-ngay-duong`, `lich-am-duong-1900-2100`, `moc-tiet-khi-1900-2100`, `ngay-ky-dan-gian-2026-2035`, `que-ngay-quai-khi-1900-2100`, `thu-tu-60-que-quai-khi`

Các mô hình trong lượt phát hành này (chi tiết ở [`mo-hinh.md`](mo-hinh.md)):

- `lich-am-ho-ngoc-duc-utc7-v1`, động cơ · engine v1.0.0: Lịch âm Việt Nam · *Vietnamese lunisolar calendar*
- `quai-khi-manh-hy-6-ngay-7-phan-v1`, động cơ · engine v1.0.0: Quẻ trị ngày theo phép Quái khí · *Daily hexagram by the Gua Qi method*
- `tiet-khi-meeus-c25-bieu-kien-v2`, động cơ · engine v2.0.0: Giờ giao 24 tiết khí · *Solar term moments*

## Phiên bản · Versioning

Ba loại phiên bản, đánh riêng và đọc riêng.

*Three kinds of version, numbered and read separately.*

1. **Phiên bản bộ dữ liệu** (`phien_ban` trong `.meta.json`), semver trên từng bộ:
   - **patch** sửa lỗi dữ liệu, hoặc meta đổi mà dữ liệu không đổi byte nào
   - **minor** thêm cột, hoặc dữ liệu đổi vì động cơ đổi (xem mục 2)
   - **major** đổi hoặc xoá cột, hoặc đổi ý nghĩa của `id`
2. **Phiên bản động cơ** của từng mô hình (`phien_ban` trong `ho_so_mo_hinh`;
   hậu tố `-vN` của mã là số major), cạnh `phien_ban_dong_co` của cả lõi tính
   (lượt này: `1.0.0`). **Thay đổi dữ liệu do động
   cơ đổi** thì tăng phiên bản động cơ, VÀ tăng tối thiểu **minor** mọi bộ
   dùng mô hình ấy, kể cả khi cột không đổi.
3. **Phiên bản khuôn manifest** (`phien_ban_khuon` trong `manifest.json`,
   lượt này: `1.1.0`): thêm trường là minor, đổi
   tên hay ý nghĩa trường là major. Nó nói cách đọc bản kê, không nói gì về dữ liệu.

*Dataset versions follow semver per dataset. Engine versions belong to each
model; a data change caused by an engine change bumps the engine version and
at least the minor version of every dataset using it. The manifest schema
version only describes how to read `manifest.json`.*

## Tính xác định · Determinism

Bộ sinh chạy lại phải cho ra tệp **giống hệt từng byte**. Không bộ nào được
phụ thuộc đồng hồ: bảng 60 Hoa Giáp chốt cứng khoảng năm thay vì trượt theo
năm hiện tại, vì một tệp tự viết lại chính nó vào ngày 1 tháng 1 thì không
ai trích dẫn lại được.

*The generator must produce byte-identical files on a re-run. No dataset
reads the clock: a file that silently rewrites itself every 1 January
cannot be cited.*
