import { Content } from './Components/Styled';
import TaskApp from './Components/TaskApp';
import taskImg from './assets/task-app.png';
function App() {
  return (
    <Content>
      <div className="wrapper">
        <TaskApp />
      </div>
      <img src={taskImg} alt="TaskApp" />
    </Content>
  );
}

export default App;
