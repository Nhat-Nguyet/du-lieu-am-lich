<h1 align="center">Dữ liệu lịch pháp và tra cứu văn hoá Việt Nam</h1>

<p align="center">
  27 bộ dữ liệu máy đọc về âm lịch, can chi, tiết khí, Kinh Dịch và lễ hội Việt Nam,<br>
  tổng cộng 166.724 dòng, sinh từ cùng lõi tính của Nhật Nguyệt, giấy phép CC BY 4.0.
</p>

<p align="center">
  <a href="https://doi.org/10.5281/zenodo.23009396"><img alt="DOI 10.5281/zenodo.23009396" src="https://zenodo.org/badge/DOI/10.5281/zenodo.23009396.svg"></a>
  <a href="https://creativecommons.org/licenses/by/4.0/"><img alt="CC BY 4.0" src="https://img.shields.io/badge/gi%E1%BA%A5y%20ph%C3%A9p-CC%20BY%204.0-lightgrey"></a>
  <a href="https://huggingface.co/nhatnguyet"><img alt="Hugging Face" src="https://img.shields.io/badge/%F0%9F%A4%97-Hugging%20Face-yellow"></a>
  <a href="https://github.com/Nhat-Nguyet/du-lieu-am-lich/releases/latest"><img alt="phát hành" src="https://img.shields.io/github/v/release/Nhat-Nguyet/du-lieu-am-lich?label=ph%C3%A1t%20h%C3%A0nh"></a>
  <img alt="27 bộ dữ liệu" src="https://img.shields.io/badge/b%E1%BB%99%20d%E1%BB%AF%20li%E1%BB%87u-27-8b1a1a">
  <img alt="166.724 dòng" src="https://img.shields.io/badge/d%C3%B2ng-166.724-8b1a1a">
</p>

<p align="center">
  <b>Tiếng Việt</b> ·
  <a href="README.en.md">English</a> ·
  <a href="README.zh.md">中文</a>
</p>

---

## Kho này giải quyết gì

Ai viết ứng dụng lịch, nghiên cứu văn hoá hay xử lý tiếng Việt đều sớm cần một bảng can chi,
một lịch âm dương hay một danh sách lễ hội đáng tin. Bảng như vậy trên mạng không thiếu, nhưng phần
lớn là bảng chép tay, không có giấy phép, không nói tính theo quy ước nào, và lệch nhau ở đúng những
chỗ khó.

