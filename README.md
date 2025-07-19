## Discord Clone Coding
> KGU CSHOME Internship toy project


- 배포 URL : 
- Test ID : 
- Test PW :

<br>

## Commit Convention

| 타입 | 설명 | 예시 |
|------|------|------|
| `feat` | 새로운 기능 추가 | `feat : 로그인 기능 추가` |
| `fix` | 버그 수정 | `fix : 로그인 시 비밀번호 오류 수정` |
| `docs` | 문서 수정 | `docs : README 업데이트` |
| `design` | 코드 스타일 변경 (포매팅, 세미콜론 등) | `design : prettier 적용` |
| `refactor` | 코드 리팩토링 (기능 변화 없음) | `refactor : 컴포넌트 구조 개선` |
| `test` | 테스트 코드 추가/수정 | `test : 유닛 테스트 추가` |
| `chore` | 빌드/배포/패키지 관리 등 기타 작업 | `chore : 의존성 패키지 업데이트` |
| `perf` | 성능 개선 | `perf : 렌더링 최적화` |
| `ci` | CI 설정 변경 | `ci : GitHub Actions 수정` |
| `build` | 빌드 관련 파일 수정 | `build : webpack 설정 변경` |
| `revert` | 커밋 되돌리기 | `revert : 로그인 기능 롤백` |

<br>

## Features

- 게시판 : 디스코드에서 사용하는 포스트 채널의 기능 및 디자인을 클론 코딩합니다.
- 채팅 : 디스코드에서 사용하는 일반 채팅 채널의 기능 및 디자인을 클론 코딩합니다.
- 로그인 및 회원가입 : 디스코드 웹 버전에서 사용하는 로그인 및 회원가입 기능을 클론 코딩합니다.

<br>

## Stacks
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=Typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![vanilaextract](https://img.shields.io/badge/Vanilla_Extract-F786AD?style=flat-square&logo=vanillaextract&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white)
![react-query](https://img.shields.io/badge/React_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white)
![axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white) 

- global vars 기반 편리한 스타일링 적용 및 타입 안정성 기능 사용을 위해 스타일링 도구로 `vanilla-extract`를 선택하였습니다.
- routing의 경우 `tanstack-router`의 파일 기반 라우팅 기능을 사용하였습니다.

<br>


## Project Structure

- 각 기능 별 스타일링 코드, API 데이터 패칭 코드, 커스텀 타입을 분리해 편리한 개발 및 유지보수가 가능하도록 [Feature-Sliced Design](https://feature-sliced.design/) 아키텍처를 사용하였습니다.

```
.
└── src/
    ├── routes(라우팅을 위한 폴더)/
    │   ├── __root.tsx
    │   ├── _homeLayout.tsx
    │   ├── _homeLayout/
    │   │   ├── index.ts
    │   │   ├── $serverTitle.tsx
    │   │   └── $serverTitle.$chatRoomid.tsx
    │   ├── login.tsx
    │   └── signup.tsx
    ├── shared(기능 무관 사용되는 공유 항목)/
    │   ├── utils
    │   ├── hooks
    │   ├── api(axios 인스턴스 및 요청 엔드포인트)
    │   ├── ui(UI 컴포넌트)
    │   └── styles(공유 vanilla extract stylesheet)
    └── widgets(기능 별 UI 분리)/
        ├── login(기능 폴더)/
        │   ├── api
        │   ├── ui
        │   ├── styles
        │   ├── types
        │   └── model/
        │       ├── hooks
        │       ├── context
        │       ├── constants
        │       └── util
        ├── signup
        ├── chat
        └── board
```



    


