# Code Convention

## Structure - NextJS Base

|   Directory   | Description                        |
|:-------------:|------------------------------------|
|     `app`     | `NextJS`의 App 라우팅                  |
|   `assets`    | `import` 해서 사용하는 assets            |
| `components`  | 데이터 의존성 없이 재사용 가능한 컴포넌트            |
|  `constants`  | 상수 정의                              |
| `containers`  | Data Fetch까지 가능한 페이지 구성 요소로서의 컴포넌트 |
|    `hooks`    | 사용자 훅                              |
| `interfaces`  | 데이터 타입들에 대한 정의                     |
| `middlewares` | 미들웨어                               |
|   `public`    | `import`가 아닌 `url`로 접근하는 `assets`  |
|  `services`   | Data Fetch하는 함수들 모임                |
|   `stores`    | 상태관리 `store`                       |
|   `styles`    | import 해서 사용하는 `sass`, `scss`      |
|    `types`    | 컴포넌트의 `props` 타입 정의                |
|    `utils`    | 유틸리티 함수                            |

## Directory name / Filename

### 라우팅 되는 `page.tsx` 파일 내의 함수 명칭은 [라우팅 경로 + Page]로 한다.

ex) `/sample/store` 라우팅 경로의 경우에는 함수명은 `SampleStorePage` 로 한다.

### 기본 파일명 규칙은 `camelCase`로 한다.

ex) `applySample.ts`

### 파일명이 `camelCase` 이더라도, 파일 내의 변수 또는 함수 명은 `CapicalCase`를 따른다.

ex) 파일명이 `userInterface.ts` 이더라도, 변수명은 `const UserInterface = { ... }` 이어야 한다.

### 컴포넌트의 디렉토리명/파일명은 `CapitalCase`로 한다.

ex) `ApplyButton.tsx`

### `type`, `interface`, `service`, `middleware`들의 파일명은 postfix로 각각의 명칭을 붙인다.

ex) `userType.ts`, `userInterface.ts`, `userService.ts`, `userMiddleware.ts`

### `hook` 파일은 prefix로 `use`를 붙인다.

es) `useSample.ts`

## Component

### 컴포넌트 내에서는 데이터 fetch를 되도록 하지 않는다.

컴포넌트 내부에서 fetch를 하는 경우, 해당 데이터를 상태관리에 업데이트 하여 상위 컴포넌트의 re-rendering 발생으로 무한루프가 발생하는것을 방지하기 위함입니다.

### 컴포넌트 파일 내부에는 데이터 타입에 관한 `interface`는 정의는 하지 않는다.

### 해당하는 컴포넌트에서 사용하는 `props`의 타입 정의에서는 `interface` 대신 `type` 키워드 사용하기

✅ Good

```typescript jsx
import { ComponentProps, ReactNode } from 'react'

type ButtonType = {
  children: ReactNode
} & ComponentProps<'button'>

const Button = ({ children, ...rest }: ButtonType) => {
  return (
    <div>
      <button>Test</button>
    </div>
  )
}
```

### 컴포넌트 내부 코딩 정의 순서

1. 상수 선언
2. React built-in hook
3. NextJS built-in hook
4. Store hook
5. Network hook
6. State hook
7. Custom hook
8. Variables
9. Functions
10. useEffect

### 컴포넌트의 리턴 `Element`가 1개일 때에는 `<></>` 또는 `<Fragment></Fragment>` 사용하지 않기

❌ Bad

```typescript jsx
const Button = () => {
  return (
    <>
      <div>One element</div>
    </>
  )
}
```

✅ Good

```typescript jsx
const Button = () => {
  return (
    <div>One element</div>
  )
}
```

### 컴포넌트에 프로퍼티를 넘길 때 변수가 아닌 경우에는 큰따옴표 사용하기(숫자일 경우 제외)

❌ Bad

```typescript jsx
<Header title={'Test'}/>
```

✅ Good

```typescript jsx
<Header title="Test" width={32}/>
```

### `use` 구문 사용 시, 아래에 빈줄 추가하기

❌ Bad

```typescript jsx
'use client' // 'use server', 'use strict' 등
const Button = () => {}
```

✅ Good

```typescript jsx
'use client' // 'use server', 'use strict' 등

const Button = () => {}
```

### 함수 선언시 앞/뒤 빈줄 추가하기(컴포넌트 내부 첫번째 줄이면 앞의 빈줄은 추가하지 않는다

❌ Bad

```typescript jsx
const Button = () => {
  const handle = () => {}
  return <div>Test</div>
}
```

❌ Bad

```typescript jsx
const Button = () => {

  const handle = () => {}

  return <div>Test</div>
}
```

❌ Bad

```typescript jsx
const Button = () => {
  const title = 'A Title'
  const handle = () => {}
  return <div>Test</div>
}
```

✅ Good

```typescript jsx
const Button = () => {
  const handle = () => {}

  return <div>Test</div>
}
```

✅ Good

```typescript jsx
const Button = () => {
  const title = 'A Title'

  const handle = () => {}

  return <div>Test</div>
}
```

### `return` 구문 이전에 빈줄 추가하기

❌ Bad

```typescript jsx
const Button = () => {
  const title = 'A Title'
  return <div>Test</div>
}
```

✅ Good

```typescript jsx
const Button = () => {
  const title = 'A Title'

  return <div>Test</div>
}
```

### `this` 키워드를 사용하지 않는 함수 생성 시에는 Arrow 함수로 생성하기

❌ Bad

```typescript
function handle () {}
```

✅ Good

```typescript
function handle () {
  if (typeof this) {
// ...
  }
}
```

✅ Good

```typescript
const handle = () => {}
```

### 구문이 허락하는 한, `export` 까지 한줄에 쓰기

❌ Bad

```typescript jsx
const one = ''
const two = ''

export { one, two }
```

✅ Good

```typescript jsx
export const one = ''

export const two = ''

const three = ''

export default three
```

### 컴포넌트 내 이벤트 함수명은 `handle` prefix 붙이기

✅ Good

```typescript jsx
const Button = () => {
  const handleOnClickSend = () => {}

  return (
    <div>
      <button>Test</button>
    </div>
  )
}
```

### 프로퍼티로 전달받는 이벤트 함수명은 `on` prefix 붙이기

✅ Good

```typescript jsx
import { ComponentProps, ReactNode } from 'react'

type ButtonType = {
  onClickSend: () => void
  children: ReactNode
} & ComponentProps<'button'>

const Button = ({ children, onClickSend, ...rest }: ButtonType) => {
  return (
    <div>
      <button onClick={onClickSned}>Test</button>
    </div>
  )
}

const SendButton = () => {
  const handleOnClickSend = () => {}

  return (
    <div>
      <Button onClickSend={handleOnClickSend}>Test</Button>
    </div>
  )
}
```

### `axios` 클라이언트의 `get` 사용할 때, `params`를 객체 변수로 선언하여 넘기기

- 그렇지 않을 시 `ESLint` 에러가 발생함
- 아마도 선언 이전에 바로 넘길 때에 해당 값의 데이터 타입 추론을 하지 못하는 것으로 보임

❌ Bad

```typescript jsx
client.get('/project', { params: { page: 1, size: 100 } })
```

✅ Good

```typescript jsx
const config = {
  params: {
    page: 1,
    size: 100,
  },
}

client.get('/project', config)
```

## Style

### 자주 사용되는 tailwind `css`들의 그룹이 있는 경우, `@apply`를 사용하여 하나의 명칭으로 사용한다.

ex) 버튼의 경우 아래와 같이 해서 사용한다.

```scss
.button {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
}
```
