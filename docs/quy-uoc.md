# Quy ước của bộ dữ liệu

*Conventions used across these datasets*

Tài liệu này sinh từ `manifest.json` và các tệp `.meta.json` của lượt phát
hành `2026.10.04-01d7eec7` (27 bộ), không gõ tay.

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
| `nguon` | Loại nguồn của dòng, theo từ vựng đóng (xem mục dưới): một hay nhiều phần ngăn bằng `; `, mỗi phần là `tinh-toan`, `quy-uoc-truyen-thong`, `quy-uoc-he-hien-dai`, `van-ban: <tác phẩm>` hoặc `bien-tap: <chi tiết>`. |
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

- `lich-am-ho-ngoc-duc-utc7-v1`, động cơ · engine v1.2.0: Lịch âm Việt Nam · *Vietnamese lunisolar calendar*
- `quai-khi-manh-hy-6-ngay-7-phan-v1`, động cơ · engine v1.2.0: Quẻ trị ngày theo phép Quái khí · *Daily hexagram by the Gua Qi method*
- `tiet-khi-meeus-c25-bieu-kien-v2`, động cơ · engine v2.2.0: Giờ giao 24 tiết khí · *Solar term moments*

## Loại bộ, loại bằng chứng · Dataset role and evidence type

Mỗi `.meta.json` có `loai_bo` (bộ dùng để làm gì; `loai_bo_tuong_duong` là từ
tương đương trong phân loại `dataset_role`) và `loai_bang_chung`: tập loại bằng
chứng của các cột. **Loại của từng cột** nằm ở `cot[].loai_bang_chung`, vì một
bộ có thể trộn nhiều loại (lịch âm dương: ngày âm tính ra được, trực là quy ước).
Cột suy diễn mang `suy_tu` (cột quyết định trọn giá trị) và có khi `chu_ky`,
`chu_ky_theo`; test của site kiểm các khai báo ấy trên chính tệp phát hành.
Cột `nguon` của mọi dòng sinh từ các loại ấy nên không nói khác meta.

*Each `.meta.json` has `loai_bo` (what the dataset is for; `loai_bo_tuong_duong`
gives the `dataset_role` term) and `loai_bang_chung`, the set of evidence types of
its columns; each column's own type is `cot[].loai_bang_chung`. Derived columns carry
`suy_tu` (the columns that fully determine them) and sometimes `chu_ky`; the site's
tests check these claims on the released files. The `nguon` column is generated from
the same evidence types.*

| Loại · Type | Tên | Ý nghĩa | Meaning |
|---|---|---|---|
| **A** | `tai-tinh-duoc` | Tái tính được: thuật toán thiên văn, lịch pháp hay số học cho ra giá trị, ai có thuật toán là tính lại được, và lõi tính đã đối chiếu với nguồn độc lập khi có (hồ sơ mô hình). | Recomputable: an astronomical, calendrical or arithmetic algorithm yields the value, anyone with the algorithm can recompute it, and the engine has been checked against independent sources where they exist (model profile). |
| **B** | `kiem-bang-van-ban` | Kiểm bằng văn bản nguồn: giá trị đối chiếu được với một văn bản cụ thể nêu ở cột nguon (tác phẩm, quyển, bản), và test của site đã đối chiếu. | Checked against a source text: the value can be compared with a specific text named in the nguon column (work, juan, edition), and the site's tests make that comparison. |
| **C** | `quy-uoc` | Quy ước của một truyền thống hay một hệ hiện đại: đúng theo quy ước ấy, không đúng hay sai theo nghĩa thực nghiệm; chỗ các phái khác nhau ghi ở bộ diem-bat-dong-giua-cac-phai. | Convention of a tradition or of a modern system: correct by that convention, neither true nor false in an empirical sense; where schools differ is recorded in the diem-bat-dong-giua-cac-phai dataset. |
| **D** | `bien-tap-van-hoa` | Biên tập văn hoá: Nhật Nguyệt tuyển chọn, tóm tắt hay ghi lại từ bài viết, kho lịch lễ hội, hay bộ câu hỏi của chính site. | Cultural editing: selected, summarised or recorded by Nhật Nguyệt from the site's articles, festival store or question set. |
| **E** | `dien-giai` | Diễn giải: lời giải nghĩa, từ khoá hay luận do site viết theo một truyền thống; không kiểm được đúng sai, đọc như lời của site. | Interpretation: explanations, keywords or readings written by the site within a tradition; not verifiable, read them as the site's words. |

