# Chanyeong Kim — Personal CV Site

GitHub Pages로 운영하는 개인 이력/포트폴리오 사이트입니다.
주소: `https://아이디.github.io`

---

## 📁 폴더 구조

```
아이디.github.io/
├── index.html            첫 화면 (CV): 사진·이름·학력·경력·스킬·자격증
├── projects/index.html   프로젝트 페이지   →  /projects/
├── awards/index.html     수상·논문·교육 페이지 →  /awards/
├── papers/index.html     논문리뷰 목록 페이지 →  /papers/
├── assets/
│   ├── style.css         모든 페이지가 공유하는 디자인 (색상·글꼴·레이아웃)
│   ├── site.js           한/영 전환, 라이트/다크 모드 버튼 동작
│   └── profile.jpg       프로필 사진 (직접 넣기)
└── README.md             이 문서 (사이트에는 보이지 않음)
```

| 파일 | 역할 | 자주 수정? |
|---|---|---|
| `index.html` | 첫 화면 내용 전체 | ⭐ 자주 |
| `projects/index.html` | 프로젝트 상세 | ⭐ 자주 |
| `awards/index.html` | 수상, 논문, 교육 이수 | 가끔 |
| `papers/index.html` | 논문리뷰 목록 | ⭐ 자주 |
| `assets/style.css` | 디자인 | 거의 안 함 |
| `assets/site.js` | 버튼 동작 | 건드리지 않기 |
| `assets/profile.jpg` | 사진 | 교체할 때만 |

---

## 🌐 한/영 문장 쓰는 규칙 (가장 중요)

모든 문장은 **영문과 한글을 나란히** 적습니다. 버튼을 누르면 둘 중 하나만 보입니다.

```html
<span class="en">English text</span><span class="ko">한글 문장</span>
```

- 두 언어 중 하나를 빼먹으면, 그 언어로 볼 때 빈칸이 됩니다.
- 숫자·고유명사처럼 두 언어가 같으면 `<span>` 없이 그냥 써도 됩니다. 예: `Python, SQL`
- 특수문자 `&` 는 `&amp;` 로 적어야 합니다. 예: `R&amp;D`

---

## ✏️ 상황별 수정 방법

### 1. 경력 추가 — `index.html`

`<div class="label">Experience</div>` 아래에 이 블록을 복사해 넣습니다. **최신 경력이 위로** 오게 하세요.

```html
<div class="entry">
  <div>
    <h3><span class="en">Organization</span><span class="ko">기관명</span></h3>
    <div class="role"><span class="en">Position, Team</span><span class="ko">팀 · 직책</span></div>
  </div>
  <div class="date"><span class="en">Jan 2027 — Present</span><span class="ko">2027.01 — 현재</span></div>
  <ul>
    <li><span class="en">What you did, with a number if possible</span><span class="ko">한 일 (가능하면 숫자 포함)</span></li>
  </ul>
</div>
```

### 2. 자격증 추가 — `index.html`

`<div class="certs">` 안에 한 줄 추가합니다.

```html
<div><b><span class="en">Big Data Analysis Engineer</span><span class="ko">빅데이터분석기사</span></b><span class="date">2027.07</span></div>
```

### 3. 스킬 추가 — `index.html`

`<dl class="rows">` 안의 해당 줄 끝에 쉼표로 이어 적습니다. 새 분류가 필요하면 한 줄 추가합니다.

```html
<dt><span class="en">ML</span><span class="ko">머신러닝</span></dt><dd>PyTorch, scikit-learn</dd>
```

### 4. 학력 상태 변경 — `index.html`

석사 졸업 시 `class="tag-now"`를 `class="tag-done"`으로, `In progress / 재학 중`을 `Graduated / 졸업`으로, 날짜를 `2026.09 — 2028.08` 형태로 바꿉니다.

### 5. 프로젝트 추가 — `projects/index.html`

`<div class="phead">...</div>` 바로 아래에 붙여 넣습니다. (위에 둘수록 먼저 보임)

```html
<div class="project">
  <div class="head">
    <h3><span class="en">Project Title</span><span class="ko">프로젝트 이름</span></h3>
    <span class="date"><span class="en">Mar 2027 — Jun 2027</span><span class="ko">2027.03 — 2027.06</span></span>
  </div>
  <div class="meta"><span class="en">My role</span><span class="ko">맡은 역할</span></div>
  <p><span class="en">One or two sentences about the project.</span><span class="ko">프로젝트 설명 한두 문장.</span></p>

  <!-- 성과 숫자 (선택: 없으면 이 div 통째로 삭제) -->
  <div class="stats">
    <div class="stat"><b>95%</b><span><span class="en">accuracy</span><span class="ko">정확도</span></span></div>
  </div>

  <!-- 세부 내용 (선택) -->
  <ul>
    <li><span class="en">Detail</span><span class="ko">세부 내용</span></li>
  </ul>

  <div class="chips"><span class="chip">Python</span><span class="chip">PyTorch</span></div>
</div>
```

