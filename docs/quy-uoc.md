# Quy ước của bộ dữ liệu

*Conventions used across these datasets*

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

## Ba cột có ở mọi bộ · Three columns in every dataset

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

## Phiên bản · Versioning

Semver trên từng bộ:

- **patch** sửa lỗi dữ liệu
- **minor** thêm cột
- **major** đổi hoặc xoá cột, hoặc đổi ý nghĩa của `id`

## Tính xác định · Determinism

Bộ sinh chạy lại phải cho ra tệp **giống hệt từng byte**. Không bộ nào được
phụ thuộc đồng hồ: bảng 60 Hoa Giáp chốt cứng khoảng năm thay vì trượt theo
năm hiện tại, vì một tệp tự viết lại chính nó vào ngày 1 tháng 1 thì không
ai trích dẫn lại được.

*The generator must produce byte-identical files on a re-run. No dataset
reads the clock: a file that silently rewrites itself every 1 January
cannot be cited.*
