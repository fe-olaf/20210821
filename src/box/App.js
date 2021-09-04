import React, { useState } from 'react'

// usexxx => hook, functional 컴포넌트 내부에서만 사용이 가능하다.
// 지금의 백그라운드 칼라 #efefef => state => change => hotpink
// rerender => state 값이 변하면 컴포넌트를 다시 그린다.

// const [값, 값을 바꿀 수 있는 함수] = useState(기본값)

// 리액트는 state 를 가지고 화면을 그린다.
// 리액트는 state 에 변화가 일어나면 컴포넌트를 다시 그린다 (re render)

function App() {
  // 보통 state 이름 + set
  const [boxStyle, setBoxStyle] = useState({
    width: 100,
    height: 100,
    backgroundColor: '#efefef',
  })

  // state 를 다루는 함수는 앞에 handle 이라는 이름을 붙인다.
  // 버튼이 눌렸을 떄 박스 사이즈를 키운다.
  // boxStyle 의 넓이값과 높이값에 * 2 를 한다.
  // boxStyle 의 값이 변한다 -> 컴포넌트가 다시 그려진다.
  const handleIncrementBoxSize = () => {
    setBoxStyle({
      ...boxStyle, // backgroundColor: '#efefef', 유지된다.
      width: boxStyle.width * 2,
      height: boxStyle.height * 2,
    })
  }

  const { width, height, backgroundColor } = boxStyle

  return (
    <div>
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
        }}
      >
        Box
      </div>
      <button onClick={handleIncrementBoxSize}>+</button>
    </div>
  )
}

export default App

// export { App } => 여러개를 내보낼 때 용이
// export default App 함수 자체 => 하나만 내보낼 때는 default
