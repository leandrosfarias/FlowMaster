import './style.css';

//Components
import Topbar from '../../components/Topbar/Index';
import Sidebar from '../../components/Sidebar/Index';
import FlowArea from '../../components/FlowArea/Index';
//

function Main(): JSX.Element {
  return (
    <div className='main-layout'>
      <Topbar></Topbar>
      <FlowArea></FlowArea>
      <Sidebar></Sidebar>
    </div>
  );
}

export default Main;