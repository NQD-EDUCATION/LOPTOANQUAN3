# NQD Education Landing Page

Landing page React/Vite cho **NQD Education - Lớp học Toán & KHTN Q3**.

## Công nghệ

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Lucide React
- Motion

## Chạy local

```bash
npm install
npm run dev
```

Sau đó mở địa chỉ Vite hiển thị trên terminal, thường là:

```txt
http://localhost:3000
```

## Build kiểm tra trước khi deploy

```bash
npm run build
npm run preview
```

Thư mục xuất bản sau khi build là:

```txt
dist
```

## Deploy bằng Vercel

1. Tạo repo mới trên GitHub.
2. Upload toàn bộ source code này lên repo.
3. Vào Vercel → **New Project** → chọn repo GitHub.
4. Cấu hình:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Bấm **Deploy**.

## Deploy bằng Netlify

1. Vào Netlify → **Add new site** → **Import an existing project**.
2. Chọn repo GitHub.
3. Cấu hình:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Bấm **Deploy**.

## Cấu trúc chính

```txt
src/App.tsx       # Nội dung landing page chính
src/main.tsx      # Entry React
src/index.css     # Tailwind/global CSS
public/images/    # Toàn bộ hình ảnh dùng trên website
```

## Cách đổi hình ảnh

Các hình đang được khai báo trong `src/App.tsx`, ví dụ:

```ts
const HERO_IMAGES = [
  "/images/image5.jpg",
  "/images/image6.jpg"
];
```

Muốn đổi ảnh, hãy đặt ảnh mới vào thư mục `public/images/`, sau đó sửa đường dẫn trong `src/App.tsx`.