Từ vựng cột `nguon` · *`nguon` vocabulary*: `tinh-toan` (A), `van-ban: <tác phẩm>` (B),
`quy-uoc-truyen-thong` hoặc `quy-uoc-he-hien-dai` (C, kèm chi tiết khi cần), `bien-tap` (D, E).

| Bộ · Dataset | `loai_bo` | `dataset_role` | `loai_bang_chung` | Cột không theo loại chính · Columns of another type |
|---|---|---|---|---|
| `10-thien-can` | tham-chieu | reference | C |  |
| `12-con-giap-hop-khac` | tham-chieu | reference | C |  |
| `12-dia-chi` | tham-chieu | reference | C |  |
| `12-truc` | tham-chieu | reference | C |  |
| `22-an-chinh-tarot` | tham-chieu | reference | C, E | `so` C; `ten_vi` C; `ten_en` C |
| `24-tiet-khi` | tinh-toan | computed | A, C | `y_nghia` C |
| `56-an-phu-tarot` | tham-chieu | reference | C, E | `tu_khoa` E; `nghia_xuoi` E; `nghia_nguoc` E |
| `60-hoa-giap` | tham-chieu | reference | A, C | `cac_nam` A |
| `64-que-kinh-dich` | tham-chieu | reference | B, D, E | `ten_en` D; `tuong` E |
| `9-sao-chieu-menh` | tham-chieu | reference | C, E | `dien_giai` E |
| `bien-cung-hoang-dao-1950-2050` | tinh-toan | computed | A |  |
| `cau-hoi-danh-gia-tim-kiem` | danh-gia | evaluation | D |  |
| `chu-sang-so-than-so-hoc` | doi-chieu-he | crosswalk | C |  |
| `cung-phi-bat-trach` | tinh-toan | computed | A, C | `nam_sinh` A |
| `diem-bat-dong-giua-cac-phai` | so-quy-uoc | conflict_registry | D |  |
| `gio-hoang-dao-60-ngay` | tinh-toan | computed | A, C | `khung_gio` C; `hoang_dao` C |
| `hoa-giap-ghep-cheo` | tinh-toan | computed | C |  |
| `le-hoi-quy-doi-ngay-duong` | doi-chieu-he | crosswalk | A, D | `nam` A; `ngay_duong` A; `thu` A; `thu_en` A; `thu_zh` A |
| `le-hoi-tin-nguong-theo-dan-toc` | bien-tap | editorial | D |  |
| `le-hoi-viet-nam` | bien-tap | editorial | D |  |
| `lich-am-duong-1900-2100` | tinh-toan | computed | A, C | `truc` C; `ngay_hoang_dao` C; `nhi_thap_bat_tu` C |
| `moc-tiet-khi-1900-2100` | tinh-toan | computed | A |  |
| `ngay-ky-dan-gian-2026-2035` | tinh-toan | computed | A, C | `ngay_duong` A; `ngay_am` A; `thang_am` A; `thang_nhuan` A; `can_chi_ngay` A |
| `que-ngay-quai-khi-1900-2100` | tinh-toan | computed | A, B, C | `thu_tu_quai_khi` C; `so_van_vuong` B; `ten_que` B; `ten_han` B; `hao` B; `hao_chu_ngay` C; `ngay_trong_que` C; `que_tu_chinh` C; `hao_tu_chinh` C |
| `tam-tai-kim-lau-hoang-oc` | tinh-toan | computed | A, C | `nam_sinh` A; `nam_xem` A |
| `thu-tu-60-que-quai-khi` | tham-chieu | reference | B |  |
| `thuoc-lo-ban` | tham-chieu | reference | C |  |

## Phụ thuộc · Dependencies

`manifest.json` có khối `phu_thuoc`, sinh từ khai báo trong mã, với hai loại cạnh:
`mo_hinh_bac_cau` (bộ dùng mô hình nào, kể cả mô hình mà mô hình ấy gọi) và
`phu_thuoc_bo` (bộ dùng lại nội dung của bộ khác; cạnh này không kéo mô hình
theo). Đổi phiên bản động cơ một mô hình thì mọi bộ có mô hình ấy trong
`mo_hinh_bac_cau` phải tăng phiên bản trong cùng lượt: major của mô hình (kết
quả đổi) thì bộ tăng tối thiểu minor; test của site đỏ nếu không.

