# LV87 VIE Alliance Website - Design Brainstorm

## Tham chiếu Yêu cầu
- **Tên**: LV87 VIE Alliance (Server 1732)
- **Mục đích**: Trưng bày nội quy, thông tin đội hình, quy định cho thành viên
- **Công nghệ**: React + Tailwind CSS
- **Phong cách**: Dark Mode Cyberpunk/Gaming với Glow effects
- **Màu sắc**: Nền đen xanh than (#0a0e17, #111827), điểm nhấn Vàng Gold (#f5c842) và Cyan (#38bdf8)
- **Font**: Orbitron (tiêu đề), Rajdhani (nội dung)
- **Responsive**: Desktop (3 cột), Tablet (2 cột), Mobile (1 cột + Hamburger menu)

---

## Ba Phương Pháp Thiết Kế

### 1. **Neon Cyberpunk Fortress** (Probability: 0.08)
Một thế giới ảo với glow neon rực rỡ, các khung hình có viền sáng, hiệu ứng scan line, và cảm giác như một trạm chỉ huy quân sự trong tương lai.

### 2. **Minimalist Dark Gaming Hub** (Probability: 0.07)
Thiết kế sạch sẽ, không quá nhiều hiệu ứng, tập trung vào typography mạnh mẽ và layout rõ ràng. Phù hợp với những người chơi muốn thông tin nhanh gọn.

### 3. **Ethereal Glitch Aesthetic** (Probability: 0.06)
Kết hợp glitch effects, gradient chảy mượt, và các chi tiết bất đối xứng tạo cảm giác hiện đại, năng động, hơi hư hỏng nhưng vẫn đẹp.

---

## Phương Pháp Được Chọn: **Neon Cyberpunk Fortress**

### **Design Movement**
Cyberpunk/Synthwave kết hợp với Gaming UI - lấy cảm hứng từ các giao diện game sci-fi, terminal hacker, và neon signage của thập niên 80s.

### **Core Principles**
1. **Glow & Luminescence**: Mọi phần tử chính đều có hiệu ứng sáng (box-shadow glow), tạo cảm giác năng lượng và sự sống động
2. **Hierarchical Contrast**: Sử dụng màu sắc neon (vàng gold, cyan) để tạo điểm nhấn rõ ràng, phân biệt các phần quan trọng
3. **Geometric Precision**: Các hình dạng cứng nhắc, góc vuông, viền sắc nét - tránh các đường cong quá mềm
4. **Dark Immersion**: Nền tối tạo cảm giác sâu thẳm, như đang nhìn vào một màn hình trong bóng tối

### **Color Philosophy**
- **Primary Dark**: #0a0e17 (nền chính, sâu thẳm, như vũ trụ)
- **Secondary Dark**: #111827 (nền phụ, card backgrounds)
- **Accent Gold**: #f5c842 (điểm nhấn chính, logo, tiêu đề quan trọng)
- **Accent Cyan**: #38bdf8 (điểm nhấn phụ, hover states, decorative elements)
- **Text Primary**: #e8e8e8 (chữ chính, dễ đọc trên nền tối)
- **Text Secondary**: #a0a0a0 (chữ phụ, mô tả)

**Cảm xúc**: Mạnh mẽ, công nghệ, hiện đại, hơi bí ẩn nhưng thân thiện.

### **Layout Paradigm**
- **Hero Section**: Tiêu đề lớn với glow effect, slogan nổi bật, quote được highlight bằng viền vàng
- **Grid System**: Sử dụng 3 cột trên desktop, 2 cột tablet, 1 cột mobile - các card có viền cyan/gold glow
- **Asymmetric Spacing**: Không căn giữa hoàn toàn, sử dụng left-align cho text, tạo cảm giác năng động
- **Vertical Rhythm**: Các phần tách biệt bằng divider hoặc spacing lớn

### **Signature Elements**
1. **Glow Box Shadows**: Tất cả card/button chính đều có `box-shadow: 0 0 20px rgba(245, 200, 66, 0.3)` hoặc cyan tương tự
2. **Vertical Gold Bar**: Một thanh vàng dọc bên trái của quote/highlight sections
3. **Neon Borders**: Card có border 1-2px với màu cyan/gold, khi hover sáng hơn

### **Interaction Philosophy**
- **Hover Glow**: Khi hover vào card/button, glow effect tăng cường, border sáng hơn
- **Smooth Transitions**: Tất cả hover/focus effects có transition 200-300ms
- **Accordion Smooth**: Accordion mở/đóng mượt mà, không bất ngờ
- **Mobile Touch-Friendly**: Các phần tử có padding đủ để dễ nhấn trên mobile

### **Animation**
- **Entrance**: Các card fade-in từ từ khi trang load, stagger 50-100ms giữa các card
- **Hover**: Button/card có scale nhẹ (1.02x) + glow tăng khi hover
- **Scroll**: Không cần parallax phức tạp, chỉ cần smooth scroll behavior
- **Hamburger**: Menu slide từ trái sang, backdrop blur, transition 300ms

### **Typography System**
- **Display Font**: Orbitron (Bold 700) cho tiêu đề lớn (h1, h2)
- **Heading Font**: Orbitron (SemiBold 600) cho heading nhỏ (h3, h4)
- **Body Font**: Rajdhani (Regular 400) cho nội dung chính
- **Accent Font**: Rajdhani (Bold 700) cho emphasis trong text

**Hierarchy**:
- H1: 48px (desktop), 36px (mobile) - Orbitron Bold
- H2: 32px (desktop), 24px (mobile) - Orbitron SemiBold
- H3: 24px (desktop), 20px (mobile) - Orbitron SemiBold
- Body: 16px - Rajdhani Regular
- Small: 14px - Rajdhani Regular

### **Brand Essence**
**Positioning**: *Một cộng đồng game thủ mạnh mẽ, tổ chức, và chuyên nghiệp - nơi những người chơi đam mê tập hợp lại để chinh phục những thử thách cùng nhau.*

**Personality**: Mạnh mẽ, Chuyên nghiệp, Hiện đại

### **Brand Voice**
- **Tone**: Quyết đoán, rõ ràng, không dễ thương nhưng thân thiện
- **Headline Example**: "LV87 VIE ALLIANCE - Tập hợp những chiến binh"
- **CTA Example**: "Xem Quy Định" (không phải "Nhấn vào đây")

### **Wordmark & Logo**
- **Logo**: Một biểu tượng hình khiên (shield) hoặc剑 (sword) với số "87" ở giữa, màu vàng gold, có glow effect
- **Wordmark**: "LV87 VIE" viết bằng Orbitron Bold, màu vàng gold, kèm "Server 1732" nhỏ hơn dưới

### **Signature Brand Color**
**Vàng Gold #f5c842** - Màu này sẽ xuất hiện ở logo, tiêu đề chính, các nút CTA quan trọng, tạo sự nhận dạng ngay lập tức.

---

## Các Quyết Định Thiết Kế Chi Tiết

### Navbar
- Fixed trên cùng, nền #0a0e17 với border-bottom cyan glow
- Logo "LV87 VIE" vàng gold, "Server 1732" nhỏ hơn
- Menu links căn phải, hover có underline cyan
- Mobile: Hamburger icon (3 gạch) vàng gold

### Hero Section
- Tiêu đề "LV87 VIE ALLIANCE" Orbitron Bold 48px vàng gold, có glow
- Slogan "Tận hưởng hành trình..." Rajdhani 18px text-gray-300
- Quote trong box có viền trái vàng dày 4px, background #111827, text vàng gold

### Stats Section
- 3 card (desktop), mỗi card có border cyan, glow effect
- Card 1: "7.2M+" (lớn) + "Điểm/ngày" (nhỏ)
- Card 2: "43.2M" + "Điểm/tuần"
- Card 3: Các server tags (chip) với background cyan, text dark

### Rules Section
- 5 card grid, mỗi card có icon, tiêu đề, mô tả
- Card border cyan, hover scale 1.02 + glow tăng
- Icon từ Lucide React (Shield, Sword, Clock, etc.)

### DSB Accordion
- Accordion header có background #111827, border cyan, text vàng gold
- Click để mở/đóng, content fade-in
- Mỗi item có icon nhỏ bên trái

### Team Section
- 2 card (desktop) side-by-side, mỗi card có placeholder dashed border
- Placeholder có icon ảnh + text "Cập nhật đội hình tại đây"
- Card border cyan, background #111827

### Banned List
- Table đơn giản, header background #111827, border cyan
- Columns: STT, Tên nhân vật, Lý do, Thời gian
- Rows alternate background (none / #0a0e17 nhẹ)

### Footer
- Background #0a0e17, border-top cyan glow
- Text nhỏ căn giữa, copyright + ngày cập nhật
- Link "Hướng dẫn" ẩn hoặc ở dưới cùng

---

## Tóm Tắt Quyết Định Thiết Kế
✅ **Phong cách**: Neon Cyberpunk Fortress  
✅ **Màu sắc chính**: Vàng Gold (#f5c842) + Cyan (#38bdf8) trên nền đen (#0a0e17)  
✅ **Font**: Orbitron (tiêu đề) + Rajdhani (nội dung)  
✅ **Hiệu ứng**: Glow effects, smooth transitions, hover scale  
✅ **Layout**: Asymmetric, grid-based, responsive  
✅ **Cảm giác**: Mạnh mẽ, công nghệ, hiện đại, chuyên nghiệp