### 6. 수상·논문·교육 추가 — `awards/index.html`

`Awards & Honors`, `Publications`, `Training` 중 맞는 섹션의 `<ul class="list">` 안 **맨 위에** 추가합니다.

```html
<li>
  <div><b><span class="en">Award Name</span><span class="ko">상 이름</span></b>
  <small><span class="en">Organizer</span><span class="ko">주최 기관</span></small></div>
  <span class="date">2027.05</span>
</li>
```

논문은 본인 이름에 `<u>Chanyeong Kim</u>` 처럼 밑줄을 넣습니다.

### 7. 논문리뷰 추가 — `papers/index.html`

리뷰 본문은 **티스토리에 쓰고**, 여기에는 목록만 추가합니다.

1. 파일 안의 `<!-- ... -->` 주석에 있는 `<li>` 템플릿을 복사합니다.
2. 주석 **바깥**, `<ul class="list">` 바로 아래에 붙이고 내용을 채웁니다.

```html
<li>
  <div>
    <a href="https://tgog-praise.tistory.com/123" target="_blank" rel="noopener"><b>Paper Title</b></a>
    <small>Authors — Venue, Year · <span class="en">One-line summary</span><span class="ko">한 줄 요약</span></small>
  </div>
  <span class="date">2026.11</span>
</li>
```

3. **첫 리뷰를 올릴 때** 아래 줄을 삭제합니다 (빈 목록 안내 문구).

```html
<div class="empty"><span class="en">Reviews coming soon.</span><span class="ko">곧 업로드됩니다.</span></div>
```

### 8. 사진 교체 — `assets/profile.jpg`

- 파일 이름은 반드시 소문자 `profile.jpg` (대소문자 구분됨)
- 정사각형에 가까운 사진 권장, 500×500px 정도면 충분
- 사진이 없으면 자동으로 이니셜 `CK`가 표시됨

### 9. 링크 변경 (이메일·GitHub·블로그) — `index.html`

`<div class="links">` 안의 `href="..."` 주소를 바꿉니다.

### 10. 색상 변경 — `assets/style.css`

포인트 색만 바꾸려면 `--accent` 값을 수정합니다.

| 위치 | 의미 | 현재 값 |
|---|---|---|
| `:root{ ... --accent:#1f3a5f }` | 라이트 모드 포인트 색 | 딥 네이비 |
| `[data-theme="dark"] ... --accent:#8fb0d9` | 다크 모드 포인트 색 | 밝은 블루 |

`--accent`는 파일 안에 여러 번 나오니 같은 모드끼리 모두 바꿔야 합니다.

---

## ➕ 새 페이지(메뉴) 추가하기

예: `/blog-list/` 페이지를 만들고 싶을 때

1. 새 폴더 `blog-list/` 를 만들고 `awards/index.html`을 복사해 `blog-list/index.html`로 저장
2. 제목과 내용을 수정, 상단 메뉴에서 `class="on"`을 새 메뉴로 옮김
3. **모든 페이지(4개 + 새 페이지)의 상단 메뉴**에 링크 한 줄 추가
   - 첫 화면(`index.html`)에서는 `href="blog-list/"`
   - 하위 페이지에서는 `href="../blog-list/"`

---

## 🚀 수정 후 반영하기

1. GitHub 저장소에서 파일 클릭 → 연필 아이콘 ✏️ → 수정
2. **Commit changes** 클릭
3. 1~3분 뒤 사이트 새로고침 (안 바뀌면 `Ctrl + Shift + R` 강력 새로고침)
4. 반영이 안 되면 저장소의 **Actions** 탭에서 빨간 ✕ 가 있는지 확인

## ✅ 수정 후 체크리스트

- [ ] 한글/영문 둘 다 적었는가? (EN/KO 버튼 눌러 확인)
- [ ] 다크 모드에서도 잘 보이는가?
- [ ] 휴대폰으로도 확인했는가?
- [ ] `<div>`, `<li>` 같은 태그를 열고 닫는 짝이 맞는가? (안 맞으면 레이아웃이 깨짐)
- [ ] 공개하면 안 되는 정보(전화번호, 회사 내부 금액 등)는 없는가?
