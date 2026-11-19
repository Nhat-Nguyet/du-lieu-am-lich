# Đóng góp · Contributing · 参与贡献

[Tiếng Việt](#tiếng-việt) · [English](#english) · [中文](#中文)

## Tiếng Việt

Thấy một con số sai, một tên gọi lệch hay một quy ước chưa được nói rõ,
xin báo cho chúng tôi theo một trong hai cách:

- mở một [issue](https://github.com/Nhat-Nguyet/du-lieu-am-lich/issues) trên kho này, hoặc
- gửi thư tới [lienhe@nhatnguyet.org](mailto:lienhe@nhatnguyet.org).

Một báo cáo tốt nêu **bộ dữ liệu** (slug), **`id` của dòng**, giá trị bạn thấy, giá trị bạn cho là
đúng, và nguồn bạn đối chiếu (tên sách, trang, hoặc đường dẫn).

Kho này **đồng bộ một chiều** từ https://nhatnguyet.org. Pull request sửa tệp trong `data/` hay `docs/` sẽ không
được gộp trực tiếp: lượt đồng bộ sau sẽ ghi đè nó. Chúng tôi sửa ở nguồn (lõi tính hoặc kho biên
tập), phát hành lại, và bản sửa chảy về đây cùng một mã phát hành mới trong `manifest.json` và một
mục trong `CHANGELOG.md`.

## English

If you find a wrong number, a misnamed item or a convention that is not
stated clearly, please tell us in one of two ways:

- open an [issue](https://github.com/Nhat-Nguyet/du-lieu-am-lich/issues) on this repository, or
- email [lienhe@nhatnguyet.org](mailto:lienhe@nhatnguyet.org).

A useful report names the **dataset** (slug), the **row `id`**, the value you see, the value you believe
is correct, and the source you checked against (book title, page, or URL).

This repository **syncs one way** from https://nhatnguyet.org. Pull requests that edit files under `data/` or `docs/`
will not be merged directly, because the next sync would overwrite them. We fix the source (the
computation engine or the editorial store), publish a new release, and the fix flows back here with a new
release code in `manifest.json` and an entry in `CHANGELOG.md`.

## 中文

如果发现数字有误、名称不对，或某项约定说明不清，请通过以下任一方式告诉我们：

- 在本仓库提交 [issue](https://github.com/Nhat-Nguyet/du-lieu-am-lich/issues)，或
- 发送邮件至 [lienhe@nhatnguyet.org](mailto:lienhe@nhatnguyet.org)。

有用的报告应写明**数据集**（slug）、**行的 `id`**、你看到的值、你认为正确的值，以及你所对照的来源（书名、页码或网址）。

本仓库自 https://nhatnguyet.org **单向同步**。修改 `data/` 或 `docs/` 中文件的 pull request 不会被直接合并，因为下一次同步会将其覆盖。
我们会在源头（计算内核或编辑数据库）修正，重新发布，修正随新的发布代码（见 `manifest.json`）和 `CHANGELOG.md` 中的一条记录同步到这里。
