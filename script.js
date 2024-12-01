// HTML 요소들을 가져옴
const addBtn = document.getElementById('add-btn'); // 할 일 추가 버튼
const todoInput = document.getElementById('todo-input'); // 할 일 입력 필드
const todoList = document.getElementById('todo-list'); // 할 일 리스트 컨테이너

// 할 일을 추가하는 함수
function addTodo() {
  const task = todoInput.value.trim(); // 입력값에서 공백 제거
  if (task === '') return; // 입력값이 비어 있으면 함수 종료

  // 새로운 리스트 항목 생성
  const li = document.createElement('li'); 
  li.className = 'todo-item'; // 클래스 이름 추가
  li.innerHTML = `
    <span>${task}</span> <!-- 할 일 내용 -->
    <div>
      <button class="complete-btn">✔</button> <!-- 완료 버튼 -->
      <button class="delete-btn">✖</button> <!-- 삭제 버튼 -->
    </div>
  `;

  // 완료 버튼 이벤트 추가
  li.querySelector('.complete-btn').addEventListener('click', () => {
    li.classList.toggle('completed'); // 완료 상태 토글
  });

  // 삭제 버튼 이벤트 추가
  li.querySelector('.delete-btn').addEventListener('click', () => {
    todoList.removeChild(li); // 리스트에서 항목 제거
  });

  todoList.appendChild(li); // 리스트에 항목 추가
  todoInput.value = ''; // 입력 필드 초기화
}

// 추가 버튼 클릭 이벤트
addBtn.addEventListener('click', addTodo);

// Enter 키로 할 일 추가
todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') { // Enter 키를 눌렀을 때
    addTodo();
  }
});
