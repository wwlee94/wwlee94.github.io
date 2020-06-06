---
title: Gatsby로 개인 블로그 만들기
date: '2019-08-04'
category: 'blog'
description: ''
emoji: '🌵'
---

## 링크

해당 홈페이지에 많은 템플릿들을 확인할 수 있다.  
[https://www.gatsbyjs.org/showcase/?filters[0]=Featured](https://www.gatsbyjs.org/showcase/?filters%5B0%5D=Featured)

이번 클론용 예제는 다음의 프로젝트를 클론하여 사용하려고 한다.
[https://github.com/gatsbyjs/Gatsby-starter-blog](https://github.com/gatsbyjs/Gatsby-starter-blog)

## 코드 블럭

```bash
npm install -g Gatsby-cli

git clone https://github.com/gatsbyjs/Gatsby-starter-blog.git my-blog
cd my-blog
npm i

rm -rf .git
git init
git add .
git commit -m "Init project"
```

### 자바스크립트 코드 블럭

gatby-config.js

```js
siteMetadata: {
    title: `제목: 블로그 입니다.`,
    author: `저자: 블로그`,
...
```

### HTML 코드 블럭

src/components/bio.js

```html
<p>
  Written by <strong>{author}</strong> who lives and works in San
  Francisco building useful things.
  {` `}
  <a href={`https://twitter.com/${social.twitter}`}>
    You should follow him on Twitter
  </a>
</p>

<p>
  서울에 사는 <strong>윤우식</strong>입니다.
  {` `}
  <a href={`https://twitter.com/${social.twitter}`}>
    You should follow him on Twitter
  </a>
</p>
```

## 테스트 이미지 출력

![](Untitled-a4df56b4-5d94-48e7-81c8-2a77364f8d02.png)

![](Untitled-cb9a6755-a6f5-46eb-b039-174d881d1710.png)

![](Untitled-d171c36f-59ec-42e0-aa43-1d98a06ffb40.png)

![](Untitled-0d8fdbf5-8f50-426e-a1ef-b6ce28507276.png)

![](Untitled-d8226f51-eaab-4cd0-ace1-fae9709ee3ed.png)
