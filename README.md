# yejunian/blog-post

[yejunian의 개인 블로그](https://yejunian.github.io/blog/)([repository](https://github.com/yejunian/blog))에 게시되는 포스트입니다. 이 저장소의 구조는 아래와 같습니다.

- `src/components/`: 공용 컴포넌트
- `src/{category}/`: 게시물
  - `src/{category}/{YYYY}/{MM}-{DD}-{slug}/`: 개별 게시물
  - `{category}`
    - `post`: 메인
    - `til`: TIL
    - `misc`: 기타
- `src/categoryMetadata.ts`: 블로그 코어에서 가져갈 카테고리별 레이블과 설명 등의 메타데이터
- `src/template.yaml`: 게시물의 frontmatter 템플릿

한편, 이 저장소의 Discussion은 [Giscus](https://giscus.app/ko)를 활용하여 각 게시글의 댓글로 사용됩니다.
