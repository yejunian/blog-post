# yejunian/blog-post

[yejunian의 개인 블로그](https://yejunian.github.io/blog/)([core repository](https://github.com/yejunian/blog))에 게시되는 포스트입니다.

## 구조

- 📂 `metadata/`
  - 📜 `category.ts`: 카테고리별 레이블과 설명 등, 블로그 코어에서 참조할 메타데이터 정의
- 📂 `post/`
  - 📂 `{YYYY}/{MM}-{DD}-{slug}/`: 개별 게시글 디렉터리
    - 📜 `index.mdx`: 게시글 메타데이터 및 본문
    - 📜 `thumbnail.*`: 게시글 섬네일 이미지
    - 그 외 게시글에 첨부한 파일 포함
- 📂 `script/`: 유틸리티 스크립트
- 📂 `template/`
  - 📜 `frontmatter.yaml`: 게시글 frontmatter 템플릿
- 📜 `.gitignore`
- 📜 `.gitmessage.txt`: 커밋 메시지 템플릿
  - `git config commit.template .gitmessage.txt`로 커밋 메시지 템플릿 적용 가능
- 📜 `README.md`: 이 파일

## 댓글

이 저장소의 Discussion은 [Giscus](https://giscus.app/ko)를 활용하여 각 게시글의 댓글로 사용됩니다.