*`manifest.json` carries a `phu_thuoc` block generated from code, with two edge
kinds: `mo_hinh_bac_cau` (models used, transitively) and `phu_thuoc_bo` (content
reused from another dataset). A model engine bump forces a version bump of every
dataset with that model in `mo_hinh_bac_cau` in the same release.*

- `lich-am-ho-ngoc-duc-utc7-v1` v1.2.0: `le-hoi-quy-doi-ngay-duong`, `lich-am-duong-1900-2100`, `ngay-ky-dan-gian-2026-2035`
- `quai-khi-manh-hy-6-ngay-7-phan-v1` v1.2.0 (gọi · calls `tiet-khi-meeus-c25-bieu-kien-v2`): `que-ngay-quai-khi-1900-2100`, `thu-tu-60-que-quai-khi`
- `tiet-khi-meeus-c25-bieu-kien-v2` v2.2.0: `24-tiet-khi`, `bien-cung-hoang-dao-1950-2050`, `lich-am-duong-1900-2100`, `moc-tiet-khi-1900-2100`, `que-ngay-quai-khi-1900-2100`, `thu-tu-60-que-quai-khi`

- `12-con-giap-hop-khac` dùng lại · reuses `12-dia-chi`
- `60-hoa-giap` dùng lại · reuses `10-thien-can`, `12-dia-chi`
- `diem-bat-dong-giua-cac-phai` dùng lại · reuses `12-con-giap-hop-khac`, `12-dia-chi`, `12-truc`, `22-an-chinh-tarot`, `24-tiet-khi`, `60-hoa-giap`, `64-que-kinh-dich`, `9-sao-chieu-menh`, `bien-cung-hoang-dao-1950-2050`, `chu-sang-so-than-so-hoc`, `cung-phi-bat-trach`, `gio-hoang-dao-60-ngay`, `hoa-giap-ghep-cheo`, `le-hoi-quy-doi-ngay-duong`, `le-hoi-viet-nam`, `lich-am-duong-1900-2100`, `moc-tiet-khi-1900-2100`, `ngay-ky-dan-gian-2026-2035`, `que-ngay-quai-khi-1900-2100`, `tam-tai-kim-lau-hoang-oc`, `thu-tu-60-que-quai-khi`, `thuoc-lo-ban`
- `gio-hoang-dao-60-ngay` dùng lại · reuses `12-dia-chi`
- `hoa-giap-ghep-cheo` dùng lại · reuses `12-con-giap-hop-khac`, `60-hoa-giap`
- `le-hoi-quy-doi-ngay-duong` dùng lại · reuses `le-hoi-viet-nam`, `lich-am-duong-1900-2100`
- `lich-am-duong-1900-2100` dùng lại · reuses `12-truc`, `moc-tiet-khi-1900-2100`
- `ngay-ky-dan-gian-2026-2035` dùng lại · reuses `lich-am-duong-1900-2100`
- `que-ngay-quai-khi-1900-2100` dùng lại · reuses `64-que-kinh-dich`, `moc-tiet-khi-1900-2100`, `thu-tu-60-que-quai-khi`
- `tam-tai-kim-lau-hoang-oc` dùng lại · reuses `12-dia-chi`
- `thu-tu-60-que-quai-khi` dùng lại · reuses `64-que-kinh-dich`

## Phiên bản · Versioning

Ba loại phiên bản, đánh riêng và đọc riêng.

*Three kinds of version, numbered and read separately.*

1. **Phiên bản bộ dữ liệu** (`phien_ban` trong `.meta.json`), semver trên từng bộ:
   - **patch** sửa lỗi dữ liệu, hoặc meta đổi mà dữ liệu không đổi byte nào
   - **minor** thêm cột, hoặc dữ liệu đổi vì động cơ đổi (xem mục 2)
   - **major** đổi hoặc xoá cột, hoặc đổi ý nghĩa của `id`
2. **Phiên bản động cơ** của từng mô hình (`phien_ban` trong `ho_so_mo_hinh`;
   hậu tố `-vN` của mã là số major), cạnh `phien_ban_dong_co` của cả lõi tính
   (lượt này: `2.0.0`). **Thay đổi dữ liệu do động
   cơ đổi** thì tăng phiên bản động cơ, VÀ tăng tối thiểu **minor** mọi bộ
   dùng mô hình ấy, kể cả khi cột không đổi.
3. **Phiên bản khuôn manifest** (`phien_ban_khuon` trong `manifest.json`,
   lượt này: `1.3.0`): thêm trường là minor, đổi
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