Kho này có **27 bộ, 166.724 dòng** dữ liệu lịch pháp, can chi, tiết khí, Kinh Dịch và lễ hội Việt Nam
ở dạng máy đọc (CSV, JSON, kèm tệp mô tả `.meta.json`). Tất cả sinh từ cùng lõi tính đang chạy các
tiện ích trên [nhatnguyet.org](https://nhatnguyet.org), nên con số trong tệp và con số trên trang là một.

Hai điều làm nó khác một bảng tra thông thường:

- **Dữ kiện tính toán tách khỏi quy ước truyền thống.** Mỗi bộ ghi rõ nguồn gốc dữ liệu: 10 chép từ nguồn, 9 suy ra từ quy tắc, 4 tính toán, 4 biên tập.
  Mỗi dòng có cột `nguon` nói giá trị ấy do máy tính ra, chép từ sách nào, hay do biên tập.
- **Chỗ các phái bất đồng được nói ra.** Cột `ghi_chu` ghi dị bản của từng dòng;
  [`docs/bat-dong.md`](docs/bat-dong.md) ghi lựa chọn của từng bộ và lý do; bộ `diem-bat-dong-giua-cac-phai` gom các điểm ấy thành dữ liệu.

## Bản phát hành và DOI

| Mục | Giá trị |
|---|---|
| Mã phát hành dữ liệu khi README này được sinh (không phải mã dựng site) | `2026.09.28-7ddf4e62` (`loai_ma: phat-hanh-du-lieu`) |
| Tag | [`release-2026.09.28-7ddf4e62`](https://github.com/Nhat-Nguyet/du-lieu-am-lich/releases/tag/release-2026.09.28-7ddf4e62) |
| DOI khái niệm (luôn trỏ bản mới nhất) | [10.5281/zenodo.23009396](https://doi.org/10.5281/zenodo.23009396) |
| DOI từng phiên bản | Zenodo cấp cho mỗi GitHub Release, xem trang DOI khái niệm |
| Phiên bản động cơ lõi tính | `1.0.1` |
| Khuôn manifest | `1.3.0` |
| Dựng từ commit mã nguồn, Go, băm go.sum (khối dung_tu) | `5f08fb5fdb72f1a541c647927d037b029ae5dc9d`, go1.24.13, go.sum `230431e4ecff` |

[`manifest.json`](manifest.json) ở gốc kho kê mọi tệp của bản phát hành kèm sha256 và kích cỡ, cùng
phiên bản, số dòng, số cột của từng bộ. Mã phát hành suy từ nội dung: cùng dữ liệu thì cùng mã, dù
phát hành lại hôm nào. Bản hiện hành luôn là bản trong `manifest.json`; bảng trên ghi bản lúc README
được sinh.

Kho **đồng bộ một chiều** từ nhatnguyet.org: mỗi lượt phát hành gắn tag `release-<mã>` và tạo một
GitHub Release, Zenodo lưu trữ Release ấy và cấp DOI phiên bản.

## Các bộ dữ liệu

27 bộ, mỗi bộ ba tệp trong [`data/`](data): `.csv`, `.json` và `.meta.json` (mô tả từng cột, quy ước đã chọn,
giới hạn sử dụng; đọc được mà không cần tải dữ liệu). Bộ lớn có thêm bản `.parquet`.

| Bộ dữ liệu | Slug | Dòng | Phiên bản | Thay đổi gần nhất | Nguồn gốc dữ liệu | Vai trò | Hugging Face |
|---|---|--:|---|---|---|---|---|
| 10 Thiên Can | [`10-thien-can`](data/10-thien-can.csv) | 10 | 1.1.0 | `provenance` | chép từ nguồn | tri thức | [10-thien-can](https://huggingface.co/datasets/nhatnguyet/10-thien-can) |
| Quan hệ hợp khắc 12 con giáp | [`12-con-giap-hop-khac`](data/12-con-giap-hop-khac.csv) | 144 | 1.1.0 | `provenance` | chép từ nguồn | tri thức | [12-con-giap-hop-khac](https://huggingface.co/datasets/nhatnguyet/12-con-giap-hop-khac) |
| 12 Địa Chi | [`12-dia-chi`](data/12-dia-chi.csv) | 12 | 1.1.0 | `provenance` | chép từ nguồn | tri thức | [12-dia-chi](https://huggingface.co/datasets/nhatnguyet/12-dia-chi) |
| Thập nhị trực | [`12-truc`](data/12-truc.csv) | 12 | 1.1.0 | `provenance` | chép từ nguồn | tri thức | [12-truc](https://huggingface.co/datasets/nhatnguyet/12-truc) |
| 22 lá Ẩn Chính Tarot | [`22-an-chinh-tarot`](data/22-an-chinh-tarot.csv) | 22 | 1.1.0 | `provenance` | chép từ nguồn | tri thức | [22-an-chinh-tarot](https://huggingface.co/datasets/nhatnguyet/22-an-chinh-tarot) |
| 24 tiết khí | [`24-tiet-khi`](data/24-tiet-khi.csv) | 384 | 1.1.0 | `provenance` | tính toán | tri thức | [24-tiet-khi](https://huggingface.co/datasets/nhatnguyet/24-tiet-khi) |
| 56 lá Ẩn Phụ Tarot | [`56-an-phu-tarot`](data/56-an-phu-tarot.csv) | 56 | 1.1.0 | `provenance` | chép từ nguồn | tri thức | [56-an-phu-tarot](https://huggingface.co/datasets/nhatnguyet/56-an-phu-tarot) |
| Bảng 60 Hoa Giáp | [`60-hoa-giap`](data/60-hoa-giap.csv) | 60 | 1.1.0 | `provenance` | suy ra từ quy tắc | tri thức | [60-hoa-giap](https://huggingface.co/datasets/nhatnguyet/60-hoa-giap) |
| 64 quẻ Kinh Dịch | [`64-que-kinh-dich`](data/64-que-kinh-dich.csv) | 64 | 1.1.0 | `provenance` | chép từ nguồn | tri thức | [64-que-kinh-dich](https://huggingface.co/datasets/nhatnguyet/64-que-kinh-dich) |
| 9 sao chiếu mệnh (Cửu Diệu) | [`9-sao-chieu-menh`](data/9-sao-chieu-menh.csv) | 9 | 1.1.0 | `provenance` | suy ra từ quy tắc | tri thức | [9-sao-chieu-menh](https://huggingface.co/datasets/nhatnguyet/9-sao-chieu-menh) |
| Biên ngày 12 cung hoàng đạo theo từng năm, 1950 tới 2050 | [`bien-cung-hoang-dao-1950-2050`](data/bien-cung-hoang-dao-1950-2050.csv) | 1.212 | 1.1.4 | `documentation` | tính toán | tri thức | [bien-cung-hoang-dao-1950-2050](https://huggingface.co/datasets/nhatnguyet/bien-cung-hoang-dao-1950-2050) |
| Bộ câu hỏi đánh giá ô tìm kiếm | [`cau-hoi-danh-gia-tim-kiem`](data/cau-hoi-danh-gia-tim-kiem.csv) | 1.194 | 1.1.0 | `provenance` | biên tập | **đánh giá, không phải tri thức** | [cau-hoi-danh-gia-tim-kiem](https://huggingface.co/datasets/nhatnguyet/cau-hoi-danh-gia-tim-kiem) |
| Bảng quy đổi chữ sang số, Pythagoras và Chaldean | [`chu-sang-so-than-so-hoc`](data/chu-sang-so-than-so-hoc.csv) | 33 | 1.1.0 | `provenance` | chép từ nguồn | tri thức | [chu-sang-so-than-so-hoc](https://huggingface.co/datasets/nhatnguyet/chu-sang-so-than-so-hoc) |
| Cung phi và hướng Bát Trạch | [`cung-phi-bat-trach`](data/cung-phi-bat-trach.csv) | 400 | 1.2.0 | `provenance` | suy ra từ quy tắc | tri thức | [cung-phi-bat-trach](https://huggingface.co/datasets/nhatnguyet/cung-phi-bat-trach) |
| Điểm bất đồng giữa các trường phái | [`diem-bat-dong-giua-cac-phai`](data/diem-bat-dong-giua-cac-phai.csv) | 27 | 1.2.0 | `schema` | biên tập | tri thức | [diem-bat-dong-giua-cac-phai](https://huggingface.co/datasets/nhatnguyet/diem-bat-dong-giua-cac-phai) |
| Giờ hoàng đạo theo 60 ngày can chi | [`gio-hoang-dao-60-ngay`](data/gio-hoang-dao-60-ngay.csv) | 720 | 1.1.0 | `provenance` | suy ra từ quy tắc | tri thức | [gio-hoang-dao-60-ngay](https://huggingface.co/datasets/nhatnguyet/gio-hoang-dao-60-ngay) |
| Ghép chéo 60 Hoa Giáp: nạp âm, hợp khắc và quan hệ ngũ hành | [`hoa-giap-ghep-cheo`](data/hoa-giap-ghep-cheo.csv) | 3.600 | 1.1.0 | `provenance` | suy ra từ quy tắc | tri thức | [hoa-giap-ghep-cheo](https://huggingface.co/datasets/nhatnguyet/hoa-giap-ghep-cheo) |
| Lễ hội Việt Nam quy đổi sang ngày dương, 2026 tới 2030 | [`le-hoi-quy-doi-ngay-duong`](data/le-hoi-quy-doi-ngay-duong.csv) | 790 | 1.2.0 | `provenance` | suy ra từ quy tắc | tri thức | [le-hoi-quy-doi-ngay-duong](https://huggingface.co/datasets/nhatnguyet/le-hoi-quy-doi-ngay-duong) |
| Lễ hội và tín ngưỡng theo dân tộc | [`le-hoi-tin-nguong-theo-dan-toc`](data/le-hoi-tin-nguong-theo-dan-toc.csv) | 187 | 1.1.0 | `provenance` | biên tập | tri thức | [le-hoi-tin-nguong-theo-dan-toc](https://huggingface.co/datasets/nhatnguyet/le-hoi-tin-nguong-theo-dan-toc) |
| Lễ hội, lễ tết và ngày nghỉ Việt Nam | [`le-hoi-viet-nam`](data/le-hoi-viet-nam.csv) | 197 | 1.2.5 | `documentation` | biên tập | tri thức | [le-hoi-viet-nam](https://huggingface.co/datasets/nhatnguyet/le-hoi-viet-nam) |
| Lịch âm dương 1900 tới 2100 | [`lich-am-duong-1900-2100`](data/lich-am-duong-1900-2100.csv) | 73.414 | 1.2.0 | `data` | tính toán | tri thức | [lich-am-duong-1900-2100](https://huggingface.co/datasets/nhatnguyet/lich-am-duong-1900-2100) |
| Mốc bắt đầu 24 tiết khí, 1900 tới 2100 | [`moc-tiet-khi-1900-2100`](data/moc-tiet-khi-1900-2100.csv) | 4.824 | 1.2.3 | `documentation` | tính toán | tri thức | [moc-tiet-khi-1900-2100](https://huggingface.co/datasets/nhatnguyet/moc-tiet-khi-1900-2100) |
| Ngày kỵ dân gian quy về ngày dương, 2026 tới 2035 | [`ngay-ky-dan-gian-2026-2035`](data/ngay-ky-dan-gian-2026-2035.csv) | 3.652 | 1.1.0 | `provenance` | suy ra từ quy tắc | tri thức | [ngay-ky-dan-gian-2026-2035](https://huggingface.co/datasets/nhatnguyet/ngay-ky-dan-gian-2026-2035) |
| Quẻ trị ngày theo phép Quái khí, 1900 tới 2100 | [`que-ngay-quai-khi-1900-2100`](data/que-ngay-quai-khi-1900-2100.csv) | 73.414 | 1.2.0 | `provenance` | suy ra từ quy tắc | tri thức | [que-ngay-quai-khi-1900-2100](https://huggingface.co/datasets/nhatnguyet/que-ngay-quai-khi-1900-2100) |
| Tam Tai, Kim Lâu, Hoang Ốc theo tuổi và năm xem | [`tam-tai-kim-lau-hoang-oc`](data/tam-tai-kim-lau-hoang-oc.csv) | 2.201 | 1.1.0 | `provenance` | suy ra từ quy tắc | tri thức | [tam-tai-kim-lau-hoang-oc](https://huggingface.co/datasets/nhatnguyet/tam-tai-kim-lau-hoang-oc) |
| Thứ tự 60 quẻ Quái khí | [`thu-tu-60-que-quai-khi`](data/thu-tu-60-que-quai-khi.csv) | 60 | 1.2.0 | `schema` | chép từ nguồn | tri thức | [thu-tu-60-que-quai-khi](https://huggingface.co/datasets/nhatnguyet/thu-tu-60-que-quai-khi) |
| Cung trên ba thước Lỗ Ban | [`thuoc-lo-ban`](data/thuoc-lo-ban.csv) | 26 | 1.1.0 | `provenance` | chép từ nguồn | tri thức | [thuoc-lo-ban](https://huggingface.co/datasets/nhatnguyet/thuoc-lo-ban) |

Cột "Thay đổi gần nhất" là loại thay đổi của phiên bản hiện hành (`data`, `schema`, `model`, `source`,
`provenance`, `documentation`), mô tả đủ ở `thay_doi_gan_nhat` trong `.meta.json` và ở [`CHANGELOG.md`](CHANGELOG.md).
Bộ mang vai trò đánh giá (`vai_tro: danh-gia`, `khong_phai_tri_thuc: true`) là câu hỏi đo ô tìm kiếm của site, đừng dùng
làm nguồn tri thức.

## Dùng nhanh

Hai ví dụ trong [`examples/`](examples) chạy được ngay, không cần cài thư viện nào:

```bash
# Python: tra can chi và nạp âm của một năm trong bộ 60 Hoa Giáp
cd examples/python && python3 doc-du-lieu.py

# JavaScript: đọc bộ 12 Địa Chi bằng một bộ đọc CSV theo RFC 4180
cd examples/javascript && node doc-du-lieu.js
```

Không muốn tải cả kho thì đọc thẳng một tệp:

```
https://raw.githubusercontent.com/Nhat-Nguyet/du-lieu-am-lich/main/data/<slug>.csv
```

## Quy ước và giới hạn

- [`docs/quy-uoc.md`](docs/quy-uoc.md): định dạng CSV, ba cột bắt buộc, cột nguồn gốc, ba loại phiên bản, tính xác định.
- [`docs/bat-dong.md`](docs/bat-dong.md): chỗ các trường phái bất đồng và lựa chọn của từng bộ. Đây là tệp đáng đọc nhất.
- [`docs/mo-hinh.md`](docs/mo-hinh.md): hồ sơ các mô hình tính (lịch thiên văn, múi giờ, làm tròn, nguồn đối chiếu).
- [`docs/nguon-thu-tich.md`](docs/nguon-thu-tich.md): thư tịch gốc của từng bộ, và bộ nào không dựa trên sách nào.
- [`docs/oracle.md`](docs/oracle.md): `data/oracle.csv`, bộ kiểm đối chiếu công khai giữa dữ liệu và tiện ích.

Các tệp trong `docs/` viết bằng tiếng Việt, kèm tóm tắt tiếng Anh.

Đây là dữ liệu về quy ước văn hoá và lịch pháp, không phải khẳng định khoa học:

> Bộ dữ liệu này ghi lại quy ước văn hoá và lịch pháp, không phải phát biểu khoa học. Nó dùng được cho nghiên cứu văn hoá, xử lý ngôn ngữ và ứng dụng lịch. Nó không dùng để dự đoán sự kiện, đánh giá con người, hay ra quyết định ảnh hưởng tới ai.

## Trích dẫn

Dùng lại dữ liệu thì ghi nguồn:

```
Nguồn: Nhật Nguyệt (nhatnguyet.org), CC BY 4.0
```

DOI: [10.5281/zenodo.23009396](https://doi.org/10.5281/zenodo.23009396), DOI khái niệm trên Zenodo, luôn trỏ bản mới nhất. Muốn trích đúng một bản thì dùng
DOI phiên bản trên trang ấy. Thông tin trích dẫn máy đọc được ở [`CITATION.cff`](CITATION.cff).

## Giấy phép

Dữ liệu phát hành theo [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)
(CC BY 4.0): dùng lại được cho cả mục đích thương mại, sửa đổi được, chỉ cần ghi nguồn. Toàn văn ở [`LICENSE`](LICENSE).

## Liên kết

- Danh mục dữ liệu mở trên site: https://nhatnguyet.org/du-lieu
- Hugging Face: https://huggingface.co/nhatnguyet
- Wikidata: https://www.wikidata.org/wiki/Q141586876
- Mô tả cho mô hình ngôn ngữ: https://nhatnguyet.org/llms-full/du-lieu.txt
- Báo lỗi và góp ý: [`CONTRIBUTING.md`](CONTRIBUTING.md)
