# 🎬 CINEVERSE - Figma AI Design Prompt
## Enterprise Movie Streaming Platform - Complete UI/UX Design System

---

## 📋 MỤC LỤC

1. [Tổng Quan Dự Án](#1-tổng-quan-dự-án)
2. [Brand Identity & Logo Design](#2-brand-identity--logo-design)
3. [Design Philosophy - Triết Lý Thiết Kế](#3-design-philosophy---triết-lý-thiết-kế)
4. [Color System - Hệ Thống Màu Sắc](#4-color-system---hệ-thống-màu-sắc)
5. [Typography System - Hệ Thống Typography](#5-typography-system---hệ-thống-typography)
6. [Spacing & Grid System](#6-spacing--grid-system)
7. [Component Library - Thư Viện Components](#7-component-library---thư-viện-components)
8. [Page Designs - Thiết Kế Các Trang](#8-page-designs---thiết-kế-các-trang)
9. [Key Features & Interactions](#9-key-features--interactions)
10. [Animation & Motion Design](#10-animation--motion-design)
11. [Responsive Design Guidelines](#11-responsive-design-guidelines)
12. [Admin Dashboard Design](#12-admin-dashboard-design)
13. [Accessibility Design Guidelines](#13-accessibility-design-guidelines)

---

## 1. TỔNG QUAN DỰ ÁN

### 1.1 Giới Thiệu
**CineVerse** là nền tảng xem phim trực tuyến cao cấp, kết hợp giữa sự sang trọng của rạp chiếu phim truyền thống và công nghệ hiện đại. Thiết kế cần truyền tải cảm giác "bước vào một rạp phim đẳng cấp" - với ánh sáng mờ ảo, màn nhung đỏ, và sự kỳ vọng trước khi bộ phim bắt đầu.

### 1.2 Đối Tượng Người Dùng
- **Chính**: Người yêu phim 18-45 tuổi, thích trải nghiệm cao cấp
- **Phụ**: Gia đình có trẻ em, cần giao diện dễ sử dụng
- **Admin**: Quản trị viên nội dung, cần dashboard hiệu quả

### 1.3 Mục Tiêu Thiết Kế
- Tạo trải nghiệm điện ảnh immersive (đắm chìm)
- Giao diện sang trọng, tinh tế nhưng dễ sử dụng
- Tối ưu cho việc khám phá và xem phim
- Hỗ trợ đầy đủ accessibility (WCAG 2.1 AAA)
- Responsive hoàn hảo trên mọi thiết bị

---

## 2. BRAND IDENTITY & LOGO DESIGN

### 2.1 Tên Thương Hiệu
**CINEVERSE** = Cinema + Universe
- "Cine" - Điện ảnh, rạp chiếu phim
- "Verse" - Vũ trụ, thế giới

### 2.2 Slogan Options
- "Your Universe of Cinema" (Vũ trụ điện ảnh của bạn)
- "Where Stories Come Alive" (Nơi câu chuyện sống dậy)
- "Infinite Cinema Experience" (Trải nghiệm điện ảnh vô tận)

### 2.3 Logo Design Brief

#### Primary Logo Concept
```
CONCEPT: "The Cinematic Portal"

Ý tưởng: Logo thể hiện một "cổng vào vũ trụ điện ảnh" - kết hợp giữa:
- Hình ảnh cuộn phim (film reel) cách điệu
- Hình dạng vòng tròn/portal gợi ý "vũ trụ"
- Ngôi sao/ánh sáng đại diện cho sự lung linh của Hollywood

THIẾT KẾ CHI TIẾT:
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│     ████████  ██ ███    ██ ████████ ██    ██ ████████       │
│     ██        ██ ████   ██ ██       ██    ██ ██             │
│     ██        ██ ██ ██  ██ █████    ██    ██ ██████         │
│     ██        ██ ██  ██ ██ ██        ██  ██  ██             │
│     ████████  ██ ██   ████ ████████   ████   ████████       │
│                                                             │
│                      [ICON ABOVE]                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

ICON DESIGN:
- Hình tròn bên ngoài: Đại diện cho vũ trụ, rạp chiếu
- Cuộn phim cách điệu bên trong: Chữ "C" được thiết kế như cuộn film
- Ngôi sao nhỏ: Điểm nhấn sáng, biểu tượng của ngôi sao điện ảnh
- Gradient: Từ đỏ cinema (#DC2626) đến vàng gold (#EAB308)
```

#### Logo Variations

**1. Primary Logo (Full)**
```
[Icon] + CINEVERSE (horizontal)
- Sử dụng cho header, marketing materials
- Kích thước tối thiểu: 120px width
```

**2. Logo with Tagline**
```
[Icon] + CINEVERSE
"Your Universe of Cinema"
- Sử dụng cho landing pages, about pages
```

**3. Icon Only (Favicon/App Icon)**
```
[Icon] only
- Sử dụng cho favicon, mobile app icon, social media avatar
- Kích thước: 16x16, 32x32, 48x48, 192x192, 512x512
```

**4. Wordmark Only**
```
CINEVERSE (text only)
- Sử dụng khi không gian hạn chế
- Footer, watermarks
```

**5. Monochrome Versions**
```
- White on dark: Cho dark mode
- Black on light: Cho light mode
- Grayscale: Cho in ấn đen trắng
```

#### Logo Specifications

```
COLORS:
- Primary Gradient: #DC2626 (Red) → #EAB308 (Gold)
- Solid Red: #DC2626
- Solid Gold: #EAB308
- White: #FFFFFF
- Dark: #18181B

TYPOGRAPHY (Wordmark):
- Font: Cinzel Decorative (hoặc Playfair Display)
- Weight: Bold (700)
- Letter Spacing: 0.15em (wider)
- Style: All Caps

ICON PROPORTIONS:
- Icon height = 1x
- Wordmark height = 0.4x
- Spacing between icon and wordmark = 0.2x
- Clear space around logo = 0.5x (minimum)

MINIMUM SIZES:
- Full logo: 120px width
- Icon only: 24px
- Favicon: 16x16px
```

#### Logo Usage Guidelines

```
✅ DO:
- Use on dark backgrounds for best impact
- Maintain aspect ratio
- Use approved color variations
- Keep clear space around logo

❌ DON'T:
- Stretch or distort
- Use on busy backgrounds without contrast
- Change colors outside brand palette
- Add effects (shadows, outlines) not in brand guide
- Place text too close to logo
```

### 2.4 Brand Assets to Design

```
1. Logo Suite
   ├── Primary Logo (horizontal)
   ├── Logo with tagline
   ├── Icon only
   ├── Wordmark only
   ├── Monochrome versions (white, black, gray)
   └── Animated logo (for loading screens)

2. Favicon Package
   ├── favicon.ico (16x16, 32x32)
   ├── apple-touch-icon.png (180x180)
   ├── android-chrome-192x192.png
   ├── android-chrome-512x512.png
   └── safari-pinned-tab.svg

3. Social Media Kit
   ├── Profile picture (square)
   ├── Cover photos (Facebook, Twitter, YouTube)
   ├── Story templates
   └── Post templates

4. Email Signature
   └── HTML email signature with logo

5. Watermark
   └── Semi-transparent logo for video player
```

---

## 3. DESIGN PHILOSOPHY - TRIẾT LÝ THIẾT KẾ

### 3.1 Aesthetic Direction: "Cinematic Elegance"

```
CONCEPT: "Premium Cinema Experience at Home"

Kết hợp 3 yếu tố:
1. LUXURY/REFINED - Sang trọng, tinh tế
   - Màu sắc đậm, contrast cao
   - Typography thanh lịch
   - Negative space rộng rãi
   
2. EDITORIAL/MAGAZINE - Trình bày như tạp chí cao cấp
   - Layout asymmetric, grid-breaking
   - Typography hierarchy rõ ràng
   - Feature content prominently
   
3. CINEMATIC/DRAMATIC - Điện ảnh, kịch tính
   - Dark mode dominant
   - Lighting effects (glow, gradients)
   - Immersive imagery
```

### 3.2 Design Principles

```
1. IMMERSIVE FIRST
   - Content (phim) là trung tâm
   - UI "biến mất" khi xem phim
   - Backgrounds hỗ trợ, không cạnh tranh

2. DRAMATIC CONTRAST
   - Dark backgrounds với bright accents
   - Text hierarchy rõ ràng
   - Focus states nổi bật

3. FLUID MOTION
   - Transitions mượt mà
   - Micro-interactions tinh tế
   - Loading states elegant

4. ACCESSIBLE LUXURY
   - Sang trọng nhưng dễ sử dụng
   - Touch targets đủ lớn
   - Readable at all sizes
```

### 3.3 Visual Mood Board

```
INSPIRATION SOURCES:
├── Netflix Premium Tier (layout, navigation)
├── Apple TV+ (typography, elegance)
├── MUBI (editorial approach)
├── IMDb (information density)
├── Criterion Channel (cinephile aesthetic)
└── Luxury Hotel Websites (refinement)

KEY VISUAL ELEMENTS:
├── Film grain texture overlays
├── Vignette effects on hero images
├── Soft glow effects on accent elements
├── Gradient meshes for depth
├── Glass morphism for overlays
└── Subtle noise textures
```

### 3.4 Unique Design Features

```
1. "CURTAIN REVEAL" ANIMATION
   - Page transitions như mở màn rạp hát
   - Content reveals từ center ra ngoài
   
2. "SPOTLIGHT" HOVER EFFECT
   - Cards được "chiếu sáng" khi hover
   - Subtle light beam effect
   
3. "FILM STRIP" NAVIGATION
   - Horizontal scrolling như cuộn phim
   - Perforation marks decoration
   
4. "GOLDEN RATIO" LAYOUTS
   - Sử dụng tỉ lệ vàng cho compositions
   - Asymmetric nhưng balanced
   
5. "THEATER MODE" TRANSITIONS
   - Lights dim effect khi vào xem phim
   - Ambient backdrop matching poster colors
```

---

## 4. COLOR SYSTEM - HỆ THỐNG MÀU SẮC

### 4.1 Primary Palette

```
┌─────────────────────────────────────────────────────────────┐
│                    PRIMARY - CINEMA RED                      │
├─────────────────────────────────────────────────────────────┤
│  50   │  100  │  200  │  300  │  400  │  500  │  600  │     │
│ #FEF2 │ #FEE2 │ #FECA │ #FCA5 │ #F871 │ #EF44 │ #DC26 │     │
│  F2   │  E2   │  CA   │  A5   │  71   │  44   │  26   │     │
├───────┴───────┴───────┴───────┴───────┴───────┴───────┤     │
│  700  │  800  │  900  │  950  │                       │     │
│ #B91C │ #991B │ #7F1D │ #450A │       DOMINANT        │     │
│  1C   │  1B   │  1D   │  0A   │        COLOR          │     │
└─────────────────────────────────────────────────────────────┘

Usage:
- Primary buttons, CTAs
- Active states
- Important highlights
- Brand accents
- Hearts/Favorites
```

### 4.2 Secondary Palette

```
┌─────────────────────────────────────────────────────────────┐
│                  SECONDARY - LUXURY GOLD                     │
├─────────────────────────────────────────────────────────────┤
│  50   │  100  │  200  │  300  │  400  │  500  │  600  │     │
│ #FEFC │ #FEF9 │ #FEF0 │ #FDE0 │ #FACC │ #EAB3 │ #CA8A │     │
│  E8   │  C3   │  8A   │  47   │  15   │  08   │  04   │     │
├───────┴───────┴───────┴───────┴───────┴───────┴───────┤     │
│  700  │  800  │  900  │  950  │                       │     │
│ #A162 │ #854D │ #713F │ #4220 │      ACCENT          │     │
│  07   │  0E   │  12   │  06   │      COLOR           │     │
└─────────────────────────────────────────────────────────────┘

Usage:
- Premium badges
- Ratings/Stars
- VIP indicators
- Hover accents
- Gold achievements
```

### 4.3 Neutral Palette (Dark Theme - Primary)

```
┌─────────────────────────────────────────────────────────────┐
│                    NEUTRAL - CINEMA DARK                     │
├─────────────────────────────────────────────────────────────┤
│  50   │  100  │  200  │  300  │  400  │  500  │  600  │     │
│ #FAFA │ #F4F4 │ #E4E4 │ #D4D4 │ #A1A1 │ #7171 │ #5252 │     │
│  FA   │  F5   │  E7   │  D8   │  AA   │  7A   │  5B   │     │
├───────┴───────┴───────┴───────┴───────┴───────┴───────┤     │
│  700  │  800  │  900  │  950  │                       │     │
│ #3F3F │ #2727 │ #1818 │ #0909 │    BACKGROUND        │     │
│  46   │  2A   │  1B   │  0B   │      COLORS          │     │
└─────────────────────────────────────────────────────────────┘

Dark Theme Usage:
- 950: Page background (deepest)
- 900: Card backgrounds, sections
- 800: Elevated surfaces, inputs
- 700: Borders, dividers
- 500-600: Muted text
- 300-400: Secondary text
- 50-100: Primary text (white)
```

### 4.4 Semantic Colors

```
┌─────────────────────────────────────────────────────────────┐
│                     SEMANTIC COLORS                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  SUCCESS        WARNING         ERROR           INFO         │
│  ┌─────┐        ┌─────┐        ┌─────┐        ┌─────┐       │
│  │#22C5│        │#F59E│        │#EF44│        │#3B82│       │
│  │ 5E  │        │ 0B  │        │ 44  │        │ F6  │       │
│  └─────┘        └─────┘        └─────┘        └─────┘       │
│                                                              │
│  Completed      Warnings       Errors         Information   │
│  Available      Coming Soon    Unavailable    Updates       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 4.5 Gradient Definitions

```
┌─────────────────────────────────────────────────────────────┐
│                       GRADIENTS                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. BRAND GRADIENT (Primary)                                 │
│     linear-gradient(135deg, #DC2626 0%, #EAB308 100%)       │
│     → Buttons, badges, highlights                            │
│                                                              │
│  2. HERO GRADIENT (Background)                               │
│     radial-gradient(                                         │
│       ellipse 80% 50% at 50% -20%,                          │
│       rgba(239, 68, 68, 0.15) 0%,                           │
│       transparent 50%                                        │
│     )                                                        │
│     → Hero sections, page backgrounds                        │
│                                                              │
│  3. CARD OVERLAY GRADIENT                                    │
│     linear-gradient(                                         │
│       to top,                                                │
│       rgba(0, 0, 0, 0.9) 0%,                                │
│       rgba(0, 0, 0, 0.5) 40%,                               │
│       transparent 100%                                       │
│     )                                                        │
│     → Movie card text overlays                               │
│                                                              │
│  4. VIGNETTE GRADIENT                                        │
│     radial-gradient(                                         │
│       ellipse at center,                                     │
│       transparent 0%,                                        │
│       rgba(0, 0, 0, 0.3) 70%,                               │
│       rgba(0, 0, 0, 0.7) 100%                               │
│     )                                                        │
│     → Hero images, backdrops                                 │
│                                                              │
│  5. GLASS EFFECT                                             │
│     background: rgba(255, 255, 255, 0.05);                  │
│     backdrop-filter: blur(10px);                            │
│     border: 1px solid rgba(255, 255, 255, 0.1);             │
│     → Modals, dropdowns, overlays                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 4.6 Dark vs Light Theme

```
┌─────────────────────────────────────────────────────────────┐
│              THEME COMPARISON                                │
├────────────────────────┬────────────────────────────────────┤
│      DARK (Default)    │           LIGHT                    │
├────────────────────────┼────────────────────────────────────┤
│ bg-primary: #09090B    │ bg-primary: #FAFAFA               │
│ bg-secondary: #18181B  │ bg-secondary: #F4F4F5             │
│ bg-tertiary: #27272A   │ bg-tertiary: #E4E4E7              │
│ text-primary: #FAFAFA  │ text-primary: #18181B             │
│ text-secondary: #D4D4D8│ text-secondary: #3F3F46           │
│ text-muted: #71717A    │ text-muted: #71717A               │
│ border: #3F3F46        │ border: #E4E4E7                   │
├────────────────────────┴────────────────────────────────────┤
│ NOTE: Dark theme là DOMINANT, Light theme là optional       │
│ 90% users sẽ dùng Dark theme cho movie streaming            │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. TYPOGRAPHY SYSTEM - HỆ THỐNG TYPOGRAPHY

### 5.1 Font Selection

```
⚠️ CRITICAL: KHÔNG sử dụng các font generic như:
   Inter, Roboto, Arial, Helvetica, system-ui, Space Grotesk

✅ FONT STACK ĐƯỢC CHỌN:

┌─────────────────────────────────────────────────────────────┐
│                    DISPLAY FONT                              │
│                                                              │
│  CINZEL DECORATIVE (hoặc Playfair Display)                  │
│                                                              │
│  "CINEVERSE"                                                 │
│                                                              │
│  Đặc điểm:                                                   │
│  - Elegant, cinematic feel                                   │
│  - Roman/classical influence                                 │
│  - Perfect cho titles, logos, headings                       │
│  - Evokes luxury, timelessness                               │
│                                                              │
│  Usage: Logo, Hero titles, Section headings                  │
│  Weights: Regular (400), Bold (700), Black (900)             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    HEADING FONT                              │
│                                                              │
│  OUTFIT (hoặc Plus Jakarta Sans)                            │
│                                                              │
│  "Trending Movies This Week"                                 │
│                                                              │
│  Đặc điểm:                                                   │
│  - Geometric sans-serif                                      │
│  - Modern nhưng friendly                                     │
│  - Excellent readability                                     │
│  - Works great at all sizes                                  │
│                                                              │
│  Usage: Section titles, Card titles, Navigation              │
│  Weights: 400, 500, 600, 700                                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     BODY FONT                                │
│                                                              │
│  SOURCE SANS 3 (hoặc DM Sans)                               │
│                                                              │
│  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.   │
│   Sed do eiusmod tempor incididunt ut labore."              │
│                                                              │
│  Đặc điểm:                                                   │
│  - Highly readable at small sizes                           │
│  - Clean, professional                                       │
│  - Vietnamese support excellent                              │
│  - Multiple weights available                                │
│                                                              │
│  Usage: Body text, descriptions, UI elements                 │
│  Weights: 300, 400, 500, 600, 700                           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     MONO FONT                                │
│                                                              │
│  JETBRAINS MONO (hoặc Fira Code)                            │
│                                                              │
│  "Episode 01 • 45:30 • HD"                                  │
│                                                              │
│  Đặc điểm:                                                   │
│  - Technical, precise                                        │
│  - Great for numbers, codes                                  │
│  - Ligatures support                                         │
│                                                              │
│  Usage: Episode numbers, timestamps, technical info          │
│  Weights: 400, 500, 600                                      │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 Type Scale (Fluid Typography)

```
┌─────────────────────────────────────────────────────────────┐
│                      TYPE SCALE                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Display 1 (Hero Titles)                                     │
│  ────────────────────────                                    │
│  Size: clamp(3rem, 2.5rem + 2.5vw, 5rem)                    │
│  ~48px → 80px                                                │
│  Weight: 700-900                                             │
│  Line-height: 1.1                                            │
│  Letter-spacing: -0.02em                                     │
│  Font: Cinzel Decorative                                     │
│                                                              │
│  Display 2 (Section Heroes)                                  │
│  ────────────────────────                                    │
│  Size: clamp(2.25rem, 2rem + 1.25vw, 3.5rem)                │
│  ~36px → 56px                                                │
│  Weight: 700                                                 │
│  Line-height: 1.2                                            │
│  Letter-spacing: -0.01em                                     │
│  Font: Cinzel Decorative / Outfit                            │
│                                                              │
│  H1 (Page Titles)                                            │
│  ────────────────                                            │
│  Size: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)            │
│  ~30px → 40px                                                │
│  Weight: 700                                                 │
│  Line-height: 1.25                                           │
│  Font: Outfit                                                │
│                                                              │
│  H2 (Section Titles)                                         │
│  ──────────────────                                          │
│  Size: clamp(1.5rem, 1.25rem + 1.25vw, 2rem)                │
│  ~24px → 32px                                                │
│  Weight: 600                                                 │
│  Line-height: 1.3                                            │
│  Font: Outfit                                                │
│                                                              │
│  H3 (Card Titles)                                            │
│  ───────────────                                             │
│  Size: clamp(1.25rem, 1.125rem + 0.625vw, 1.5rem)           │
│  ~20px → 24px                                                │
│  Weight: 600                                                 │
│  Line-height: 1.4                                            │
│  Font: Outfit                                                │
│                                                              │
│  H4 (Subsections)                                            │
│  ───────────────                                             │
│  Size: clamp(1.125rem, 1rem + 0.625vw, 1.25rem)             │
│  ~18px → 20px                                                │
│  Weight: 600                                                 │
│  Line-height: 1.4                                            │
│  Font: Outfit                                                │
│                                                              │
│  Body Large                                                  │
│  ──────────                                                  │
│  Size: clamp(1.0625rem, 1rem + 0.3125vw, 1.125rem)          │
│  ~17px → 18px                                                │
│  Weight: 400                                                 │
│  Line-height: 1.6                                            │
│  Font: Source Sans 3                                         │
│                                                              │
│  Body (Default)                                              │
│  ─────────────                                               │
│  Size: clamp(0.9375rem, 0.875rem + 0.3125vw, 1rem)          │
│  ~15px → 16px                                                │
│  Weight: 400                                                 │
│  Line-height: 1.6                                            │
│  Font: Source Sans 3                                         │
│                                                              │
│  Body Small                                                  │
│  ──────────                                                  │
│  Size: clamp(0.8125rem, 0.75rem + 0.3125vw, 0.875rem)       │
│  ~13px → 14px                                                │
│  Weight: 400                                                 │
│  Line-height: 1.5                                            │
│  Font: Source Sans 3                                         │
│                                                              │
│  Caption                                                     │
│  ───────                                                     │
│  Size: clamp(0.6875rem, 0.625rem + 0.3125vw, 0.75rem)       │
│  ~11px → 12px                                                │
│  Weight: 500                                                 │
│  Line-height: 1.4                                            │
│  Letter-spacing: 0.02em                                      │
│  Font: Source Sans 3                                         │
│                                                              │
│  Overline (Labels)                                           │
│  ────────────────                                            │
│  Size: 0.625rem → 0.75rem (10px → 12px)                     │
│  Weight: 600                                                 │
│  Line-height: 1.2                                            │
│  Letter-spacing: 0.1em                                       │
│  Text-transform: UPPERCASE                                   │
│  Font: Source Sans 3                                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 5.3 Typography Examples

```
┌─────────────────────────────────────────────────────────────┐
│                 TYPOGRAPHY IN CONTEXT                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  HERO SECTION:                                               │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                      │    │
│  │  AVATAR:                          [Display 1]       │    │
│  │  THE WAY OF WATER                                    │    │
│  │                                                      │    │
│  │  Jake Sully lives with his newfound    [Body]       │    │
│  │  family formed on the planet of Pandora.            │    │
│  │                                                      │    │
│  │  2022 • 3h 12m • 4K • English     [Caption/Mono]    │    │
│  │                                                      │    │
│  │  ▶ WATCH NOW    ♡ ADD TO LIST     [Button Text]     │    │
│  │                                                      │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  SECTION:                                                    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                      │    │
│  │  NOW SHOWING                      [Overline]        │    │
│  │  Trending This Week               [H2]              │    │
│  │                                                      │    │
│  │  ┌──────┐ ┌──────┐ ┌──────┐                        │    │
│  │  │      │ │      │ │      │      [Movie Cards]     │    │
│  │  │ CARD │ │ CARD │ │ CARD │                        │    │
│  │  │      │ │      │ │      │                        │    │
│  │  └──────┘ └──────┘ └──────┘                        │    │
│  │  Movie Ti  Movie Ti  Movie Ti     [H4 - Card Title]│    │
│  │  Action •  Comedy •  Drama •      [Caption]        │    │
│  │                                                      │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. SPACING & GRID SYSTEM

### 6.1 Spacing Scale (8px Base Unit)

```
┌─────────────────────────────────────────────────────────────┐
│                     SPACING SCALE                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Token      │ Value   │ Pixels │ Usage                      │
│  ──────────────────────────────────────────────────────     │
│  space-0    │ 0       │ 0px    │ None                       │
│  space-0.5  │ 0.125rem│ 2px    │ Hairline gaps              │
│  space-1    │ 0.25rem │ 4px    │ Tight spacing, icons       │
│  space-1.5  │ 0.375rem│ 6px    │ Small gaps                 │
│  space-2    │ 0.5rem  │ 8px    │ Component padding (tight)  │
│  space-2.5  │ 0.625rem│ 10px   │ Small padding              │
│  space-3    │ 0.75rem │ 12px   │ Component padding (normal) │
│  space-4    │ 1rem    │ 16px   │ Default spacing            │
│  space-5    │ 1.25rem │ 20px   │ Medium spacing             │
│  space-6    │ 1.5rem  │ 24px   │ Component gaps             │
│  space-8    │ 2rem    │ 32px   │ Section spacing (small)    │
│  space-10   │ 2.5rem  │ 40px   │ Medium gaps                │
│  space-12   │ 3rem    │ 48px   │ Section spacing (medium)   │
│  space-16   │ 4rem    │ 64px   │ Section spacing (large)    │
│  space-20   │ 5rem    │ 80px   │ Major sections             │
│  space-24   │ 6rem    │ 96px   │ Hero padding               │
│  space-32   │ 8rem    │ 128px  │ Page padding               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 Grid System

```
┌─────────────────────────────────────────────────────────────┐
│                      GRID SYSTEM                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  CONTAINER WIDTHS:                                           │
│  ────────────────                                            │
│  sm:  640px   (max-width)                                    │
│  md:  768px   (max-width)                                    │
│  lg:  1024px  (max-width)                                    │
│  xl:  1280px  (max-width)                                    │
│  2xl: 1536px  (max-width)                                    │
│  full: 100%                                                  │
│                                                              │
│  Container padding: 16px (mobile) → 24px (tablet) → 32px    │
│                                                              │
│  COLUMN GRID:                                                │
│  ────────────                                                │
│  Mobile:  4 columns,  16px gutter,  16px margin             │
│  Tablet:  8 columns,  24px gutter,  24px margin             │
│  Desktop: 12 columns, 24px gutter,  32px margin             │
│  Large:   12 columns, 32px gutter,  auto margin (centered)  │
│                                                              │
│  MOVIE GRID (Responsive):                                    │
│  ────────────────────────                                    │
│  Mobile (< 640px):    2 columns                              │
│  Tablet (640-1024px): 3-4 columns                           │
│  Desktop (1024-1280): 5 columns                              │
│  Large (> 1280px):    6 columns                              │
│                                                              │
│  CARD GAP:                                                   │
│  ─────────                                                   │
│  Mobile:  12px (space-3)                                     │
│  Tablet:  16px (space-4)                                     │
│  Desktop: 20px (space-5)                                     │
│  Large:   24px (space-6)                                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘

GRID VISUALIZATION:
┌─────────────────────────────────────────────────────────────┐
│ Margin │ C1 │ G │ C2 │ G │ C3 │ G │ ... │ C12 │ Margin     │
│  32px  │    │24 │    │24 │    │24 │     │     │  32px      │
│        │    │px │    │px │    │px │     │     │            │
└─────────────────────────────────────────────────────────────┘
```

### 6.3 Layout Compositions

```
┌─────────────────────────────────────────────────────────────┐
│              LAYOUT PATTERNS                                 │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. FULL-WIDTH HERO (Homepage, Detail page)                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                      │    │
│  │                    HERO CONTENT                      │    │
│  │                    (100% width)                      │    │
│  │                                                      │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  2. CONTENT + SIDEBAR (Browse, Category pages)               │
│  ┌─────────────────────────────┬───────────────────┐        │
│  │                             │                    │        │
│  │        MAIN CONTENT         │     SIDEBAR       │        │
│  │         (9 cols)            │     (3 cols)      │        │
│  │                             │                    │        │
│  └─────────────────────────────┴───────────────────┘        │
│                                                              │
│  3. CENTERED CONTENT (Search, Filter, Settings)              │
│  ┌───┬─────────────────────────────────────────┬───┐        │
│  │   │                                          │   │        │
│  │   │           CENTERED CONTENT               │   │        │
│  │   │             (8-10 cols)                  │   │        │
│  │   │                                          │   │        │
│  └───┴─────────────────────────────────────────┴───┘        │
│                                                              │
│  4. FULL-BLEED CAROUSEL (Featured sections)                  │
│  ← ┌────┬────┬────┬────┬────┬────┬────┬────┐ →              │
│    │    │    │    │    │    │    │    │    │                 │
│    │ ▓▓ │ ▓▓ │ ▓▓ │ ▓▓ │ ▓▓ │ ▓▓ │ ░░ │ ░░ │  (overflow)   │
│    │    │    │    │    │    │    │    │    │                 │
│    └────┴────┴────┴────┴────┴────┴────┴────┘                │
│                                                              │
│  5. WATCH PAGE LAYOUT (Immersive)                            │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                      │    │
│  │                    VIDEO PLAYER                      │    │
│  │                   (16:9 or 21:9)                     │    │
│  │                                                      │    │
│  ├─────────────────────────────────────────────────────┤    │
│  │  Episode List  │  Movie Info   │  Related           │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. COMPONENT LIBRARY - THƯ VIỆN COMPONENTS

### 7.1 Component Hierarchy

```
COMPONENTS/
├── 🎨 FOUNDATIONS (Design Tokens)
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   ├── Shadows
│   ├── Borders
│   └── Animations
│
├── 🧱 PRIMITIVES (Base UI)
│   ├── Button
│   ├── Input
│   ├── Select
│   ├── Checkbox
│   ├── Radio
│   ├── Switch
│   ├── Slider
│   ├── Badge
│   ├── Avatar
│   ├── Icon
│   └── Divider
│
├── 📦 COMPONENTS (Composite)
│   ├── Card
│   ├── Modal
│   ├── Dropdown
│   ├── Tooltip
│   ├── Toast
│   ├── Tabs
│   ├── Accordion
│   ├── Pagination
│   ├── Breadcrumb
│   ├── Progress
│   └── Skeleton
│
├── 🎬 MOVIE COMPONENTS (Domain-specific)
│   ├── MovieCard
│   ├── MovieGrid
│   ├── MovieCarousel
│   ├── MovieHero
│   ├── MovieMeta
│   ├── EpisodeList
│   ├── EpisodeCard
│   ├── ServerSelector
│   ├── QualityBadge
│   ├── RatingDisplay
│   └── CategoryChip
│
├── 🔍 SEARCH COMPONENTS
│   ├── SearchBar
│   ├── SearchResults
│   ├── FilterPanel
│   ├── FilterChip
│   └── SortDropdown
│
├── 🎥 PLAYER COMPONENTS
│   ├── VideoPlayer
│   ├── PlayerControls
│   ├── ProgressBar
│   ├── VolumeControl
│   ├── QualitySelector
│   └── FullscreenToggle
│
├── 📐 LAYOUT COMPONENTS
│   ├── Header
│   ├── Footer
│   ├── Sidebar
│   ├── Navigation
│   ├── Container
│   └── Grid
│
└── 🛠️ ADMIN COMPONENTS
    ├── DataTable
    ├── StatCard
    ├── ChartWidget
    ├── AdminHeader
    ├── AdminSidebar
    └── FormBuilder
```

### 7.2 Button Component

```
┌─────────────────────────────────────────────────────────────┐
│                      BUTTON SYSTEM                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  VARIANTS:                                                   │
│  ─────────                                                   │
│                                                              │
│  ┌────────────────┐  PRIMARY (Filled)                       │
│  │   ▶ WATCH NOW  │  - Background: Red gradient             │
│  └────────────────┘  - Text: White                          │
│                      - Shadow: Red glow on hover            │
│                      - Use: Main CTAs                        │
│                                                              │
│  ┌────────────────┐  SECONDARY (Outline)                    │
│  │   ♡ Add to List │  - Border: White/Gray                  │
│  └────────────────┘  - Text: White                          │
│                      - Background: Transparent              │
│                      - Use: Secondary actions               │
│                                                              │
│  ┌────────────────┐  GHOST (Text only)                      │
│  │   View All →   │  - No border/background                 │
│  └────────────────┘  - Text: Primary color                  │
│                      - Underline on hover                   │
│                      - Use: Tertiary actions                │
│                                                              │
│  ┌────────────────┐  DANGER (Destructive)                   │
│  │   🗑 Delete     │  - Background: Red solid               │
│  └────────────────┘  - Text: White                          │
│                      - Use: Destructive actions             │
│                                                              │
│  ┌────────────────┐  ICON ONLY                              │
│  │      ▶        │  - Square/Circle shape                  │
│  └────────────────┘  - Icon centered                        │
│                      - Use: Play buttons, actions           │
│                                                              │
│  SIZES:                                                      │
│  ──────                                                      │
│  Small:  Height 32px, Padding 12px 16px, Font 14px          │
│  Medium: Height 40px, Padding 12px 20px, Font 15px          │
│  Large:  Height 48px, Padding 14px 28px, Font 16px          │
│  XLarge: Height 56px, Padding 16px 32px, Font 18px          │
│                                                              │
│  STATES:                                                     │
│  ───────                                                     │
│  Default  → Hover → Active → Focus → Disabled → Loading     │
│                                                              │
│  SPECIFICATIONS:                                             │
│  ──────────────                                              │
│  - Border-radius: 8px (rounded-lg)                          │
│  - Min-width: 44px (touch target)                           │
│  - Transition: all 200ms ease-out                           │
│  - Focus ring: 2px offset, primary color                    │
│  - Icon spacing: 8px from text                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 7.3 Movie Card Component

```
┌─────────────────────────────────────────────────────────────┐
│                    MOVIE CARD SYSTEM                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  VARIANT: POSTER (Default)                                   │
│  Aspect Ratio: 2:3 (Portrait)                                │
│                                                              │
│  ┌─────────────────────┐                                    │
│  │  ┌───────────────┐  │                                    │
│  │  │ HD │    │ ★   │  │  ← Badges (top corners)           │
│  │  │    │    │8.5  │  │                                    │
│  │  │               │  │                                    │
│  │  │               │  │                                    │
│  │  │    POSTER     │  │  ← Image with lazy loading        │
│  │  │    IMAGE      │  │                                    │
│  │  │               │  │                                    │
│  │  │               │  │                                    │
│  │  │───────────────│  │  ← Gradient overlay (bottom)      │
│  │  │ Movie Title   │  │  ← Title (truncated)              │
│  │  │ 2024 • Action │  │  ← Meta info                      │
│  │  └───────────────┘  │                                    │
│  └─────────────────────┘                                    │
│                                                              │
│  HOVER STATE:                                                │
│  ┌─────────────────────┐                                    │
│  │  ┌───────────────┐  │                                    │
│  │  │ HD │  ▶  │ ★  │  │  ← Play button appears            │
│  │  │    │PLAY │8.5 │  │                                    │
│  │  │    │     │    │  │                                    │
│  │  │               │  │                                    │
│  │  │    POSTER     │  │  ← Scale(1.05), elevated shadow   │
│  │  │    IMAGE      │  │                                    │
│  │  │   (Zoomed)    │  │                                    │
│  │  │               │  │                                    │
│  │  │───────────────│  │                                    │
│  │  │ Movie Title   │  │                                    │
│  │  │ 2024 • Action │  │                                    │
│  │  │ ♡ Add  ⓘ Info │  │  ← Action buttons appear          │
│  │  └───────────────┘  │                                    │
│  └─────────────────────┘                                    │
│                                                              │
│  VARIANT: THUMBNAIL (Horizontal)                             │
│  Aspect Ratio: 16:9 (Landscape)                              │
│                                                              │
│  ┌─────────────────────────────────┐                        │
│  │  ┌───────────────────────────┐  │                        │
│  │  │ HD │              │ 8.5 ★ │  │                        │
│  │  │────────────────────────── │  │                        │
│  │  │     THUMBNAIL IMAGE       │  │                        │
│  │  │                           │  │                        │
│  │  │ Movie Title               │  │                        │
│  │  │ Ep 12/24 • Ongoing        │  │                        │
│  │  └───────────────────────────┘  │                        │
│  └─────────────────────────────────┘                        │
│                                                              │
│  VARIANT: FEATURED (Large Hero Card)                         │
│  Aspect Ratio: 21:9 or 16:9                                  │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  ┌─────────────────────────────────────────────┐    │    │
│  │  │                                              │    │    │
│  │  │              BACKDROP IMAGE                  │    │    │
│  │  │              (Full width)                    │    │    │
│  │  │                                              │    │    │
│  │  │  ┌─────┐                                     │    │    │
│  │  │  │POSTER│  MOVIE TITLE                       │    │    │
│  │  │  │     │  ★ 8.5 • 2024 • Action • 2h 30m   │    │    │
│  │  │  │     │  Description text here...          │    │    │
│  │  │  │     │                                     │    │    │
│  │  │  │     │  [▶ Watch] [♡ Add] [ⓘ More]       │    │    │
│  │  │  └─────┘                                     │    │    │
│  │  └─────────────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  SPECIFICATIONS:                                             │
│  ──────────────                                              │
│  - Border-radius: 12px                                       │
│  - Shadow: lg (default), 2xl (hover)                        │
│  - Transition: transform 300ms, shadow 300ms                │
│  - Image: object-fit cover, lazy loading                    │
│  - Focus: 2px ring offset                                   │
│  - Skeleton: shimmer animation while loading                │
│                                                              │
│  BADGES:                                                     │
│  ───────                                                     │
│  Quality: HD, FHD, 4K (top-left)                            │
│  Rating: ★ score (top-right)                                │
│  Type: Series, Movie, Anime (bottom)                        │
│  Status: Ongoing, Completed, Coming Soon                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 7.4 Form Components

```
┌─────────────────────────────────────────────────────────────┐
│                    FORM COMPONENTS                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  INPUT FIELD:                                                │
│  ────────────                                                │
│                                                              │
│  Label Text *                                   ← Label      │
│  ┌─────────────────────────────────────────┐                │
│  │ 🔍 │ Placeholder text...                 │   ← Input     │
│  └─────────────────────────────────────────┘                │
│  Helper text goes here                          ← Helper     │
│                                                              │
│  States:                                                     │
│  - Default: Border gray-700, bg gray-800                    │
│  - Focus: Border primary-500, ring glow                     │
│  - Error: Border error-500, red text                        │
│  - Disabled: Opacity 50%, cursor not-allowed                │
│                                                              │
│  ┌─────────────────────────────────────────┐                │
│  │ ⚠ │ Error state input                   │   ← Error      │
│  └─────────────────────────────────────────┘                │
│  ⚠ Error message here                           ← Error msg  │
│                                                              │
│  SELECT / DROPDOWN:                                          │
│  ──────────────────                                          │
│                                                              │
│  Category                                                    │
│  ┌─────────────────────────────────────┬───┐                │
│  │ Select an option...                 │ ▼ │                │
│  └─────────────────────────────────────┴───┘                │
│                                                              │
│  Open state:                                                 │
│  ┌─────────────────────────────────────┬───┐                │
│  │ Action                              │ ▲ │                │
│  ├─────────────────────────────────────┴───┤                │
│  │ ○ Action                                 │ ← Options     │
│  │ ● Comedy (selected)                      │                │
│  │ ○ Drama                                  │                │
│  │ ○ Horror                                 │                │
│  │ ○ Romance                                │                │
│  └─────────────────────────────────────────┘                │
│                                                              │
│  CHECKBOX:                                                   │
│  ─────────                                                   │
│                                                              │
│  ☐ Unchecked label                                          │
│  ☑ Checked label (primary color fill)                       │
│  ▣ Indeterminate                                            │
│                                                              │
│  RADIO:                                                      │
│  ──────                                                      │
│                                                              │
│  ○ Option 1                                                  │
│  ● Option 2 (selected - primary color)                      │
│  ○ Option 3                                                  │
│                                                              │
│  SWITCH / TOGGLE:                                            │
│  ────────────────                                            │
│                                                              │
│  ┌──○───┐ Off state (gray)                                  │
│  └──────┘                                                    │
│                                                              │
│  ┌───●──┐ On state (primary color)                          │
│  └──────┘                                                    │
│                                                              │
│  SEARCH INPUT:                                               │
│  ─────────────                                               │
│                                                              │
│  ┌──────────────────────────────────────────────┐           │
│  │ 🔍 │ Search movies, series, actors...   │ ✕ │           │
│  └──────────────────────────────────────────────┘           │
│                                                              │
│  With autocomplete:                                          │
│  ┌──────────────────────────────────────────────┐           │
│  │ 🔍 │ avatar                                  │           │
│  ├──────────────────────────────────────────────┤           │
│  │ 🎬 Avatar (2009)                             │           │
│  │ 🎬 Avatar: The Way of Water (2022)          │           │
│  │ 🎬 Avatar: The Last Airbender               │           │
│  │ 👤 James Cameron (Director)                 │           │
│  └──────────────────────────────────────────────┘           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 7.5 Navigation Components

```
┌─────────────────────────────────────────────────────────────┐
│                   NAVIGATION SYSTEM                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  HEADER (Desktop):                                           │
│  ────────────────                                            │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ [LOGO] │ Home │ Movies │ Series │ ... │ 🔍 │ 🌙 │ ☰ │ ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  - Sticky on scroll                                          │
│  - Glass effect background when scrolled                    │
│  - Active state: underline or highlight                     │
│  - Dropdown for categories on hover                         │
│                                                              │
│  MEGA MENU (Categories hover):                               │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  By Genre           │  By Country       │  Popular       ││
│  │  ─────────          │  ───────────      │  ─────────     ││
│  │  Action             │  🇺🇸 USA          │  Trending      ││
│  │  Comedy             │  🇰🇷 Korea        │  New Release   ││
│  │  Drama              │  🇯🇵 Japan        │  Top Rated     ││
│  │  Horror             │  🇨🇳 China        │  Cinema        ││
│  │  Romance            │  🇻🇳 Vietnam      │                ││
│  │  Sci-Fi             │  🇬🇧 UK           │                ││
│  │  [View All →]       │  [View All →]     │                ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  HEADER (Mobile):                                            │
│  ────────────────                                            │
│                                                              │
│  ┌─────────────────────────────────────────┐                │
│  │ ☰ │     [LOGO]      │ 🔍 │             │                │
│  └─────────────────────────────────────────┘                │
│                                                              │
│  MOBILE MENU (Slide from left):                              │
│  ┌─────────────────────┬───────────────────┐                │
│  │  ✕ Close            │                   │                │
│  │  ───────────────────│                   │                │
│  │  🏠 Home            │                   │                │
│  │  🎬 Movies       ▸  │                   │                │
│  │  📺 Series       ▸  │    (Dimmed        │                │
│  │  🎨 Anime          │     Content)       │                │
│  │  🎭 Categories   ▸  │                   │                │
│  │  🌍 Countries    ▸  │                   │                │
│  │  ───────────────────│                   │                │
│  │  ♡ Watchlist        │                   │                │
│  │  📜 History         │                   │                │
│  │  ⚙ Settings         │                   │                │
│  │  ───────────────────│                   │                │
│  │  🌙/☀ Theme Toggle  │                   │                │
│  └─────────────────────┴───────────────────┘                │
│                                                              │
│  BREADCRUMB:                                                 │
│  ───────────                                                 │
│                                                              │
│  Home / Movies / Action / Avatar (2009)                     │
│    ↑       ↑        ↑          ↑                            │
│  links   links   links    current (no link)                 │
│                                                              │
│  TABS:                                                       │
│  ─────                                                       │
│                                                              │
│  ┌────────────────────────────────────────┐                 │
│  │ [Episodes] │ Details │ Cast │ Reviews │                  │
│  │ ═══════════                            │ ← Active line   │
│  └────────────────────────────────────────┘                 │
│                                                              │
│  PAGINATION:                                                 │
│  ───────────                                                 │
│                                                              │
│  ← Prev │ 1 │ 2 │ [3] │ 4 │ ... │ 10 │ Next →              │
│              └─────┘                                         │
│              Active page (filled)                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 7.6 Modal & Overlay Components

```
┌─────────────────────────────────────────────────────────────┐
│                   MODALS & OVERLAYS                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  MODAL (Default):                                            │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ││
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ││
│  │ ░░░░░░░░┌─────────────────────────────────┐░░░░░░░░░░░ ││
│  │ ░░░░░░░░│  Modal Title                  ✕ │░░░░░░░░░░░ ││
│  │ ░░░░░░░░├─────────────────────────────────┤░░░░░░░░░░░ ││
│  │ ░░░░░░░░│                                 │░░░░░░░░░░░ ││
│  │ ░░░░░░░░│        Modal Content            │░░░░░░░░░░░ ││
│  │ ░░░░░░░░│                                 │░░░░░░░░░░░ ││
│  │ ░░░░░░░░├─────────────────────────────────┤░░░░░░░░░░░ ││
│  │ ░░░░░░░░│      [Cancel]  [Confirm]        │░░░░░░░░░░░ ││
│  │ ░░░░░░░░└─────────────────────────────────┘░░░░░░░░░░░ ││
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ││
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  - Backdrop: Black 70% opacity + blur                       │
│  - Animation: Scale up + fade in (300ms)                    │
│  - Close: Click outside, ESC key, X button                  │
│  - Focus trap inside modal                                  │
│                                                              │
│  TRAILER MODAL:                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ││
│  │ ░░░┌─────────────────────────────────────────────┐░░░░ ││
│  │ ░░░│                                              │░░░░ ││
│  │ ░░░│           16:9 VIDEO PLAYER                  │░░░░ ││
│  │ ░░░│           (YouTube embed)                    │░░░░ ││
│  │ ░░░│                                              │░░░░ ││
│  │ ░░░└─────────────────────────────────────────────┘░░░░ ││
│  │ ░░░░░░░░░░░░░░ Avatar (2009) - Trailer ░░░░░░░░░░░░░░░ ││
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  TOAST NOTIFICATIONS:                                        │
│  ┌──────────────────────────────────┐                       │
│  │ ✓ Added to watchlist        ✕    │  ← Success (green)   │
│  └──────────────────────────────────┘                       │
│                                                              │
│  ┌──────────────────────────────────┐                       │
│  │ ⚠ Connection lost           ✕    │  ← Warning (yellow)  │
│  └──────────────────────────────────┘                       │
│                                                              │
│  ┌──────────────────────────────────┐                       │
│  │ ✕ Failed to load            ✕    │  ← Error (red)       │
│  └──────────────────────────────────┘                       │
│                                                              │
│  - Position: Top-right (desktop), Bottom (mobile)           │
│  - Animation: Slide in from right                           │
│  - Auto-dismiss: 5 seconds                                  │
│  - Stack multiple toasts                                    │
│                                                              │
│  TOOLTIP:                                                    │
│  ──────────────────────────────────                          │
│             ┌─────────────────────┐                         │
│             │ Tooltip content     │                         │
│             └──────────┬──────────┘                         │
│                        ▼                                     │
│                     [Element]                                │
│                                                              │
│  - Delay: 300ms before show                                 │
│  - Positions: top, bottom, left, right (auto)               │
│  - Max-width: 250px                                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 7.7 Video Player Components

```
┌─────────────────────────────────────────────────────────────┐
│                    VIDEO PLAYER                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  FULL PLAYER LAYOUT:                                         │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                                                          ││
│  │                                                          ││
│  │                                                          ││
│  │                   VIDEO CONTENT                          ││
│  │                    (16:9 area)                           ││
│  │                                                          ││
│  │                       [ ▶ ]  ← Big play button (center)  ││
│  │                                                          ││
│  │                                                          ││
│  │                                                          ││
│  ├──────────────────────────────────────────────────────────┤│
│  │ ▶ 12:34 ━━━━━━━━━●━━━━━━━━━━━━━━━━━━━━━ 1:45:30        ││
│  │ Progress bar with buffered indicator                     ││
│  ├──────────────────────────────────────────────────────────┤│
│  │ [▶] [⏭] [🔊━━●] │ Movie Title Ep.01 │ [CC][⚙][⛶]      ││
│  │  ↑   ↑     ↑                             ↑  ↑  ↑        ││
│  │ Play Next Volume              Captions Settings Full    ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  CONTROL BAR BREAKDOWN:                                      │
│  ──────────────────────                                      │
│                                                              │
│  Left side:                                                  │
│  [▶/⏸] Play/Pause                                           │
│  [⏮] Previous episode                                       │
│  [⏭] Next episode                                           │
│  [🔊━━━●] Volume slider                                     │
│  [12:34 / 1:45:30] Time display                             │
│                                                              │
│  Center:                                                     │
│  Episode Title / Movie Name                                  │
│                                                              │
│  Right side:                                                 │
│  [CC] Subtitles/Captions toggle                             │
│  [1x] Playback speed                                        │
│  [⚙] Settings menu                                          │
│  [🖼] Picture-in-picture                                    │
│  [⛶] Fullscreen                                             │
│                                                              │
│  SETTINGS MENU (Popup):                                      │
│  ┌─────────────────────┐                                    │
│  │ Quality      1080p ▸│                                    │
│  │ Speed          1x  ▸│                                    │
│  │ Subtitles       On ▸│                                    │
│  │ Auto-play       On  │                                    │
│  └─────────────────────┘                                    │
│                                                              │
│  QUALITY SUBMENU:                                            │
│  ┌─────────────────────┐                                    │
│  │ ← Quality           │                                    │
│  │ ─────────────────── │                                    │
│  │   Auto              │                                    │
│  │ ● 1080p (HD)        │                                    │
│  │   720p              │                                    │
│  │   480p              │                                    │
│  │   360p              │                                    │
│  └─────────────────────┘                                    │
│                                                              │
│  PROGRESS BAR DETAIL:                                        │
│  ──────────────────────                                      │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ ░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓●━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ││
│  │ └── Played ──┘└Buffered┘ └── Remaining ──────────────┘  ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  Hover preview:                                              │
│           ┌─────────┐                                       │
│           │ Preview │                                       │
│           │  Frame  │                                       │
│           └────┬────┘                                       │
│  ━━━━━━━━━━━━━━●━━━━━━━━━━━━━                               │
│               23:45                                          │
│                                                              │
│  THEATER MODE:                                               │
│  ─────────────                                               │
│  - Expanded player (larger than container)                  │
│  - Dimmed surroundings                                      │
│  - Hidden navigation                                        │
│  - Ambient background (poster blur)                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 8. PAGE DESIGNS - THIẾT KẾ CÁC TRANG

### 8.1 Homepage Design

```
┌─────────────────────────────────────────────────────────────┐
│                      HOMEPAGE LAYOUT                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ [LOGO] │ Home │ Movies │ Series │ Anime │ 🔍 │ 🌙 │    ││
│  └─────────────────────────────────────────────────────────┘│
│                         ↑ Header (sticky)                    │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░                                               ░░░░░░││
│  │░░░░   ┌────────┐                                  ░░░░░░││
│  │░░░░   │ POSTER │  FEATURED MOVIE TITLE            ░░░░░░││
│  │░░░░   │        │  ★ 8.5 • 2024 • Action • 2h 30m ░░░░░░││
│  │░░░░   │        │                                  ░░░░░░││
│  │░░░░   │        │  Description of the movie...     ░░░░░░││
│  │░░░░   │        │                                  ░░░░░░││
│  │░░░░   └────────┘  [▶ Watch Now] [+ My List]      ░░░░░░││
│  │░░░░                                               ░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░  ● ○ ○ ○ ○  ░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  └─────────────────────────────────────────────────────────┘│
│                 ↑ Hero Section (full-width, 70vh)            │
│                                                              │
│  ═══════════════════════════════════════════════════════════│
│                                                              │
│  TRENDING NOW                                    View All → │
│  ┌──────┬──────┬──────┬──────┬──────┬──────┐    ← →        │
│  │      │      │      │      │      │      │               │
│  │ Card │ Card │ Card │ Card │ Card │ Card │  (Horizontal  │
│  │      │      │      │      │      │      │   Carousel)   │
│  └──────┴──────┴──────┴──────┴──────┴──────┘               │
│                                                              │
│  ═══════════════════════════════════════════════════════════│
│                                                              │
│  NEW RELEASES                                    View All → │
│  ┌──────┬──────┬──────┬──────┬──────┬──────┐               │
│  │      │      │      │      │      │      │               │
│  │ Card │ Card │ Card │ Card │ Card │ Card │   (Grid)      │
│  │      │      │      │      │      │      │               │
│  └──────┴──────┴──────┴──────┴──────┴──────┘               │
│  ┌──────┬──────┬──────┬──────┬──────┬──────┐               │
│  │      │      │      │      │      │      │               │
│  │ Card │ Card │ Card │ Card │ Card │ Card │               │
│  │      │      │      │      │      │      │               │
│  └──────┴──────┴──────┴──────┴──────┴──────┘               │
│                                                              │
│  ═══════════════════════════════════════════════════════════│
│                                                              │
│  BROWSE BY CATEGORY                                          │
│  ┌─────────┬─────────┬─────────┬─────────┬─────────┐       │
│  │ Action  │ Comedy  │ Drama   │ Horror  │ Romance │       │
│  └─────────┴─────────┴─────────┴─────────┴─────────┘       │
│  ┌─────────┬─────────┬─────────┬─────────┬─────────┐       │
│  │ Sci-Fi  │Thriller │ Anime   │ Family  │ More... │       │
│  └─────────┴─────────┴─────────┴─────────┴─────────┘       │
│                                                              │
│  ═══════════════════════════════════════════════════════════│
│                                                              │
│  CINEMA RELEASES 🎬                              View All → │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  Special premium section with larger cards              ││
│  │  and "Now Showing" badges                               ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  ═══════════════════════════════════════════════════════════│
│                                                              │
│  [Movies] [Series] [Anime]  ← Tab navigation               │
│  ────────                                                    │
│  ┌──────┬──────┬──────┬──────┬──────┬──────┐               │
│  │      │      │      │      │      │      │               │
│  │ Card │ Card │ Card │ Card │ Card │ Card │               │
│  │      │      │      │      │      │      │               │
│  └──────┴──────┴──────┴──────┴──────┴──────┘               │
│                                                              │
│  ═══════════════════════════════════════════════════════════│
│                                                              │
│  BROWSE BY COUNTRY                                           │
│  ┌──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐ │
│  │ 🇺🇸   │ 🇰🇷   │ 🇯🇵   │ 🇨🇳   │ 🇻🇳   │ 🇬🇧   │ 🇫🇷   │ 🇮🇳  │ │
│  │ USA  │Korea │Japan │China │ VN   │ UK   │France│India │ │
│  └──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘ │
│                                                              │
│  ═══════════════════════════════════════════════════════════│
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                       FOOTER                             ││
│  │  [LOGO]                                                  ││
│  │  About │ Contact │ Terms │ Privacy │ Help               ││
│  │  © 2024 CineVerse. All rights reserved.                 ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 8.2 Movie Detail Page

```
┌─────────────────────────────────────────────────────────────┐
│                   MOVIE DETAIL PAGE                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [Header - Transparent, becomes solid on scroll]             │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │░░░░░░░░░░░░░░░░░░░ BACKDROP IMAGE ░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░ (Blurred) ░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░                                                     ░░││
│  │░░  ┌──────────┐                                       ░░││
│  │░░  │          │   AVATAR: THE WAY OF WATER           ░░││
│  │░░  │  POSTER  │   (Avatar: Dòng Chảy Của Nước)       ░░││
│  │░░  │  IMAGE   │                                       ░░││
│  │░░  │          │   ★ 8.5  •  2022  •  3h 12m  •  4K   ░░││
│  │░░  │          │   Action, Adventure, Sci-Fi          ░░││
│  │░░  │          │   🇺🇸 USA                             ░░││
│  │░░  │          │                                       ░░││
│  │░░  │          │   [▶ WATCH NOW]  [♡ Add to List]     ░░││
│  │░░  │          │   [▷ Trailer]    [↗ Share]           ░░││
│  │░░  └──────────┘                                       ░░││
│  │░░                                                     ░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  └─────────────────────────────────────────────────────────┘│
│                       ↑ Hero Section                         │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                                                          ││
│  │  SYNOPSIS                                                ││
│  │  ─────────                                               ││
│  │  Jake Sully lives with his newfound family formed on     ││
│  │  the planet of Pandora. Once a familiar threat returns   ││
│  │  to finish what was previously started, Jake must work   ││
│  │  with Neytiri and the army of the Na'vi race to protect  ││
│  │  their planet.                                           ││
│  │                                              [Read more] ││
│  │                                                          ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                                                          ││
│  │  CAST & CREW                                             ││
│  │  ───────────                                             ││
│  │                                                          ││
│  │  Director: James Cameron                                 ││
│  │                                                          ││
│  │  Cast:                                                   ││
│  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐          ││
│  │  │ 👤   │ │ 👤   │ │ 👤   │ │ 👤   │ │ 👤   │   →      ││
│  │  │      │ │      │ │      │ │      │ │      │          ││
│  │  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘          ││
│  │   Sam      Zoe     Sigourney Stephen   Kate             ││
│  │  Worthing. Saldaña  Weaver    Lang    Winslet           ││
│  │                                                          ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                                                          ││
│  │  EPISODES (For Series)                                   ││
│  │  ────────                                                ││
│  │                                                          ││
│  │  Server: [Server 1 ▼] [Server 2] [Server 3]             ││
│  │                                                          ││
│  │  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐     ││
│  │  │ 01 │ │ 02 │ │ 03 │ │ 04 │ │ 05 │ │ 06 │ │ 07 │     ││
│  │  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘     ││
│  │  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐     ││
│  │  │ 08 │ │ 09 │ │ 10 │ │ 11 │ │ 12 │ │ 13 │ │ 14 │     ││
│  │  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘     ││
│  │          ↑                                               ││
│  │    Currently watching (highlighted)                      ││
│  │                                                          ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                                                          ││
│  │  YOU MAY ALSO LIKE                            View All → ││
│  │  ─────────────────                                       ││
│  │  ┌──────┬──────┬──────┬──────┬──────┬──────┐            ││
│  │  │      │      │      │      │      │      │            ││
│  │  │ Card │ Card │ Card │ Card │ Card │ Card │            ││
│  │  │      │      │      │      │      │      │            ││
│  │  └──────┴──────┴──────┴──────┴──────┴──────┘            ││
│  │                                                          ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  [Footer]                                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 8.3 Watch Page

```
┌─────────────────────────────────────────────────────────────┐
│                      WATCH PAGE                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ ← Back │ Avatar: The Way of Water - Ep 01  │ 🎭 Theater ││
│  └─────────────────────────────────────────────────────────┘│
│             ↑ Minimal header (can hide)                      │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░     VIDEO PLAYER      ░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░       (16:9)          ░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  ├──────────────────────────────────────────────────────────┤│
│  │ [▶][⏭] [🔊━●] 12:34/1:45:30  │ Title │ [CC][⚙][🖼][⛶] ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  ┌──────────────────────────┬──────────────────────────────┐│
│  │                          │                               ││
│  │  EPISODES                │  MOVIE INFO                   ││
│  │  ────────                │  ──────────                   ││
│  │                          │                               ││
│  │  Server: [Server 1 ▼]    │  Avatar: The Way of Water    ││
│  │                          │  ★ 8.5 • 2022 • 3h 12m       ││
│  │  ┌──┐ ┌──┐ ┌──┐ ┌──┐    │                               ││
│  │  │01│ │02│ │03│ │04│    │  Jake Sully lives with his   ││
│  │  └──┘ └──┘ └──┘ └──┘    │  newfound family formed on   ││
│  │  ┌──┐ ┌──┐ ┌──┐ ┌──┐    │  the planet of Pandora...    ││
│  │  │05│ │06│ │07│ │08│    │                               ││
│  │  └──┘ └──┘ └──┘ └──┘    │  [View Details →]            ││
│  │  ...                     │                               ││
│  │                          │                               ││
│  │  ← Prev    Next →        │  [♡ Add to List]  [↗ Share] ││
│  │                          │                               ││
│  └──────────────────────────┴──────────────────────────────┘│
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  YOU MAY ALSO LIKE                                       ││
│  │  ┌──────┬──────┬──────┬──────┬──────┬──────┐            ││
│  │  │ Card │ Card │ Card │ Card │ Card │ Card │            ││
│  │  └──────┴──────┴──────┴──────┴──────┴──────┘            ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  THEATER MODE (Alternative layout):                          │
│  ┌─────────────────────────────────────────────────────────┐│
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░                          ░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░    EXPANDED VIDEO        ░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░        (Larger)          ░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░                          ░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │ Everything else hidden, ambient background               ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 8.4 Search & Filter Page

```
┌─────────────────────────────────────────────────────────────┐
│                   SEARCH & FILTER PAGE                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [Header]                                                    │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                                                          ││
│  │  🔍 SEARCH                                               ││
│  │  ┌─────────────────────────────────────────────────────┐││
│  │  │ 🔍 Search movies, series, actors, directors...     │││
│  │  └─────────────────────────────────────────────────────┘││
│  │                                                          ││
│  │  FILTERS                                                 ││
│  │  ┌─────────────────────────────────────────────────────┐││
│  │  │                                                      │││
│  │  │  Category          Country           Type            │││
│  │  │  ┌──────────┐     ┌──────────┐      ┌──────────┐   │││
│  │  │  │ All    ▼ │     │ All    ▼ │      │ All    ▼ │   │││
│  │  │  └──────────┘     └──────────┘      └──────────┘   │││
│  │  │                                                      │││
│  │  │  Year              Quality          Cinema Release  │││
│  │  │  ┌──────────┐     ┌──────────┐      ┌──────────┐   │││
│  │  │  │ All    ▼ │     │ All    ▼ │      │ ☐ Only   │   │││
│  │  │  └──────────┘     └──────────┘      └──────────┘   │││
│  │  │                                                      │││
│  │  │  [Reset All]                     [Apply Filters]    │││
│  │  │                                                      │││
│  │  └─────────────────────────────────────────────────────┘││
│  │                                                          ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                                                          ││
│  │  Active Filters:                                         ││
│  │  ┌────────────┐ ┌────────────┐ ┌────────────┐           ││
│  │  │ Action   ✕ │ │ Korea    ✕ │ │ 2024     ✕ │           ││
│  │  └────────────┘ └────────────┘ └────────────┘           ││
│  │                                                          ││
│  │  Showing 156 results                    Sort: Popular ▼ ││
│  │                                                          ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                                                          ││
│  │  ┌──────┬──────┬──────┬──────┬──────┬──────┐            ││
│  │  │      │      │      │      │      │      │            ││
│  │  │ Card │ Card │ Card │ Card │ Card │ Card │            ││
│  │  │      │      │      │      │      │      │            ││
│  │  └──────┴──────┴──────┴──────┴──────┴──────┘            ││
│  │  ┌──────┬──────┬──────┬──────┬──────┬──────┐            ││
│  │  │      │      │      │      │      │      │            ││
│  │  │ Card │ Card │ Card │ Card │ Card │ Card │            ││
│  │  │      │      │      │      │      │      │            ││
│  │  └──────┴──────┴──────┴──────┴──────┴──────┘            ││
│  │                                                          ││
│  │  ┌──────┬──────┬──────┬──────┬──────┬──────┐            ││
│  │  │      │      │      │      │      │      │            ││
│  │  │ Card │ Card │ Card │ Card │ Card │ Card │            ││
│  │  │      │      │      │      │      │      │            ││
│  │  └──────┴──────┴──────┴──────┴──────┴──────┘            ││
│  │                                                          ││
│  │              [Loading more...]                           ││
│  │              (Infinite scroll)                           ││
│  │                                                          ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  [Footer]                                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 8.5 Category/Genre Page

```
┌─────────────────────────────────────────────────────────────┐
│                   CATEGORY PAGE (Action)                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [Header]                                                    │
│                                                              │
│  Home / Categories / Action                    ← Breadcrumb  │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░░░░░░░░                                       ░░░░░░░░░░││
│  │░░░░░░░░   🎬 ACTION MOVIES                    ░░░░░░░░░░││
│  │░░░░░░░░                                       ░░░░░░░░░░││
│  │░░░░░░░░   Explosive action, thrilling chases, ░░░░░░░░░░││
│  │░░░░░░░░   and epic battles await...           ░░░░░░░░░░││
│  │░░░░░░░░                                       ░░░░░░░░░░││
│  │░░░░░░░░   256 movies available                ░░░░░░░░░░││
│  │░░░░░░░░                                       ░░░░░░░░░░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  └─────────────────────────────────────────────────────────┘│
│               ↑ Category Hero with genre-themed background   │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                                                          ││
│  │  Sub-categories:                                         ││
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       ││
│  │  │Martial  │ │Superhero│ │Military │ │ Spy &   │       ││
│  │  │ Arts    │ │         │ │         │ │Espionage│       ││
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘       ││
│  │                                                          ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                                                          ││
│  │  Sort by: [Popular ▼]  [Year ▼]  [Rating ▼]             ││
│  │                                                          ││
│  │  ┌──────┬──────┬──────┬──────┬──────┬──────┐            ││
│  │  │      │      │      │      │      │      │            ││
│  │  │ Card │ Card │ Card │ Card │ Card │ Card │            ││
│  │  │      │      │      │      │      │      │            ││
│  │  └──────┴──────┴──────┴──────┴──────┴──────┘            ││
│  │                                                          ││
│  │  ... (infinite scroll grid)                              ││
│  │                                                          ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  [Footer]                                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 9. KEY FEATURES & INTERACTIONS

### 9.1 Signature Interactions

```
┌─────────────────────────────────────────────────────────────┐
│              SIGNATURE INTERACTIONS                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. CURTAIN REVEAL (Page Transition)                         │
│  ────────────────────────────────────                        │
│  Description: Khi chuyển trang, nội dung mới xuất hiện như  │
│  màn rạp hát được kéo lên                                   │
│                                                              │
│  Animation sequence:                                         │
│  [Old Page] → [Curtain sweeps up] → [New Page fades in]     │
│  Duration: 600ms total                                       │
│  Easing: cubic-bezier(0.87, 0, 0.13, 1)                     │
│                                                              │
│  ░░░░░░░░░░░░░░░    ░░░░▓▓▓▓░░░░░    ░░░░░░░░░░░░░░░        │
│  ░░░ OLD PAGE ░░░ → ░░▓ CURTAIN ▓░░ → ░░░ NEW PAGE ░░░      │
│  ░░░░░░░░░░░░░░░    ░░░░▓▓▓▓░░░░░    ░░░░░░░░░░░░░░░        │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  2. SPOTLIGHT HOVER (Movie Cards)                            │
│  ────────────────────────────────                            │
│  Description: Cards được "chiếu sáng" từ trên xuống khi     │
│  hover, tạo cảm giác spotlight rạp hát                      │
│                                                              │
│  ┌──────────┐      ┌──────────┐                             │
│  │          │      │ ░░░░░░░░ │  ← Light beam from top     │
│  │   Card   │  →   │ ░░Card░░ │                             │
│  │ (Normal) │      │ ░░░░░░░░ │  ← Brighter, elevated      │
│  └──────────┘      └──────────┘                             │
│                                                              │
│  CSS: box-shadow + gradient overlay + scale transform       │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  3. FILM STRIP SCROLL (Carousels)                            │
│  ─────────────────────────────────                           │
│  Description: Horizontal scroll với decoration như cuộn     │
│  phim (perforation marks)                                   │
│                                                              │
│  ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○  ← Top perforations │
│  ┌─────┬─────┬─────┬─────┬─────┬─────┐                     │
│  │     │     │     │     │     │     │  ← Movie cards      │
│  │     │     │     │     │     │     │                     │
│  └─────┴─────┴─────┴─────┴─────┴─────┘                     │
│  ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○  ← Bottom perfs     │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  4. THEATER MODE TRANSITION                                  │
│  ───────────────────────────                                 │
│  Description: Khi bật Theater mode, lights dim như rạp      │
│  chiếu phim                                                 │
│                                                              │
│  Sequence:                                                   │
│  1. UI elements fade out (opacity 0)                        │
│  2. Ambient background appears (blurred poster color)       │
│  3. Video player expands                                    │
│  4. Subtle vignette appears around edges                    │
│                                                              │
│  Duration: 500ms                                             │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  5. PLAY BUTTON PULSE                                        │
│  ─────────────────────                                       │
│  Description: Big play button có hiệu ứng pulse như tim đập│
│                                                              │
│      ╭───────╮                                               │
│      │   ▶   │  ← Pulsing glow ring                        │
│      ╰───────╯                                               │
│                                                              │
│  Animation: scale + box-shadow pulse                         │
│  Duration: 2s infinite                                       │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  6. WATCHLIST HEART ANIMATION                                │
│  ─────────────────────────────                               │
│  Description: Khi add to watchlist, heart burst effect      │
│                                                              │
│      ♡ (outline) → 💓 (burst) → ❤️ (filled)               │
│                                                              │
│  Animation: scale bounce + particle burst                   │
│  Duration: 400ms                                             │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  7. RATING STARS FILL                                        │
│  ─────────────────────                                       │
│  Description: Stars fill sequentially với golden glow       │
│                                                              │
│      ☆☆☆☆☆ → ★☆☆☆☆ → ★★☆☆☆ → ★★★☆☆ → ★★★★☆             │
│                                                              │
│  Animation: fill + glow pulse (staggered 100ms each)        │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  8. LOADING SKELETON                                         │
│  ────────────────────                                        │
│  Description: Shimmer effect như ánh sáng lướt qua          │
│                                                              │
│      ░░░░░░░░░░░░░░░░ → ░░░▓▓▓░░░░░░░░░ → ░░░░░░░░░▓▓▓░░░  │
│                                                              │
│  Animation: gradient position animation                      │
│  Duration: 1.5s infinite                                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 9.2 Micro-interactions

```
┌─────────────────────────────────────────────────────────────┐
│               MICRO-INTERACTIONS                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  BUTTONS:                                                    │
│  - Hover: Scale(1.02) + brightness increase                 │
│  - Active: Scale(0.98) + slight darken                      │
│  - Focus: Ring glow animation                               │
│                                                              │
│  INPUTS:                                                     │
│  - Focus: Border glow + label float up                      │
│  - Error: Shake animation (3x)                              │
│  - Success: Green checkmark fade in                         │
│                                                              │
│  NAVIGATION:                                                 │
│  - Active link: Underline slide from left                   │
│  - Hover: Text glow                                         │
│  - Dropdown: Fade + slide down                              │
│                                                              │
│  CARDS:                                                      │
│  - Hover: Lift + shadow expand + spotlight                  │
│  - Click: Press down effect                                 │
│  - Load: Fade in with stagger                               │
│                                                              │
│  TOGGLES:                                                    │
│  - Switch: Smooth slide + color transition                  │
│  - Checkbox: Scale bounce on check                          │
│  - Radio: Fill from center                                  │
│                                                              │
│  SCROLL:                                                     │
│  - Scroll indicator: Fade on scroll                         │
│  - Back to top: Slide up on scroll                          │
│  - Infinite scroll: Spinner + fade in new items             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 10. ANIMATION & MOTION DESIGN

### 10.1 Animation Principles

```
1. PURPOSE-DRIVEN
   - Mỗi animation phải có mục đích rõ ràng
   - Hướng dẫn user attention
   - Feedback cho actions

2. CINEMATIC TIMING
   - Sử dụng easings phù hợp với "cinematic" feel
   - Không quá nhanh (rushed), không quá chậm (sluggish)
   - 200-500ms là sweet spot

3. CONSISTENCY
   - Cùng loại animation cho cùng loại action
   - Stagger delays nhất quán
   - Easing functions nhất quán

4. RESPECT PREFERENCES
   - Support prefers-reduced-motion
   - Fallback cho low-end devices
```

### 10.2 Animation Specifications

```
┌─────────────────────────────────────────────────────────────┐
│              ANIMATION SPECIFICATIONS                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  DURATIONS:                                                  │
│  ──────────                                                  │
│  Instant:     75ms   (color changes)                        │
│  Fast:        150ms  (hover states)                         │
│  Normal:      300ms  (most animations)                      │
│  Slow:        500ms  (page transitions)                     │
│  Slower:      700ms  (complex animations)                   │
│  Slowest:     1000ms (loading animations)                   │
│                                                              │
│  EASINGS:                                                    │
│  ────────                                                    │
│  ease-out:        cubic-bezier(0, 0, 0.2, 1)               │
│  ease-in:         cubic-bezier(0.4, 0, 1, 1)               │
│  ease-in-out:     cubic-bezier(0.4, 0, 0.2, 1)             │
│  cinematic-out:   cubic-bezier(0.16, 1, 0.3, 1)            │
│  cinematic-in:    cubic-bezier(0.7, 0, 0.84, 0)            │
│  bounce:          cubic-bezier(0.68, -0.55, 0.265, 1.55)   │
│                                                              │
│  STAGGER DELAYS:                                             │
│  ───────────────                                             │
│  Card grid:       50ms between items                        │
│  List items:      30ms between items                        │
│  Navigation:      100ms between items                       │
│  Max stagger:     500ms total                               │
│                                                              │
│  TRANSFORM VALUES:                                           │
│  ─────────────────                                           │
│  Hover lift:      translateY(-4px)                          │
│  Card hover:      scale(1.03)                               │
│  Button press:    scale(0.98)                               │
│  Fade in offset:  translateY(20px)                          │
│  Slide in:        translateX(100%)                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 11. RESPONSIVE DESIGN GUIDELINES

### 11.1 Breakpoints

```
┌─────────────────────────────────────────────────────────────┐
│                    BREAKPOINTS                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Mobile S:     320px  - 374px   (Small phones)              │
│  Mobile M:     375px  - 424px   (iPhone, standard phones)   │
│  Mobile L:     425px  - 639px   (Large phones)              │
│  Tablet:       640px  - 767px   (Small tablets, portrait)   │
│  Tablet L:     768px  - 1023px  (Tablets, landscape)        │
│  Desktop:      1024px - 1279px  (Small desktop, laptop)     │
│  Desktop L:    1280px - 1535px  (Standard desktop)          │
│  Desktop XL:   1536px+          (Large monitors, TV)        │
│                                                              │
│  PRIMARY BREAKPOINTS (TailwindCSS):                          │
│  sm:  640px                                                  │
│  md:  768px                                                  │
│  lg:  1024px                                                 │
│  xl:  1280px                                                 │
│  2xl: 1536px                                                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 11.2 Layout Adaptations

```
┌─────────────────────────────────────────────────────────────┐
│                 RESPONSIVE LAYOUTS                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  MOVIE GRID:                                                 │
│  ───────────                                                 │
│  Mobile:    2 columns                                        │
│  Tablet:    3-4 columns                                      │
│  Desktop:   5 columns                                        │
│  Large:     6 columns                                        │
│                                                              │
│  NAVIGATION:                                                 │
│  ───────────                                                 │
│  Mobile:    Hamburger menu (slide from left)                │
│  Tablet:    Collapsed menu (icons only)                     │
│  Desktop:   Full horizontal navigation                       │
│                                                              │
│  HERO SECTION:                                               │
│  ─────────────                                               │
│  Mobile:    Stack vertically, full width image              │
│  Tablet:    Side by side, 50/50                             │
│  Desktop:   Full backdrop with floating content             │
│                                                              │
│  MOVIE DETAIL:                                               │
│  ─────────────                                               │
│  Mobile:    Single column, stacked sections                 │
│  Tablet:    Poster left, info right                         │
│  Desktop:   Full backdrop layout                            │
│                                                              │
│  VIDEO PLAYER:                                               │
│  ─────────────                                               │
│  Mobile:    Full width, 16:9, simplified controls           │
│  Tablet:    Full width, 16:9, full controls                 │
│  Desktop:   Contained width, theater mode option            │
│                                                              │
│  SIDEBAR (Admin):                                            │
│  ─────────────────                                           │
│  Mobile:    Hidden, hamburger toggle                        │
│  Tablet:    Collapsed (icons only)                          │
│  Desktop:   Expanded (icons + labels)                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 12. ADMIN DASHBOARD DESIGN

### 12.1 Dashboard Layout

```
┌─────────────────────────────────────────────────────────────┐
│                    ADMIN DASHBOARD                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────┬───────────────────────────────────────────────────┐│
│  │     │                                                    ││
│  │  S  │  ┌────────────────────────────────────────────┐   ││
│  │  I  │  │ 👤 Admin Name               🔔  ⚙  👤      │   ││
│  │  D  │  └────────────────────────────────────────────┘   ││
│  │  E  │                    ↑ Top bar                       ││
│  │  B  │  ┌────────┬────────┬────────┬────────┐            ││
│  │  A  │  │  📊   │  🎬   │  👁   │  📈   │            ││
│  │  R  │  │ Total  │  Films  │  Views │ Growth │            ││
│  │     │  │ 15,234 │  2,456  │ 1.2M   │ +15%   │            ││
│  │  ─  │  └────────┴────────┴────────┴────────┘            ││
│  │  🏠 │              ↑ Stats Cards                         ││
│  │  📊 │                                                    ││
│  │  🎬 │  ┌─────────────────────┬──────────────────────┐   ││
│  │  ⚙  │  │                     │                      │   ││
│  │  🔧 │  │   VIEWS CHART       │   RECENT ACTIVITY    │   ││
│  │  📝 │  │   (Line graph)      │   (Activity log)     │   ││
│  │     │  │                     │                      │   ││
│  │     │  └─────────────────────┴──────────────────────┘   ││
│  │     │                                                    ││
│  │     │  ┌────────────────────────────────────────────┐   ││
│  │     │  │                                             │   ││
│  │     │  │          RECENT FILMS TABLE                │   ││
│  │     │  │          (Data table with actions)         │   ││
│  │     │  │                                             │   ││
│  │     │  └────────────────────────────────────────────┘   ││
│  │     │                                                    ││
│  └─────┴───────────────────────────────────────────────────┘│
│                                                              │
│  ADMIN COLOR SCHEME:                                         │
│  - Slightly different from public site                      │
│  - More neutral, less dramatic                              │
│  - Focus on clarity and data visualization                  │
│  - Keep brand colors for accents only                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 12.2 Admin Components

```
┌─────────────────────────────────────────────────────────────┐
│                  ADMIN COMPONENTS                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  STAT CARD:                                                  │
│  ──────────                                                  │
│  ┌─────────────────────┐                                    │
│  │  📊 Total Films     │                                    │
│  │                     │                                    │
│  │     15,234          │  ← Big number                     │
│  │                     │                                    │
│  │  ↑ +234 this month  │  ← Trend indicator                │
│  └─────────────────────┘                                    │
│                                                              │
│  DATA TABLE:                                                 │
│  ───────────                                                 │
│  ┌─────┬────────────┬──────┬──────┬──────┬────────┐        │
│  │ ☐  │ Title      │ Type │ Year │ Views│ Actions│        │
│  ├─────┼────────────┼──────┼──────┼──────┼────────┤        │
│  │ ☐  │ Avatar     │ Movie│ 2022 │ 1.2M │ ⋮      │        │
│  │ ☐  │ The Batman │ Movie│ 2022 │ 890K │ ⋮      │        │
│  │ ☑  │ Squid Game │Series│ 2021 │ 2.5M │ ⋮      │        │
│  └─────┴────────────┴──────┴──────┴──────┴────────┘        │
│                                                              │
│  Pagination: ← 1 2 3 ... 50 →                               │
│                                                              │
│  FORM SECTIONS:                                              │
│  ──────────────                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  BASIC INFORMATION                              [−] │    │
│  ├─────────────────────────────────────────────────────┤    │
│  │                                                      │    │
│  │  Title (Vietnamese) *                                │    │
│  │  ┌─────────────────────────────────────────────┐    │    │
│  │  │ Avatar: Dòng Chảy Của Nước                  │    │    │
│  │  └─────────────────────────────────────────────┘    │    │
│  │                                                      │    │
│  │  Original Title                                      │    │
│  │  ┌─────────────────────────────────────────────┐    │    │
│  │  │ Avatar: The Way of Water                    │    │    │
│  │  └─────────────────────────────────────────────┘    │    │
│  │                                                      │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  CHART WIDGET:                                               │
│  ─────────────                                               │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Views Over Time                      [Week ▼]      │    │
│  ├─────────────────────────────────────────────────────┤    │
│  │                                    ╭─╮              │    │
│  │                           ╭───╮   │ │              │    │
│  │                 ╭───╮    │   │   │ │   ╭───╮     │    │
│  │  ╭───╮   ╭───╮ │   │    │   │   │ │   │   │     │    │
│  │  │   │   │   │ │   │    │   │   │ │   │   │     │    │
│  │  Mon   Tue   Wed   Thu   Fri   Sat   Sun         │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 13. ACCESSIBILITY DESIGN GUIDELINES

### 13.1 Visual Accessibility

```
┌─────────────────────────────────────────────────────────────┐
│              ACCESSIBILITY DESIGN                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  COLOR CONTRAST:                                             │
│  ───────────────                                             │
│  - Normal text: 7:1 minimum (AAA)                           │
│  - Large text: 4.5:1 minimum (AAA)                          │
│  - UI components: 3:1 minimum                               │
│  - Focus indicators: 3:1 minimum                            │
│                                                              │
│  Never rely on color alone to convey information            │
│  ✓ ★★★★☆ (4.5/5)    ← Color + shape + text                │
│  ✕ ●●●●○            ← Color only                           │
│                                                              │
│  FOCUS STATES:                                               │
│  ─────────────                                               │
│  All interactive elements must have visible focus           │
│                                                              │
│  ┌────────────┐        ┌────────────┐                       │
│  │   Button   │   →    │ ┌────────┐ │  ← 2px focus ring    │
│  └────────────┘        │ │ Button │ │                       │
│                        │ └────────┘ │                       │
│                        └────────────┘                       │
│                                                              │
│  TEXT SIZING:                                                │
│  ────────────                                                │
│  - Minimum body text: 16px                                  │
│  - Support 200% zoom without horizontal scroll              │
│  - Use relative units (rem, em)                             │
│  - Don't disable zoom on mobile                             │
│                                                              │
│  TOUCH TARGETS:                                              │
│  ──────────────                                              │
│  - Minimum 44x44px (CSS pixels)                             │
│  - Adequate spacing between targets                         │
│                                                              │
│  ┌──────────────────┐                                       │
│  │                  │                                       │
│  │  44px min        │  ← Touch target                      │
│  │                  │                                       │
│  └──────────────────┘                                       │
│        ↕ 8px spacing                                        │
│  ┌──────────────────┐                                       │
│  │  Next target     │                                       │
│  └──────────────────┘                                       │
│                                                              │
│  MOTION & ANIMATION:                                         │
│  ────────────────────                                        │
│  - Support prefers-reduced-motion                           │
│  - No flashing content (>3 times/second)                    │
│  - Provide pause/stop for auto-playing content              │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  @media (prefers-reduced-motion: reduce) {          │    │
│  │    * { animation: none !important; }                │    │
│  │  }                                                  │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 14. DELIVERABLES CHECKLIST

### Design Assets to Create:

```
☐ BRAND IDENTITY
  ☐ Logo (all variations)
  ☐ Favicon set
  ☐ Social media kit
  ☐ Brand guidelines document

☐ DESIGN SYSTEM
  ☐ Color palette (with all shades)
  ☐ Typography scale
  ☐ Spacing system
  ☐ Shadow system
  ☐ Border radius system
  ☐ Icon set

☐ COMPONENT LIBRARY
  ☐ Buttons (all variants, states)
  ☐ Form elements
  ☐ Cards (movie, thumbnail, featured)
  ☐ Navigation components
  ☐ Modal & overlays
  ☐ Video player
  ☐ Loading states
  ☐ Empty states
  ☐ Error states

☐ PAGE DESIGNS (Desktop + Tablet + Mobile)
  ☐ Homepage
  ☐ Movie detail page
  ☐ Watch page
  ☐ Search/Filter page
  ☐ Category page
  ☐ Actor/Director page
  ☐ Watchlist page
  ☐ History page
  ☐ Settings page
  ☐ Static pages (About, Contact, Terms, Privacy)
  ☐ 404 & 500 error pages

☐ ADMIN DASHBOARD (Desktop + Tablet)
  ☐ Dashboard home
  ☐ Films list
  ☐ Film edit form
  ☐ Crawler management
  ☐ Reports/Analytics
  ☐ Settings

☐ PROTOTYPES & INTERACTIONS
  ☐ Page transitions
  ☐ Component interactions
  ☐ Video player prototype
  ☐ Search flow

☐ RESPONSIVE DESIGNS
  ☐ Mobile versions of all pages
  ☐ Tablet versions
  ☐ Large screen adaptations
```

---

## 🎬 BẮT ĐẦU THIẾT KẾ!

Prompt này chứa đầy đủ thông tin để Figma AI tạo ra một hệ thống thiết kế hoàn chỉnh cho CineVerse. Hãy thiết kế với:

1. **Sự táo bạo** - Đừng chơi an toàn, hãy tạo ra thứ gì đó đáng nhớ
2. **Sự nhất quán** - Mọi thứ phải thuộc về cùng một thế giới visual
3. **Sự tinh tế** - Chi tiết nhỏ tạo nên sự khác biệt lớn
4. **Accessibility** - Đẹp nhưng phải dùng được cho mọi người

**Chúc thiết kế thành công! 🎬✨**
