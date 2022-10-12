# yejunian/blog-post

[yejunian의 개인 블로그](https://yejunian.github.io/blog/)([repository](https://github.com/yejunian/blog))에 게시되는 포스트입니다. 이 저장소의 구조는 아래와 같습니다.

- `src/components/`: 공용 컴포넌트
- `src/{category}/`: 게시물
  - `src/{category}/{YYYY}/{MM}-{DD}-{slug[6:]}/`: 개별 게시물
  - `{category}`
    - `post`: 메인
    - `til`: TIL
    - `misc`: 기타
- `src/template.yaml`: 게시물의 frontmatter 템플릿
