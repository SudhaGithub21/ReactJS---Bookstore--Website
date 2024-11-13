
import Home from './Cate';
import Carou from './Carousel';
import Best from './Best_sellers';
import New from './New_Arrivals';
import Lib from './Own_library';
import Time from './Timer';
import Modal from './modal';
import Foot from './Footer';


function Homebooks() {
  return (
    <div>
    <Home/>
    <Carou/>
    <Best/>
    <New/>
    <Lib/>
    <Time/>
    <Modal/>
    <Foot/>
    </div>
  );
}
  
export default Homebooks;

